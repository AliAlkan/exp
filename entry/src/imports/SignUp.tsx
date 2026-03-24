import { useRef, useState } from "react";
import { EyeOff } from "lucide-react";
import svgPaths from "./svg-4w4zrs41l7";
import evoBackground from "../assets/evo-bg.png";

function Layer() {
  return (
    <div className="h-[43.526px] relative shrink-0 w-[120px]" data-name="Layer_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 43.526">
        <g clipPath="url(#clip0_1_499)" id="Layer_1">
          <g id="Group">
            <path d={svgPaths.p24935800} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2e273b00} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p38703340} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.pf4a2480} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p33806770} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.pe2e0600} fill="var(--fill-0, white)" id="Vector_6" />
          </g>
          <path d={svgPaths.p269f9a00} fill="var(--fill-0, #932794)" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_1_499">
            <rect fill="white" height="43.526" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute left-0 top-0 content-stretch flex h-[96px] items-center px-[36px] w-full" data-name="Header">
      <Layer />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="hidden leading-[0] lg:block relative shrink-0 self-stretch w-[clamp(320px,calc(100vw-892px),548px)]" data-name="Mask group">
      <div className="absolute inset-0" data-name="Evolve Background 33 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={evoBackground} />
      </div>
      <Header />
    </div>
  );
}

function Frame() {
  const navigateToSignIn = () => {
    window.location.assign("/");
  };

  return (
    <div className="bg-[#262626] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="Icon / ChevronLeft" type="button" onClick={navigateToSignIn}>
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-3.83%_-7.66%_-3.83%_-15.32%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.37886 12.9192">
              <path d={svgPaths.p398fb800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <button className="block cursor-pointer lg:hidden overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Languages" type="button">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d="M3.33398 4.16699H11.6673" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            <path d="M7.5 4.16699V5.83366" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            <path d="M2.5 7.5H12.5" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            <path d="M4.16699 13.3333C6.66699 11.6667 8.33366 9.16667 9.16699 6.66667" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            <path d="M6.66699 10.833C7.66699 11.9997 8.83366 12.9997 10.167 13.833" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            <path d="M13.333 15.8333L15.833 10.8333L18.333 15.8333" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            <path d="M14.416 13.667H17.2493" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </div>
      </button>
      <p className="hidden lg:block font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        English
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ChevronDown">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-13.75%_-6.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
              <path d={svgPaths.p36d8fd00} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function EyeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Eye">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.14%_-3.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8667 12.8667">
            <g id="Vector">
              <path d={svgPaths.p1130d500} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              <path d={svgPaths.p1082d000} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Header">
      <div className="lg:hidden content-stretch flex items-center justify-between relative size-full">
        <div className="shrink-0">
          <Frame />
        </div>
        <div className="content-stretch flex items-center justify-center flex-[1_0_0] px-4">
          <Layer />
        </div>
        <div className="shrink-0">
          <Frame11 />
        </div>
      </div>
      <div className="hidden lg:flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[36px] relative size-full">
          <div>
            <Frame />
          </div>
          <div>
            <Frame11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 w-full" data-name="div">
      <div className="flex flex-col font-['Jost',sans-serif] font-[600] justify-center mt-8 lg:mt-0 relative shrink-0 text-[#e5e5e5] text-[36px] whitespace-nowrap">
        <p className="leading-none">Let’s create an account</p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#a3a3a3] text-[16px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Move faster. Think bigger. Evolve.</p>
      </div>
    </div>
  );
}

type CommandTriggerProps = {
  id: string;
  type?: "text" | "email";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
};

function CommandTrigger({ id, type = "text", placeholder, value, onChange, autoComplete }: CommandTriggerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="_CommandTrigger">
      <div
        className="border border-[#404040] content-stretch cursor-text flex items-center overflow-hidden px-[16px] py-[18px] rounded-[inherit] size-full hover:border-[#737373] focus-within:border-[#737373]"
        onClick={() => inputRef.current?.focus()}
      >
        <input
          id={id}
          autoComplete={autoComplete}
          className="bg-transparent border-0 flex-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-none m-0 min-w-0 p-0 placeholder:text-[#737373] text-[#e5e5e5] text-[16px] focus:outline-none"
          ref={inputRef}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}

type Div1Props = {
  value: string;
  onChange: (value: string) => void;
};

function Div1({ value, onChange }: Div1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div">
      <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Full name</p>
      </div>
      <CommandTrigger id="sign-up-full-name" autoComplete="name" placeholder="Enter your name" value={value} onChange={onChange} />
    </div>
  );
}

