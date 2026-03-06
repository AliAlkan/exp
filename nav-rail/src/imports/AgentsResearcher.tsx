import { type CSSProperties, useLayoutEffect, useRef, useState } from "react";

import eclipseFullUrl from "../assets/eclipse-full.svg";
import svgPaths from "./svg-2wacbqcxt8";

const outlinedCommandTriggerStyle = {
  "--outlined-command-trigger-color": "#262626",
} as CSSProperties;

function Layer() {
  return (
    <div className="h-[36px] relative shrink-0 w-[100px]" data-name="Layer_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 36">
        <g clipPath="url(#clip0_1_1111)" id="Layer_1">
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
          <clipPath id="clip0_1_1111">
            <rect fill="white" height="36" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
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
  );
}

function InputWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="Input Wrapper">
      <Input />
    </div>
  );
}

function InputBasic() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[32px] items-start relative shrink-0 w-[224px]" data-name="Input / Basic">
      <InputWrapper />
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#932794] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#fafafa] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        AP
      </p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <InputBasic />
      <Frame98 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#a3a3a3] text-[15px] whitespace-nowrap">DASHBOARD</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#a3a3a3] text-[15px] whitespace-nowrap">APP STORE</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-1/2 top-1/2">
      <Frame102 />
      <Frame101 />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Wrapper">
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <div className="h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / MessageCirclePlus">
                <div className="absolute inset-[12.47%_12.47%_8.33%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-5.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0019 14.0019">
                      <path d={svgPaths.p13ff5d00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">New chat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ContentWrapper />
    </div>
  );
}

function ContentWrapper1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Wrapper">
      <div className="content-stretch flex flex-col items-start pb-[8px] px-[16px] relative w-full">
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
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Chats</p>
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
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Quick Agents</p>
            </div>
          </div>
        </div>
        <div className="bg-[#260e36] relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / GitPullRequest">
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5.54%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 13.33">
                      <path d={svgPaths.pe6aad80} id="Vector" stroke="var(--stroke-0, #D75CDB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#d75cdb] text-[15px] whitespace-nowrap">Agents</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / LibraryBig">
                <div className="absolute inset-[12.5%_14.74%_12.5%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5.54%_-5.73%_-5.54%_-5.71%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9737 13.33">
                      <path d={svgPaths.p3239ad80} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Knowledge</p>
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
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Personas</p>
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
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Lists</p>
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
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Plans</p>
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
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Data Sources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlocksSidebarItem() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[6px] pt-[12px] px-[10px] relative w-full">
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Today</p>
        </div>
      </div>
    </div>
  );
}

function ContentWrapper3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content Wrapper">
      <BlocksSidebarItem />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Predicting Turnover: Regression Experiment #4
      </p>
    </div>
  );
}

function BlocksSidebarItem1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative w-full">
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enhancing Academic Writing and Communication
      </p>
    </div>
  );
}

function BlocksSidebarItem2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame69 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Footnotes and Frameworks
      </p>
    </div>
  );
}

function BlocksSidebarItem3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame70 />
          </div>
        </div>
      </div>
    </div>
  );
}

function BlocksSidebarItem4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[6px] pt-[12px] px-[10px] relative w-full">
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Yesterday</p>
        </div>
      </div>
    </div>
  );
}

function ContentWrapper4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content Wrapper">
      <BlocksSidebarItem4 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Methodological Frameworks
      </p>
    </div>
  );
}

function BlocksSidebarItem5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[6px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame71 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enhancing Academic Writing and Communication
      </p>
    </div>
  );
}

function BlocksSidebarItem6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[6px] relative w-full">
          <Frame72 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Designing a Rigorous Knowledge Protocol
      </p>
    </div>
  );
}

function BlocksSidebarItem7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[6px] relative w-full">
          <Frame73 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ethics and Integrity in Academic Inquiry
      </p>
    </div>
  );
}

function BlocksSidebarItem8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative w-full">
          <Frame74 />
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Methodological Frameworks
      </p>
    </div>
  );
}

function BlocksSidebarItem9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[6px] relative w-full">
          <Frame75 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enhancing Academic Writing and Communication
      </p>
    </div>
  );
}

function BlocksSidebarItem10() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[6px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame76 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Designing a Rigorous Knowledge Protocol
      </p>
    </div>
  );
}

