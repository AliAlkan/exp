import { type MouseEvent, useEffect, useRef, useState } from "react"

import {
  ChevronDown,
  Check,
  Circle,
  Download,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const BRAND_COLORS = [
  {
    token: "--base/evo-violet",
    hex: "#932794",
    usage: "CTA buttons, avatar badges, upload zone accent",
    className: "bg-[#932794]",
  },
  {
    token: "--base/menu-bg",
    hex: "#260e36",
    usage: "Active sidebar navigation background",
    className: "bg-[#260e36]",
  },
  {
    token: "--base/menu-text",
    hex: "#d75cdb",
    usage: "Active sidebar navigation text",
    className: "bg-[#d75cdb]",
  },
] as const

const SURFACES = [
  { element: "Page background", value: "#0a0a0a", className: "bg-[#0a0a0a]" },
  { element: "Card / content area", value: "#171717", className: "bg-neutral-900" },
  { element: "Header / sidebar backdrop", value: "rgba(10,10,10,0.6)", className: "bg-black/60" },
  { element: "Muted surface", value: "#262626", className: "bg-neutral-800" },
] as const

const RADIUS_TOKENS = [
  { element: "Buttons", token: "rounded-full", px: "9999px", className: "rounded-full" },
  { element: "Main panels", token: "rounded-[20px]", px: "20px", className: "rounded-[20px]" },
  { element: "Sections / modals", token: "rounded-xl", px: "12px", className: "rounded-xl" },
  { element: "Inputs", token: "rounded-lg", px: "8px", className: "rounded-lg" },
  { element: "Tabs / nav items", token: "rounded-md", px: "6-8px", className: "rounded-md" },
  { element: "Badges / chips", token: "rounded-[10px]", px: "10px", className: "rounded-[10px]" },
  { element: "Checkbox", token: "rounded-[4px]", px: "4px", className: "rounded-[4px]" },
] as const

const TYPE_SCALE = [
  { token: "Heading large", size: "36px", weight: "600", line: "1", usage: "Page hero titles" },
  { token: "Section heading", size: "18px", weight: "500", line: "1", usage: "Section labels" },
  { token: "Nav / sidebar", size: "15px", weight: "600", line: "20px", usage: "Sidebar nav items" },
  { token: "Body large", size: "16px", weight: "400", line: "28px", usage: "Main body text" },
  { token: "Body small", size: "14px", weight: "400/500", line: "20px", usage: "Inputs, labels, table cells" },
  { token: "Extra small", size: "12px", weight: "400", line: "16px", usage: "Headers, timestamps" },
] as const

const TYPE_EXAMPLES = [
  { tag: "H1", className: "text-4xl font-semibold leading-none", sample: "Evolve" },
  { tag: "H2", className: "text-3xl font-semibold leading-tight", sample: "Evolve" },
  { tag: "H3", className: "text-2xl font-semibold leading-tight", sample: "Evolve" },
  { tag: "H4", className: "text-xl font-medium leading-snug", sample: "Evolve" },
  { tag: "H5", className: "text-lg font-medium leading-none", sample: "Evolve" },
  { tag: "H6", className: "text-base font-medium leading-5", sample: "Evolve" },
] as const

const BODY_EXAMPLE =
  "Use body text for implementation notes, descriptions, helper copy, table cells, and compact UI explanations."

const FONT_STACKS = [
  {
    role: "Headings",
    family: "Jost",
    usage: "Page titles, section labels, navigation items",
    stack: '"Jost", sans-serif',
  },
  {
    role: "Body / UI",
    family: "SF Pro / system UI",
    usage: "Body copy, inputs, table cells, badges",
    stack:
      'ui-sans-serif, -apple-system, system-ui, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, "Noto Sans", sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
  },
] as const

const CHECKLIST = [
  "CTA button uses #932794 and rounded-full",
  "Secondary button uses neutral-700 and rounded-full",
  "Active sidebar item uses #260e36 with #d75cdb",
  "No purple, violet, or fuchsia Tailwind substitutes",
  "Page background is #0a0a0a and cards are neutral-900",
  "Dialogs use neutral-900 with neutral-800 borders",
  "Headings use Jost; body and UI use SF Pro Text or system-ui",
  "Radius values follow the documented scale",
] as const

const SECONDARY_COLORS = [
  "#d48a3b",
  "#54ffa7",
  "#d8594b",
  "#4299d9",
] as const

const ASSET_BASE_PATH = import.meta.env.BASE_URL || "/"

const LOGO_VARIANTS = [
  {
    name: "Full color",
    description: "Evo-violet symbol with white wordmark for dark surfaces.",
    file: "evolve-logo-color.svg",
    previewClassName: "bg-[#0a0a0a]",
  },
  {
    name: "White",
    description: "Single-color white mark for dark or image backgrounds.",
    file: "evolve-logo-white.svg",
    previewClassName: "bg-neutral-950",
  },
  {
    name: "Black",
    description: "Single-color black mark for light surfaces and documents.",
    file: "evolve-logo-black.svg",
    previewClassName: "bg-neutral-100",
  },
  {
    name: "Evo-violet",
    description: "Monochrome brand accent version for neutral light surfaces.",
    file: "evolve-logo-violet.svg",
    previewClassName: "bg-neutral-100",
  },
] as const

const OUTLINE_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "logos", label: "Logos" },
  { id: "brand-colors", label: "Brand colors" },
  { id: "secondary-colors", label: "Secondary colors" },
  { id: "color-usage", label: "Color usage" },
  { id: "components", label: "Components" },
  { id: "typography", label: "Typography" },
  { id: "surfaces", label: "Surfaces" },
  { id: "radius", label: "Radius" },
  { id: "qa", label: "QA" },
] as const

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <Badge className="ds-eyebrow w-fit rounded-full border border-neutral-700 bg-transparent px-3.5 py-1.5 text-sm text-neutral-300">
        {eyebrow}
      </Badge>
      <div className="space-y-2">
        <h2 className="ds-heading [font-family:'Jost',sans-serif] text-4xl font-semibold leading-none text-neutral-50">
          {title}
        </h2>
        <p className="ds-body max-w-3xl text-sm leading-5 text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  )
}

function TokenRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="ds-row grid gap-2 border-b border-neutral-800 px-5 py-4 last:border-b-0 md:grid-cols-[180px_1fr]">
      <dt className="ds-body text-sm leading-5 text-neutral-400">{label}</dt>
      <dd className="min-w-0 text-sm leading-5 text-neutral-100">
        <code className="ds-code rounded-md bg-neutral-800 px-1.5 py-0.5 text-xs text-neutral-200">
          {value}
        </code>
      </dd>
    </div>
  )
}

function SecondaryColorCard({ hex }: { hex: string }) {
  return (
    <Card className="ds-card overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 py-0">
      <div className="h-24" style={{ backgroundColor: hex }} />
      <CardContent className="px-5 py-4">
        <code className="ds-code text-sm text-neutral-300">{hex}</code>
      </CardContent>
    </Card>
  )
}

async function downloadLogoPng({
  href,
  file,
  width,
}: {
  href: string
  file: string
  width: number
}) {
  const response = await fetch(href)
  const svg = await response.text()
  const svgUrl = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }))
  const image = new Image()

  try {
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve()
      image.onerror = () => reject(new Error(`Unable to render ${file}`))
      image.src = svgUrl
    })

    const aspectRatio = image.naturalWidth > 0 ? image.naturalHeight / image.naturalWidth : 0.32
    const height = Math.round(width * aspectRatio)
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height

    const context = canvas.getContext("2d")
    if (!context) {
      return
    }

    context.drawImage(image, 0, 0, width, height)

    const pngBlob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, "image/png")
    })

    if (!pngBlob) {
      return
    }

    const pngUrl = URL.createObjectURL(pngBlob)
    const link = document.createElement("a")
    link.href = pngUrl
    link.download = file.replace(".svg", `-${width}px.png`)
    document.body.append(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(pngUrl)
  } finally {
    URL.revokeObjectURL(svgUrl)
  }
}

function downloadLogoSvg({ href, file }: { href: string; file: string }) {
  const link = document.createElement("a")
  link.href = href
  link.download = file
  document.body.append(link)
  link.click()
  link.remove()
}

async function downloadAllLogoPngs(width: number) {
  for (const variant of LOGO_VARIANTS) {
    await downloadLogoPng({
      href: `${ASSET_BASE_PATH}logos/${variant.file}`,
      file: variant.file,
      width,
    })
  }
}

function downloadAllLogoSvgs() {
  for (const variant of LOGO_VARIANTS) {
    downloadLogoSvg({
      href: `${ASSET_BASE_PATH}logos/${variant.file}`,
      file: variant.file,
    })
  }
}

function LogoDownloadAllButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="ds-secondary-button h-10 w-fit rounded-full bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-50 hover:bg-neutral-600"
        >
          <Download className="size-4" />
          Download all
          <ChevronDown className="ml-3 size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-60 rounded-xl border-neutral-800 bg-neutral-900 p-1.5 text-neutral-100 shadow-none"
      >
        <DropdownMenuItem
          className="cursor-pointer rounded-lg px-3 py-2 text-sm focus:bg-neutral-800 focus:text-neutral-50"
          onSelect={downloadAllLogoSvgs}
        >
          <span className="flex flex-col">
            <span>All SVG originals</span>
            <span className="text-xs text-neutral-400">All logo variants as vectors</span>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer rounded-lg px-3 py-2 text-sm focus:bg-neutral-800 focus:text-neutral-50"
          onSelect={() => void downloadAllLogoPngs(2000)}
        >
          <span className="flex flex-col">
            <span>All PNG high res</span>
            <span className="text-xs text-neutral-400">2000px wide transparent PNGs</span>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer rounded-lg px-3 py-2 text-sm focus:bg-neutral-800 focus:text-neutral-50"
          onSelect={() => void downloadAllLogoPngs(500)}
        >
          <span className="flex flex-col">
            <span>All PNG low res</span>
            <span className="text-xs text-neutral-400">500px wide transparent PNGs</span>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function LogoDownloadCard({
  name,
  description,
  file,
  previewClassName,
}: {
  name: string
  description: string
  file: string
  previewClassName: string
}) {
  const href = `${ASSET_BASE_PATH}logos/${file}`

  return (
    <Card className="ds-card overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 py-0">
      <div className={cn("flex h-32 items-center justify-center px-6", previewClassName)}>
        <img src={href} alt={`${name} Evolve logo`} className="h-10 w-auto" />
      </div>
      <CardContent className="space-y-4 px-5 py-5">
        <div className="space-y-1.5">
          <h3 className="ds-heading [font-family:'Jost',sans-serif] text-lg font-medium leading-none text-neutral-50">
            {name}
          </h3>
          <p className="ds-body text-sm leading-5 text-neutral-400">{description}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className="ds-secondary-button h-10 w-full rounded-full bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-50 hover:bg-neutral-600"
            >
              <Download className="size-4" />
              Download
              <ChevronDown className="ml-auto size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="w-56 rounded-xl border-neutral-800 bg-neutral-900 p-1.5 text-neutral-100 shadow-none"
          >
            <DropdownMenuItem asChild className="cursor-pointer rounded-lg px-3 py-2 text-sm focus:bg-neutral-800 focus:text-neutral-50">
              <a href={href} download={file}>
                <span className="flex flex-col">
                  <span>SVG original</span>
                  <span className="text-xs text-neutral-400">Vector source file</span>
                </span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer rounded-lg px-3 py-2 text-sm focus:bg-neutral-800 focus:text-neutral-50"
              onSelect={() => void downloadLogoPng({ href, file, width: 2000 })}
            >
              <span className="flex flex-col">
                <span>PNG high res</span>
                <span className="text-xs text-neutral-400">2000px wide transparent PNG</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer rounded-lg px-3 py-2 text-sm focus:bg-neutral-800 focus:text-neutral-50"
              onSelect={() => void downloadLogoPng({ href, file, width: 500 })}
            >
              <span className="flex flex-col">
                <span>PNG low res</span>
                <span className="text-xs text-neutral-400">500px wide transparent PNG</span>
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  )
}


function LightModeSwitch({
  isLightMode,
  onToggle,
}: {
  isLightMode: boolean
  onToggle: () => void
}) {
  return (
    <div className="ds-switch-wrap flex h-fit w-fit items-center gap-2 rounded-full bg-neutral-800 px-3 py-1.5">
      <span className="ds-body text-sm text-neutral-400">Light mode</span>
      <button
        type="button"
        role="switch"
        aria-checked={isLightMode}
        onClick={onToggle}
        className={cn(
          "ds-switch relative h-7 w-12 rounded-full border border-neutral-700 bg-neutral-900 transition-colors",
          isLightMode && "bg-neutral-100",
        )}
      >
        <span
          className={cn(
            "absolute left-1 top-1 size-5 rounded-full bg-neutral-500 transition-transform",
            isLightMode && "translate-x-5 bg-[#932794]",
          )}
        />
      </button>
    </div>
  )
}