type Div2Props = {
  value: string;
  onChange: (value: string) => void;
};

function Div2({ value, onChange }: Div2Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div">
      <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Email address</p>
      </div>
      <CommandTrigger
        id="sign-up-email"
        autoComplete="email"
        placeholder="Enter your email address"
        type="email"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

type PasswordCommandTriggerProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  isPasswordVisible: boolean;
  onTogglePasswordVisibility: () => void;
  autoComplete?: string;
  placeholder: string;
  hasError?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
};

type PasswordChecks = {
  hasMinLength: boolean;
  hasMixedCase: boolean;
  hasNumber: boolean;
  hasSpecialCharacter: boolean;
};

function CommandTrigger2({
  id,
  value,
  onChange,
  isPasswordVisible,
  onTogglePasswordVisibility,
  autoComplete,
  placeholder,
  hasError = false,
  onFocus,
  onBlur,
}: PasswordCommandTriggerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="_CommandTrigger">
      <div
        className={`border content-stretch cursor-text flex items-center justify-between overflow-hidden px-[16px] py-[18px] rounded-[inherit] size-full ${
          hasError ? "border-[#ef4444] focus-within:border-[#ef4444]" : "border-[#404040] hover:border-[#737373] focus-within:border-[#737373]"
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        <input
          id={id}
          autoComplete={autoComplete}
          className="bg-transparent border-0 flex-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-none m-0 min-w-0 p-0 placeholder:text-[#737373] text-[#e5e5e5] text-[16px] focus:outline-none"
          ref={inputRef}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          type={isPasswordVisible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <button
          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          className="cursor-pointer shrink-0"
          type="button"
          onClick={onTogglePasswordVisibility}
        >
          {isPasswordVisible ? <EyeOff className="size-[20px] text-[#a3a3a3]" strokeWidth={1.8} /> : <EyeIcon />}
        </button>
      </div>
    </div>
  );
}

type Div3Props = {
  value: string;
  onChange: (value: string) => void;
  isPasswordVisible: boolean;
  onTogglePasswordVisibility: () => void;
  hasError: boolean;
  onFocusPassword: () => void;
  onBlurPassword: () => void;
};

function Div3({ value, onChange, isPasswordVisible, onTogglePasswordVisibility, hasError, onFocusPassword, onBlurPassword }: Div3Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div">
      <div
        className={`flex flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap ${
          hasError ? "text-[#ef4444]" : "text-[#a3a3a3]"
        }`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px]">Password</p>
      </div>
      <CommandTrigger2
        id="sign-up-password"
        autoComplete="new-password"
        hasError={hasError}
        isPasswordVisible={isPasswordVisible}
        onBlur={onBlurPassword}
        onFocus={onFocusPassword}
        placeholder="Create password"
        value={value}
        onChange={onChange}
        onTogglePasswordVisibility={onTogglePasswordVisibility}
      />
    </div>
  );
}

function CommandTrigger3(props: PasswordCommandTriggerProps) {
  return <CommandTrigger2 {...props} />;
}

type Div8Props = {
  value: string;
  onChange: (value: string) => void;
  isPasswordVisible: boolean;
  onTogglePasswordVisibility: () => void;
  hasError: boolean;
  onFocusConfirmPassword: () => void;
  onBlurConfirmPassword: () => void;
};

function Div8({
  value,
  onChange,
  isPasswordVisible,
  onTogglePasswordVisibility,
  hasError,
  onFocusConfirmPassword,
  onBlurConfirmPassword,
}: Div8Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div">
      <div
        className={`flex flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap ${
          hasError ? "text-[#ef4444]" : "text-[#a3a3a3]"
        }`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px]">Confirm password</p>
      </div>
      <CommandTrigger3
        id="sign-up-confirm-password"
        autoComplete="new-password"
        hasError={hasError}
        isPasswordVisible={isPasswordVisible}
        onBlur={onBlurConfirmPassword}
        onFocus={onFocusConfirmPassword}
        placeholder="Confirm password"
        value={value}
        onChange={onChange}
        onTogglePasswordVisibility={onTogglePasswordVisibility}
      />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#525252] relative rounded-[999px] shrink-0 size-[20px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Check">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type PasswordRuleProps = {
  met: boolean;
};

function Div4({ met }: PasswordRuleProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        {met ? <Frame6 /> : <Frame4 />}
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Use 10 characters and more</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#193b29] relative rounded-[999px] shrink-0 size-[20px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Check">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #4ADE80)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div5({ met }: PasswordRuleProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        {met ? <Frame6 /> : <Frame4 />}
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Mix uppercase and lowercase letters</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#193b29] relative rounded-[999px] shrink-0 size-[20px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Check">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #4ADE80)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div6({ met }: PasswordRuleProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        {met ? <Frame7 /> : <Frame4 />}
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">1 number (0-9)</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#193b29] relative rounded-[999px] shrink-0 size-[20px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Check">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #4ADE80)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div7({ met }: PasswordRuleProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        {met ? <Frame8 /> : <Frame4 />}
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">{`1 special character (-@#\S%^&*_-+=„?/)`}</p>
        </div>
      </div>
    </div>
  );
}

type ContainerProps = {
  passwordChecks: PasswordChecks;
};

function Container({ passwordChecks }: ContainerProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Div4 met={passwordChecks.hasMinLength} />
      <Div5 met={passwordChecks.hasMixedCase} />
      <Div6 met={passwordChecks.hasNumber} />
      <Div7 met={passwordChecks.hasSpecialCharacter} />
    </div>
  );
}