function BlocksSidebarItem11() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[6px] relative w-full">
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ethics and Integrity in Academic Inquiry
      </p>
    </div>
  );
}

function BlocksSidebarItem12() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[6px] relative w-full">
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ethics and Integrity in Academic Inquiry
      </p>
    </div>
  );
}

function BlocksSidebarItem13() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Blocks / Sidebar Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[6px] relative w-full">
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function ContentWrapper2() {
  return (
    <div className="h-full relative shrink-0 w-[210px]" data-name="Content Wrapper">
      <div className="content-stretch flex flex-col items-start pb-[8px] px-[4px] relative size-full">
        <ContentWrapper3 />
        <BlocksSidebarItem1 />
        <BlocksSidebarItem2 />
        <BlocksSidebarItem3 />
        <ContentWrapper4 />
        <BlocksSidebarItem5 />
        <BlocksSidebarItem6 />
        <BlocksSidebarItem7 />
        <BlocksSidebarItem8 />
        <BlocksSidebarItem9 />
        <BlocksSidebarItem10 />
        <BlocksSidebarItem11 />
        <BlocksSidebarItem12 />
        <BlocksSidebarItem13 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#171717] col-1 h-[414px] ml-0 mt-0 relative row-1 w-[14px]">
        <div aria-hidden="true" className="absolute border-[#262626] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
      </div>
      <div className="bg-[#404040] col-1 h-[254px] ml-[3px] mt-[6px] rounded-[4px] row-1 w-[8px]" />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative rounded-[8px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
      <ContentWrapper2 />
      <Group />
    </div>
  );
}

function Frame80() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative size-full">
        <Frame100 />
      </div>
    </div>
  );
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
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[15px] whitespace-nowrap">Collapse sidebar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlocksSidebarAssistant() {
  return (
    <div className="absolute bottom-0 bg-[rgba(10,10,10,0.6)] content-stretch flex flex-col gap-[8px] items-start left-0 top-[60px] w-[256px]" data-name="Blocks / Sidebar / Assistant">
      <div aria-hidden="true" className="absolute border-[#171717] border-r border-solid inset-0 pointer-events-none" />
      <Frame81 />
      <ContentWrapper1 />
      <Frame80 />
      <ContentWrapper5 />
    </div>
  );
}

function Frame108() {
  return <div className="absolute h-[258px] left-[256px] right-[14px] top-[116px]" />;
}

function Gradient() {
  return (
    <div
      className="agents-background-gradient absolute left-[-315px] size-[820px] top-[-770px] pointer-events-none select-none"
      data-name="Gradient"
    >
      <div className="absolute inset-[-24.39%]" style={{ transform: "rotate(-30deg)" }}>
        <img alt="" className="block max-w-none size-full" src={eclipseFullUrl} />
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f0f0f] h-[384px] items-center overflow-clip pb-[40px] pt-[56px] relative rounded-[16px] shrink-0 to-[#0a0a0a] w-full">
      <Gradient />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[8px] right-0 top-0" data-name="Background">
      <Frame109 />
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

function Frame2({ prompt, onPromptChange }: { prompt: string; onPromptChange: (value: string) => void }) {
  return (
    <div className="min-h-[114px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[20px] py-[14px] relative w-full">
        <AutoResizeTextarea onChange={onPromptChange} value={prompt} />
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[60px] shrink-0 size-[34px]">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon / Microscope">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-3.67%_-4.07%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6 16.1">
              <path d={svgPaths.p312ace00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame112 />
      <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        EvoResearcher
      </p>
    </div>
  );
}

function CommandTrigger() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip pl-[3px] pr-[14px] relative rounded-[9999px] shrink-0" data-name="_CommandTrigger" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.2) 0%, rgba(10, 10, 10, 0.2) 100%), linear-gradient(90deg, rgb(64, 64, 64) 0%, rgb(64, 64, 64) 100%)" }}>
      <Frame111 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ChevronDown">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-13.75%_-6.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
              <path d={svgPaths.p36d8fd00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        GPT 5
      </p>
    </div>
  );
}

