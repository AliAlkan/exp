import { type ReactNode, type RefObject, useEffect, useRef, useState } from "react";

import svgPaths from "../../imports/svg-i8xslcz4lw";
import userMenuPaths from "../../imports/svg-qg3jwcy34x";

export function IconRail() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isUserMenuOpen) {
      return undefined;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || profileButtonRef.current?.contains(target)) {
        return;
      }
      setIsUserMenuOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isUserMenuOpen]);

  return (
    <div className="bg-[var(--neutral-900)] flex flex-col h-full items-center justify-between pb-[8px] pt-[16px] px-[8px] rounded-[10px] shrink-0 w-[54px] relative overflow-visible">
      {/* Logo */}
      <div className="h-[34px] relative shrink-0 w-[26px]">
        <div className="absolute inset-[6.23%_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 31.8834">
            <path d={svgPaths.p33baf000} fill="#932794" />
          </svg>
        </div>
      </div>

      {/* Icon buttons */}
      <div className="flex flex-col gap-[16px] items-center w-full">
        {/* Messages */}
        <IconButton label="Powerflow">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g clipPath="url(#clip0_rail)">
                <path d={svgPaths.p436a300} fill="var(--neutral-50)" />
                <path d={svgPaths.p4b2da00} fill="var(--neutral-950)" stroke="var(--neutral-950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                <path d={svgPaths.p4b2da00} fill="var(--neutral-50)" />
              </g>
              <defs>
                <clipPath id="clip0_rail"><rect fill="white" height="20" width="20" /></clipPath>
              </defs>
            </svg>
          </div>
        </IconButton>
        {/* Box */}
        <IconButton label="Evolve OS">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[8.34%_12.5%_8.33%_12.5%]">
              <div className="absolute inset-[-2.52%_-2.8%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.84 17.505">
                  <path d={svgPaths.p32978f0} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                </svg>
              </div>
            </div>
          </div>
        </IconButton>
        {/* HeartPulse */}
        <IconButton label="EvoTwin">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[12.5%_8.33%]">
              <div className="absolute inset-[-2.8%_-2.52%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5067 15.84">
                  <path d={svgPaths.p2a4a2980} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                </svg>
              </div>
            </div>
          </div>
        </IconButton>
        {/* GalleryVertical */}
        <IconButton label="News">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[8.33%_12.5%]">
              <div className="absolute inset-[-2.52%_-2.8%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.84 17.5067">
                  <path d={svgPaths.p21a41180} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                </svg>
              </div>
            </div>
          </div>
        </IconButton>
        {/* Folders */}
        <IconButton label="Files">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]">
              <div className="absolute inset-[-2.96%_-2.52%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5067 15.0067">
                  <path d={svgPaths.p32742400} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                </svg>
              </div>
            </div>
          </div>
        </IconButton>
        {/* LayoutGrid */}
        <IconButton label="Dashboard">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[12.5%]">
              <div className="absolute inset-[-2.8%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.84 15.84">
                  <g>
                    <path d={svgPaths.p3429880} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                    <path d={svgPaths.p20456b00} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                    <path d={svgPaths.p34e5d00} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                    <path d={svgPaths.p3aea8000} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </IconButton>
        {/* Settings */}
        <IconButton label="Settings">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[8.33%_12.43%]">
              <div className="absolute inset-[-2.52%_-2.79%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8693 17.5067">
                  <g>
                    <path d={svgPaths.p355a8170} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                    <path d={svgPaths.p207e3900} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </IconButton>
      </div>

      {/* Avatar */}
      <div className="relative shrink-0">
        <button
          ref={profileButtonRef}
          type="button"
          aria-label="User menu"
          aria-controls="user-menu-panel"
          aria-expanded={isUserMenuOpen}
          onClick={() => setIsUserMenuOpen((open) => !open)}
          className="bg-[#d75cdb] flex items-center justify-center rounded-[12px] size-[32px] cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d75cdb] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--neutral-900)]"
        >
          <p className="font-['Jost',sans-serif] font-medium leading-none text-[var(--neutral-900)] text-[12px] text-center whitespace-nowrap">
            AP
          </p>
        </button>

        {isUserMenuOpen ? <UserMenuPanel menuRef={menuRef} /> : null}
      </div>
    </div>
  );
}

