import { useRef, useState } from "react";
import { EyeOff } from "lucide-react";
import evoBackground from "../assets/evo-bg.png";
import svgPaths from "./svg-4w4zrs41l7";

function Brand() {
  return (
    <div className="h-[43.526px] relative shrink-0 w-[120px]" data-name="Layer_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 43.526">
        <g clipPath="url(#clip0_sign_in_logo)" id="Layer_1">
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
          <clipPath id="clip0_sign_in_logo">
            <rect fill="white" height="43.526" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / ChevronDown">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-13.75%_-6.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
            <path d={svgPaths.p36d8fd00} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LanguageIcon() {
  return (
    <button className="block cursor-pointer overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Languages" type="button">
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
  );
}

function EyeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Eye">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.14%_-3.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8667 12.8667">
            <g>
              <path d={svgPaths.p1130d500} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              <path d={svgPaths.p1082d000} stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

type InputRowProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  value: string;
  onChange: (value: string) => void;
  withEye?: boolean;
  isPasswordVisible?: boolean;
  onTogglePasswordVisibility?: () => void;
  autoComplete?: string;
};

function InputRow({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  withEye = false,
  isPasswordVisible = false,
  onTogglePasswordVisibility,
  autoComplete,
}: InputRowProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputType = withEye ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <label className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <span className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] text-[#a3a3a3] text-[14px]">{label}</span>
      <div className="h-[52px] relative rounded-[12px] shrink-0 w-full">
        <div
          className="border border-[#404040] content-stretch cursor-text flex items-center justify-between overflow-hidden px-[16px] py-[18px] rounded-[inherit] size-full hover:border-[#737373] focus-within:border-[#737373]"
          onClick={() => inputRef.current?.focus()}
        >
          <input
            id={id}
            autoComplete={autoComplete}
            className="bg-transparent border-0 flex-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-none m-0 min-w-0 p-0 placeholder:text-[#737373] text-[#e5e5e5] text-[16px] focus:outline-none"
            ref={inputRef}
            placeholder={placeholder}
            type={inputType}
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
          {withEye ? (
            <button
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
              className="cursor-pointer shrink-0"
              type="button"
              onClick={onTogglePasswordVisibility}
            >
              {isPasswordVisible ? <EyeOff className="size-[20px] text-[#a3a3a3]" strokeWidth={1.8} /> : <EyeIcon />}
            </button>
          ) : null}
        </div>
      </div>
    </label>
  );
}

function HorizontalRule() {
  return <div className="bg-[#404040] h-px shrink-0 w-full" />;
}

