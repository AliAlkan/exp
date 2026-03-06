import { type CSSProperties, useLayoutEffect, useRef, useState } from "react";

import eclipseFullUrl from "../../assets/eclipse-full.svg";
import svgPaths from "../../imports/svg-i8xslcz4lw";

type StatusType = "Thread initialization" | "Section 4 writing" | "Assembly & export" | "Complete";

interface TableRow {
  id: string;
  name: string;
  agent: string;
  created: string;
  status: StatusType;
}

const tableData: TableRow[] = [
  { id: "1", name: "RAG Evaluation Benchmark Setup", agent: "Researcher", created: "6 Mar 2026", status: "Thread initialization" },
  { id: "2", name: "Clinician Interview Notes Synthesis", agent: "Analyst", created: "6 Mar 2026", status: "Section 4 writing" },
  { id: "3", name: "Predicting Turnover: Regression Experiment #4", agent: "Researcher", created: "6 Mar 2026", status: "Assembly & export" },
  { id: "4", name: "Data Cleaning and Feature Engineering Brainstorm", agent: "Data Wrangler", created: "6 Mar 2026", status: "Complete" },
  { id: "5", name: "Systematic Review Inclusion Criteria v2", agent: "Researcher", created: "5 Mar 2026", status: "Complete" },
  { id: "6", name: "Transformer Ablation Matrix Draft", agent: "ML Engineer", created: "5 Mar 2026", status: "Complete" },
  { id: "7", name: "Ethics and Bias Risk Register", agent: "Compliance", created: "5 Mar 2026", status: "Section 4 writing" },
  { id: "8", name: "Knowledge Graph Entity Linking Audit", agent: "Researcher", created: "4 Mar 2026", status: "Assembly & export" },
  { id: "9", name: "Cost Profiling for Batch Inference", agent: "Ops", created: "4 Mar 2026", status: "Thread initialization" },
  { id: "10", name: "Hallucination Failure Mode Catalog", agent: "Researcher", created: "4 Mar 2026", status: "Complete" },
  { id: "11", name: "Long Context Retrieval Stress Test", agent: "ML Engineer", created: "3 Mar 2026", status: "Section 4 writing" },
  { id: "12", name: "Citation Formatting QA Checklist", agent: "Editor", created: "3 Mar 2026", status: "Complete" },
];

const outlinedCommandTriggerStyle = {
  "--outlined-command-trigger-color": "#262626",
} as CSSProperties;

