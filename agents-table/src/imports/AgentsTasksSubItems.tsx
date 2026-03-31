import { useEffect, useState } from "react";
import ReviewIssueModal from "./ReviewIssueModal";
import svgPaths from "./svg-zxzyeo2ss3";

const RUN_TIMER_ORIGIN_MS = Date.now() - (26 * 60 + 11) * 1000;

function formatElapsed(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds}s`;
}

function RunningElapsed() {
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNowMs(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const elapsedSeconds = Math.max(0, Math.floor((nowMs - RUN_TIMER_ORIGIN_MS) / 1000));

  return <p className="leading-[20px] overflow-hidden text-ellipsis">{`Running ${formatElapsed(elapsedSeconds)}`}</p>;
}

function IconSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Search">
          <path d={svgPaths.p3114e300} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinejoin="round" strokeWidth="1.1" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-[320px]" data-name="Input">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit] size-full">
        <IconSearch />
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-none overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Search
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CommandTrigger() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[10px] shrink-0" data-name="_CommandTrigger" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / GitPullRequest">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 13.1">
              <path d={svgPaths.p3926db00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agent
      </p>
      <div className="opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ChevronDown">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-13.75%_-6.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
              <path d={svgPaths.p36d8fd00} id="Vector" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommandTrigger1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[10px] shrink-0" data-name="_CommandTrigger" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ListFilter">
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-6.88%_-4.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 9.1">
              <path d={svgPaths.p6c5e900} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Status
      </p>
      <div className="opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ChevronDown">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-13.75%_-6.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
              <path d={svgPaths.p36d8fd00} id="Vector" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommandTrigger2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[144px]" data-name="_CommandTrigger" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ArrowDownNarrowWide">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.16%_-4.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 11.7667">
              <path d={svgPaths.p1ab3d300} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recently run
      </p>
      <div className="opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ChevronDown">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-13.75%_-6.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
              <path d={svgPaths.p36d8fd00} id="Vector" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabsTrigger({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      className={`appearance-none border-0 h-full relative rounded-[6px] shrink-0 cursor-pointer ${active ? "bg-[#404040]" : "bg-transparent hover:bg-neutral-800"}`}
      data-name="_Tabs / Trigger"
      onClick={onClick}
      type="button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center justify-center px-[12px] py-[6px] relative">
          <p
            className={`font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis whitespace-nowrap ${active ? "text-[#f5f5f5]" : "text-[#a3a3a3]"}`}
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Tasks
          </p>
        </div>
      </div>
    </button>
  );
}

function TabsTrigger1({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      className={`appearance-none border-0 h-full relative rounded-[6px] shrink-0 cursor-pointer ${active ? "bg-[#404040]" : "bg-transparent hover:bg-neutral-800"}`}
      data-name="_Tabs / Trigger"
      onClick={onClick}
      type="button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center justify-center px-[12px] py-[6px] relative">
          <p
            className={`font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis whitespace-nowrap ${active ? "text-[#f5f5f5]" : "text-[#a3a3a3]"}`}
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Activity
          </p>
        </div>
      </div>
    </button>
  );
}

function Tabs({
  activeTab,
  onChange,
}: {
  activeTab: "tasks" | "activity";
  onChange: (tab: "tasks" | "activity") => void;
}) {
  return (
    <div className="bg-[#171717] content-stretch flex h-[36px] items-center p-[4px] relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Tabs">
      <TabsTrigger active={activeTab === "tasks"} onClick={() => onChange("tasks")} />
      <TabsTrigger1 active={activeTab === "activity"} onClick={() => onChange("activity")} />
    </div>
  );
}

function Frame({
  activeTab,
  onTabChange,
}: {
  activeTab: "tasks" | "activity";
  onTabChange: (tab: "tasks" | "activity") => void;
}) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <CommandTrigger />
      <CommandTrigger1 />
      <CommandTrigger2 />
      <Tabs activeTab={activeTab} onChange={onTabChange} />
    </div>
  );
}

function Frame8({
  activeTab,
  onTabChange,
}: {
  activeTab: "tasks" | "activity";
  onTabChange: (tab: "tasks" | "activity") => void;
}) {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 top-[191px] w-[min(1440px,calc(100vw-32px))]">
      <Input />
      <Frame activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[12px] relative shrink-0">
      <Checkbox />
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-full relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[14px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden text-ellipsis">Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-full relative shrink-0 w-[189px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden text-ellipsis">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-full relative shrink-0 w-[82px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden text-ellipsis">Ticket</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="h-full relative shrink-0 w-[92px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden text-ellipsis">PR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-full relative shrink-0 w-[140px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden text-ellipsis">Repository</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="h-full relative shrink-0 w-[78px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden text-ellipsis">Model</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41Cost() {
  return (
    <div className="h-full relative shrink-0 w-[56px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[10px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden text-ellipsis">Cost</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CostCell({ value, withBottomBorder }: { value: string; withBottomBorder?: boolean }) {
  return (
    <div className="h-full relative shrink-0 w-[56px]">
      <div aria-hidden="true" className={`absolute border-[#262626] border-l ${withBottomBorder ? "border-b" : ""} border-solid inset-0 pointer-events-none`} />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-full relative shrink-0 w-[61px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden text-ellipsis">Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none overflow-hidden text-ellipsis">Run</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="h-[10.667px] relative w-[5.333px]" data-name="Vector">
            <div className="absolute inset-[-5.16%_-10.31%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.43333 11.7667">
                <path d={svgPaths.p1fa5c0} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="h-full relative shrink-0 w-[181px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="h-full relative shrink-0 w-[48px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="grid grid-cols-[40px_minmax(0,1fr)_189px_82px_92px_140px_78px_56px_61px_181px_48px] h-[40px] items-stretch relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <Frame27 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame35 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame37 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame38 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame39 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame40 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame41 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame41Cost />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame43 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame42 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame44 />
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0">
      <Checkbox1 />
    </div>
  );
}

