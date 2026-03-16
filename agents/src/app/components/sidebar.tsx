import svgPaths from "../../imports/svg-i8xslcz4lw";

const navItems = [
  { label: "Chats", icon: "messages", color: "var(--neutral-400)", active: false },
  { label: "Quick Agents", icon: "bot", color: "var(--neutral-400)", active: false },
  { label: "Agents", icon: "gitpr", color: "#D75CDB", active: true },
  { label: "Knowledge", icon: "library", color: "var(--neutral-400)", active: false },
  { label: "Personas", icon: "user", color: "var(--neutral-400)", active: false },
  { label: "Lists", icon: "listtree", color: "var(--neutral-400)", active: false },
  { label: "Plans", icon: "creditcard", color: "var(--neutral-400)", active: false },
  { label: "Data Sources", icon: "database", color: "var(--neutral-400)", active: false },
];

const chatSections = [
  {
    title: "Today",
    chats: [
      "RAG Evaluation Benchmark Setup",
      "Predicting Turnover: Regression Experiment #4",
      "Clinician Interview Notes Synthesis",
      "Citation Formatting QA Checklist",
    ],
  },
  {
    title: "Yesterday",
    chats: [
      "Methodological Frameworks",
      "Knowledge Graph Entity Linking Audit",
      "Cost Profiling for Batch Inference",
      "Long Context Retrieval Stress Test",
      "Ethics and Bias Risk Register",
    ],
  },
  {
    title: "Earlier this week",
    chats: [
      "Designing a Rigorous Knowledge Protocol",
      "Systematic Review Inclusion Criteria v2",
      "Transformer Ablation Matrix Draft",
      "Data Cleaning and Feature Engineering Brainstorm",
      "Hallucination Failure Mode Catalog",
      "Enhancing Academic Writing and Communication",
    ],
  },
];

function NavIcon({ icon, color }: { icon: string; color: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    messages: (
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-4.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6633 14.6634">
            <path d={svgPaths.p1e29fd00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
    bot: (
      <div className="absolute inset-[16.67%_8.33%]">
        <div className="absolute inset-[-6.23%_-4.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6633 11.9967">
            <path d={svgPaths.p1307e500} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
    gitpr: (
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 13.33">
            <path d={svgPaths.pe6aad80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
    library: (
      <div className="absolute inset-[12.5%_14.74%_12.5%_12.5%]">
        <div className="absolute inset-[-5.54%_-5.73%_-5.54%_-5.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9737 13.33">
            <path d={svgPaths.p3239ad80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
    user: (
      <div className="absolute inset-[12.5%_20.83%]">
        <div className="absolute inset-[-5.54%_-7.12%_-5.54%_-7.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6633 13.33">
            <path d={svgPaths.pa636f0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
    listtree: (
      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
        <div className="absolute inset-[-8.31%_-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 9.33">
            <path d={svgPaths.p32950e80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
    creditcard: (
      <div className="absolute inset-[20.83%_8.33%]">
        <div className="absolute inset-[-7.13%_-4.99%_-7.12%_-4.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6633 10.6633">
            <path d={svgPaths.p29e69600} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
    database: (
      <div className="absolute inset-[8.33%_12.5%]">
        <div className="absolute inset-[-4.99%_-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 14.6633">
            <path d={svgPaths.p1cedb000} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
    newchat: (
      <div className="absolute inset-[12.47%_12.47%_8.33%_8.33%]">
        <div className="absolute inset-[-5.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0019 14.0019">
            <path d={svgPaths.p13ff5d00} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
    panelleft: (
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 13.33">
            <path d={svgPaths.p30c6a0f0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    ),
  };
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      {iconMap[icon]}
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="flex flex-col gap-[8px] h-full w-[256px] shrink-0 border-r border-[var(--neutral-900)]" style={{ background: "rgba(10, 10, 10, 0.6)" }}>
      {/* New chat */}
      <div className="shrink-0 w-full border-b border-[var(--neutral-900)]">
        <div className="px-[16px]">
          <div className="h-[56px] rounded-[8px] w-full">
            <div className="flex items-center size-full">
              <div className="flex gap-[12px] items-center px-[12px] size-full cursor-pointer">
                <NavIcon icon="newchat" color="var(--neutral-50)" />
                <p className="font-['Jost',sans-serif] font-semibold leading-[20px] text-[var(--neutral-50)] text-[15px] whitespace-nowrap">New chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="shrink-0 w-full">
        <div className="flex flex-col items-start pb-[8px] px-[16px] w-full">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#1a1a1a] transition-colors ${item.active ? "bg-[#260e36]" : ""}`}
            >
              <div className="flex items-center size-full">
                <div className="flex gap-[12px] items-center px-[12px] py-[8px] w-full">
                  <NavIcon icon={item.icon} color={item.color} />
                  <p
                    className="font-['Jost',sans-serif] font-semibold leading-[20px] text-[15px] whitespace-nowrap"
                    style={{ color: item.active ? "#d75cdb" : "var(--neutral-50)" }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat history */}
      <div className="flex-1 min-h-0 overflow-hidden px-[16px] pb-[16px]">
        <div className="h-full overflow-y-auto rounded-[8px] px-[4px]" style={{ background: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, var(--neutral-800) 0%, var(--neutral-800) 100%)" }}>
          {chatSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center w-full">
                <div className="flex gap-[12px] items-center pb-[6px] pt-[12px] px-[10px] w-full">
                  <p className="font-['Jost',sans-serif] font-semibold leading-[20px] text-[var(--neutral-50)] text-[15px] whitespace-nowrap">{section.title}</p>
                </div>
              </div>
              {section.chats.map((chat, index) => (
                <div key={`${section.title}-${index}`} className="rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#1a1a1a] transition-colors">
                  <div className="flex items-center size-full">
                    <div className="flex gap-[6px] items-center px-[10px] py-[6px] w-full">
                      <p className="font-['-apple-system','SF_Pro',sans-serif] font-normal leading-[20px] overflow-hidden text-[var(--neutral-400)] text-[14px] text-ellipsis w-full whitespace-nowrap">
                        {chat}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Collapse sidebar */}
      <div className="shrink-0 w-full">
        <div className="flex flex-col items-start pb-[16px] px-[16px] w-full">
          <div className="rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#1a1a1a] transition-colors">
            <div className="flex items-center size-full">
              <div className="flex gap-[12px] items-center px-[12px] py-[8px] w-full">
                <NavIcon icon="panelleft" color="var(--neutral-400)" />
                <p className="font-['Jost',sans-serif] font-semibold leading-[20px] text-[var(--neutral-50)] text-[15px] whitespace-nowrap">Collapse sidebar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