function UserMenuPanel({ menuRef }: { menuRef: RefObject<HTMLDivElement> }) {
  return (
    <div
      id="user-menu-panel"
      ref={menuRef}
      className="absolute bottom-0 left-full ml-[12px] z-[80] w-[312px] rounded-[20px] border border-[var(--neutral-800)] bg-[var(--neutral-900)] p-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
    >
      <div className="flex flex-col items-center gap-[12px] px-[16px] py-[16px]">
        <div className="bg-[var(--neutral-800)] flex items-center justify-center rounded-[16.8px] size-[44.8px]">
          <p className="font-['Jost',sans-serif] font-medium leading-[22.4px] text-[var(--neutral-50)] text-[16.8px] text-center whitespace-nowrap">
            AP
          </p>
        </div>
        <p className="font-['Jost',sans-serif] font-medium leading-[24px] text-[var(--neutral-50)] text-[16px] whitespace-nowrap">
          Antonis Polemitis
        </p>
      </div>

      <MenuDivider />
      <MenuAction label="Settings" icon={<MenuIconSettings />} />
      <MenuAction label="Sign out" icon={<MenuIconSignOut />} />
      <MenuDivider />
      <MenuAction label="Appearance: Dark" icon={<MenuIconAppearance />} hasChevron />
      <MenuAction label="Help" icon={<MenuIconHelp />} />
      <MenuAction label="Send feedback" icon={<MenuIconFeedback />} />
      <MenuAction label="Language: English" icon={<MenuIconLanguage />} hasChevron />
    </div>
  );
}

function MenuDivider() {
  return (
    <div className="h-[16px] w-full px-[8px] py-[7px]">
      <div className="h-px w-full bg-[var(--neutral-800)]" />
    </div>
  );
}

function MenuAction({
  label,
  icon,
  hasChevron = false,
}: {
  label: string;
  icon: ReactNode;
  hasChevron?: boolean;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-[6px] px-[8px] py-[4px] text-left transition-colors hover:bg-[#202020] focus:outline-none focus-visible:bg-[#202020]"
    >
      <div className="flex items-center gap-[8px]">
        <div className="flex size-[32px] items-center justify-center rounded-[6px]">{icon}</div>
        <p className="font-['Jost',sans-serif] font-medium leading-[24px] text-[var(--neutral-50)] text-[16px] whitespace-nowrap">
          {label}
        </p>
      </div>
      {hasChevron ? <ChevronIndicator /> : null}
    </button>
  );
}

function ChevronIndicator() {
  return (
    <div className="flex size-[20px] items-center justify-center">
      <svg className="block size-[11px]" fill="none" viewBox="0 0 12 7">
        <path d="M0.6 0.6L5.6 5.6L10.6 0.6" stroke="var(--neutral-500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function MenuIconSettings() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 14 15">
      <path d={userMenuPaths.p2a681270} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" />
      <path d={userMenuPaths.p1e351a00} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIconSignOut() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 13 13">
      <path d={userMenuPaths.p13ea9396} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIconAppearance() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 13 13">
      <path d={userMenuPaths.p2efcd300} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIconHelp() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 15 15">
      <path d={userMenuPaths.pc07c900} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIconFeedback() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 13 13">
      <path d={userMenuPaths.p104add80} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIconLanguage() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 15 15">
      <path d={userMenuPaths.p477e920} stroke="var(--neutral-50)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconButton({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div
      aria-label={label}
      className="group h-[32px] relative rounded-[9.6px] shrink-0 w-full cursor-pointer hover:bg-[var(--neutral-800)] transition-colors"
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="flex flex-col items-center justify-center px-[8.4px] py-[4.8px] size-full">
          {children}
        </div>
      </div>
      <div className="absolute left-full ml-[10px] top-1/2 -translate-y-1/2 z-[60] pointer-events-none rounded-[8px] bg-[var(--neutral-700)] px-[12px] py-[8px] font-['SF_Pro:Regular',sans-serif] font-normal text-[var(--neutral-200)] text-[12px] leading-[16px] whitespace-nowrap opacity-0 -translate-x-[4px] transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0">
        {label}
      </div>
    </div>
  );
}