function IconChevronDown({ expanded }: { expanded: boolean }) {
  return (
    <div className={`relative shrink-0 size-[16px] transition-transform ${expanded ? "" : "-rotate-90"}`} data-name="Icon / ChevronDown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / ChevronDown">
          <path d="M4 5L8 11L12 5" fill="var(--fill-0, #E5E5E5)" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
        </g>
      </svg>
    </div>
  );
}

function Frame9({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <button
      aria-expanded={expanded}
      aria-label={expanded ? "Collapse sub items" : "Expand sub items"}
      className="appearance-none bg-transparent border-0 content-stretch flex items-center p-[8px] relative shrink-0"
      onClick={onToggle}
      type="button"
    >
      <IconChevronDown expanded={expanded} />
    </button>
  );
}

function Frame52({ subItemCount }: { subItemCount: number }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ListTree">
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-6.88%_-4.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 9.1">
              <path d={svgPaths.p1ea1a800} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">{subItemCount} sub items</p>
      </div>
    </div>
  );
}

function Frame51({ subItemCount, showSubItems, title }: { subItemCount: number; showSubItems: boolean; title: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] name-column-title-clamp" title={title}>
          {title}
        </p>
      </div>
      {showSubItems && <Frame52 subItemCount={subItemCount} />}
    </div>
  );
}

function Frame45({
  expanded,
  onToggle,
  subItemCount,
  title,
  accordionEnabled,
}: {
  expanded: boolean;
  onToggle: () => void;
  subItemCount: number;
  title: string;
  accordionEnabled: boolean;
}) {
  return (
    <div className="h-full relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[14px] relative size-full">
          {accordionEnabled && <Frame9 expanded={expanded} onToggle={onToggle} />}
          <Frame51 subItemCount={subItemCount} showSubItems={accordionEnabled} title={title} />
        </div>
      </div>
    </div>
  );
}