function CommandTrigger1() {
  return (
    <div className="outlined-command-trigger h-[36px] relative rounded-[12px] shrink-0" data-name="_CommandTrigger" style={outlinedCommandTriggerStyle}>
      <div className="outlined-command-trigger__content content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
        <Frame106 />
      </div>
      <div aria-hidden="true" className="outlined-command-trigger__border absolute border border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CommandTrigger2() {
  return (
    <div className="outlined-command-trigger relative rounded-[12px] shrink-0" data-name="_CommandTrigger" style={outlinedCommandTriggerStyle}>
      <div className="outlined-command-trigger__content content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit]">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Plus">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <div className="absolute inset-[-5.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4333 10.4333">
                <path d={svgPaths.p3dd52ee0} id="Vector" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Upload
        </p>
      </div>
      <div aria-hidden="true" className="outlined-command-trigger__border absolute border border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CommandTrigger3() {
  return (
    <div className="outlined-command-trigger relative rounded-[12px] shrink-0" data-name="_CommandTrigger" style={outlinedCommandTriggerStyle}>
      <div className="outlined-command-trigger__content content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit]">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Library">
          <div className="absolute inset-[16.67%]" data-name="Vector">
            <div className="absolute inset-[-5.16%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7668 11.7668">
                <path d={svgPaths.p2bc84680} id="Vector" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          5
        </p>
      </div>
      <div aria-hidden="true" className="outlined-command-trigger__border absolute border border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CommandTrigger4() {
  return (
    <div className="outlined-command-trigger relative rounded-[12px] shrink-0" data-name="_CommandTrigger" style={outlinedCommandTriggerStyle}>
      <div className="outlined-command-trigger__content content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit]">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Repeat">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-4.13%_-4.58%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 14.4333">
                <path d={svgPaths.p1fca9800} id="Vector" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          12
        </p>
      </div>
      <div aria-hidden="true" className="outlined-command-trigger__border absolute border border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CommandTrigger5() {
  return (
    <div className="outlined-command-trigger relative rounded-[12px] shrink-0" data-name="_CommandTrigger" style={outlinedCommandTriggerStyle}>
      <div className="outlined-command-trigger__content content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit]">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / EllipsisVertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Vector">
            <div className="absolute inset-[-5.16%_-41.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43333 11.7667">
                <g id="Vector">
                  <path d={svgPaths.pbb62180} stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                  <path d={svgPaths.pb439b80} stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                  <path d={svgPaths.p1c7be500} stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#d4d4d4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          More
        </p>
      </div>
      <div aria-hidden="true" className="outlined-command-trigger__border absolute border border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <CommandTrigger />
      <CommandTrigger1 />
      <CommandTrigger2 />
      <CommandTrigger3 />
      <CommandTrigger4 />
      <CommandTrigger5 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame107 />
    </div>
  );
}

function Frame104({ isActive }: { isActive: boolean }) {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <div
        className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[20px] py-[8px] relative rounded-[9999px] shrink-0 transition-[background-color] duration-200"
        data-name="Button"
        style={{
          backgroundColor: isActive ? "#932794" : "#262626",
          backgroundImage: "none",
        }}
      >
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Play">
          <div className="absolute bottom-[12.5%] left-1/4 right-[16.67%] top-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.54%_-7.12%_-5.54%_-7.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6633 13.33">
                <path d={svgPaths.p1ab67b80} id="Vector" stroke={isActive ? "#FAFAFA" : "#A3A3A3"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap transition-colors duration-200"
          style={{ color: isActive ? "#fafafa" : "#a3a3a3", fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[20px]">Start a run</p>
        </div>
      </div>
    </div>
  );
}

function Footer({ isRunReady }: { isRunReady: boolean }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] px-[20px] relative w-full">
          <Frame105 />
          <div className="flex flex-row items-center self-stretch">
            <Frame104 isActive={isRunReady} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  const [prompt, setPrompt] = useState("");
  const isRunReady = prompt.trim().length > 0;

  return (
    <div className="agents-composer group bg-[#171717] content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-[896px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px] z-10">
        <div className="absolute border border-[#262626] border-solid inset-0 rounded-[20px] transition-colors duration-200 group-hover:border-[#323232] group-focus-within:border-[#323232]" />
      </div>
      <Frame2 onPromptChange={setPrompt} prompt={prompt} />
      <Footer isRunReady={isRunReady} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0 w-[896px]">
      <Frame1 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center pb-[40px] pt-[64px] relative shrink-0 w-full">
      <p className="font-semibold leading-[44px] min-w-full relative shrink-0 text-[#e5e5e5] text-[36px] text-center w-[min-content] whitespace-nowrap">Hand this off to an agent</p>
      <Frame3 />
    </div>
  );
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

function Input1() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Input">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit] size-full">
        <IconSearch />
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-none overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Search
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CommandTrigger6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="_CommandTrigger" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
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

function CommandTrigger7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="_CommandTrigger" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
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

function CommandTrigger8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 w-[144px]" data-name="_CommandTrigger" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%), linear-gradient(90deg, rgb(38, 38, 38) 0%, rgb(38, 38, 38) 100%)" }}>
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
        Recently created
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

function TabsTrigger() {
  return (
    <div className="h-full relative rounded-[6px] shrink-0 w-[28px]" data-name="_Tabs / Trigger">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[6px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / LayoutGrid">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <div className="absolute inset-[-4.58%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 13.1">
                  <g id="Vector">
                    <path d={svgPaths.p13ddeb00} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                    <path d={svgPaths.p21712180} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                    <path d={svgPaths.p3751c080} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                    <path d={svgPaths.p1181c4f0} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabsTrigger1() {
  return (
    <div className="bg-[#0a0a0a] h-full relative rounded-[6px] shrink-0 w-[28px]" data-name="_Tabs / Trigger">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[6px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Rows3">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <div className="absolute inset-[-4.58%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 13.1">
                  <path d={svgPaths.p10c72d00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[#262626] content-stretch flex h-[36px] items-center p-[4px] relative rounded-[8px] shrink-0" data-name="Tabs">
      <TabsTrigger />
      <TabsTrigger1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <CommandTrigger6 />
      <CommandTrigger7 />
      <CommandTrigger8 />
      <Tabs />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Input1 />
      <Frame4 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <Checkbox />
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none overflow-hidden">Name</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[192px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none overflow-hidden">Agent</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[140px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none overflow-hidden">Created</p>
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

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[190px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none overflow-hidden">Status</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[52px] py-[12px] relative w-full">
          <Frame25 />
          <Frame27 />
          <Frame23 />
          <Frame21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden">Methodological Frameworks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <Checkbox1 />
      <Frame82 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[26px] items-center justify-center max-w-[192px] overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon / GitPullRequest">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p17438340} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-hidden">Researcher</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]">
      <Frame86 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">6 Jul 2024</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Loader">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-4.13%_-4.12%_-4.12%_-4.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4333 14.4333">
              <path d={svgPaths.p29f6fb80} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">Thread initialization</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[190px]">
      <Frame5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <Frame12 />
          <Frame22 />
          <Frame17 />
          <Frame24 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden">Identifying Gaps in the Existing Literature</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <Checkbox2 />
      <Frame83 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[26px] items-center justify-center max-w-[192px] overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon / GitPullRequest">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p17438340} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-hidden">Researcher</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]">
      <Frame87 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">6 Jul 2024</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Loader">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-4.13%_-4.12%_-4.12%_-4.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4333 14.4333">
              <path d={svgPaths.p29f6fb80} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">Section 4 writing</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[190px]">
      <Frame6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <Frame13 />
          <Frame26 />
          <Frame18 />
          <Frame28 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame84() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden">Predicting Turnover: Regression Experiment #4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <Checkbox3 />
      <Frame84 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[26px] items-center justify-center max-w-[192px] overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon / GitPullRequest">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p17438340} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-hidden">Researcher</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]">
      <Frame88 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">6 Jul 2024</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Loader">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-4.13%_-4.12%_-4.12%_-4.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4333 14.4333">
              <path d={svgPaths.p29f6fb80} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">{`Assembly & export`}</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[190px]">
      <Frame7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <Frame15 />
          <Frame30 />
          <Frame31 />
          <Frame32 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden">{`Data Cleaning & Feature Engineering Brainstorm`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <Checkbox4 />
      <Frame85 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[26px] items-center justify-center max-w-[192px] overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon / GitPullRequest">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p17438340} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-hidden">Researcher</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]">
      <Frame89 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">6 Jul 2024</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#173b29] border border-[#173b29] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Check">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.5%_-5.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
              <path d={svgPaths.p27b1d790} id="Vector" stroke="var(--stroke-0, #4ADE80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#4ade80] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">Complete</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[190px]">
      <Frame8 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
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
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <Frame33 />
          <Frame34 />
          <Frame36 />
          <Frame37 />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden">{`Data Cleaning & Feature Engineering Brainstorm`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <Checkbox5 />
      <Frame90 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[26px] items-center justify-center max-w-[192px] overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon / GitPullRequest">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p17438340} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-hidden">Researcher</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]">
      <Frame91 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">6 Jul 2024</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#173b29] border border-[#173b29] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Check">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.5%_-5.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
              <path d={svgPaths.p27b1d790} id="Vector" stroke="var(--stroke-0, #4ADE80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#4ade80] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">Complete</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[190px]">
      <Frame9 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <Frame40 />
          <Frame41 />
          <Frame42 />
          <Frame43 />
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame92() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden">Methodological Frameworks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <Checkbox6 />
      <Frame92 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[26px] items-center justify-center max-w-[192px] overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon / GitPullRequest">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p17438340} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-hidden">Researcher</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]">
      <Frame93 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">6 Jul 2024</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#173b29] border border-[#173b29] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-hidden p-[8px] relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Check">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.5%_-5.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
              <path d={svgPaths.p27b1d790} id="Vector" stroke="var(--stroke-0, #4ADE80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#4ade80] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">Complete</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[190px]">
      <Frame10 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <Frame46 />
          <Frame47 />
          <Frame51 />
          <Frame52 />
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame94() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden">Developing Protocols for Scoping, Systematic, and Realist Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <Checkbox7 />
      <Frame94 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[26px] items-center justify-center max-w-[192px] overflow-hidden p-[8px] relative rounded-[6px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon / GitPullRequest">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p17438340} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-hidden">Researcher</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]">
      <Frame95 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">6 Jul 2024</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#173b29] border border-[#173b29] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-hidden p-[8px] relative rounded-[8px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Check">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.5%_-5.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
              <path d={svgPaths.p27b1d790} id="Vector" stroke="var(--stroke-0, #4ADE80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#4ade80] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">Complete</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[190px]">
      <Frame59 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <Frame55 />
          <Frame56 />
          <Frame57 />
          <Frame58 />
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame96() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden">Designing a Rigorous Knowledge Protocol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <Checkbox8 />
      <Frame96 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#1f1f1f] border border-[#1f1f1f] content-stretch flex gap-[8px] h-[26px] items-center justify-center max-w-[192px] overflow-hidden p-[8px] relative rounded-[6px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon / GitPullRequest">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p17438340} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-hidden">Researcher</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]">
      <Frame97 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">6 Jul 2024</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#173b29] border border-[#173b29] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-hidden p-[8px] relative rounded-[8px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Check">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.5%_-5.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7667 8.43333">
              <path d={svgPaths.p27b1d790} id="Vector" stroke="var(--stroke-0, #4ADE80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#4ade80] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden">Complete</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[190px]">
      <Frame66 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Ellipsis">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-49.88%_-6.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9967 2.66333">
              <g id="Vector">
                <path d={svgPaths.p21d13c00} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p10de4900} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p1fd94400} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <Frame62 />
          <Frame63 />
          <Frame64 />
          <Frame65 />
          <Frame67 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame50 />
        <Frame35 />
        <Frame49 />
        <Frame29 />
        <Frame48 />
        <Frame39 />
        <Frame45 />
        <Frame54 />
        <Frame61 />
        <Frame35 />
        <Frame49 />
        <Frame29 />
        <Frame48 />
        <Frame39 />
        <Frame45 />
        <Frame54 />
        <Frame61 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#171717] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame103() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[32px] py-[28px] relative w-full">
        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#a3a3a3] text-[18px] whitespace-nowrap">
          <p className="leading-none">Recents</p>
        </div>
        <Frame20 />
        <Frame19 />
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="agents-main-scroll absolute bottom-0 content-stretch flex flex-col items-start left-[256px] overflow-y-auto right-0 top-[60px]">
      <Background />
      <Frame110 />
      <Frame103 />
    </div>
  );
}

export default function AgentsResearcher() {
  return (
    <div className="bg-[#0a0a0a] h-full overflow-hidden relative w-full" data-name="Agents _Researcher">
      <div className="absolute bg-[rgba(10,10,10,0.6)] content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] right-[14px] top-0" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#171717] border-b border-solid inset-0 pointer-events-none" />
        <Layer />
        <Frame99 />
        <Frame />
      </div>
      <BlocksSidebarAssistant />
      <Frame108 />
      <Frame113 />
    </div>
  );
}
