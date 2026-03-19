const BAR_COLUMNS = 22;
const rowElements = Array.from(document.querySelectorAll(".counter-row"));
const metaElement = document.querySelector('[data-field="meta"]');

const rowState = rowElements.map((row) => {
  const bar = row.querySelector('[data-field="bar"]');
  const columns = [];

  for (let index = 0; index < BAR_COLUMNS; index += 1) {
    const column = document.createElement("span");
    column.className = "dot-column";
    column.innerHTML = '<span class="dot"></span><span class="dot"></span>';
    bar.append(column);
    columns.push(column);
  }

  return {
    period: row.dataset.period,
    label: row.querySelector('[data-field="label"]'),
    value: row.querySelector('[data-field="value"]'),
    columns,
  };
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function startOfDay(date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

function addDays(date, days) {
  const value = new Date(date);
  value.setDate(value.getDate() + days);
  return value;
}

function getDateStamp(date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

function getIsoDay(date) {
  const weekday = date.getDay();
  return weekday === 0 ? 7 : weekday;
}

function getRuntimeContext() {
  const locale =
    navigator.languages?.[0] ||
    navigator.language ||
    Intl.DateTimeFormat().resolvedOptions().locale ||
    document.documentElement.lang ||
    "en-US";

  let timeZone = "Local time";

  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || timeZone;
  } catch {}

  let weekInfo = { firstDay: 7, minimalDays: 1 };

  try {
    if (typeof Intl.Locale === "function") {
      const localeObject = new Intl.Locale(locale);
      const resolvedWeekInfo = localeObject.weekInfo ?? localeObject.getWeekInfo?.();

      if (resolvedWeekInfo?.firstDay) {
        weekInfo = {
          firstDay: resolvedWeekInfo.firstDay,
          minimalDays: resolvedWeekInfo.minimalDays ?? 1,
        };
      }
    }
  } catch {}

  return { locale, timeZone, weekInfo };
}

function startOfLocaleWeek(date, firstDay) {
  const value = startOfDay(date);
  const distanceToWeekStart = (getIsoDay(value) - firstDay + 7) % 7;
  value.setDate(value.getDate() - distanceToWeekStart);
  return value;
}

function getFirstWeekStart(year, weekInfo) {
  const januaryFirst = new Date(year, 0, 1);
  const weekStart = startOfLocaleWeek(januaryFirst, weekInfo.firstDay);
  const daysInFirstWeek = 7 - ((getIsoDay(januaryFirst) - weekInfo.firstDay + 7) % 7);

  if (daysInFirstWeek < weekInfo.minimalDays) {
    weekStart.setDate(weekStart.getDate() + 7);
  }

  return weekStart;
}

function getLocaleWeekNumber(date, weekInfo) {
  const day = startOfDay(date);
  const dayStamp = getDateStamp(day);

  let weekYear = day.getFullYear();
  let firstWeekStart = getFirstWeekStart(weekYear, weekInfo);
  let nextFirstWeekStart = getFirstWeekStart(weekYear + 1, weekInfo);

  if (dayStamp < getDateStamp(firstWeekStart)) {
    weekYear -= 1;
    firstWeekStart = getFirstWeekStart(weekYear, weekInfo);
    nextFirstWeekStart = getFirstWeekStart(weekYear + 1, weekInfo);
  } else if (dayStamp >= getDateStamp(nextFirstWeekStart)) {
    weekYear += 1;
    firstWeekStart = nextFirstWeekStart;
    nextFirstWeekStart = getFirstWeekStart(weekYear + 1, weekInfo);
  }

  const weekNumber = Math.floor((dayStamp - getDateStamp(firstWeekStart)) / 86400000 / 7) + 1;

  return { weekYear, weekNumber, firstWeekStart, nextFirstWeekStart };
}

function getElapsedRatio(now, start, end) {
  return clamp((now.getTime() - start.getTime()) / (end.getTime() - start.getTime()), 0, 1);
}

function formatPercentage(ratio, locale) {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(ratio);
}

function buildMetaText(now, locale, timeZone) {
  const localClock = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);

  return `Live local time ${localClock} · ${timeZone} · elapsed this period`;
}

function getCountdownData(now) {
  const { locale, timeZone, weekInfo } = getRuntimeContext();
  const dayStart = startOfDay(now);
  const nextDayStart = addDays(dayStart, 1);

  const weekStart = startOfLocaleWeek(now, weekInfo.firstDay);
  const nextWeekStart = addDays(weekStart, 7);

  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const yearStart = new Date(now.getFullYear(), 0, 1);
  const nextYearStart = new Date(now.getFullYear() + 1, 0, 1);
  const { weekNumber } = getLocaleWeekNumber(now, weekInfo);

  return {
    locale,
    timeZone,
    meta: buildMetaText(now, locale, timeZone),
    day: {
      label: now.toLocaleDateString(locale, { weekday: "long" }),
      ratio: getElapsedRatio(now, dayStart, nextDayStart),
    },
    week: {
      label: `Week ${String(weekNumber).padStart(2, "0")}`,
      ratio: getElapsedRatio(now, weekStart, nextWeekStart),
    },
    month: {
      label: now.toLocaleDateString(locale, { month: "long" }),
      ratio: getElapsedRatio(now, monthStart, nextMonthStart),
    },
    year: {
      label: String(now.getFullYear()),
      ratio: getElapsedRatio(now, yearStart, nextYearStart),
    },
  };
}

function updateRow(state, data, locale) {
  state.label.textContent = data.label;

  const percentage = formatPercentage(data.ratio, locale);
  state.value.textContent = percentage;
  state.value.setAttribute("aria-label", `${percentage} elapsed`);

  const filledColumns = data.ratio * state.columns.length;
  const completeColumns = Math.floor(filledColumns);
  const partialFill = filledColumns - completeColumns;

  state.columns.forEach((column, index) => {
    const isActive = index < completeColumns;
    const isPartial = index === completeColumns && partialFill > 0 && completeColumns < state.columns.length;

    column.classList.toggle("is-active", isActive);
    column.classList.toggle("is-partial", isPartial);
    column.style.setProperty("--fill", isPartial ? partialFill.toFixed(3) : "0");
  });
}

function render() {
  const now = new Date();
  const countdowns = getCountdownData(now);

  rowState.forEach((state) => {
    updateRow(state, countdowns[state.period], countdowns.locale);
  });

  if (metaElement) {
    metaElement.textContent = countdowns.meta;
  }
}

function scheduleNextRender() {
  render();

  const now = new Date();
  const delay = 1000 - now.getMilliseconds();
  window.setTimeout(scheduleNextRender, delay + 8);
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    render();
  }
});

window.addEventListener("pageshow", render);

scheduleNextRender();