function TopNavigation({
  isLightMode,
  onToggle,
}: {
  isLightMode: boolean
  onToggle: () => void
}) {
  return (
    <header className="ds-top-nav sticky top-0 z-40 h-[60px] border-b border-neutral-900/60 bg-[#0a0a0a]/90 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#overview"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#932794]"
        >
          <img
            src={`${ASSET_BASE_PATH}logos/evolve-logo-color.svg`}
            alt="Evolve"
            className="h-[36px] w-[100px] object-contain object-left"
          />
        </a>

        <LightModeSwitch isLightMode={isLightMode} onToggle={onToggle} />
      </div>
    </header>
  )
}

function SectionOutline() {
  const [activeSections, setActiveSections] = useState<string[]>(["overview"])
  const visibleSectionsRef = useRef(new Set<string>())

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
    event.preventDefault()

    const section = document.getElementById(sectionId)
    if (!section) {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    setActiveSections([sectionId])
    section.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    })
    window.history.pushState(null, "", `#${sectionId}`)
  }

  useEffect(() => {
    const sections = OUTLINE_SECTIONS.map((section) =>
      document.getElementById(section.id),
    ).filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSectionsRef.current.add(entry.target.id)
            return
          }

          visibleSectionsRef.current.delete(entry.target.id)
        })

        const nextActiveSections = OUTLINE_SECTIONS
          .map((section) => section.id)
          .filter((id) => visibleSectionsRef.current.has(id))

        if (nextActiveSections.length > 0) {
          setActiveSections(nextActiveSections)
        }
      },
      {
        rootMargin: "-64px 0px 0px 0px",
        threshold: 0.01,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <aside>
      <nav
        aria-label="Design system sections"
        className="p-0"
      >
        <p className="ds-heading pb-2 pt-1 text-sm font-medium text-neutral-500">
          Outline
        </p>
        <div className="flex gap-0 overflow-x-auto lg:flex-col lg:overflow-visible">
          {OUTLINE_SECTIONS.map((section) => {
            const isActive = activeSections.includes(section.id)

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(event) => scrollToSection(event, section.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "ds-outline-link whitespace-nowrap border-l-[3px] border-neutral-900 py-3 pl-5 pr-3 text-sm text-neutral-400 hover:text-neutral-50",
                  isActive && "border-neutral-600 text-neutral-50",
                )}
              >
                {section.label}
              </a>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}

export default function DesignSystemPage() {
  const [isLightMode, setIsLightMode] = useState(false)

  return (
    <main
      data-color-mode={isLightMode ? "light" : "dark"}
      className="ds-page relative isolate min-h-full overflow-x-clip bg-[#0a0a0a] pb-8 text-neutral-100 lg:pb-[90px]"
    >
      <div className="relative z-10 flex w-full flex-col">
        <TopNavigation isLightMode={isLightMode} onToggle={() => setIsLightMode((v) => !v)} />
        <div className="grid gap-10 px-6 pt-8 lg:grid-cols-[244px_minmax(0,1fr)] lg:gap-0 lg:px-0 lg:pt-0">
          <div>
            <div className="lg:fixed lg:left-6 lg:top-1/2 lg:z-20 lg:w-[220px] lg:-translate-y-1/2">
              <SectionOutline />
            </div>
          </div>

          {/* Right column — gradient background panel + content */}
          <div className="relative">
            {/* Figma 33:11 — background panel, 8px inset, rounded-[20px], both gradient layers clipped inside */}
            <div aria-hidden="true" className="ds-right-gradient pointer-events-none absolute inset-x-0 top-0 -z-10 p-2">
              <div className="relative h-[384px] w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
                {/* Behind layer — Figma 33:13 */}
                <div className="absolute h-[820px] w-[938px]" style={{ left: -315, top: -810 }}>
                  <img
                    src="/evo-gradient.svg"
                    alt=""
                    className="absolute block max-w-none"
                    style={{ inset: "-24.39% -21.32%", width: "calc(100% + 42.64%)", height: "calc(100% + 48.78%)" }}
                  />
                </div>
                {/* Overlay layer — same SVG on top, both clipped by overflow-hidden */}
                <img
                  src="/evo-gradient.svg"
                  alt=""
                  className="absolute left-0 top-0 h-auto w-auto max-w-none"
                />
              </div>
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-[1028px] min-w-0 flex-col gap-24 pt-[90px]">
            <section id="overview" className="scroll-mt-6 space-y-5">
              <div className="space-y-5">
                <Badge className="ds-eyebrow rounded-full border border-neutral-700 bg-transparent px-3.5 py-1.5 text-sm text-neutral-300">
                  Evolve design system
                </Badge>
                <div className="space-y-3">
                  <h1 className="ds-hero [font-family:'Jost',sans-serif] text-7xl font-semibold leading-none text-[#d75cdb]">
                    Design system
                  </h1>
                  <p className="ds-body max-w-3xl text-base leading-7 text-neutral-400">
                    A direct implementation reference for Evolve color, typography, surface, radius, and component styling rules on top of shadcn/ui and Tailwind.
                  </p>
                </div>
              </div>
            </section>

            <section id="logos" className="ds-section scroll-mt-6 space-y-4 border-t border-neutral-800 pt-20">
              <SectionHeader
                eyebrow="Assets"
                title="Logo downloads"
                description="Use the full-color logo on dark Evolve surfaces, and the single-color variants when contrast or production constraints require a monochrome asset."
              />
              <LogoDownloadAllButton />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {LOGO_VARIANTS.map((variant) => (
                  <LogoDownloadCard key={variant.file} {...variant} />
                ))}
              </div>
              <div className="ds-card rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-4">
                <p className="ds-body text-sm leading-5 text-neutral-400">
                  Logo wordmark annotation for developers: the logo font is Futura.
                </p>
              </div>
            </section>

            <section id="brand-colors" className="ds-section scroll-mt-6 space-y-4 border-t border-neutral-800 pt-20">
              <SectionHeader
                eyebrow="Primary colors"
                title="Primary brand palette"
                description="Core Evolve color tokens for primary actions, active navigation states, and brand-identifying accents."
              />
              <div className="grid gap-4 lg:grid-cols-3">
                {BRAND_COLORS.map((color) => (
                  <Card key={color.token} className="ds-card overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 py-0">
                    <div className={cn("h-24", color.className)} />
                    <CardContent className="space-y-3 px-5 py-5">
                      <div className="flex items-center justify-between gap-3">
                        <code className="ds-code text-xs text-neutral-300">{color.token}</code>
                        <Badge variant="outline" className="ds-token-badge rounded-[10px] border-neutral-800 text-neutral-300">
                          {color.hex}
                        </Badge>
                      </div>
                      <p className="ds-body text-sm leading-5 text-neutral-400">{color.usage}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="secondary-colors" className="ds-section scroll-mt-6 space-y-4 border-t border-neutral-800 pt-20">
              <SectionHeader
                eyebrow="Secondary colors"
                title="Secondary palette"
                description="Supporting brand colors for charts, states, accents, and secondary visual emphasis."
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {SECONDARY_COLORS.map((hex) => (
                  <SecondaryColorCard key={hex} hex={hex} />
                ))}
              </div>
            </section>

            <section id="color-usage" className="ds-section scroll-mt-6 space-y-4 border-t border-neutral-800 pt-20">
              <SectionHeader
                eyebrow="Color"
                title="Evo-violet is the only primary accent"
                description="Use the exact brand values for CTAs, avatar badges, upload accents, and active sidebar states. Avoid Tailwind purple, violet, or fuchsia substitutions."
              />
              <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
                <Card className="ds-card overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 py-0">
                  <CardHeader className="ds-row border-b border-neutral-800 px-5 py-4">
                    <CardTitle className="ds-heading [font-family:'Jost',sans-serif] text-lg font-medium leading-none text-neutral-50">
                      Usage map
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 py-0">
                    <dl>
                      <TokenRow label="Primary button" value="bg-[#932794] hover:bg-[#7a2080]" />
                      <TokenRow label="Avatar badge" value="bg-[#932794]" />
                      <TokenRow label="Upload zone" value="bg-[rgba(10,10,10,0.8)] over #932794" />
                      <TokenRow label="Active sidebar" value="bg-[#260e36] text-[#d75cdb]" />
                      <TokenRow label="Required asterisk" value="text-[#ef4444]" />
                    </dl>
                  </CardContent>
                </Card>

                <Card className="ds-card overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 py-0">
                  <CardHeader className="ds-row border-b border-neutral-800 px-5 py-4">
                    <CardTitle className="ds-heading [font-family:'Jost',sans-serif] text-lg font-medium leading-none text-neutral-50">
                      Navigation sample
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 px-3 py-3">
                    {["Agents", "Tickets", "Plans"].map((item, index) => (
                      <div
                        key={item}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 [font-family:'Jost',sans-serif] text-[15px] font-semibold",
                          index === 1
                            ? "bg-[#260e36] text-[#d75cdb]"
                            : "ds-muted text-neutral-300",
                        )}
                      >
                        <Circle className="size-3.5" />
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="components" className="ds-section scroll-mt-6 space-y-4 border-t border-neutral-800 pt-20">
          <SectionHeader
            eyebrow="Components"
            title="Button styles"
            description="Primary and secondary actions use full-pill radius. Toolbar and chip controls stay compact with neutral borders."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="ds-card rounded-xl border border-neutral-800 bg-neutral-900 py-0">
              <CardHeader className="ds-row border-b border-neutral-800 px-5 py-4">
                <CardTitle className="ds-heading [font-family:'Jost',sans-serif] text-lg font-medium leading-none text-neutral-50">
                  Primary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-5 py-5">
                <Button className="h-10 rounded-full bg-[#932794] px-5 py-2 text-sm font-medium text-neutral-50 hover:bg-[#7a2080]">
                  Start a run
                </Button>
                <p className="ds-body text-sm leading-5 text-neutral-400">#932794, white text, 40px height, px-5.</p>
              </CardContent>
            </Card>

            <Card className="ds-card rounded-xl border border-neutral-800 bg-neutral-900 py-0">
              <CardHeader className="ds-row border-b border-neutral-800 px-5 py-4">
                <CardTitle className="ds-heading [font-family:'Jost',sans-serif] text-lg font-medium leading-none text-neutral-50">
                  Secondary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-5 py-5">
                <Button
                  variant="secondary"
                  className="ds-secondary-button h-10 rounded-full bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-50 hover:bg-neutral-600"
                >
                  Cancel
                </Button>
                <p className="ds-body text-sm leading-5 text-neutral-400">Neutral-700 background, white text, full-pill radius.</p>
              </CardContent>
            </Card>

            <Card className="ds-card rounded-xl border border-neutral-800 bg-neutral-900 py-0">
              <CardHeader className="ds-row border-b border-neutral-800 px-5 py-4">
                <CardTitle className="ds-heading [font-family:'Jost',sans-serif] text-lg font-medium leading-none text-neutral-50">
                  Outlined
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-5 py-5">
                <Button
                  variant="outline"
                  className="ds-outlined-button h-10 rounded-full border border-neutral-800 bg-transparent px-5 py-2 text-sm font-medium text-neutral-50 hover:bg-transparent"
                >
                  Filter
                </Button>
                <p className="ds-body text-sm leading-5 text-neutral-400">Transparent fill, neutral-800 border, white text, full-pill radius.</p>
              </CardContent>
            </Card>
          </div>
        </section>

            <section id="typography" className="ds-section scroll-mt-6 space-y-4 border-t border-neutral-800 pt-20">
          <SectionHeader
            eyebrow="Typography"
            title="Jost headings, SF Pro Text body"
            description="Headings and navigation carry the Evolve personality. Body, inputs, table cells, and badges use SF Pro Text with system fallbacks."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {FONT_STACKS.map((font) => (
              <Card key={font.role} className="ds-card rounded-xl border border-neutral-800 bg-neutral-900 py-0">
                <CardHeader className="ds-row border-b border-neutral-800 px-5 py-4">
                  <CardTitle className="ds-heading [font-family:'Jost',sans-serif] text-lg font-medium leading-none text-neutral-50">
                    {font.role}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-5 py-5">
                  <div>
                    <p className="ds-heading text-sm font-medium text-neutral-100">{font.family}</p>
                    <p className="ds-body mt-1 text-sm leading-5 text-neutral-400">{font.usage}</p>
                  </div>
                  <code className="ds-code block rounded-lg bg-neutral-800 px-3 py-3 text-xs leading-5 text-neutral-200">
                    font-family: {font.stack};
                  </code>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="ds-card rounded-xl border border-neutral-800 bg-neutral-900 py-0">
            <CardHeader className="ds-row border-b border-neutral-800 px-5 py-4">
              <CardTitle className="ds-heading [font-family:'Jost',sans-serif] text-lg font-medium leading-none text-neutral-50">
                Type examples
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 py-0">
              {TYPE_EXAMPLES.map((item) => (
                <div key={item.tag} className="ds-row grid gap-3 border-b border-neutral-800 px-5 py-5 last:border-b-0 md:grid-cols-[72px_1fr_260px] md:items-center">
                  <span className="ds-body text-sm text-neutral-400">{item.tag}</span>
                  <p className={cn("ds-heading [font-family:'Jost',sans-serif] text-neutral-50", item.className)}>
                    {item.sample}
                  </p>
                  <code className="ds-code rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-200">
                    {item.className}
                  </code>
                </div>
              ))}
              <div className="ds-row grid gap-3 px-5 py-5 md:grid-cols-[72px_1fr_260px] md:items-start">
                <span className="ds-body text-sm text-neutral-400">Body</span>
                <p className="ds-body max-w-2xl text-base leading-7 text-neutral-400">
                  {BODY_EXAMPLE}
                </p>
                <code className="ds-code rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-200">
                  text-base leading-7
                </code>
              </div>
            </CardContent>
          </Card>
          <Card className="ds-card overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 py-0">
            <CardContent className="px-0 py-0">
              <div className="ds-row ds-muted grid border-b border-neutral-800 px-5 py-3 text-xs text-neutral-500 md:grid-cols-[1fr_90px_90px_90px_1.5fr]">
                <span>Token</span>
                <span>Size</span>
                <span>Weight</span>
                <span>Line</span>
                <span>Usage</span>
              </div>
              {TYPE_SCALE.map((item) => (
                <div key={item.token} className="ds-row grid gap-2 border-b border-neutral-800 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_90px_90px_90px_1.5fr]">
                  <span className="ds-heading font-medium text-neutral-100">{item.token}</span>
                  <span className="ds-body text-neutral-400">{item.size}</span>
                  <span className="ds-body text-neutral-400">{item.weight}</span>
                  <span className="ds-body text-neutral-400">{item.line}</span>
                  <span className="ds-muted text-neutral-300">{item.usage}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

            <section className="ds-section grid gap-6 border-t border-neutral-800 pt-20 lg:grid-cols-[1fr_1fr]">
          <div id="surfaces" className="scroll-mt-6 space-y-4">
            <SectionHeader
              eyebrow="Surfaces"
              title="Dark neutral surface stack"
              description="The interface is built from deep neutral layers, with the brand accent reserved for decisive moments."
            />
            <div className="grid gap-3">
              {SURFACES.map((surface) => (
                <div key={surface.element} className="ds-card flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3">
                  <span className={cn("size-10 rounded-lg border border-neutral-700", surface.className)} />
                  <div className="min-w-0 flex-1">
                    <p className="ds-heading text-sm font-medium text-neutral-100">{surface.element}</p>
                    <p className="ds-body text-xs text-neutral-400">{surface.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="radius" className="scroll-mt-6 space-y-4">
            <SectionHeader
              eyebrow="Radius"
              title="Fixed radius scale"
              description="Use the documented radius tokens only. Arbitrary rounded values should match one of these standards."
            />
            <div className="grid gap-3">
              {RADIUS_TOKENS.map((radius) => (
                <div key={radius.element} className="ds-card grid grid-cols-[72px_1fr] items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3">
                  <span className={cn("h-10 w-16 border border-[#932794] bg-[#260e36]", radius.className)} />
                  <div className="min-w-0">
                    <p className="ds-heading text-sm font-medium text-neutral-100">{radius.element}</p>
                    <p className="ds-body text-xs text-neutral-400">{radius.token} / {radius.px}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

            <section id="qa" className="ds-section scroll-mt-6 space-y-4 border-t border-neutral-800 pt-20">
          <SectionHeader
            eyebrow="QA"
            title="Delivery checklist"
            description="Use this list before shipping any Evolve UI so the result stays consistent with the source tokens."
          />
          <Card className="ds-card rounded-xl border border-neutral-800 bg-neutral-900 py-0">
            <CardContent className="grid gap-0 px-0 py-0 md:grid-cols-2">
              {CHECKLIST.map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    "ds-row flex items-start gap-3 border-neutral-800 px-5 py-4",
                    index < CHECKLIST.length - 2 && "border-b",
                    index % 2 === 0 && "md:border-r",
                  )}
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#260e36] text-[#d75cdb]">
                    <Check className="size-3" />
                  </span>
                  <span className="ds-muted text-sm leading-5 text-neutral-300">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
            </section>
          </div>
          </div>{/* end right column */}
        </div>
      </div>
    </main>
  )
}
