import React, { useEffect, useState } from "react";
import svgPaths from "./svg-review-issue-modal";

type ReviewIssueModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ReviewIssueModal({ isOpen, onClose }: ReviewIssueModalProps) {
  const steps = [
    {
      question: "Which area should we prioritize first?",
      options: [
        "Hydration mismatch issues",
        "Initial page load performance",
        "Layout shift and visual stability",
        "Component-level rendering consistency",
        "Something else",
      ],
    },
    {
      question: "What should the agent optimize for most?",
      options: ["Faster perceived load time", "Fewer hydration errors and warnings", "Better UX consistency across states", "Balanced performance and UI quality", "Something else"],
    },
    {
      question: "How strict should the Design QA pass be?",
      options: [
        "Focus only on critical issues",
        "Include high-impact UX inconsistencies",
        "Review all visible UI deviations",
        "Be exhaustive, including edge cases",
        "Something else",
      ],
    },
  ] as const;

  const [stepIndex, setStepIndex] = useState(0);
  const [selectedByStep, setSelectedByStep] = useState<(number | null)[]>(() => Array(steps.length).fill(null));
  const [customInputByStep, setCustomInputByStep] = useState<string[]>(() => Array(steps.length).fill(""));
  const totalSteps = steps.length;
  const currentStep = steps[stepIndex];
  const isLastStep = stepIndex === totalSteps - 1;
  const isCustomOptionSelected = selectedByStep[stepIndex] === currentStep.options.length - 1;
  const hasManualInput = customInputByStep[stepIndex].trim().length > 0;
  const showContinue = isCustomOptionSelected && hasManualInput;
  const showDone = isLastStep && showContinue;
  const primaryLabel = showDone ? "Done" : showContinue ? "Continue" : "Skip";

  useEffect(() => {
    if (isOpen) {
      setStepIndex(0);
      setSelectedByStep(Array(steps.length).fill(null));
      setCustomInputByStep(Array(steps.length).fill(""));
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,10,10,0.9)] px-4" onClick={onClose}>
      <div className="w-full max-w-[680px]" onClick={(event) => event.stopPropagation()}>
        <div className="bg-[#171717] content-stretch flex flex-col items-start relative rounded-[12px] w-full">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[16.67%_8.33%]">
                      <div className="absolute inset-[-4.13%_-3.3%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7667 14.4333">
                          <path d={svgPaths.p3d79cc80} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[16px] text-ellipsis whitespace-nowrap">
                    <p className="leading-[24px] overflow-hidden text-ellipsis">Research that combines HCI and astrophysics</p>
                  </div>
                </div>
                <button
                  aria-label="Close review issue modal"
                  className="appearance-none bg-transparent border-0 overflow-clip relative shrink-0 size-[20px] cursor-pointer"
                  onClick={onClose}
                  type="button"
                >
                  <div className="absolute inset-1/4">
                    <div className="absolute inset-[-5.5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1 11.1">
                        <path d={svgPaths.p2d8af800} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded-[8px] shrink-0 w-full px-[20px] pb-0">
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
              <div className="h-[40px] relative shrink-0 w-full">
                <div className="absolute border-neutral-700 border-b border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
                    <button
                      aria-label="Previous step"
                      className="appearance-none bg-transparent border-0 overflow-clip relative shrink-0 size-[18px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      disabled={stepIndex === 0}
                      onClick={() => setStepIndex((prev) => Math.max(0, prev - 1))}
                      type="button"
                    >
                      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                        <div className="absolute inset-[-7.22%_-14.44%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8 10.3">
                            <path d={svgPaths.p1c9f9880} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-center text-ellipsis whitespace-nowrap">
                      {stepIndex + 1} of {totalSteps}
                    </p>
                    <button
                      aria-label="Next step"
                      className="appearance-none bg-transparent border-0 overflow-clip relative shrink-0 size-[18px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      disabled={stepIndex === totalSteps - 1}
                      onClick={() => setStepIndex((prev) => Math.min(totalSteps - 1, prev + 1))}
                      type="button"
                    >
                      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                        <div className="absolute inset-[-7.22%_-14.44%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8 10.3">
                            <path d={svgPaths.p299b4480} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative shrink-0 w-full px-[24px] py-[24px]">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-semibold text-[#f5f5f5] text-[20px] leading-[28px]">
                  {currentStep.question}
                </p>
              </div>

              {currentStep.options.map((option, idx) => {
                const isSelected = selectedByStep[stepIndex] === idx;
                const isCustomOption = idx === currentStep.options.length - 1;
                return (
                  <div
                    className={`${isSelected ? "bg-[#262626]" : "bg-transparent"} hover:bg-[#262626] w-full ${idx === 0 ? "border-t" : ""} border-b border-neutral-700 px-[24px] py-[12px] flex items-center gap-[18px] text-left cursor-pointer transition-colors`}
                    key={`${stepIndex}-${option}`}
                    onClick={() => {
                      setSelectedByStep((prev) => {
                        const next = [...prev];
                        next[stepIndex] = idx;
                        return next;
                      });

                      if (!isCustomOption) {
                        if (stepIndex < totalSteps - 1) {
                          setStepIndex((prev) => Math.min(totalSteps - 1, prev + 1));
                        } else {
                          onClose();
                        }
                      }
                    }}
                  >
                    <div
                      className={`${isSelected ? "bg-[#404040] text-[#fafafa] border-transparent" : "text-[#a3a3a3] border-[#404040]"} text-[12px] leading-[16px] w-[24px] h-[24px] rounded-[6px] border flex items-center justify-center`}
                    >
                      {idx + 1}
                    </div>
                    {isCustomOption && isSelected ? (
                      <input
                        autoFocus
                        className="bg-transparent border-0 outline-none text-[#f5f5f5] text-[14px] leading-[20px] w-full placeholder:text-neutral-400"
                        onChange={(event) =>
                          setCustomInputByStep((prev) => {
                            const next = [...prev];
                            next[stepIndex] = event.target.value;
                            return next;
                          })
                        }
                        onClick={(event) => event.stopPropagation()}
                        placeholder="Enter your input"
                        type="text"
                        value={customInputByStep[stepIndex]}
                      />
                    ) : (
                      <p className="text-[#f5f5f5] text-[14px] leading-[20px]">{option}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="absolute border border-neutral-700 border-solid inset-x-[20px] bottom-0 top-0 pointer-events-none rounded-[9px]" />
          </div>

          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-stretch flex items-center justify-end px-[24px] py-[16px] relative w-full">
                <button
                  className={`${showDone ? "bg-[#932794] hover:bg-[#A42DA5] text-neutral-50" : showContinue ? "bg-neutral-50 text-neutral-950" : "bg-[#404040] hover:bg-[#484848] text-[#fafafa]"} content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0 text-[14px] leading-[20px] font-['SF_Pro:Medium',sans-serif] font-medium transition-colors cursor-pointer`}
                  onClick={() => {
                    if (!isLastStep) {
                      setStepIndex((prev) => Math.min(totalSteps - 1, prev + 1));
                      return;
                    }
                    onClose();
                  }}
                  type="button"
                >
                  {primaryLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
