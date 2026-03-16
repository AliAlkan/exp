import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";

import eclipseFullUrl from "../../assets/eclipse-full.svg";
import svgPaths from "../../imports/svg-i8xslcz4lw";
import svgTablePaths from "../../imports/svg-a5rqbl0eu1";
import { PrimaryCtaButton } from "./ui/primary-cta-button";

type RunStatus = "running" | "completed" | "terminated";

interface StatusInfo {
  text: string;
  duration: string;
  type: RunStatus;
  endedAt?: string;
}

interface TableRow {
  id: string;
  name: string;
  agent: string;
  agentIconType: "bot" | "microscope";
  model: string;
  created: string;
  status: StatusInfo;
  chevron: "expanded" | "collapsed" | null;
  indent: boolean;
  actions: "3icons" | "4icons" | "1icon";
}

const tableData: TableRow[] = [
  { id: "1",  name: "Component Library Theming Rollout",               agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Thread initialization",  duration: "26m 11s", type: "running"    }, chevron: "collapsed", indent: false, actions: "3icons" },
  { id: "2",  name: "Updating agent prompt for theme token migration", agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Thread initialization",  duration: "26m 11s", type: "running"    }, chevron: null,        indent: true,  actions: "4icons" },
  { id: "3",  name: "Exporting visual snapshots for themed components",agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "11s",     type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: null,        indent: true,  actions: "4icons" },
  { id: "4",  name: "Meta-Analysis of Transformer Interpretability Methods", agent: "EvoResearcher",  agentIconType: "microscope", model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Section 4 writing",     duration: "26m 11s", type: "running"                            }, chevron: null,        indent: false, actions: "1icon"  },
  { id: "5",  name: "Checkout Flow Accessibility Remediation",         agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Terminated",            duration: "9m 11s",  type: "terminated", endedAt: "6 Jul 24, 22:36" }, chevron: "collapsed", indent: false, actions: "3icons" },
  { id: "6",  name: "Updating agent prompt for WCAG contrast fixes",   agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Thread initialization",  duration: "8m 14s",  type: "running"                            }, chevron: null,        indent: true,  actions: "4icons" },
  { id: "7",  name: "Exporting accessibility audit summary",           agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "14s",     type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: null,        indent: true,  actions: "4icons" },
  { id: "8",  name: "Dashboard Performance Optimization Sprint",        agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "26m 11s", type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: "collapsed", indent: false, actions: "3icons" },
  { id: "9",  name: "Updating agent prompt for render path optimization", agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Thread initialization",  duration: "3m 22s",  type: "running"                            }, chevron: null,        indent: true,  actions: "4icons" },
  { id: "10", name: "Exporting Lighthouse performance report",         agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "20s",     type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: null,        indent: true,  actions: "4icons" },
  { id: "11", name: "Systematic Review of RAG Evaluation Benchmarks",  agent: "EvoResearcher",  agentIconType: "microscope", model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "26m 11s", type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: null,        indent: false, actions: "1icon"  },
  { id: "12", name: "Authentication UX Error-State Refresh",           agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "26m 11s", type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: "collapsed", indent: false, actions: "3icons" },
  { id: "13", name: "Updating agent prompt for auth form validation states", agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Thread initialization",  duration: "6m 51s",  type: "running"                            }, chevron: null,        indent: true,  actions: "4icons" },
  { id: "14", name: "Exporting interaction test coverage",             agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "17s",     type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: null,        indent: true,  actions: "4icons" },
  { id: "15", name: "Causal Inference in Educational Interventions: Literature Mapping", agent: "EvoResearcher",  agentIconType: "microscope", model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "26m 11s", type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: null,        indent: false, actions: "1icon"  },
  { id: "16", name: "Frontend Build Pipeline Hardening",               agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "26m 11s", type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: "collapsed", indent: false, actions: "3icons" },
  { id: "17", name: "Updating agent prompt for chunk splitting strategy", agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Thread initialization",  duration: "4m 03s",  type: "running"                            }, chevron: null,        indent: true,  actions: "4icons" },
  { id: "18", name: "Exporting bundle analysis artifacts",             agent: "EvoResolver",    agentIconType: "bot",        model: "GPT 5.4", created: "6 Jul 24, 22:10", status: { text: "Completed",              duration: "9s",      type: "completed",  endedAt: "6 Jul 24, 22:36" }, chevron: null,        indent: true,  actions: "4icons" },
];

const outlinedCommandTriggerStyle = {
  "--outlined-command-trigger-color": "#404040",
} as CSSProperties;

function parseSeconds(duration: string): number {
  const mMatch = duration.match(/(\d+)m/);
  const sMatch = duration.match(/(\d+)s/);
  return (mMatch ? parseInt(mMatch[1]) : 0) * 60 + (sMatch ? parseInt(sMatch[1]) : 0);
}

function formatSeconds(total: number): string {
  const mins = Math.floor(total / 60);
  const secs = total % 60;
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

function StatusBadge({ status }: { status: StatusInfo }) {
  const { type, text, duration, endedAt } = status;
  const isRunning = type === "running";

  const [elapsed, setElapsed] = useState(() => parseSeconds(duration));
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  const displayDuration = isRunning ? formatSeconds(elapsed) : duration;

  const bgStyle =
    type === "completed"
      ? {
          background: "#193B29",
          boxShadow: "inset 0 0 0 1px #193B29",
        }
      : type === "terminated"
        ? {
            background: "#3A1F1F",
            boxShadow: "inset 0 0 0 1px #3A1F1F",
          }
        : {};

  const textColor =
    type === "completed" ? "#4ade80" : type === "terminated" ? "#fca5a5" : "#d4d4d4";

  const badge = (
    <div
      className={`content-stretch flex gap-[8px] h-[28px] items-center justify-center p-[8px] relative rounded-[10px] shrink-0 overflow-hidden${isRunning ? " status-badge-running" : ""}`}
      style={bgStyle}
    >
      {type === "completed" && (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
            <div className="absolute inset-[-7.5%_-5.16%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
                <path d={svgTablePaths.p27b1d790} stroke="#4ADE80" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {type === "terminated" && (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-1/4">
            <div className="absolute inset-[-6.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 9.1">
                <path d={svgTablePaths.p1e0b3580} stroke="#FCA5A5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {(type === "running" || type === "waiting") && (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[8.33%]">
            <div className="absolute inset-[-4.13%_-4.12%_-4.12%_-4.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4333 14.4333">
                <path d={svgTablePaths.p29f6fb80} stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis whitespace-nowrap" style={{ color: textColor, fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] overflow-hidden">{displayDuration}</p>
        </div>
        <div className="relative shrink-0 size-[1.333px]">
          <div className="absolute inset-[-41.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 2.43333">
              <path d={svgTablePaths.pb439b80} stroke={textColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis whitespace-nowrap" style={{ color: textColor, fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] overflow-hidden">{text}</p>
        </div>
      </div>
    </div>
  );

  if ((type === "completed" || type === "terminated") && endedAt) {
    return <WithTooltip title={`Ended on ${endedAt}`}>{badge}</WithTooltip>;
  }
  return badge;
}

function AgentBadge({ agent, iconType }: { agent: string; iconType: "bot" | "microscope" }) {
  return (
    <div className="bg-[#262626] content-stretch flex gap-[8px] h-[28px] items-center justify-center max-w-[192px] p-[8px] relative rounded-[10px] shrink-0">
      {iconType === "bot" ? (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[16.67%_8.33%]">
            <div className="absolute inset-[-5.16%_-4.12%_-5.16%_-4.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4333 11.7667">
                <path d={svgTablePaths.p6118b80} stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[8.33%_12.5%]">
            <div className="absolute inset-[-4.13%_-4.58%_-4.12%_-4.58%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 14.4333">
                <path d={svgTablePaths.p24031b00} stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-hidden">{agent}</p>
      </div>
    </div>
  );
}

function WithTooltip({
  children,
  title,
  subtitle,
  className,
  disabled = false,
  centerText = false,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  disabled?: boolean;
  centerText?: boolean;
}) {
  return (
    <div className={`relative group/tooltip${className ? ` ${className}` : ""}`}>
      {children}
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-[8px] z-50 pointer-events-none transition-all duration-150 ${disabled ? "hidden" : "opacity-0 -translate-y-[4px] group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0"}`}>
        <div className={`bg-[var(--neutral-700)] rounded-[8px] px-[12px] py-[8px] flex flex-col gap-[3px] whitespace-nowrap ${centerText ? "items-center text-center" : ""}`}>
          <span className="font-['SF_Pro:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[var(--neutral-200)]" style={{ fontVariationSettings: "'wdth' 100" }}>{title}</span>
          {subtitle && (
            <span className="font-['SF_Pro:Regular',sans-serif] font-normal text-[11px] leading-[14px] text-[var(--neutral-400)]" style={{ fontVariationSettings: "'wdth' 100" }}>{subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function TruncatedTitle({
  title,
  className,
  textClassName,
}: {
  title: string;
  className?: string;
  textClassName: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const element = textRef.current;
    if (!container || !element) return;

    const checkTruncation = () => {
      setIsTruncated(element.scrollWidth > container.clientWidth + 1);
    };

    checkTruncation();
    const rafId = requestAnimationFrame(checkTruncation);
    const observer = new ResizeObserver(checkTruncation);
    observer.observe(container);
    observer.observe(element);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [title]);

  const textNode = (
    <div
      ref={textRef}
      className={`block w-full ${textClassName}`}
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      {title}
    </div>
  );

  return (
    <WithTooltip title={title} className={className} disabled={!isTruncated}>
      <div ref={containerRef}>
        {textNode}
      </div>
    </WithTooltip>
  );
}

function ActionTicketCheck() {
  return (
    <WithTooltip title="Go to the ticket" subtitle="T-0004292" centerText>
      <div className="content-stretch flex items-center p-[8px] relative shrink-0 cursor-pointer">
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[20.83%_8.33%]">
            <div className="absolute inset-[-7.13%_-4.99%_-7.12%_-4.99%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6633 10.6633">
                <path d={svgTablePaths.p12c92700} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </WithTooltip>
  );
}

function ActionBook() {
  return (
    <WithTooltip title="Go to the repository" subtitle="universityofnicosia/evolve-monorepo" centerText>
      <div className="content-stretch flex items-center p-[8px] relative shrink-0 cursor-pointer">
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[8.33%_16.67%]">
            <div className="absolute inset-[-4.99%_-6.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 14.6633">
                <path d={svgTablePaths.p294b6e80} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </WithTooltip>
  );
}

function ActionEllipsis() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0 cursor-pointer">
      <div className="overflow-clip relative shrink-0 size-[16px]">
        <div className="absolute inset-[45.83%_16.67%]">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g>
                <path d={svgTablePaths.p21d13c00} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgTablePaths.p10de4900} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgTablePaths.p1fd94400} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RowActions({ variant }: { variant: "3icons" | "4icons" | "1icon" }) {
  if (variant === "4icons") {
    return (
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[112px]">
        <ActionTicketCheck />
        <ActionBook />
        <ActionEllipsis />
      </div>
    );
  }
  if (variant === "3icons") {
    return (
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[112px]">
        <ActionBook />
        <ActionEllipsis />
      </div>
    );
  }
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[112px]">
      <ActionEllipsis />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px] cursor-pointer">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function AutoResizeTextarea({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = "0px";
    textarea.style.height = `${Math.max(textarea.scrollHeight, 86)}px`;
  };

  useLayoutEffect(() => {
    if (textareaRef.current) {
      resizeTextarea(textareaRef.current);
    }
  }, []);

  return (
    <textarea
      ref={textareaRef}
      aria-label="Research topic"
      className="bg-transparent border-0 font-['SF_Pro:Regular',sans-serif] font-normal leading-[28px] outline-none overflow-hidden p-0 resize-none text-[var(--neutral-50)] text-[16px] w-full min-h-[86px] placeholder:text-[var(--neutral-500)]"
      onChange={(event) => {
        onChange(event.currentTarget.value);
        resizeTextarea(event.currentTarget);
      }}
      placeholder="What do you want to research? (e.g. A literature review on retrieval-augmented generation for medical QA, focusing on evaluation methods and failure modes)."
      rows={1}
      value={value}
      style={{ fontVariationSettings: "'wdth' 100" }}
    />
  );
}

export function MainContent() {
  const [prompt, setPrompt] = useState("");
  const isRunReady = prompt.trim().length > 0;

  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(
    () => new Set(tableData.filter((row) => row.chevron !== null).map((row) => row.id)),
  );
  const [expandingGroups, setExpandingGroups] = useState<Set<string>>(new Set());
  const expandingTimersRef = useRef<Record<string, number>>({});

  useEffect(() => {
    return () => {
      Object.values(expandingTimersRef.current).forEach((timerId) => window.clearTimeout(timerId));
    };
  }, []);

  const toggleGroup = (groupId: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
        setExpandingGroups((prevExpanding) => {
          const expanding = new Set(prevExpanding);
          expanding.add(groupId);
          return expanding;
        });
        const existingTimer = expandingTimersRef.current[groupId];
        if (existingTimer) window.clearTimeout(existingTimer);
        expandingTimersRef.current[groupId] = window.setTimeout(() => {
          setExpandingGroups((prevExpanding) => {
            const expanding = new Set(prevExpanding);
            expanding.delete(groupId);
            return expanding;
          });
          delete expandingTimersRef.current[groupId];
        }, 240);
      } else {
        next.add(groupId);
        setExpandingGroups((prevExpanding) => {
          const expanding = new Set(prevExpanding);
          expanding.delete(groupId);
          return expanding;
        });
      }
      return next;
    });
  };

  const rowsWithMeta = tableData.map((row, i) => {
    if (!row.indent) return { ...row, parentCollapsed: false, parentGroupId: null as string | null };
    for (let j = i - 1; j >= 0; j--) {
      if (tableData[j].chevron !== null) {
        return {
          ...row,
          parentCollapsed: collapsedGroups.has(tableData[j].id),
          parentGroupId: tableData[j].id,
        };
      }
    }
    return { ...row, parentCollapsed: false, parentGroupId: null as string | null };
  });

  return (
    <div className="flex flex-col flex-1 min-w-0 h-full overflow-y-auto">
      {/* Hero Section */}
      <div className="relative shrink-0 w-full">
        {/* Background gradient */}
        <div className="p-[8px] w-full">
          <div className="bg-gradient-to-b from-[#0f0f0f] to-[var(--neutral-950)] flex flex-col items-center overflow-clip relative rounded-[12px] w-full">
            {/* Gradient orb */}
            <div className="agents-background-gradient absolute left-[-315px] size-[820px] top-[-770px] pointer-events-none select-none">
              <div className="absolute inset-[-24.39%]" style={{ transform: "rotate(-30deg)" }}>
                <img alt="" className="block max-w-none size-full" src={eclipseFullUrl} />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[36px] items-center pb-[40px] pt-[64px] relative w-full">
              <p className="font-['Jost',sans-serif] font-semibold leading-none text-[var(--neutral-200)] text-[36px] text-center whitespace-nowrap">
                Hand this off to an agent
              </p>

              {/* Input card */}
              <div className="w-full max-w-[896px] px-[16px]">
                <div className="content-stretch flex items-start overflow-clip relative rounded-[16px] w-full">
                  <div className="agents-composer group bg-[var(--neutral-900)] content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px] z-10">
                      <div className="absolute border border-[var(--neutral-800)] border-solid inset-0 rounded-[20px] transition-colors duration-200 group-hover:border-[#323232] group-focus-within:border-[#323232]" />
                    </div>

                    <div className="min-h-[114px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start px-[20px] py-[14px] relative w-full">
                        <AutoResizeTextarea onChange={setPrompt} value={prompt} />
                      </div>
                    </div>

                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center justify-between pb-[16px] px-[20px] relative w-full">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 flex-wrap">
                            <div className="content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip pl-[3px] pr-[14px] relative rounded-[9999px] shrink-0 cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.2) 0%, rgba(10, 10, 10, 0.2) 100%), linear-gradient(90deg, var(--neutral-700) 0%, var(--neutral-700) 100%)" }}>
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                                <div className="content-stretch flex items-center justify-center relative rounded-[60px] shrink-0 size-[34px]">
                                  <div className="overflow-clip relative shrink-0 size-[18px]">
                                    <div className="absolute inset-[8.33%_12.5%]">
                                      <div className="absolute inset-[-3.67%_-4.07%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6 16.1">
                                          <path d={svgPaths.p312ace00} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[var(--neutral-50)] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  EvoResearcher
                                </p>
                              </div>
                              <ChevronDown color="var(--neutral-50)" />
                            </div>

                            <ToolButton compact>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[var(--neutral-300)] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                GPT 5
                              </p>
                            </ToolButton>

                            <ToolButton>
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[20.83%]">
                                  <div className="absolute inset-[-5.89%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4333 10.4333">
                                      <path d={svgPaths.p3dd52ee0} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[var(--neutral-300)] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Upload
                              </p>
                            </ToolButton>

                            <ToolButton>
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[16.67%]">
                                  <div className="absolute inset-[-5.16%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7668 11.7668">
                                      <path d={svgPaths.p2bc84680} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[var(--neutral-300)] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                5
                              </p>
                            </ToolButton>

                            <ToolButton>
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[8.33%_12.5%]">
                                  <div className="absolute inset-[-4.13%_-4.58%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 14.4333">
                                      <path d={svgPaths.p1fca9800} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[var(--neutral-300)] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                12
                              </p>
                            </ToolButton>

                            <ToolButton>
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[16.67%_45.83%]">
                                  <div className="absolute inset-[-5.16%_-41.25%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 11.7667">
                                      <g>
                                        <path d={svgPaths.pbb62180} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                        <path d={svgPaths.pb439b80} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                        <path d={svgPaths.p1c7be500} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[var(--neutral-300)] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                More
                              </p>
                            </ToolButton>
                          </div>

                          <div className="flex flex-row items-center self-stretch">
                            <div className="content-stretch flex h-full items-center relative shrink-0">
                              <PrimaryCtaButton
                                active={isRunReady}
                                className="content-stretch relative"
                                icon={(
                                  <div className="overflow-clip relative shrink-0 size-[16px]">
                                    <div className="absolute bottom-[12.5%] left-1/4 right-[16.67%] top-[12.5%]">
                                      <div className="absolute inset-[-5.54%_-7.12%_-5.54%_-7.13%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6633 13.33">
                                          <path d={svgPaths.p1ab67b80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              >
                                Start a run
                              </PrimaryCtaButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recents Section */}
      <div className="shrink-0 w-full">
        <div className="flex flex-col gap-[20px] items-start max-w-[1440px] mx-auto px-[32px] py-[28px] w-full">
          <p className="font-['Jost',sans-serif] font-medium leading-none text-[#a3a3a3] text-[18px] whitespace-nowrap">Recents</p>

          {/* Toolbar */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            {/* Search */}
            <div className="h-[36px] relative rounded-[12px] shrink-0 w-[320px]">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit] size-full">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgTablePaths.p3114e300} stroke="#A3A3A3" strokeLinejoin="round" strokeWidth="1.1" />
                  </svg>
                </div>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-none overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Search</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>

            {/* Filter buttons + view toggle */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              {/* Agent filter */}
              <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0 cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-4.58%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 13.1">
                        <path d={svgTablePaths.p3926db00} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Agent</p>
                <div className="opacity-50 overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                    <div className="absolute inset-[-13.75%_-6.88%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
                        <path d={svgTablePaths.p36d8fd00} stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Status filter */}
              <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0 cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                    <div className="absolute inset-[-6.88%_-4.58%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 9.1">
                        <path d={svgTablePaths.p6c5e900} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Status</p>
                <div className="opacity-50 overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                    <div className="absolute inset-[-13.75%_-6.88%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
                        <path d={svgTablePaths.p36d8fd00} stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sort filter */}
              <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[12px] shrink-0 w-[144px] cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute inset-[16.67%_12.5%]">
                    <div className="absolute inset-[-5.16%_-4.58%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 11.7667">
                        <path d={svgTablePaths.p1ab3d300} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="flex-[1_0_0] font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Recently run</p>
                <div className="opacity-50 overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                    <div className="absolute inset-[-13.75%_-6.88%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
                        <path d={svgTablePaths.p36d8fd00} stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* View toggle tabs */}
              <div className="bg-[#262626] content-stretch flex h-[36px] items-center p-[4px] relative rounded-[12px] shrink-0">
                <div className="h-full relative rounded-[6px] shrink-0 w-[28px] cursor-pointer">
                  <div className="flex items-center justify-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[6px] relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[12.5%]">
                          <div className="absolute inset-[-4.58%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 13.1">
                              <g>
                                <path d={svgTablePaths.p13ddeb00} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                <path d={svgTablePaths.p21712180} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                <path d={svgTablePaths.p3751c080} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                <path d={svgTablePaths.p1181c4f0} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] h-full relative rounded-[6px] shrink-0 w-[28px] cursor-pointer">
                  <div className="flex items-center justify-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[6px] relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[12.5%]">
                          <div className="absolute inset-[-4.58%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 13.1">
                              <path d={svgTablePaths.p10c72d00} stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="relative rounded-[12px] shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start overflow-visible relative rounded-[inherit] w-full">
              {/* Header row */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
                      <Checkbox />
                      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-none overflow-hidden">Name</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-[176px]">
                      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-none overflow-hidden">Agent</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[144px]">
                      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-none overflow-hidden">Created</p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="flex-none rotate-180">
                          <div className="h-[10.667px] relative w-[5.333px]">
                            <div className="absolute inset-[-5.16%_-10.31%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.43333 11.7667">
                                <path d={svgTablePaths.p1fa5c0} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-[256px]">
                      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-none overflow-hidden">Status</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-[96px]">
                      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-none overflow-hidden">Model</p>
                      </div>
                    </div>
                    <div className="h-[12px] shrink-0 w-[112px]" />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
              </div>

              {/* Data rows */}
              {rowsWithMeta.map((row) => {
                const isGroupParentExpanded = row.chevron !== null && !collapsedGroups.has(row.id);
                const showGroupBorder = isGroupParentExpanded || (row.indent && !row.parentCollapsed);
                const rowContent = (
                <div key={row.id} className="relative shrink-0 w-full hover:bg-[#141414] cursor-pointer transition-colors">
                  <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[5px] bg-[#262626] pointer-events-none"
                    style={{ opacity: showGroupBorder ? 1 : 0, transition: "opacity 220ms ease" }}
                  />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
                      {/* Name cell */}
                      <div className="flex-[1_0_0] min-h-px min-w-px relative">
                        <div className="flex flex-row items-center size-full">
                          <div className={`content-stretch flex items-center pr-[12px] relative w-full ${row.indent ? "gap-[48px]" : "gap-[14px]"}`}>
                            <Checkbox />
                            {row.chevron !== null ? (
                              <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative">
                                {/* Chevron button */}
                                <div
                                  className="content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 size-[26px] hover:bg-[#404040] transition-colors cursor-pointer"
                                  onClick={(e) => { e.stopPropagation(); toggleGroup(row.id); }}
                                >
                                  <div className={`flex items-center justify-center relative shrink-0 size-[16px] transition-transform duration-150 ${collapsedGroups.has(row.id) ? "-rotate-90" : ""}`}>
                                    <div className="relative shrink-0 size-[16px]">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                        <path d="M4 5L8 11L12 5" fill="#D4D4D4" stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-[1_0_0] min-h-px min-w-px">
                                  <div className="flex flex-row items-center size-full">
                                    <div className="content-stretch flex items-center pr-[10px] relative w-full">
                                      <TruncatedTitle
                                        title={row.name}
                                        className="flex-[1_0_0] min-w-0"
                                        textClassName="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-none min-w-0 overflow-hidden text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <TruncatedTitle
                                title={row.name}
                                className="flex-[1_0_0] min-w-0"
                                textClassName="font-['SF_Pro:Regular',sans-serif] font-normal leading-none text-[#f5f5f5] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Agent cell */}
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176px]">
                        <AgentBadge agent={row.agent} iconType={row.agentIconType} />
                      </div>
                      {/* Created cell */}
                      <div className="content-stretch flex items-center relative shrink-0 w-[144px]">
                        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[20px] overflow-hidden">{row.created}</p>
                        </div>
                      </div>
                      {/* Status cell */}
                      <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0 w-[256px]">
                        <StatusBadge status={row.status} />
                      </div>
                      {/* Model cell */}
                      <div className="content-stretch flex items-center relative shrink-0 w-[96px]">
                        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[20px] overflow-hidden">{row.model}</p>
                        </div>
                      </div>
                      {/* Actions cell */}
                      <RowActions variant={row.actions} />
                    </div>
                  </div>
                </div>
                );

                if (row.indent) {
                  const isAnimatingExpand = row.parentGroupId !== null && expandingGroups.has(row.parentGroupId);
                  return (
                    <div
                      key={row.id}
                      style={{
                        maxHeight: row.parentCollapsed ? "0px" : "80px",
                        overflow: row.parentCollapsed || isAnimatingExpand ? "hidden" : "visible",
                        opacity: row.parentCollapsed ? 0 : 1,
                        transition: "max-height 220ms ease, opacity 180ms ease",
                        width: "100%",
                      }}
                    >
                      {rowContent}
                    </div>
                  );
                }

                return rowContent;
              })}
            </div>
            <div aria-hidden="true" className="absolute border border-[#171717] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDown({ color }: { color: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
        <div className="absolute inset-[-13.75%_-6.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
            <path d={svgTablePaths.p36d8fd00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ToolButton({ children, compact = false }: { children: React.ReactNode; compact?: boolean }) {
  return (
    <div
      className={`${compact ? "h-[36px]" : ""} outlined-command-trigger relative rounded-[12px] shrink-0 cursor-pointer`}
      style={outlinedCommandTriggerStyle}
    >
      <div className={`outlined-command-trigger__content content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] ${compact ? "py-[6px] h-full" : "py-[8px]"} relative rounded-[inherit]`}>
        {children}
      </div>
      <div aria-hidden="true" className="outlined-command-trigger__border absolute border border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}