function StatusBadge({ status }: { status: StatusType }) {
  const isComplete = status === "Complete";
  const bgStyle = isComplete
    ? { backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.8) 100%), linear-gradient(90deg, rgb(84, 255, 167) 0%, rgb(84, 255, 167) 100%)" }
    : { backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%), linear-gradient(90deg, rgb(163, 163, 163) 0%, rgb(163, 163, 163) 100%)" };
  const borderColor = isComplete ? "#193b29" : "#191919";
  const textColor = isComplete ? "#4ade80" : "#a3a3a3";

  return (
    <div className="flex gap-[8px] h-[28px] items-center justify-center p-[8px] relative rounded-[10px] shrink-0" style={bgStyle}>
      <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[10px]" style={{ borderColor }} />
      {isComplete ? (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
            <div className="absolute inset-[-7.5%_-5.16%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
                <path d={svgPaths.p27b1d790} stroke="#4ADE80" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[8.33%]">
            <div className="absolute inset-[-4.13%_-4.12%_-4.12%_-4.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4333 14.4333">
                <path d={svgPaths.p29f6fb80} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col font-['-apple-system','SF_Pro',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis whitespace-nowrap" style={{ color: textColor }}>
        <p className="leading-[20px] overflow-hidden">{status}</p>
      </div>
    </div>
  );
}

function AgentBadge({ agent }: { agent: string }) {
  return (
    <div className="flex gap-[8px] h-[26px] items-center justify-center max-w-[192px] p-[8px] relative rounded-[10px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%), linear-gradient(90deg, rgb(163, 163, 163) 0%, rgb(163, 163, 163) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="overflow-clip relative shrink-0 size-[14px]">
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p17438340} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col font-['-apple-system','SF_Pro',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">{agent}</p>
      </div>
    </div>
  );
}

function EllipsisIcon() {
  return (
    <div className="flex items-center p-[8px] shrink-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
      <div className="overflow-clip relative shrink-0 size-[16px]">
        <div className="absolute inset-[45.83%_16.67%]">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g>
                <path d={svgPaths.p21d13c00} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px] cursor-pointer">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
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
      className="bg-transparent border-0 font-['SF_Pro:Regular',sans-serif] font-normal leading-[28px] outline-none overflow-hidden p-0 resize-none text-[#fafafa] text-[16px] w-full min-h-[86px] placeholder:text-[#737373]"
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

  return (
    <div className="flex flex-col flex-1 min-w-0 h-full overflow-y-auto">
      {/* Hero Section */}
      <div className="relative shrink-0 w-full">
        {/* Background gradient */}
        <div className="p-[8px] w-full">
          <div className="bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] flex flex-col items-center overflow-clip relative rounded-[12px] w-full">
            {/* Gradient orb */}
            <div className="agents-background-gradient absolute left-[-315px] size-[820px] top-[-770px] pointer-events-none select-none">
              <div className="absolute inset-[-24.39%]" style={{ transform: "rotate(-30deg)" }}>
                <img alt="" className="block max-w-none size-full" src={eclipseFullUrl} />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[36px] items-center pb-[40px] pt-[64px] relative w-full">
              <p className="font-['Jost',sans-serif] font-semibold leading-none text-[#e5e5e5] text-[36px] text-center whitespace-nowrap">
                Hand this off to an agent
              </p>

              {/* Input card */}
              <div className="w-full max-w-[896px] px-[16px]">
                <div className="content-stretch flex items-start overflow-clip relative rounded-[16px] w-full">
                  <div className="agents-composer group bg-[#171717] content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px] z-10">
                      <div className="absolute border border-[#262626] border-solid inset-0 rounded-[20px] transition-colors duration-200 group-hover:border-[#323232] group-focus-within:border-[#323232]" />
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
                            <div className="content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip pl-[3px] pr-[14px] relative rounded-[9999px] shrink-0 cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.2) 0%, rgba(10, 10, 10, 0.2) 100%), linear-gradient(90deg, rgb(64, 64, 64) 0%, rgb(64, 64, 64) 100%)" }}>
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                                <div className="content-stretch flex items-center justify-center relative rounded-[60px] shrink-0 size-[34px]">
                                  <div className="overflow-clip relative shrink-0 size-[18px]">
                                    <div className="absolute inset-[8.33%_12.5%]">
                                      <div className="absolute inset-[-3.67%_-4.07%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6 16.1">
                                          <path d={svgPaths.p312ace00} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  EvoResearcher
                                </p>
                              </div>
                              <ChevronDown color="#FAFAFA" />
                            </div>

                            <ToolButton compact>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                GPT 5
                              </p>
                            </ToolButton>

                            <ToolButton>
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[20.83%]">
                                  <div className="absolute inset-[-5.89%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4333 10.4333">
                                      <path d={svgPaths.p3dd52ee0} stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Upload
                              </p>
                            </ToolButton>

                            <ToolButton>
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[16.67%]">
                                  <div className="absolute inset-[-5.16%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7668 11.7668">
                                      <path d={svgPaths.p2bc84680} stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                5
                              </p>
                            </ToolButton>

                            <ToolButton>
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[8.33%_12.5%]">
                                  <div className="absolute inset-[-4.13%_-4.58%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 14.4333">
                                      <path d={svgPaths.p1fca9800} stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                12
                              </p>
                            </ToolButton>

                            <ToolButton>
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[16.67%_45.83%]">
                                  <div className="absolute inset-[-5.16%_-41.25%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 11.7667">
                                      <g>
                                        <path d={svgPaths.pbb62180} stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                        <path d={svgPaths.pb439b80} stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                        <path d={svgPaths.p1c7be500} stroke="#D4D4D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                More
                              </p>
                            </ToolButton>
                          </div>

                          <div className="flex flex-row items-center self-stretch">
                            <div className="content-stretch flex h-full items-center relative shrink-0">
                              <div
                                className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[20px] py-[8px] relative rounded-[9999px] shrink-0 transition-[background-color] duration-200"
                                style={{
                                  backgroundColor: isRunReady ? "#932794" : "#262626",
                                  backgroundImage: "none",
                                }}
                              >
                                <div className="overflow-clip relative shrink-0 size-[16px]">
                                  <div className="absolute bottom-[12.5%] left-1/4 right-[16.67%] top-[12.5%]">
                                    <div className="absolute inset-[-5.54%_-7.12%_-5.54%_-7.13%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6633 13.33">
                                        <path d={svgPaths.p1ab67b80} stroke={isRunReady ? "#FAFAFA" : "#A3A3A3"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap transition-colors duration-200"
                                  style={{ color: isRunReady ? "#fafafa" : "#a3a3a3", fontVariationSettings: "'wdth' 100" }}
                                >
                                  <p className="leading-[20px]">Start a run</p>
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
        </div>
      </div>

      {/* Recents Section */}
      <div className="shrink-0 w-full">
        <div className="flex flex-col gap-[20px] items-start max-w-[1440px] mx-auto px-[32px] py-[28px] w-full">
          <p className="font-['Jost',sans-serif] font-medium leading-none text-[#a3a3a3] text-[18px] whitespace-nowrap">Recents</p>

          {/* Toolbar */}
          <div className="flex items-center justify-between w-full flex-wrap gap-[12px]">
            {/* Search */}
            <div className="h-[36px] relative rounded-[8px] shrink-0 w-[320px]">
              <div className="flex gap-[12px] items-center overflow-clip px-[10px] py-[8px] rounded-[inherit] size-full">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p3114e300} stroke="#A3A3A3" strokeLinejoin="round" strokeWidth="1.1" />
                  </svg>
                </div>
                <p className="font-['-apple-system','SF_Pro',sans-serif] font-normal leading-none text-[#a3a3a3] text-[14px] whitespace-nowrap">Search</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>

            {/* Filter buttons */}
            <div className="flex gap-[8px] items-center shrink-0 flex-wrap">
              <FilterButton icon="gitpr" label="Agent" />
              <FilterButton icon="listfilter" label="Status" />
              <FilterButton icon="sort" label="Recently..." width="w-[144px]" />
              {/* View toggle */}
              <div className="bg-[#262626] flex h-[36px] items-center p-[4px] rounded-[8px] shrink-0">
                <div className="h-full relative rounded-[6px] shrink-0 w-[28px] cursor-pointer">
                  <div className="flex items-center justify-center size-full">
                    <div className="flex gap-[10px] items-center justify-center px-[12px] py-[6px] size-full">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[12.5%]">
                          <div className="absolute inset-[-4.58%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 13.1">
                              <g>
                                <path d={svgPaths.p13ddeb00} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                <path d={svgPaths.p21712180} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                <path d={svgPaths.p3751c080} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                                <path d={svgPaths.p1181c4f0} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
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
                    <div className="flex gap-[10px] items-center justify-center px-[12px] py-[6px] size-full">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[12.5%]">
                          <div className="absolute inset-[-4.58%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 13.1">
                              <path d={svgPaths.p10c72d00} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
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
          <div className="relative rounded-[12px] w-full">
            <div className="flex flex-col items-start overflow-clip rounded-[inherit] w-full">
              {/* Header */}
              <div className="relative shrink-0 w-full">
                <div className="flex items-center overflow-clip rounded-[inherit] size-full">
                  <div className="flex items-center pl-[20px] pr-[52px] py-[12px] w-full">
                    <div className="flex flex-1 gap-[14px] items-center min-w-0">
                      <Checkbox />
                      <p className="font-['-apple-system','SF_Pro',sans-serif] font-normal leading-none text-[#737373] text-[12px] whitespace-nowrap">Name</p>
                    </div>
                    <div className="flex items-center shrink-0 w-[192px]">
                      <p className="font-['-apple-system','SF_Pro',sans-serif] font-normal leading-none text-[#737373] text-[12px] whitespace-nowrap">Agent</p>
                    </div>
                    <div className="flex gap-[10px] items-center shrink-0 w-[140px]">
                      <p className="font-['-apple-system','SF_Pro',sans-serif] font-normal leading-none text-[#737373] text-[12px] whitespace-nowrap">Created</p>
                      <div className="flex items-center justify-center shrink-0">
                        <div className="rotate-180">
                          <div className="h-[10.667px] relative w-[5.333px]">
                            <div className="absolute inset-[-5.16%_-10.31%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.43333 11.7667">
                                <path d={svgPaths.p1fa5c0} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center shrink-0 w-[190px]">
                      <p className="font-['-apple-system','SF_Pro',sans-serif] font-normal leading-none text-[#737373] text-[12px] whitespace-nowrap">Status</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
              </div>

              {/* Rows */}
              {tableData.map((row) => (
                <div key={row.id} className="relative shrink-0 w-full hover:bg-[#111] transition-colors cursor-pointer">
                  <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
                  <div className="flex items-center size-full">
                    <div className="flex items-center px-[20px] py-[12px] w-full">
                      <div className="flex flex-1 gap-[14px] items-center min-w-0">
                        <Checkbox />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center size-full">
                            <div className="flex items-center pr-[10px] w-full">
                              <p className="flex-1 font-['-apple-system','SF_Pro',sans-serif] font-medium leading-none min-w-0 overflow-hidden text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap">
                                {row.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start shrink-0 w-[192px]">
                        <AgentBadge agent={row.agent} />
                      </div>
                      <div className="flex items-center shrink-0 w-[140px]">
                        <p className="font-['-apple-system','SF_Pro',sans-serif] font-normal leading-[20px] text-[#a3a3a3] text-[14px] whitespace-nowrap">{row.created}</p>
                      </div>
                      <div className="flex flex-col items-start shrink-0 w-[190px]">
                        <StatusBadge status={row.status} />
                      </div>
                      <EllipsisIcon />
                    </div>
                  </div>
                </div>
              ))}
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
            <path d={svgPaths.p36d8fd00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
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

function FilterButton({ icon, label, width }: { icon: string; label: string; width?: string }) {
  return (
    <div className={`flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] rounded-[8px] shrink-0 cursor-pointer ${width || ""}`} style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
      {icon === "gitpr" && (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[12.5%]">
            <div className="absolute inset-[-4.58%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 13.1">
                <path d={svgPaths.p3926db00} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {icon === "listfilter" && (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
            <div className="absolute inset-[-6.88%_-4.58%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 9.1">
                <path d={svgPaths.p6c5e900} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {icon === "sort" && (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[16.67%_12.5%]">
            <div className="absolute inset-[-5.16%_-4.58%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 11.7667">
                <path d={svgPaths.p1ab3d300} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <p className={`font-['-apple-system','SF_Pro',sans-serif] font-medium leading-[20px] overflow-hidden text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap ${width ? "flex-1" : ""}`}>
        {label}
      </p>
      <div className="opacity-50">
        <ChevronDown color="#F5F5F5" />
      </div>
    </div>
  );
}