function StatusSingularVAction({ onReviewIssue }: { onReviewIssue: () => void }) {
  return (
    <div className="h-full relative shrink-0 w-[189px]" data-name="Status _Singular _v2" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.8) 100%), linear-gradient(90deg, rgb(217, 104, 66) 0%, rgb(217, 104, 66) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['SF_Pro:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px relative text-[#e17d63] text-[0px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px] text-[14px]">{`      Action required. `}</span>
            <button
              className="appearance-none bg-transparent border-0 decoration-solid leading-[20px] text-[14px] underline cursor-pointer"
              onClick={onReviewIssue}
              type="button"
            >
              Review issue
            </button>
          </p>
          <div className="absolute left-[12px] overflow-clip size-[16px] top-[14px]" data-name="Icon / ReplyAll">
            <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-[29.17%]" data-name="Vector">
              <div className="absolute inset-[-7.5%_-4.12%_-7.5%_-4.13%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4333 8.43333">
                  <path d={svgPaths.p3e822000} id="Vector" stroke="var(--stroke-0, #E17D63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusSingularVComplete() {
  return (
    <div className="h-full relative shrink-0 w-[189px]" data-name="Status _Singular _v2" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.8) 100%), linear-gradient(90deg, rgb(70, 192, 114) 0%, rgb(70, 192, 114) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Check">
            <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
              <div className="absolute inset-[-7.5%_-5.16%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
                  <path d={svgPaths.p27b1d790} id="Vector" stroke="var(--stroke-0, #46C072)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#46c072] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame30({ ticketId }: { ticketId: string }) {
  return (
    <div className="h-full relative shrink-0 w-[82px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {ticketId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18({ prId }: { prId: string }) {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {prId}
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-name="GithHub Icons">
            <div className="absolute inset-0 overflow-clip" data-name="Icon / GitPullRequestArrow">
              <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-6.33%_-5.7%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9967 11.83">
                    <path d={svgPaths.p392aa00} id="Vector" stroke="var(--stroke-0, #5CB55C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              evolve-monorepo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e5e5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] mb-0">GPT 5.4</p>
            <p className="leading-[20px] text-[#a3a3a3]">High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="h-full relative shrink-0 w-[61px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Bot">
            <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-4.13%_-3.3%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7667 14.4333">
                  <path d={svgPaths.p3d79cc80} id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">3/23/26, 22:10</p>
      </div>
      <div className="relative shrink-0 size-[1.333px]" data-name="Vector">
        <div className="absolute inset-[-41.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 2.43333">
            <path d={svgPaths.pb439b80} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Now</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-full relative shrink-0 w-[181px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame17 />
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#bf705c] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">Awaiting input 26m 11s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex h-full items-center px-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <Frame1 />
    </div>
  );
}

function Row({
  expanded,
  onToggle,
  subItemCount,
  title,
  ticketId,
  prId,
  statusVariant,
  accordionEnabled,
  onReviewIssue,
}: {
  expanded: boolean;
  onToggle: () => void;
  subItemCount: number;
  title: string;
  ticketId: string;
  prId: string;
  statusVariant: "action-required" | "complete";
  accordionEnabled: boolean;
  onReviewIssue: () => void;
}) {
  return (
    <div className="h-[72px] relative shrink-0 transition-colors hover:bg-neutral-900 w-full" data-name="Row">
      <div className="grid grid-cols-[40px_minmax(0,1fr)_189px_82px_92px_140px_78px_56px_61px_181px_48px] items-stretch overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-row items-center self-stretch">
          <Frame26 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame45 expanded={expanded} onToggle={onToggle} subItemCount={subItemCount} title={title} accordionEnabled={accordionEnabled} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          {statusVariant === "complete" ? <StatusSingularVComplete /> : <StatusSingularVAction onReviewIssue={onReviewIssue} />}
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame30 ticketId={ticketId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame18 prId={prId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame31 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame32 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <CostCell value="$2.4" />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame46 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame29 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame48 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame28({ showBottomBorder }: { showBottomBorder?: boolean }) {
  return (
    <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0">
      {showBottomBorder && <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />}
      <Checkbox2 />
    </div>
  );
}

function Frame53({ title }: { title: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#f5f5f5] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] name-column-title-clamp" title={title}>
          {title}
        </p>
      </div>
    </div>
  );
}

function Frame50({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame53 title={title} />
    </div>
  );
}

function Frame49({ title }: { title: string }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[10px] w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-[0_0_-0.5px_-0.5px] pointer-events-none rounded-bl-[10.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[14px] relative size-full">
          <Frame50 title={title} />
        </div>
      </div>
    </div>
  );
}

function Frame72({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-[0_0_0_-0.5px] pointer-events-none" />
      <Frame49 title={title} />
    </div>
  );
}

function Frame71({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-col items-start pl-[28px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <Frame72 title={title} />
    </div>
  );
}

function ActivitySubTaskNameCell({
  title,
  parentTitle,
  showBottomBorder,
}: {
  title: string;
  parentTitle: string;
  showBottomBorder?: boolean;
}) {
  return (
    <div className={`border-[#262626] border-l ${showBottomBorder ? "border-b" : ""} border-solid content-stretch flex items-center px-[12px] py-[14px] relative shrink-0 w-full`}>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] name-column-title-clamp text-[14px]" title={title}>
              {title}
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ListTree">
            <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
              <div className="absolute inset-[-6.88%_-4.58%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 9.1">
                  <path d={svgPaths.p1ea1a800} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] overflow-hidden text-[14px] text-ellipsis" title={`Part of ${parentTitle}`}>
              {`Part of ${parentTitle}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusSingular() {
  return (
    <div className="status-processing-loader content-stretch flex items-center px-[12px] py-[8px] relative shrink-0 w-[189px]" data-name="Status _Singular">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0 whitespace-pre">{`Processing your `}</p>
        <p className="leading-[20px] whitespace-pre">request now</p>
      </div>
    </div>
  );
}

function Frame33({ ticketId }: { ticketId: string }) {
  return (
    <div className="h-full relative shrink-0 w-[82px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {ticketId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19({ prId }: { prId: string }) {
  return (
    <div className="h-full relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {prId}
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-name="GithHub Icons">
            <div className="absolute inset-0 overflow-clip" data-name="Icon / GitMerge">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-[-6.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.83 11.83">
                    <path d={svgPaths.p25ba1700} id="Vector" stroke="var(--stroke-0, #A484F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-full relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              evolve-monorepo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e5e5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] mb-0">GPT 5.4</p>
            <p className="leading-[20px] text-[#a3a3a3]">High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-full relative shrink-0 w-[61px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Bot">
            <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-4.13%_-3.3%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7667 14.4333">
                  <path d={svgPaths.p3d79cc80} id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">3/23/26, 22:10</p>
      </div>
      <div className="relative shrink-0 size-[1.333px]" data-name="Vector">
        <div className="absolute inset-[-41.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 2.43333">
            <path d={svgPaths.pb439b80} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Now</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="h-full relative shrink-0 w-[181px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame20 />
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#cfa85c] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <RunningElapsed />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex h-full items-center px-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <Frame2 />
    </div>
  );
}

function Row1({
  activityView,
  parentTitle,
  title,
  ticketId,
  prId,
  statusCell,
}: {
  activityView: boolean;
  parentTitle: string;
  title: string;
  ticketId: string;
  prId: string;
  statusCell: JSX.Element;
}) {
  return (
    <div className="grid grid-cols-[40px_minmax(0,1fr)_189px_82px_92px_140px_78px_56px_61px_181px_48px] items-stretch relative shrink-0 transition-colors hover:bg-neutral-900 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <Frame28 showBottomBorder={activityView} />
      </div>
      {activityView ? (
        <ActivitySubTaskNameCell
          parentTitle={parentTitle}
          showBottomBorder
          title={title}
        />
      ) : (
        <Frame71 title={title} />
      )}
      {statusCell}
      <div className="flex flex-row items-center self-stretch">
        <Frame33 ticketId={ticketId} />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame19 prId={prId} />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame34 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame54 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <CostCell value="" withBottomBorder />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame55 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame56 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame57 />
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0">
      <Checkbox3 />
    </div>
  );
}

function Frame61({ title }: { title: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#f5f5f5] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] name-column-title-clamp" title={title}>
          {title}
        </p>
      </div>
    </div>
  );
}

function Frame60({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame61 title={title} />
    </div>
  );
}

function Frame59({ title }: { title: string }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[10px] w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-[0_0_-0.5px_-0.5px] pointer-events-none rounded-bl-[10.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[14px] relative size-full">
          <Frame60 title={title} />
        </div>
      </div>
    </div>
  );
}

function Frame73({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start pl-[28px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <Frame59 title={title} />
    </div>
  );
}

function StatusSingular1() {
  return (
    <div className="status-processing-loader h-full relative shrink-0 w-[189px]" data-name="Status _Singular">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] mb-0 whitespace-pre">{`Processing your `}</p>
            <p className="leading-[20px] whitespace-pre">request now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame62({ ticketId }: { ticketId: string }) {
  return (
    <div className="h-full relative shrink-0 w-[82px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {ticketId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21({ prId }: { prId: string }) {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {prId}
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-name="GithHub Icons">
            <div className="absolute inset-0 overflow-clip" data-name="Icon / GitMerge">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-[-6.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.83 11.83">
                    <path d={svgPaths.p25ba1700} id="Vector" stroke="var(--stroke-0, #A484F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              evolve-monorepo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e5e5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] mb-0">GPT 5.4</p>
            <p className="leading-[20px] text-[#a3a3a3]">High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="h-full relative shrink-0 w-[61px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Bot">
            <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-4.13%_-3.3%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7667 14.4333">
                  <path d={svgPaths.p3d79cc80} id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">3/23/26, 22:10</p>
      </div>
      <div className="relative shrink-0 size-[1.333px]" data-name="Vector">
        <div className="absolute inset-[-41.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 2.43333">
            <path d={svgPaths.pb439b80} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Now</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="h-full relative shrink-0 w-[181px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame22 />
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#cfa85c] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <RunningElapsed />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex h-full items-center px-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-l border-solid inset-0 pointer-events-none" />
      <Frame3 />
    </div>
  );
}

function Row2({
  activityView,
  parentTitle,
  title,
  ticketId,
  prId,
  statusCell,
}: {
  activityView: boolean;
  parentTitle: string;
  title: string;
  ticketId: string;
  prId: string;
  statusCell: JSX.Element;
}) {
  return (
    <div className="grid grid-cols-[40px_minmax(0,1fr)_189px_82px_92px_140px_78px_56px_61px_181px_48px] items-stretch relative shrink-0 transition-colors hover:bg-neutral-900 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <Frame58 />
      </div>
      {activityView ? (
        <ActivitySubTaskNameCell
          parentTitle={parentTitle}
          title={title}
        />
      ) : (
        <Frame73 title={title} />
      )}
      <div className="flex flex-row items-center self-stretch">{statusCell}</div>
      <div className="flex flex-row items-center self-stretch">
        <Frame62 ticketId={ticketId} />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame21 prId={prId} />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame63 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame64 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <CostCell value="" withBottomBorder />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame65 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame66 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame67 />
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0">
      <Checkbox4 />
    </div>
  );
}

function Frame69({ title }: { title: string }) {
  return (
    <div className="h-full relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[14px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#f5f5f5] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] name-column-title-clamp" title={title}>
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusSingularV1({ onReviewIssue }: { onReviewIssue: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center p-[12px] relative shrink-0 w-[189px]" data-name="Status _Singular _v2" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.8) 100%), linear-gradient(90deg, rgb(217, 104, 66) 0%, rgb(217, 104, 66) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['SF_Pro:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px relative text-[#e17d63] text-[0px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px] text-[14px]">{`      Action required. `}</span>
        <button
          className="appearance-none bg-transparent border-0 decoration-solid leading-[20px] text-[14px] underline cursor-pointer"
          onClick={onReviewIssue}
          type="button"
        >
          Review issue
        </button>
      </p>
      <div className="absolute left-[12px] overflow-clip size-[16px] top-[14px]" data-name="Icon / ReplyAll">
        <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-7.5%_-4.12%_-7.5%_-4.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4333 8.43333">
              <path d={svgPaths.p3e822000} id="Vector" stroke="var(--stroke-0, #E17D63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame70({ ticketId }: { ticketId: string }) {
  return (
    <div className="h-full relative shrink-0 w-[82px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {ticketId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23({ prId }: { prId: string }) {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {prId}
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-name="GithHub Icons">
            <div className="absolute inset-0 overflow-clip" data-name="Icon / GitPullRequestArrow">
              <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-6.33%_-5.7%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9967 11.83">
                    <path d={svgPaths.p392aa00} id="Vector" stroke="var(--stroke-0, #5CB55C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              evolve-monorepo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e5e5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] mb-0">GPT 5.4</p>
            <p className="leading-[20px] text-[#a3a3a3]">High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="h-full relative shrink-0 w-[61px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Bot">
            <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-4.13%_-3.3%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7667 14.4333">
                  <path d={svgPaths.p3d79cc80} id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">3/23/26, 22:10</p>
      </div>
      <div className="relative shrink-0 size-[1.333px]" data-name="Vector">
        <div className="absolute inset-[-41.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 2.43333">
            <path d={svgPaths.pb439b80} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Now</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="h-full relative shrink-0 w-[181px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame24 />
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#bf705c] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">Awaiting input 26m 11s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex h-full items-center px-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <Frame4 />
    </div>
  );
}

function Row3({ onReviewIssue, title, ticketId, prId }: { onReviewIssue: () => void; title: string; ticketId: string; prId: string }) {
  return (
    <div className="relative shrink-0 transition-colors hover:bg-neutral-900 w-full" data-name="Row">
      <div className="grid grid-cols-[40px_minmax(0,1fr)_189px_82px_92px_140px_78px_56px_61px_181px_48px] items-stretch overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-row items-center self-stretch">
          <Frame68 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame69 title={title} />
        </div>
        <StatusSingularV1 onReviewIssue={onReviewIssue} />
        <div className="flex flex-row items-center self-stretch">
          <Frame70 ticketId={ticketId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame23 prId={prId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame74 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame75 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <CostCell value="$1.3" />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame76 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame77 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame78 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0">
      <Checkbox5 />
    </div>
  );
}

function Frame80({ title }: { title: string }) {
  return (
    <div className="h-full relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[14px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#f5f5f5] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] name-column-title-clamp" title={title}>
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Check">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.5%_-5.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
              <g id="Vector">
                <path d={svgPaths.p27b1d790} stroke="var(--stroke-0, #46C072)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                <path d={svgPaths.p27b1d790} stroke="var(--stroke-1, #46C072)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#46c072] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Completed</p>
      </div>
    </div>
  );
}

function Frame82({ ticketId }: { ticketId: string }) {
  return (
    <div className="h-full relative shrink-0 w-[82px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {ticketId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame83({ prId }: { prId: string }) {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {prId}
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-name="GithHub Icons">
            <div className="absolute inset-0 overflow-clip" data-name="Icon / GitPullRequestArrow">
              <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-6.33%_-5.7%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9967 11.83">
                    <path d={svgPaths.p392aa00} id="Vector" stroke="var(--stroke-0, #5CB55C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              evolve-monorepo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e5e5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] mb-0">GPT 5.4</p>
            <p className="leading-[20px] text-[#a3a3a3]">High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="h-full relative shrink-0 w-[61px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Bot">
            <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-4.13%_-3.3%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7667 14.4333">
                  <path d={svgPaths.p3d79cc80} id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">3/23/26, 22:10</p>
      </div>
      <div className="relative shrink-0 size-[1.333px]" data-name="Vector">
        <div className="absolute inset-[-41.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 2.43333">
            <path d={svgPaths.pb439b80} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">22:22</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0">
      <Frame14 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="h-full relative shrink-0 w-[181px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame88 />
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#cfa85c] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <RunningElapsed />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex h-full items-center px-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <Frame5 />
    </div>
  );
}

function Row4({ title, ticketId, prId }: { title: string; ticketId: string; prId: string }) {
  return (
    <div className="h-[56px] relative shrink-0 transition-colors hover:bg-neutral-900 w-full" data-name="Row">
      <div className="grid grid-cols-[40px_minmax(0,1fr)_189px_82px_92px_140px_78px_56px_61px_181px_48px] items-stretch overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-row items-center self-stretch">
          <Frame79 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame80 title={title} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <StatusSingular />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame82 ticketId={ticketId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame83 prId={prId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame84 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame85 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <CostCell value="$2.2" />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame86 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame87 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame89 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0">
      <Checkbox6 />
    </div>
  );
}

function Frame91({ title }: { title: string }) {
  return (
    <div className="h-full relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[14px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#f5f5f5] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] name-column-title-clamp" title={title}>
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / X">
        <div className="absolute inset-1/4" data-name="Vector">
          <div className="absolute inset-[-6.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 9.1">
              <path d={svgPaths.p1e0b3580} id="Vector" stroke="var(--stroke-0, #DF6262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#df6262] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Terminated</p>
      </div>
    </div>
  );
}

function StatusSingular2() {
  return (
    <div className="h-full relative shrink-0 w-[189px]" data-name="Status _Singular" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.88) 0%, rgba(10, 10, 10, 0.88) 100%), linear-gradient(90deg, rgb(239, 68, 68) 0%, rgb(239, 68, 68) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <Frame92 />
        </div>
      </div>
    </div>
  );
}

function Frame93({ ticketId }: { ticketId: string }) {
  return (
    <div className="h-full relative shrink-0 w-[82px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {ticketId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame94({ prId }: { prId: string }) {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {prId}
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-name="GithHub Icons">
            <div className="absolute inset-0 overflow-clip" data-name="Icon / GitPullRequestClosed">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-[-6.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.83 11.83">
                    <path d={svgPaths.p10b7d700} id="Vector" stroke="var(--stroke-0, #EC5F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              evolve-monorepo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e5e5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] mb-0">GPT 5.4</p>
            <p className="leading-[20px] text-[#a3a3a3]">High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="h-full relative shrink-0 w-[61px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Bot">
            <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-4.13%_-3.3%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7667 14.4333">
                  <path d={svgPaths.p3d79cc80} id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">3/23/26, 22:10</p>
      </div>
      <div className="relative shrink-0 size-[1.333px]" data-name="Vector">
        <div className="absolute inset-[-41.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 2.43333">
            <path d={svgPaths.pb439b80} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">22:22</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="h-full relative shrink-0 w-[181px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame99 />
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">26m 11s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex h-full items-center px-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <Frame6 />
    </div>
  );
}

function Row5({ title, ticketId, prId }: { title: string; ticketId: string; prId: string }) {
  return (
    <div className="h-[56px] relative shrink-0 transition-colors hover:bg-neutral-900 w-full" data-name="Row">
      <div className="grid grid-cols-[40px_minmax(0,1fr)_189px_82px_92px_140px_78px_56px_61px_181px_48px] items-stretch overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-row items-center self-stretch">
          <Frame90 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame91 title={title} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <StatusSingular2 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame93 ticketId={ticketId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame94 prId={prId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame95 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame96 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <CostCell value="$1.1" />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame97 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame98 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame100 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0">
      <Checkbox7 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="h-full relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[14px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#f5f5f5] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] name-column-title-clamp" title="Optimize a11y keyboard navigation with Design QA Agent">
              Optimize a11y keyboard navigation with Design QA Agent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Check">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.5%_-5.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
              <g id="Vector">
                <path d={svgPaths.p27b1d790} stroke="var(--stroke-0, #46C072)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                <path d={svgPaths.p27b1d790} stroke="var(--stroke-1, #46C072)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#46c072] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Completed</p>
      </div>
    </div>
  );
}

function Frame104({ ticketId }: { ticketId: string }) {
  return (
    <div className="h-full relative shrink-0 w-[82px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {ticketId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame105({ prId }: { prId: string }) {
  return (
    <div className="h-full relative shrink-0 w-[92px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              {prId}
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-name="GithHub Icons">
            <div className="absolute inset-0 overflow-clip" data-name="Icon / GitMerge">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-[-6.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.83 11.83">
                    <path d={svgPaths.p25ba1700} id="Vector" stroke="var(--stroke-0, #A484F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="h-full relative shrink-0 w-[140px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#e5e5e5] text-[0px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="decoration-solid leading-[20px] overflow-hidden text-[14px] text-ellipsis underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              evolve-monorepo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[12px] py-[8px] relative">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e5e5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] mb-0">GPT 5.4</p>
            <p className="leading-[20px] text-[#a3a3a3]">High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="h-full relative shrink-0 w-[61px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Microscope">
            <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
              <div className="absolute inset-[-3.3%_-3.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1 17.7667">
                  <path d={svgPaths.p35e55e00} id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">3/23/26, 22:10</p>
      </div>
      <div className="relative shrink-0 size-[1.333px]" data-name="Vector">
        <div className="absolute inset-[-41.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 2.43333">
            <path d={svgPaths.pb439b80} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">22:22</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0">
      <Frame16 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative shrink-0 w-[181px]">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <Frame110 />
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">26m 11s</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex h-full items-center px-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function Row6({ ticketId, prId }: { ticketId: string; prId: string }) {
  return (
    <div className="relative shrink-0 transition-colors hover:bg-neutral-900 w-full" data-name="Row">
      <div className="grid grid-cols-[40px_minmax(0,1fr)_189px_82px_92px_140px_78px_56px_61px_181px_48px] items-stretch overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-row items-center self-stretch">
          <Frame101 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame102 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="h-full relative shrink-0 w-[189px]" data-name="Status _Singular" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.92) 0%, rgba(10, 10, 10, 0.92) 100%), linear-gradient(90deg, rgb(58, 240, 128) 0%, rgb(58, 240, 128) 100%)" }}>
            <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[12px] relative size-full">
                <Frame103 />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame104 ticketId={ticketId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame105 prId={prId} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame106 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame107 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <CostCell value="$0.9" />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame108 />
        </div>
        <Frame109 />
        <div className="flex flex-row items-center self-stretch">
          <Frame111 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame47({
  subItemsExpanded,
  onToggleSubItems,
  endSubItemsExpanded,
  onToggleEndSubItems,
  activeTab,
  onReviewIssue,
}: {
  subItemsExpanded: boolean;
  onToggleSubItems: () => void;
  endSubItemsExpanded: boolean;
  onToggleEndSubItems: () => void;
  activeTab: "tasks" | "activity";
  onReviewIssue: () => void;
}) {
  const activityView = activeTab === "activity";

  return (
    <div className="-translate-x-1/2 absolute left-1/2 rounded-[12px] top-[247px] w-[min(1440px,calc(100vw-32px))]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame36 />
        <Row
          expanded={subItemsExpanded}
          onToggle={onToggleSubItems}
          subItemCount={2}
          title="Improve React route transitions with Frontend Copilot"
          ticketId="000129"
          prId="#3491"
          statusVariant="action-required"
          accordionEnabled={!activityView}
          onReviewIssue={onReviewIssue}
        />
        {(activityView || subItemsExpanded) && (
          <Row1
            activityView={activityView}
            parentTitle="Improve React route transitions with Frontend Copilot"
            title="Document state sync across tabs with Frontend Copilot"
            ticketId="000764"
            prId="#3627"
            statusCell={<StatusSingular />}
          />
        )}
        {(activityView || subItemsExpanded) && (
          <Row2
            activityView={activityView}
            parentTitle="Improve React route transitions with Frontend Copilot"
            title="Document animation performance budget with Performance Agent"
            ticketId="000538"
            prId="#3714"
            statusCell={<StatusSingular1 />}
          />
        )}
        <Row3 onReviewIssue={onReviewIssue} title="Harden storybook docs coverage with Performance Agent" ticketId="000246" prId="#3840" />
        <Row4 title="Document search filtering logic with Interaction Agent" ticketId="000915" prId="#3956" />
        <Row5 title="Polish state sync across tabs with Performance Agent" ticketId="000403" prId="#3478" />
        <Row6 ticketId="000682" prId="#3589" />
        <Row3 onReviewIssue={onReviewIssue} title="Harden storybook docs coverage with Performance Agent" ticketId="000157" prId="#3662" />
        <Row4 title="Document search filtering logic with Interaction Agent" ticketId="000894" prId="#3725" />
        <Row5 title="Polish state sync across tabs with Performance Agent" ticketId="000331" prId="#3893" />
        <Row
          expanded={endSubItemsExpanded}
          onToggle={onToggleEndSubItems}
          subItemCount={2}
          title="Improve React route transitions with Frontend Copilot"
          ticketId="000520"
          prId="#3426"
          statusVariant="complete"
          accordionEnabled={!activityView}
          onReviewIssue={onReviewIssue}
        />
        {(activityView || endSubItemsExpanded) && (
          <Row1
            activityView={activityView}
            parentTitle="Improve React route transitions with Frontend Copilot"
            title="Refactor shared form validation UX with UI Engineer Agent"
            ticketId="000778"
            prId="#3517"
            statusCell={<StatusSingular />}
          />
        )}
        {(activityView || endSubItemsExpanded) && (
          <Row2
            activityView={activityView}
            parentTitle="Improve React route transitions with Frontend Copilot"
            title="Reduce bundle overhead in dashboard widgets with Build Copilot"
            ticketId="000964"
            prId="#3784"
            statusCell={<StatusSingular1 />}
          />
        )}
      </div>
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

export default function AgentsTasksSubItems() {
  const [subItemsExpanded, setSubItemsExpanded] = useState(false);
  const [endSubItemsExpanded, setEndSubItemsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"tasks" | "activity">("tasks");
  const [isReviewIssueModalOpen, setIsReviewIssueModalOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] min-h-[calc(100vh+100px)] relative w-full" data-name="Agents _Tasks _Sub Items">
      <div className="-translate-y-1/2 -translate-x-1/2 absolute flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#a3a3a3] text-[18px] top-[162px] w-[min(1440px,calc(100vw-32px))]">
        <p className="leading-none">Recents</p>
      </div>
      <Frame8 activeTab={activeTab} onTabChange={setActiveTab} />
      <Frame47
        activeTab={activeTab}
        endSubItemsExpanded={endSubItemsExpanded}
        onReviewIssue={() => setIsReviewIssueModalOpen(true)}
        onToggleEndSubItems={() => setEndSubItemsExpanded((prev) => !prev)}
        subItemsExpanded={subItemsExpanded}
        onToggleSubItems={() => setSubItemsExpanded((prev) => !prev)}
      />
      <ReviewIssueModal isOpen={isReviewIssueModalOpen} onClose={() => setIsReviewIssueModalOpen(false)} />
    </div>
  );
}