import svgPaths from "./svg-dkdiwyw0ne"

function Layer() {
  return (
    <div className="h-[36px] relative shrink-0 w-[100px]" data-name="Layer_1">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 100 36"
      >
        <g clipPath="url(#clip0_1_435)" id="Layer_1">
          <g id="Group">
            <path d={svgPaths.pa09d580} fill="var(--fill-0, #FAFAFA)" id="Vector" />
            <path d={svgPaths.pff1c200} fill="var(--fill-0, #FAFAFA)" id="Vector_2" />
            <path d={svgPaths.p25403680} fill="var(--fill-0, #FAFAFA)" id="Vector_3" />
            <path d={svgPaths.p11ebb200} fill="var(--fill-0, #FAFAFA)" id="Vector_4" />
            <path d={svgPaths.p19652d00} fill="var(--fill-0, #FAFAFA)" id="Vector_5" />
            <path d={svgPaths.p3fca4400} fill="var(--fill-0, #FAFAFA)" id="Vector_6" />
          </g>
          <path d={svgPaths.pa054100} fill="var(--fill-0, #932794)" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_1_435">
            <rect fill="white" height="36" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

function Input() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Search">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <div className="absolute inset-[-5.54%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.33">
                  <path d={svgPaths.p2d6b0180} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-none min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Search...
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  )
}

function InputWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="Input Wrapper">
      <Input />
    </div>
  )
}

function InputBasic() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[32px] items-start relative shrink-0 w-[224px]" data-name="Input / Basic">
      <InputWrapper />
    </div>
  )
}

function Frame19() {
  return (
    <div className="bg-[#932794] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#fafafa] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        AP
      </p>
    </div>
  )
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <InputBasic />
      <Frame19 />
    </div>
  )
}

function Frame23() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0">
      <p className="font-['Jost:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#a3a3a3] text-[15px] whitespace-nowrap">DASHBOARD</p>
    </div>
  )
}

function Frame22() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0">
      <p className="font-['Jost:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#a3a3a3] text-[15px] whitespace-nowrap">APP STORE</p>
    </div>
  )
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-1/2 top-1/2">
      <Frame23 />
      <Frame22 />
    </div>
  )
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Blocks / Sidebar Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / MessageCirclePlus">
              <div className="absolute inset-[12.47%_12.47%_8.33%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-5.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0019 14.0019">
                    <path d={svgPaths.p13ff5d00} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">New chat</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Wrapper">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[12px] px-[16px] relative w-full">
        <Frame24 />
        <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / MessagesSquare">
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <div className="absolute inset-[-4.99%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6633 14.6634">
                      <path d={svgPaths.p1e29fd00} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Chats</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Video">
                <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-8.31%_-4.99%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6633 9.33">
                      <path d={svgPaths.p6c7a680} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Video</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Layers">
                <div className="absolute inset-[8.33%_8.26%_8.37%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-4.99%_-4.98%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6745 14.657">
                      <path d={svgPaths.p23ffe000} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Sequences</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Bot">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-6.23%_-4.99%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6633 11.9967">
                      <path d={svgPaths.p1307e500} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Agents</p>
            </div>
          </div>
        </div>
        <div className="bg-[#260e36] relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / TicketCheck">
                <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-7.13%_-4.99%_-7.12%_-4.99%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6633 10.6633">
                      <path d={svgPaths.p12c92700} id="Vector" stroke="var(--stroke-0, #D75CDB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#d75cdb] text-[15px] whitespace-nowrap">Tickets</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[224px]" data-name="Blocks / Sidebar Item">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / User">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <div className="absolute inset-[-5.54%_-7.12%_-5.54%_-7.13%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6633 13.33">
                  <path d={svgPaths.pa636f0} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Personas</p>
        </div>
        <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ListTree">
                <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-8.31%_-5.54%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 9.33">
                      <path d={svgPaths.p32950e80} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Lists</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / CreditCard">
                <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-7.13%_-4.99%_-7.12%_-4.99%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6633 10.6633">
                      <path d={svgPaths.p29e69600} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Plans</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Database">
                <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-4.99%_-5.54%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 14.6633">
                      <path d={svgPaths.p1cedb000} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Data Sources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BlocksSidebarItem() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[6px] pt-[12px] px-[10px] relative w-full">
          <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Today</p>
        </div>
      </div>
    </div>
  )
}

function ContentWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content Wrapper">
      <BlocksSidebarItem />
    </div>
  )
}

function ItemText({ children }: { children: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {children}
      </p>
    </div>
  )
}

function HistoryItem({ children }: { children: string }) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[6px] relative w-full">
          <ItemText>{children}</ItemText>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content Wrapper">
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Blocks / Sidebar Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center pb-[6px] pt-[12px] px-[10px] relative w-full">
            <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentWrapper1() {
  return (
    <div className="h-full relative shrink-0 w-[210px]" data-name="Content Wrapper">
      <div className="content-stretch flex flex-col items-start pb-[8px] px-[4px] relative size-full">
        <ContentWrapper2 />
        <HistoryItem>Predicting Turnover: Regression Experiment #4</HistoryItem>
        <HistoryItem>Enhancing Academic Writing and Communication</HistoryItem>
        <HistoryItem>Footnotes and Frameworks</HistoryItem>
        <SectionTitle>Yesterday</SectionTitle>
        <HistoryItem>Methodological Frameworks</HistoryItem>
        <HistoryItem>Enhancing Academic Writing and Communication</HistoryItem>
        <HistoryItem>Designing a Rigorous Knowledge Protocol</HistoryItem>
        <HistoryItem>Ethics and Integrity in Academic Inquiry</HistoryItem>
        <HistoryItem>Methodological Frameworks</HistoryItem>
        <HistoryItem>Enhancing Academic Writing and Communication</HistoryItem>
        <HistoryItem>Designing a Rigorous Knowledge Protocol</HistoryItem>
        <HistoryItem>Ethics and Integrity in Academic Inquiry</HistoryItem>
        <HistoryItem>Ethics and Integrity in Academic Inquiry</HistoryItem>
        <SectionTitle>Yesterday</SectionTitle>
        <HistoryItem>Methodological Frameworks</HistoryItem>
        <HistoryItem>Enhancing Academic Writing and Communication</HistoryItem>
        <HistoryItem>Designing a Rigorous Knowledge Protocol</HistoryItem>
        <HistoryItem>Ethics and Integrity in Academic Inquiry</HistoryItem>
        <HistoryItem>Methodological Frameworks</HistoryItem>
      </div>
    </div>
  )
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#171717] col-1 h-[412px] ml-0 mt-0 relative row-1 w-[14px]">
        <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
      </div>
      <div className="bg-[#404040] col-1 h-[252.773px] ml-[3px] mt-[5.97px] rounded-[4px] row-1 w-[8px]" />
    </div>
  )
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative rounded-[12px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
      <ContentWrapper1 />
      <Group />
    </div>
  )
}

function Frame18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col items-start pb-[6px] px-[16px] relative size-full">
        <Frame21 />
      </div>
    </div>
  )
}

function ContentWrapper5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Wrapper">
      <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative w-full">
        <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / PanelLeft">
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5.54%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 13.33">
                      <path d={svgPaths.p30c6a0f0} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Collapse sidebar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
      <Frame18 />
      <ContentWrapper5 />
    </div>
  )
}

function BlocksSidebarAssistant() {
  return (
    <div className="absolute bg-[rgba(10,10,10,0.6)] content-stretch flex flex-col gap-[8px] h-[calc(100%-60px)] items-start left-0 top-[60px] w-[256px]" data-name="Blocks / Sidebar / Assistant">
      <div aria-hidden="true" className="absolute border-[#171717] border-r border-solid inset-0 pointer-events-none" />
      <ContentWrapper />
      <Frame25 />
    </div>
  )
}

export default function AgentsTableB() {
  return (
    <div className="relative size-full" data-name="Agents _Table _B">
      <div className="absolute bg-neutral-950 content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 w-full" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
        <Layer />
        <Frame20 />
        <Frame />
      </div>
      <BlocksSidebarAssistant />
    </div>
  )
}