function Frame5({ passwordChecks }: ContainerProps) {
  return (
    <div className="bg-[#262626] relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Container passwordChecks={passwordChecks} />
      </div>
    </div>
  );
}

type Frame9Props = {
  password: string;
  onPasswordChange: (value: string) => void;
  isPasswordVisible: boolean;
  onTogglePasswordVisibility: () => void;
  showPasswordCriteria: boolean;
  passwordChecks: PasswordChecks;
  onFocusPassword: () => void;
  onBlurPassword: () => void;
};

function Frame9({
  password,
  onPasswordChange,
  isPasswordVisible,
  onTogglePasswordVisibility,
  showPasswordCriteria,
  passwordChecks,
  onFocusPassword,
  onBlurPassword,
}: Frame9Props) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Div3
        hasError={showPasswordCriteria}
        isPasswordVisible={isPasswordVisible}
        onBlurPassword={onBlurPassword}
        onFocusPassword={onFocusPassword}
        value={password}
        onChange={onPasswordChange}
        onTogglePasswordVisibility={onTogglePasswordVisibility}
      />
      {showPasswordCriteria && <Frame5 passwordChecks={passwordChecks} />}
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#525252] relative rounded-[999px] shrink-0 size-[20px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Check">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Frame19 />
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Must match your password above</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Div9 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#262626] relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

type Frame10Props = {
  confirmPassword: string;
  onConfirmPasswordChange: (value: string) => void;
  isConfirmPasswordVisible: boolean;
  onToggleConfirmPasswordVisibility: () => void;
  showConfirmCriteria: boolean;
  onFocusConfirmPassword: () => void;
  onBlurConfirmPassword: () => void;
};