function SocialDivider() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[10px] relative shrink-0 w-full">
      <HorizontalRule />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#171717] left-1/2 px-[10px] py-0 top-1/2">
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] text-[#737373] text-[12px]">OR</span>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal gap-[12px] items-start leading-[20px] pb-[24px] px-5 sm:px-6 lg:px-[36px] relative shrink-0 text-[#a3a3a3] text-[14px] w-full max-w-[507px]">
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full whitespace-nowrap">
        <p className="relative shrink-0">Cookie Policy</p>
        <p className="relative shrink-0">Give feedback</p>
        <p className="relative shrink-0">Contact</p>
        <p className="relative shrink-0">Status</p>
        <p className="relative shrink-0">Releases</p>
      </div>
      <p className="relative shrink-0 w-full">University of Nicosia © 2026</p>
    </div>
  );
}

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigateToSignUp = () => {
    window.location.assign("/sign-up");
  };

  return (
    <div className="bg-[#0a0a0a] content-stretch flex min-h-screen items-start overflow-visible p-[16px] relative w-full lg:h-screen lg:h-[100svh] lg:overflow-hidden" data-name="Sign in">
      <div className="content-stretch flex flex-1 items-stretch justify-center lg:h-full lg:justify-between min-h-0 min-w-px overflow-visible relative w-full lg:bg-[#171717] lg:overflow-hidden lg:rounded-[20px]">
        <div className="hidden lg:block leading-[0] relative shrink-0 self-stretch w-[clamp(320px,calc(100vw-892px),548px)]" data-name="Mask group">
          <div className="absolute inset-0">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={evoBackground} />
          </div>
          <div className="absolute left-0 top-0 content-stretch flex h-[96px] items-center px-[36px] w-full">
            <Brand />
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[16px] lg:flex-[1_0_0] lg:h-full min-h-0 min-w-px relative w-full lg:gap-0">
          <div className="h-[96px] relative shrink-0 w-full">
            <div className="lg:hidden content-stretch flex items-center justify-between size-full">
              <div className="w-[20px]" />
              <div className="content-stretch flex items-center justify-center flex-[1_0_0] px-4">
                <Brand />
              </div>
              <div className="content-stretch flex gap-[10px] items-center shrink-0">
                <LanguageIcon />
                <ChevronDownIcon />
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-end px-[36px] size-full">
              <div className="content-stretch flex gap-[10px] items-center">
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] text-[#a3a3a3] text-[14px]">English</p>
                <ChevronDownIcon />
              </div>
            </div>
          </div>

          <div
            className="bg-[#171717] content-stretch flex flex-col items-center min-h-0 min-w-px overflow-visible relative rounded-[20px] w-full lg:bg-transparent lg:flex-[1_0_0] lg:overflow-x-hidden lg:overflow-y-auto lg:rounded-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex w-full flex-col justify-between lg:min-h-full">
              <div className="content-stretch flex flex-col gap-[40px] items-center mx-auto pb-[72px] relative shrink-0 w-[min(520px,calc(100%-40px))]">
                <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] mt-8 lg:mt-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-['Jost',sans-serif] font-[600] justify-center relative shrink-0 text-[#e5e5e5] text-[36px] whitespace-nowrap">
                      <p className="leading-none">Sign in to Evolve</p>
                    </div>
                    <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#a3a3a3] text-[16px] text-center w-[min-content]">
                      <p className="leading-[24px]">Sign in and keep evolving.</p>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                        <InputRow
                          id="sign-in-email"
                          autoComplete="email"
                          label="Email address"
                          placeholder="name@example.com"
                          type="email"
                          value={email}
                          onChange={setEmail}
                        />
                        <InputRow
                          id="sign-in-password"
                          autoComplete="current-password"
                          isPasswordVisible={isPasswordVisible}
                          label="Password"
                          placeholder="Your password"
                          value={password}
                          withEye
                          onChange={setPassword}
                          onTogglePasswordVisibility={() => setIsPasswordVisible((visible) => !visible)}
                        />
                        <a className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] text-[#a3a3a3] text-[14px] underline w-full" href="#">
                          Forgot password?
                        </a>
                      </div>

                      <button className="bg-[#932794] hover:bg-[#A22BA3] transition-colors cursor-pointer h-[48px] relative rounded-[9999px] shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[8px] size-full">
                          <span className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] text-[#fafafa] text-[14px]">Sign in</span>
                        </div>
                      </button>
                    </div>

                    <SocialDivider />

                    <button className="bg-[#404040] hover:bg-[#525252] transition-colors cursor-pointer h-[48px] relative rounded-[9999px] shrink-0 w-full" type="button" onClick={navigateToSignUp}>
                      <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[8px] size-full">
                        <span className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[20px] text-[#fafafa] text-[14px]">Create account</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[#a3a3a3] text-center whitespace-nowrap">
                  <p className="mb-0">
                    <span>{`By continuing, you agree to our `}</span>
                    <span className="underline">Terms of Service</span>
                  </p>
                  <p>
                    <span>{`and have read our `}</span>
                    <span className="underline">Privacy Policy</span>
                    <span>.</span>
                  </p>
                </div>
              </div>
              <FooterLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