function Frame10({
  confirmPassword,
  onConfirmPasswordChange,
  isConfirmPasswordVisible,
  onToggleConfirmPasswordVisibility,
  showConfirmCriteria,
  onFocusConfirmPassword,
  onBlurConfirmPassword,
}: Frame10Props) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Div8
        hasError={showConfirmCriteria}
        isPasswordVisible={isConfirmPasswordVisible}
        onBlurConfirmPassword={onBlurConfirmPassword}
        onFocusConfirmPassword={onFocusConfirmPassword}
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        onTogglePasswordVisibility={onToggleConfirmPasswordVisibility}
      />
      {showConfirmCriteria && <Frame15 />}
    </div>
  );
}

function Frame3() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [hasBlurredPassword, setHasBlurredPassword] = useState(false);
  const [hasBlurredConfirmPassword, setHasBlurredConfirmPassword] = useState(false);
  const passwordChecks: PasswordChecks = {
    hasMinLength: password.length >= 10,
    hasMixedCase: /[a-z]/.test(password) && /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialCharacter: /[^a-zA-Z0-9]/.test(password),
  };
  const isPasswordValid = Object.values(passwordChecks).every(Boolean);
  const showPasswordCriteria = hasBlurredPassword && password.length > 0 && !isPasswordValid;
  const showConfirmCriteria = hasBlurredConfirmPassword && confirmPassword.length > 0 && confirmPassword !== password;

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Div1 value={fullName} onChange={setFullName} />
      <Div2 value={email} onChange={setEmail} />
      <Frame9
        isPasswordVisible={isPasswordVisible}
        onBlurPassword={() => {
          setHasBlurredPassword(true);
        }}
        onFocusPassword={() => {}}
        passwordChecks={passwordChecks}
        password={password}
        onPasswordChange={setPassword}
        onTogglePasswordVisibility={() => setIsPasswordVisible((visible) => !visible)}
        showPasswordCriteria={showPasswordCriteria}
      />
      <Frame10
        confirmPassword={confirmPassword}
        isConfirmPasswordVisible={isConfirmPasswordVisible}
        onBlurConfirmPassword={() => setHasBlurredConfirmPassword(true)}
        onFocusConfirmPassword={() => {}}
        onConfirmPasswordChange={setConfirmPassword}
        onToggleConfirmPasswordVisibility={() => setIsConfirmPasswordVisible((visible) => !visible)}
        showConfirmCriteria={showConfirmCriteria}
      />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Div />
      <Frame2 />
      <button className="bg-[#932794] hover:bg-[#A22BA3] transition-colors cursor-pointer h-[48px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[8px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[20px]">Sign up</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center mx-auto pb-[72px] relative shrink-0 w-[min(520px,calc(100%-40px))]">
      <Frame16 />
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a3a3a3] text-[0px] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          <span className="leading-[20px]">{`By continuing, you agree to our `}</span>
          <span className="decoration-solid font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
            Terms of Service
          </span>
        </p>
        <p>
          <span className="leading-[20px]">{`and have read our `}</span>
          <span className="decoration-solid font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
            Privacy Policy
          </span>
          <span className="leading-[20px]">.</span>
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cookie Policy
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Give feedback
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Status
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Releases
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal gap-[12px] items-start leading-[20px] pb-[24px] px-5 sm:px-6 lg:px-[36px] relative shrink-0 text-[#a3a3a3] text-[14px] w-full max-w-[507px]">
      <Frame20 />
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        University of Nicosia © 2026
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full min-h-0 min-w-px relative w-full lg:gap-0">
      <div
        className="bg-[#171717] content-stretch flex flex-[1_0_0] flex-col items-center min-h-0 min-w-px overflow-x-hidden overflow-y-auto relative rounded-[20px] w-full lg:bg-transparent lg:rounded-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="content-stretch flex flex-col items-center min-h-full w-full">
          <Header1 />
          <Frame14 />
          <div className="mt-auto w-full content-stretch flex flex-col items-center">
            <Frame22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-1 h-full items-stretch justify-center lg:justify-between min-h-0 min-w-px overflow-hidden relative w-full lg:bg-[#171717] lg:rounded-[20px]">
      <MaskGroup />
      <Frame17 />
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col h-screen h-[100svh] items-start overflow-hidden p-[16px] relative w-full" data-name="Sign up">
      <Frame18 />
    </div>
  );
}