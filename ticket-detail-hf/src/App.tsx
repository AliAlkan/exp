import { useEffect, useLayoutEffect, useRef, useState } from "react"

import {
  Activity,
  ArrowDownUp,
  Bolt,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  Contrast,
  Clock,
  CircleStop,
  CreditCard,
  Database,
  Download,
  ExternalLink,
  FileMinus2,
  FilePlus2,
  GitCompareArrows,
  GitMerge,
  GitPullRequestArrow,
  Layers,
  Link,
  ListFilter,
  ListTree,
  MessageSquarePlus,
  MessagesSquare,
  MoreHorizontal,
  Play,
  PanelLeft,
  Plus,
  Search,
  SendToBack,
  TicketCheck,
  User,
  Video,
  Workflow,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import appLogo from "@/assets/logo.svg"
import { cn } from "@/lib/utils"

const SUBTASK_SUGGESTIONS = [
  "Audit current chevron size and alignment",
  "Increase chevron size in executions table",
  "Vertically center chevron within row",
  "Update chevron interaction and UI tests",
  "Capture review screenshots for chevron changes",
] as const

/** Per-row ticket IDs for subtask list (parent issue uses T-0006982 elsewhere). */
const SUBTASK_ROW_IDS = [
  "T-0006983",
  "T-0006984",
  "T-0006985",
  "T-0006986",
  "T-0006987",
] as const

const COMPLETED_SUBTASK_ROW_INDEXES = new Set<number>([2, 3, 4])
const ROOT_TICKET_ID = "T-0006982"

// Figma-matched priority glyphs for sub-ticket rows.
const SUBTICKET_PRIORITY_ICON_RED =
  "https://www.figma.com/api/mcp/asset/aeedd1ca-0ce6-4493-9880-d04c8f2bcae0"
const SUBTICKET_PRIORITY_ICON_AMBER =
  "https://www.figma.com/api/mcp/asset/2ee23d70-6634-4ec8-aabe-e975e6148ca3"
const SUBTICKET_HELD_BY_ROTATE_ICON =
  "https://www.figma.com/api/mcp/asset/1dccb635-b0c4-4ff2-bbb9-defd70422684"
const SIDEBAR_LABEL_DOT_ICON =
  "https://www.figma.com/api/mcp/asset/ba217b39-043c-4836-b1ef-da50ac066ae0"
const CURRENT_USER_NAME = "Antonis Polemitis"
const CURRENT_USER_INITIALS = "AP"
const SIDEBAR_STICKY_TOP_OFFSET = 0
const SIDEBAR_STICKY_BOTTOM_OFFSET = 0
const ACTIVITY_WORK_STARTED_MESSAGE =
  "Work started on ticket T-0006982 in the main branch. Initial checks passed, including authentication, ticket access, ownership validation, and repository write access within the ticket scope."
const ACTIVITY_REVIEWED_MESSAGE =
  "Ticket T-0006982 was reviewed and confirmed as in progress. Access and file scope were validated, the latest note was checked against the ticket requirements, and the next step is to review the current table, tests, and Playwright setup before making the smallest necessary change."
type ChatTranscriptEntry = {
  initials: string
  author: string
  time: string
  messages: readonly string[]
  tags?: readonly string[]
}

type ActivityFilter = "all" | "comments" | "notes"
type AppPage = "Tickets" | "Plans"

type AssigneeOption = {
  id: string
  name: string
  initials: string
}

const LINKED_TICKETS_BLOCKED_BY = [
  { id: "T-0006987", name: "Capture review screenshots for chevron changes", status: "complete" as const },
  { id: "T-0006984", name: "Increase chevron size in executions table", status: "in_progress" as const },
] as const

const LINKED_TICKETS_BLOCKS = [
  { id: "T-0006984", name: "Increase chevron size in executions table", status: "pending" as const },
] as const

const CHAT_TRANSCRIPT: readonly ChatTranscriptEntry[] = [
  {
    initials: CURRENT_USER_INITIALS,
    author: CURRENT_USER_NAME,
    time: "18 mins ago",
    messages: [
      "Approved to proceed with a small frontend-only refinement for the executions chevron.",
    ],
  },
  {
    initials: "CB",
    author: "EvoResolver",
    time: "18 mins ago",
    messages: [ACTIVITY_REVIEWED_MESSAGE],
    tags: ["Activity", "In review"],
  },
  {
    initials: CURRENT_USER_INITIALS,
    author: CURRENT_USER_NAME,
    time: "18 mins ago",
    messages: [
      "Please make sure the updated chevron feels visually centered and easier to scan in the row.",
    ],
  },
  {
    initials: "CB",
    author: "EvoResolver",
    time: "18 mins ago",
    messages: [ACTIVITY_WORK_STARTED_MESSAGE],
    tags: ["Activity"],
  },
  {
    initials: "CB",
    author: "EvoResolver",
    time: "18 mins ago",
    messages: [
      "Created a frontend ticket to improve the chevron size and alignment in the Agents executions name cell.",
    ],
  },
] as const

const ASSIGNEE_OPTIONS: readonly AssigneeOption[] = [
  { id: "evo", name: "EvoResolver", initials: "" },
  { id: "unclaimed", name: "Unclaimed", initials: "" },
  { id: "ap", name: "Antonis Polemitis", initials: "AP" },
  { id: "cb", name: "Chris Baldwin", initials: "CB" },
  { id: "zr", name: "Zoey Ramirez", initials: "ZR" },
] as const

const DESCRIPTION_TEXT_INITIAL =
  "Adjusted the chevron in the Agent Executions table to improve alignment and visual balance by increasing its size and vertically centering it within the row. Also validated the change with tests and captured screenshots to confirm the updated behavior and presentation."

const TICKET_DETAILS: Record<
  string,
  {
    title: string
    description: string
  }
> = {
  [ROOT_TICKET_ID]: {
    title: "Agent Execution Chevron: Resize, Center, Test, Screenshot",
    description: DESCRIPTION_TEXT_INITIAL,
  },
  "T-0006983": {
    title: "Audit current chevron size and alignment",
    description:
      "Audit the current chevron in the execution table, document spacing and alignment deltas against Figma, and capture baseline screenshots for regression comparison.",
  },
  "T-0006984": {
    title: "Increase chevron size in executions table",
    description:
      "Increase the chevron icon size in the executions table and verify visual balance with adjacent text, status badges, and row controls across breakpoints.",
  },
  "T-0006985": {
    title: "Vertically center chevron within row",
    description:
      "Vertically center the chevron within each executions row so the icon aligns precisely with row content and matches the reference layout.",
  },
  "T-0006986": {
    title: "Update chevron interaction and UI tests",
    description:
      "Update interaction tests and UI assertions for the chevron behavior to ensure hover/focus and alignment remain stable after styling changes.",
  },
  "T-0006987": {
    title: "Capture review screenshots for chevron changes",
    description:
      "Capture final before/after screenshots and attach evidence for review so the chevron updates can be validated and approved quickly.",
  },
}

function DependencyGraphDialog({
  children,
  triggerClassName,
}: {
  children?: React.ReactNode
  triggerClassName?: string
}) {
  return (
    <Dialog>
      {children ? (
        <DialogTrigger asChild>{children}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn("size-8 text-muted-foreground", triggerClassName)}
            aria-label="Open ticket connections"
          >
            <Workflow className="size-4" />
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Ticket connections</DialogTitle>
          <DialogDescription>
            Ticket relationships for `T-0006983`.
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-xl bg-black/20 p-4">
          <div className="relative h-[320px] overflow-hidden rounded-lg bg-neutral-950/70">
            <div className="absolute left-[184px] top-[84px] h-px w-[120px] bg-neutral-700" />
            <div className="absolute left-[184px] top-[204px] h-px w-[120px] bg-neutral-700" />
            <div className="absolute left-[424px] top-[144px] h-px w-[120px] bg-neutral-700" />

            <div className="absolute left-8 top-[60px] w-36 rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2">
              <p className="text-xs text-muted-foreground">Blocked by</p>
              <p className="mt-1 text-sm text-foreground">T-0006984</p>
              <p className="truncate text-xs text-muted-foreground">
                Increase chevron size
              </p>
            </div>

            <div className="absolute left-8 top-[180px] w-36 rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2">
              <p className="text-xs text-muted-foreground">Blocked by</p>
              <p className="mt-1 text-sm text-foreground">T-0006987</p>
              <p className="truncate text-xs text-muted-foreground">
                Capture review screenshots
              </p>
            </div>

            <div className="absolute left-[304px] top-[120px] w-40 rounded-xl border border-[#932794] bg-[#261329] px-3 py-2 shadow-[0_0_0_1px_rgba(147,39,148,0.25)]">
              <p className="text-xs text-[#d7a5ff]">Current ticket</p>
              <p className="mt-1 text-sm font-medium text-white">T-0006983</p>
              <p className="truncate text-xs text-[#d7a5ff]/80">
                Resize, center, test, screenshot
              </p>
            </div>

            <div className="absolute right-8 top-[120px] w-36 rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2">
              <p className="text-xs text-muted-foreground">Blocks</p>
              <p className="mt-1 text-sm text-foreground">T-0006984</p>
              <p className="truncate text-xs text-muted-foreground">
                Increase chevron size
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ProfileAvatar({
  initials = "",
  className,
  icon,
  variant,
}: {
  initials?: string
  className?: string
  icon?: React.ReactNode
  variant?: "bot" | "purple" | "default"
}) {
  return (
    <Avatar
      className={cn(
        "size-7",
        variant === "bot" ? "rounded-full" : "rounded-[10px]",
        className,
      )}
    >
      <AvatarFallback
        className={cn(
          "text-xs font-medium",
          variant === "bot" ? "rounded-full" : "rounded-[10px]",
          variant === "bot"
            ? "bg-[#260E36] text-[#D7A5FF]"
            : variant === "purple"
              ? "bg-[#48284a] text-[#f3daf4]"
              : "bg-neutral-700 text-neutral-50",
        )}
      >
        {icon ?? initials}
      </AvatarFallback>
    </Avatar>
  )
}

function AssigneeMenu({
  assigneeId,
  onAssigneeChange,
  menuLabel = "Assign to",
  triggerClassName,
  children,
}: {
  assigneeId: string
  onAssigneeChange: (id: string) => void
  menuLabel?: string
  triggerClassName: string
  children: React.ReactNode
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className={triggerClassName}>
          {children}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={assigneeId} onValueChange={onAssigneeChange}>
          {ASSIGNEE_OPTIONS.map((option) => (
            <DropdownMenuRadioItem key={option.id} value={option.id}>
              <span className="flex items-center gap-2">
                {option.id === "unclaimed" ? (
                  <span className="relative flex size-6 items-center justify-center rounded-[8px] border-2 border-dashed border-muted-foreground/50" />
                ) : option.id === "evo" ? (
                  <span className="flex size-6 items-center justify-center rounded-[8px] bg-[rgba(246,95,21,0.24)]">
                    <img
                      src={SUBTICKET_HELD_BY_ROTATE_ICON}
                      alt=""
                      aria-hidden
                      className="size-3.5 shrink-0"
                    />
                  </span>
                ) : (
                  <ProfileAvatar
                    initials={option.initials}
                    variant="purple"
                    className="size-6"
                  />
                )}
                <span>{option.name}</span>
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const SIDEBAR_NAV = [
  { icon: MessageSquarePlus, label: "New chat" },
  { icon: MessagesSquare, label: "Chats" },
  { icon: Video, label: "Video" },
  { icon: Layers, label: "Sequences" },
  { icon: Bot, label: "Agents" },
  { icon: TicketCheck, label: "Tickets", page: "Tickets" },
  { icon: User, label: "Personas" },
  { icon: ListTree, label: "Lists" },
  { icon: CreditCard, label: "Plans", page: "Plans" },
  { icon: Database, label: "Data Sources" },
] as const

const PLAN_OPTIONS = [
  {
    name: "Starter",
    price: "$29",
    description: "For small teams validating ticket workflows.",
    features: ["3 seats included", "1 active agent", "Basic ticket insights"],
    current: false,
  },
  {
    name: "Scale",
    price: "$89",
    description: "For growing teams coordinating agentic operations.",
    features: ["12 seats included", "5 active agents", "Advanced ticket routing"],
    current: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with dedicated compliance needs.",
    features: ["Unlimited seats", "Private data sources", "Priority support"],
    current: false,
  },
] as const

const PLAN_USAGE = [
  { label: "Seats", value: "8 of 12", percent: "w-2/3" },
  { label: "Active agents", value: "4 of 5", percent: "w-4/5" },
  { label: "Monthly runs", value: "1,248 of 2,000", percent: "w-3/5" },
] as const

const SIDEBAR_CHATS = {
  Today: [
    "Predicting Turnover: Regression Experiment #4",
    "Enhancing Academic Writing and Communication",
    "Footnotes and Frameworks",
    "Qualitative Methods in Applied Research",
    "Comparative Policy Review and Synthesis",
    "Publication Draft: Results and Discussion",
  ],
  Yesterday: [
    "Methodological Frameworks",
    "Enhancing Academic Writing and Communication",
    "Designing a Rigorous Knowledge Protocol",
    "Ethics and Integrity in Academic Inquiry",
    "Methodological Frameworks",
    "Enhancing Academic Writing and Communication",
    "Designing a Rigorous Knowledge Protocol",
    "Research Design Constraints and Trade-offs",
    "Validity Checks for Survey Instruments",
    "Longitudinal Analysis Planning Notes",
    "Literature Gap Mapping and Prioritization",
    "Academic Style Harmonization Checklist",
    "Cohort Segmentation Model Calibration",
    "Intervention Strategy Review Session",
    "Cross-dataset Entity Resolution Findings",
    "Error Budget and Quality Gate Definitions",
    "Exploratory Narrative Framing Options",
    "Replication Workflow and Protocol Draft",
    "Peer Review Response Preparation",
  ],
} as const

function AppHeader() {
  return (
    <header className="flex h-[60px] shrink-0 items-center justify-between border-b border-neutral-800 px-6">
      <img src={appLogo} alt="Evolve" className="h-9 w-auto" />
      <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5">
        <button type="button" className="rounded-full px-4 py-2 text-[15px] text-muted-foreground hover:text-foreground">
          DASHBOARD
        </button>
        <button type="button" className="rounded-full px-4 py-2 text-[15px] text-muted-foreground hover:text-foreground">
          APP STORE
        </button>
      </nav>
      <div className="flex items-center gap-5">
        <div className="flex h-8 w-56 items-center gap-2 rounded-lg border border-neutral-700 px-2.5">
          <Search className="size-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Search...</span>
        </div>
        <div className="flex size-8 items-center justify-center rounded-xl bg-[rgba(147,39,148,0.55)] text-xs font-medium text-[#fc9fff]">
          AP
        </div>
      </div>
    </header>
  )
}

function AppSidebar({
  currentPage,
  onPageChange,
  isCollapsed,
  onToggleCollapse,
}: {
  currentPage: AppPage
  onPageChange: (page: AppPage) => void
  isCollapsed: boolean
  onToggleCollapse: () => void
}) {
  return (
    <aside
      className={cn(
        "flex shrink-0 flex-col border-r border-neutral-800 transition-[width] duration-200",
        isCollapsed ? "w-[56px]" : "w-64",
      )}
    >
      <nav className="flex flex-col gap-0 px-2 pb-2 pt-3">
        {SIDEBAR_NAV.map((item) => {
          const Icon = item.icon
          const page = "page" in item ? item.page : undefined
          const isActive = page === currentPage
          return (
            <Tooltip key={item.label} disableHoverableContent>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() => {
                    if (page) onPageChange(page)
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg py-2 [font-family:'Jost',sans-serif] text-[15px] font-semibold",
                    isCollapsed ? "justify-center px-0" : "px-3",
                    isActive
                      ? "bg-[#260e36] text-[#d75cdb]"
                      : "text-foreground hover:bg-neutral-800/60",
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  {!isCollapsed && item.label}
                </button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right">{item.label}</TooltipContent>
              )}
            </Tooltip>
          )
        })}
      </nav>
      <div className={cn("flex flex-1 flex-col overflow-hidden px-4 pb-1.5", isCollapsed && "invisible")}>
        <div className="flex-1 overflow-y-auto rounded-xl bg-neutral-900/60 px-1 pb-2">
          {Object.entries(SIDEBAR_CHATS).map(([group, chats]) => (
            <div key={group}>
              <p className="px-2.5 pb-1.5 pt-3 text-[15px] font-semibold text-foreground">
                {group}
              </p>
              {chats.map((chat, i) => (
                <button
                  key={`${group}-${i}`}
                  type="button"
                  className="block w-full truncate rounded-lg px-2.5 py-1.5 text-left text-sm text-muted-foreground hover:bg-neutral-800/60"
                >
                  {chat}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="px-2 pb-4">
        <Tooltip disableHoverableContent>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={onToggleCollapse}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg py-2 [font-family:'Jost',sans-serif] text-[15px] font-semibold text-foreground hover:bg-neutral-800/60",
                isCollapsed ? "justify-center px-0" : "px-3",
              )}
            >
              <PanelLeft className="size-4 shrink-0" />
              {!isCollapsed && "Collapse sidebar"}
            </button>
          </TooltipTrigger>
          {isCollapsed && (
            <TooltipContent side="right">Expand sidebar</TooltipContent>
          )}
        </Tooltip>
      </div>
    </aside>
  )
}

function PlansPage() {
  return (
    <main className="min-h-full bg-[#0a0a0a] px-6 py-8 text-neutral-100 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge className="rounded-[10px] border border-neutral-800 bg-[#260e36] px-3 py-1 text-[#d75cdb]">
              Billing and plans
            </Badge>
            <div className="space-y-2">
              <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold leading-none text-neutral-50">
                Plans
              </h1>
              <p className="max-w-2xl text-base leading-7 text-neutral-400">
                Manage your Evolve subscription, usage limits, seats, and billing cadence from one place.
              </p>
            </div>
          </div>
          <Button className="h-10 rounded-full bg-[#932794] px-5 py-2 text-sm font-medium text-neutral-50 hover:bg-[#7a2080]">
            Upgrade plan
          </Button>
        </section>

        <Card className="overflow-hidden rounded-[20px] border border-neutral-800 bg-neutral-900 py-0 shadow-sm">
          <CardContent className="grid gap-0 px-0 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6 p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="rounded-[10px] bg-[#260e36] px-3 py-1 text-[#d75cdb]">
                  Current plan
                </Badge>
                <span className="text-sm text-neutral-400">Renews on May 27, 2026</span>
              </div>
              <div className="space-y-3">
                <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold leading-none text-neutral-50">
                  Scale
                </h2>
                <p className="max-w-xl text-base leading-7 text-neutral-400">
                  Built for teams running multiple agents across tickets, data sources, and review workflows.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="h-10 rounded-full bg-[#932794] px-5 py-2 text-sm font-medium text-neutral-50 hover:bg-[#7a2080]">
                  Manage subscription
                </Button>
                <Button
                  variant="secondary"
                  className="h-10 rounded-full bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-50 hover:bg-neutral-600"
                >
                  View invoices
                </Button>
              </div>
            </div>
            <div className="border-t border-neutral-800 bg-neutral-800/50 p-6 lg:border-l lg:border-t-0 lg:p-8">
              <p className="text-sm text-neutral-400">Monthly total</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-[family-name:var(--font-heading)] text-4xl font-semibold leading-none text-neutral-50">
                  $89
                </span>
                <span className="pb-1 text-sm text-neutral-400">per month</span>
              </div>
              <div className="mt-6 space-y-3">
                {PLAN_USAGE.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-300">{item.label}</span>
                      <span className="font-medium text-neutral-100">{item.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-neutral-700">
                      <div className={cn("h-full rounded-full bg-[#932794]", item.percent)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="grid gap-4 lg:grid-cols-3">
          {PLAN_OPTIONS.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "rounded-xl border border-neutral-800 bg-neutral-900 py-0 shadow-sm",
                plan.current && "border-[#932794]",
              )}
            >
              <CardHeader className="gap-3 px-5 py-5">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="font-[family-name:var(--font-heading)] text-lg font-medium text-neutral-50">
                    {plan.name}
                  </CardTitle>
                  {plan.current && (
                    <Badge className="rounded-[10px] bg-[#260e36] px-2.5 py-1 text-[#d75cdb]">
                      Active
                    </Badge>
                  )}
                </div>
                <div className="flex items-end gap-2">
                  <span className="font-[family-name:var(--font-heading)] text-3xl font-semibold leading-none text-neutral-50">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-neutral-400">/ month</span>
                  )}
                </div>
                <p className="text-sm leading-5 text-neutral-400">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-5 px-5 pb-5">
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-neutral-300">
                      <span className="flex size-5 items-center justify-center rounded-full bg-neutral-800 text-neutral-100">
                        <Check className="size-3" aria-hidden />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button
                  variant={plan.current ? "secondary" : "default"}
                  className={cn(
                    "h-10 w-full rounded-full px-5 py-2 text-sm font-medium",
                    plan.current
                      ? "bg-neutral-700 text-neutral-50 hover:bg-neutral-600"
                      : "bg-[#932794] text-neutral-50 hover:bg-[#7a2080]",
                  )}
                >
                  {plan.current ? "Current plan" : "Select plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <Card className="rounded-xl border border-neutral-800 bg-neutral-900 py-0 shadow-sm">
            <CardHeader className="border-b border-neutral-800 px-5 py-4">
              <CardTitle className="font-[family-name:var(--font-heading)] text-lg font-medium text-neutral-50">
                Billing details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-5 py-5">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-neutral-400">Payment method</span>
                <span className="font-medium text-neutral-100">Visa ending in 4242</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-neutral-400">Billing owner</span>
                <span className="font-medium text-neutral-100">Antonis Polemitis</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-neutral-400">Next invoice</span>
                <span className="font-medium text-neutral-100">$89 on May 27</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-neutral-800 bg-neutral-900 py-0 shadow-sm">
            <CardHeader className="border-b border-neutral-800 px-5 py-4">
              <CardTitle className="font-[family-name:var(--font-heading)] text-lg font-medium text-neutral-50">
                Plan support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-5 py-5">
              <p className="text-sm leading-5 text-neutral-400">
                Need a private deployment, custom data limits, or procurement support? Talk with the Evolve team.
              </p>
              <Button
                variant="secondary"
                className="h-10 rounded-full bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-50 hover:bg-neutral-600"
              >
                Contact support
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const lastScrollTopRef = useRef(0)
  const sidebarStickyModeRef = useRef<"top" | "bottom">("bottom")
  const [currentPage, setCurrentPage] = useState<AppPage>("Tickets")
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeTicketId, setActiveTicketId] = useState(ROOT_TICKET_ID)
  const [isActivityOpen, setIsActivityOpen] = useState(true)
  const [isSubticketsOpen, setIsSubticketsOpen] = useState(true)
  const [subtaskName, setSubtaskName] = useState("")
  const [isLinkedTicketsOpen, setIsLinkedTicketsOpen] = useState(true)
  const [isAgentOpen, setIsAgentOpen] = useState(true)
  const [agentRunSeconds, setAgentRunSeconds] = useState(26 * 60 + 11)
  const [isPromptDialogOpen, setIsPromptDialogOpen] = useState(false)
  const [isDetailsOpen] = useState(true)
  const [isDetailsSecondaryOpen, setIsDetailsSecondaryOpen] = useState(false)
  const [assigneeId, setAssigneeId] = useState("evo")
  const [heldUntilIndefinite, setHeldUntilIndefinite] = useState(true)
  const [heldUntilDate, setHeldUntilDate] = useState("")
  const [heldUntilTime, setHeldUntilTime] = useState("")
  const [isHeldUntilDialogOpen, setIsHeldUntilDialogOpen] = useState(false)
  const [draftHeldUntilIndefinite, setDraftHeldUntilIndefinite] = useState(true)
  const [draftHeldUntilDate, setDraftHeldUntilDate] = useState("")
  const [draftHeldUntilTime, setDraftHeldUntilTime] = useState("")
  const [descriptionText, setDescriptionText] = useState(DESCRIPTION_TEXT_INITIAL)
  const [draftDescriptionText, setDraftDescriptionText] = useState(DESCRIPTION_TEXT_INITIAL)
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false)
  const descriptionEditorRef = useRef<HTMLDivElement>(null)
  const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null)
  const [commentText, setCommentText] = useState("")
  const [isCommentEditing, setIsCommentEditing] = useState(false)
  const commentEditorRef = useRef<HTMLDivElement>(null)
  const commentTextareaRef = useRef<HTMLTextAreaElement>(null)
  const [activityFilter, setActivityFilter] = useState<ActivityFilter>("all")

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme")
    document.documentElement.classList.toggle("dark", storedTheme !== "light")
    setIsAgentOpen(window.innerWidth >= 1024)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setAgentRunSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  useLayoutEffect(() => {
    if (!isDescriptionEditing || !descriptionTextareaRef.current) {
      return
    }

    const textarea = descriptionTextareaRef.current
    textarea.style.height = "auto"
    textarea.style.height = `${textarea.scrollHeight}px`
  }, [draftDescriptionText, isDescriptionEditing])

  useLayoutEffect(() => {
    if (!isCommentEditing || !commentTextareaRef.current) {
      return
    }

    const textarea = commentTextareaRef.current
    textarea.style.height = "auto"
    textarea.style.height = `${textarea.scrollHeight}px`
  }, [commentText, isCommentEditing])

  useLayoutEffect(() => {
    if (currentPage !== "Tickets") {
      return
    }

    const scrollContainer = scrollContainerRef.current
    const sidebar = sidebarRef.current

    if (!scrollContainer || !sidebar) {
      return
    }

    const setStickyMode = (mode: "top" | "bottom") => {
      sidebarStickyModeRef.current = mode
      const stickyTop =
        mode === "top"
          ? SIDEBAR_STICKY_TOP_OFFSET
          : Math.min(
              SIDEBAR_STICKY_TOP_OFFSET,
              scrollContainer.clientHeight -
                sidebar.offsetHeight -
                SIDEBAR_STICKY_BOTTOM_OFFSET,
            )

      sidebar.style.top = `${stickyTop}px`
    }

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setStickyMode("bottom")
      }
    }

    const handleScroll = () => {
      const nextScrollTop = scrollContainer.scrollTop
      const scrollDelta = nextScrollTop - lastScrollTopRef.current

      if (scrollDelta > 0) {
        setStickyMode("bottom")
      } else if (scrollDelta < 0) {
        const scrollContainerTop = scrollContainer.getBoundingClientRect().top
        const sidebarTop = sidebar.getBoundingClientRect().top

        if (sidebarTop >= scrollContainerTop + SIDEBAR_STICKY_TOP_OFFSET) {
          setStickyMode("top")
        }
      }

      lastScrollTopRef.current = Math.max(nextScrollTop, 0)
    }

    const handleLayoutChange = () => setStickyMode(sidebarStickyModeRef.current)

    lastScrollTopRef.current = scrollContainer.scrollTop
    setStickyMode(sidebarStickyModeRef.current)

    const resizeObserver = new ResizeObserver(handleLayoutChange)
    resizeObserver.observe(scrollContainer)
    resizeObserver.observe(sidebar)
    scrollContainer.addEventListener("wheel", handleWheel, { passive: true })
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleLayoutChange)

    return () => {
      resizeObserver.disconnect()
      scrollContainer.removeEventListener("wheel", handleWheel)
      scrollContainer.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleLayoutChange)
    }
  }, [currentPage])

  const scrollToSection = (section: "activity" | "subtickets" | "linkedTickets" | "blockedBy" | "source") => {
    if (section === "activity") {
      setIsActivityOpen(true)
      document
        .getElementById("activity-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }

    if (section === "subtickets") {
      setIsSubticketsOpen(true)
      document
        .getElementById("subtickets-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }

    if (section === "source") {
      setIsAgentOpen(true)
      const sourceSection = Array.from(
        document.querySelectorAll<HTMLElement>("[data-source-section='true']"),
      ).find((element) => element.offsetParent !== null)
      sourceSection?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }

    if (section === "blockedBy") {
      setIsLinkedTicketsOpen(true)
      requestAnimationFrame(() => {
        document
          .getElementById("blocked-by-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
      return
    }

    setIsLinkedTicketsOpen(true)
    requestAnimationFrame(() => {
      document
        .getElementById("linked-tickets-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  const openHeldUntilDialog = () => {
    setDraftHeldUntilIndefinite(heldUntilIndefinite)
    setDraftHeldUntilDate(heldUntilDate)
    setDraftHeldUntilTime(heldUntilTime)
    setIsHeldUntilDialogOpen(true)
  }

  const saveHeldUntil = () => {
    setHeldUntilIndefinite(draftHeldUntilIndefinite)
    setHeldUntilDate(draftHeldUntilIndefinite ? "" : draftHeldUntilDate)
    setHeldUntilTime(draftHeldUntilIndefinite ? "" : draftHeldUntilTime)
    setIsHeldUntilDialogOpen(false)
  }

  const formatDateForInput = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  const applyDuePreset = (daysFromNow: number) => {
    const nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + daysFromNow)
    setDraftHeldUntilIndefinite(false)
    setDraftHeldUntilDate(formatDateForInput(nextDate))
    if (!draftHeldUntilTime) {
      setDraftHeldUntilTime("09:00")
    }
  }

  const applyIndefinitePreset = () => {
    setDraftHeldUntilIndefinite(true)
    setDraftHeldUntilDate("")
    setDraftHeldUntilTime("")
  }

  const isDuePresetActive = (daysFromNow: number) => {
    const nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + daysFromNow)
    return !draftHeldUntilIndefinite && draftHeldUntilDate === formatDateForInput(nextDate)
  }

  const canSaveHeldUntil =
    draftHeldUntilIndefinite ||
    (draftHeldUntilDate.length > 0 && draftHeldUntilTime.length > 0)
  const activeTicket =
    TICKET_DETAILS[activeTicketId] ?? TICKET_DETAILS[ROOT_TICKET_ID]

  const filteredActivityEntries = CHAT_TRANSCRIPT.filter((entry) => {
    if (activeTicketId === "T-0006985") {
      return entry.author === "EvoResolver"
    }

    if (activityFilter === "comments") {
      return entry.author === CURRENT_USER_NAME
    }

    if (activityFilter === "notes") {
      return entry.author === "EvoResolver"
    }

    return true
  })

  useEffect(() => {
    setIsDescriptionEditing(false)
    setDraftDescriptionText(activeTicket.description)
    setDescriptionText(activeTicket.description)

    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "auto" })
  }, [activeTicket.description])

  const openDescriptionEditor = () => {
    setDraftDescriptionText(descriptionText)
    setIsDescriptionEditing(true)
  }

  const cancelDescriptionEdit = () => {
    setDraftDescriptionText(descriptionText)
    setIsDescriptionEditing(false)
  }

  const saveDescriptionEdit = () => {
    setDescriptionText(draftDescriptionText.trim() || activeTicket.description)
    setIsDescriptionEditing(false)
  }

  const cancelCommentEdit = () => {
    setCommentText("")
    setIsCommentEditing(false)
  }

  useEffect(() => {
    if (!isDescriptionEditing && !isCommentEditing) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target

      if (!(target instanceof Node)) {
        return
      }

      if (
        isDescriptionEditing &&
        descriptionEditorRef.current &&
        !descriptionEditorRef.current.contains(target)
      ) {
        cancelDescriptionEdit()
      }

      if (
        isCommentEditing &&
        commentEditorRef.current &&
        !commentEditorRef.current.contains(target)
      ) {
        cancelCommentEdit()
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  })

  const isUnassignedTicketPage = activeTicketId === "T-0006985"
  const displayedAssigneeId = isUnassignedTicketPage
    ? assigneeId === "evo"
      ? "unclaimed"
      : assigneeId
    : "evo"
  const currentAssignee =
    ASSIGNEE_OPTIONS.find((option) => option.id === displayedAssigneeId) ??
    ASSIGNEE_OPTIONS[0]
  const currentAssigneeLabel =
    isUnassignedTicketPage && currentAssignee.id === "unclaimed"
      ? "Unassigned"
      : currentAssignee.name
  const heldUntilDisplayLabel =
    isUnassignedTicketPage && heldUntilIndefinite
      ? "Indefinitely"
      : "Run completion"

  const assignToYou = () => {
    setAssigneeId("ap")
    setHeldUntilIndefinite(true)
    setHeldUntilDate("")
    setHeldUntilTime("")
    setDraftHeldUntilIndefinite(true)
    setDraftHeldUntilDate("")
    setDraftHeldUntilTime("")
  }
  return (
    <div className="flex h-svh flex-col overflow-hidden bg-[#0a0a0a]">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((p) => !p)}
        />
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto bg-neutral-950">
          {currentPage === "Plans" ? (
            <PlansPage />
          ) : (
          <div className="text-card-foreground">
            <Dialog open={isHeldUntilDialogOpen} onOpenChange={setIsHeldUntilDialogOpen}>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Change due date</DialogTitle>
                  <DialogDescription>
                    Set a due date and time, or keep this ticket indefinitely.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <p className="text-sm text-muted-foreground">Quick presets</p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => applyDuePreset(1)}
                        className={cn(
                          isDuePresetActive(1) && "bg-white text-black hover:bg-white/90",
                        )}
                      >
                        Tomorrow
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => applyDuePreset(2)}
                        className={cn(
                          isDuePresetActive(2) && "bg-white text-black hover:bg-white/90",
                        )}
                      >
                        In 2 days
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => applyDuePreset(7)}
                        className={cn(
                          isDuePresetActive(7) && "bg-white text-black hover:bg-white/90",
                        )}
                      >
                        Next week
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={applyIndefinitePreset}
                        className={cn(
                          draftHeldUntilIndefinite &&
                            "bg-white text-black hover:bg-white/90",
                        )}
                      >
                        Indefinitely
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="held-until-date" className="text-sm text-muted-foreground">Due date</label>
                    <input id="held-until-date" type="date" value={draftHeldUntilDate} onChange={(e) => setDraftHeldUntilDate(e.target.value)} disabled={draftHeldUntilIndefinite} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground disabled:cursor-not-allowed disabled:opacity-50" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="held-until-time" className="text-sm text-muted-foreground">Time</label>
                    <input id="held-until-time" type="time" value={draftHeldUntilTime} onChange={(e) => setDraftHeldUntilTime(e.target.value)} disabled={draftHeldUntilIndefinite} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground disabled:cursor-not-allowed disabled:opacity-50" />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      className="rounded-full"
                      onClick={() => setIsHeldUntilDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      className="rounded-full bg-[#932794] text-neutral-50 hover:bg-[#7e2180]"
                      onClick={saveHeldUntil}
                      disabled={!canSaveHeldUntil}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div className="mx-auto w-full max-w-[1496px] grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,984px)_clamp(380px,calc(100%_-_984px),512px)] lg:gap-0">
              <main className="order-last min-w-0 px-7 pb-6 pt-4 lg:order-none lg:col-span-1">
                <div className="w-full space-y-8">
                <section className="w-full">
                  <div className="flex h-[52px] items-center justify-between pb-2 pt-0">
                    <Breadcrumb>
                      <BreadcrumbList className="gap-2 text-sm leading-5">
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <button
                              type="button"
                              className="font-normal text-muted-foreground hover:text-foreground"
                              onClick={() => {
                                if (activeTicketId !== ROOT_TICKET_ID) {
                                  setActiveTicketId(ROOT_TICKET_ID)
                                }
                              }}
                            >
                              Tickets
                            </button>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        {activeTicketId !== ROOT_TICKET_ID && (
                          <>
                            <BreadcrumbItem>
                              <BreadcrumbLink asChild>
                                <button
                                  type="button"
                                  className="font-normal text-muted-foreground hover:text-foreground"
                                  onClick={() => setActiveTicketId(ROOT_TICKET_ID)}
                                >
                                  {ROOT_TICKET_ID}
                                </button>
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                          </>
                        )}
                        <BreadcrumbItem>
                          <BreadcrumbPage className="font-medium text-muted-foreground">
                            {activeTicketId}
                          </BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                    <div className="flex items-center gap-2">
                      <DependencyGraphDialog>
                        <button
                          type="button"
                          className="flex items-center gap-2.5 rounded-[19px] p-2 text-sm leading-5 text-muted-foreground hover:text-foreground"
                        >
                          <SendToBack className="size-4" />
                          Connections
                        </button>
                      </DependencyGraphDialog>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-[19px] text-muted-foreground hover:bg-transparent hover:text-foreground dark:hover:bg-transparent"
                            aria-label="Copy link"
                          >
                            <Link className="size-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copy link</TooltipContent>
                      </Tooltip>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-[19px] text-muted-foreground hover:bg-transparent hover:text-foreground dark:hover:bg-transparent"
                            aria-label="More"
                          >
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div
                      className={cn(
                        "flex items-center",
                        isUnassignedTicketPage ? "pb-3" : "pb-[22px]",
                      )}
                    >
                      <h2 className="min-w-0 flex-1 text-balance text-[36px] font-semibold leading-[48px] tracking-tight text-neutral-50 [font-family:'Jost',sans-serif]">
                        {activeTicket.title}
                      </h2>
                    </div>
                    {!isUnassignedTicketPage && (
                      <div>
                        <div className="flex items-center justify-between rounded-xl bg-[#102332] bg-[linear-gradient(90deg,rgba(10,10,10,0.8),rgba(10,10,10,0.8)),linear-gradient(90deg,#4299d9,#4299d9)] px-5">
                          <div className="flex items-center justify-center py-3.5">
                            <p className="text-sm leading-5 text-neutral-50">
                              1 of 2 blockers still needs to complete before work can continue
                            </p>
                          </div>
                          <button
                            type="button"
                            className="shrink-0 text-sm font-semibold leading-5 text-[#4299d9] hover:text-[#4299d9] hover:underline"
                            onClick={() => scrollToSection("blockedBy")}
                          >
                            Review blockers
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
                <section className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold">Description</h3>
                  </div>
                  {isDescriptionEditing ? (
                    <div
                      ref={descriptionEditorRef}
                      className="flex w-full flex-col items-end gap-2 rounded-xl border border-neutral-700 bg-neutral-950 p-[14px]"
                    >
                      <textarea
                        ref={descriptionTextareaRef}
                        value={draftDescriptionText}
                        onChange={(event) => setDraftDescriptionText(event.target.value)}
                        className="block min-h-0 w-full resize-none overflow-hidden bg-transparent px-1.5 py-0 text-left text-sm leading-6 text-muted-foreground outline-none placeholder:text-muted-foreground"
                        autoFocus
                        onKeyDown={(event) => {
                          if (event.key === "Escape") {
                            event.preventDefault()
                            cancelDescriptionEdit()
                          }
                          if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                            event.preventDefault()
                            saveDescriptionEdit()
                          }
                        }}
                      />
                      <div className="flex items-center justify-start gap-2">
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          className="h-9 rounded-full bg-neutral-700 px-4 text-sm font-medium leading-5 text-neutral-50 hover:bg-neutral-600"
                          onClick={cancelDescriptionEdit}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          className="h-9 rounded-full bg-[#932794] px-4 text-sm font-medium leading-5 text-neutral-50 hover:bg-[#7e2180]"
                          onClick={saveDescriptionEdit}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="block w-full rounded-[12px] border border-neutral-700 bg-neutral-950 p-[14px] text-left focus-visible:outline-none"
                      onClick={openDescriptionEditor}
                    >
                      <span className="block w-full px-1.5 text-sm leading-6 text-muted-foreground">
                        {descriptionText}
                      </span>
                    </button>
                  )}
                </section>

                {/* Mobile-only: sidebar summary + details cards */}
                <div className="space-y-4 lg:hidden">
                  <Card className="gap-0 overflow-hidden py-0 shadow-xs">
                    <div className="divide-y">
                      <button type="button" className="flex w-full items-center px-5 py-3 text-left hover:bg-muted/20" onClick={() => scrollToSection("activity")}>
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-800"><Activity className="size-4" /></div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-5 text-foreground">
                              {isUnassignedTicketPage ? "3 activity" : "8 activity"}
                            </p>
                            <p className="text-xs leading-4 text-muted-foreground">
                              {isUnassignedTicketPage
                                ? "Update added 18 mins ago"
                                : "Comment added 18 mins ago"}
                            </p>
                          </div>
                        </div>
                      </button>
                      <button type="button" className="flex w-full items-center px-5 py-3 text-left hover:bg-muted/20" onClick={() => scrollToSection("subtickets")}>
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-800"><Workflow className="size-4" /></div>
                          <p className="text-sm font-semibold leading-5 text-foreground">
                            {isUnassignedTicketPage ? "0 sub-tickets" : "5 sub-tickets"}
                          </p>
                        </div>
                      </button>
                      <button type="button" className="flex w-full items-center px-5 py-3 text-left hover:bg-muted/20" onClick={() => scrollToSection("linkedTickets")}>
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-800"><GitCompareArrows className="size-4" /></div>
                          <p className="text-sm font-semibold leading-5 text-foreground">2 linked tickets</p>
                        </div>
                      </button>
                    </div>
                  </Card>
                  <Card data-source-section="true" className="gap-0 py-0 shadow-xs">
                    <CardContent className="space-y-0 px-0 pb-0 pt-0">
                      <dl className="text-sm">
                        <DetailRow label="Held by">
                          <div className="-mx-1.5 -my-1 space-y-1">
                            <AssigneeMenu assigneeId={displayedAssigneeId} onAssigneeChange={setAssigneeId} triggerClassName="flex items-center gap-2 rounded-md px-1.5 py-1 text-foreground transition-colors hover:bg-neutral-800">
                              {currentAssignee.id === "unclaimed" ? (
                                <span className="size-7 shrink-0 rounded-[10px] border-[1.8px] border-dashed border-neutral-600" />
                              ) : currentAssignee.id === "evo" ? (
                                <span className="flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(246,95,21,0.24)]">
                                  <img
                                    src={SUBTICKET_HELD_BY_ROTATE_ICON}
                                    alt=""
                                    aria-hidden
                                    className="size-4 shrink-0"
                                  />
                                </span>
                              ) : (
                                <ProfileAvatar initials={currentAssignee.initials} variant="purple" />
                              )}
                              <span className={currentAssignee.id === "unclaimed" ? "text-muted-foreground" : "text-foreground"}>{currentAssigneeLabel}</span>
                            </AssigneeMenu>
                            {currentAssignee.id === "unclaimed" || currentAssignee.id === "evo" ? <button type="button" className="ml-1.5 text-left font-semibold text-[#4299D9] hover:underline" onClick={assignToYou}>Assign to you</button> : <AssigneeMenu assigneeId={displayedAssigneeId} onAssigneeChange={setAssigneeId} triggerClassName="ml-1.5 text-left font-semibold text-[#4299D9] hover:underline">Change</AssigneeMenu>}
                          </div>
                        </DetailRow>
                        {currentAssignee.id !== "unclaimed" && (
                          <DetailRow label="Held until">
                            <div className="space-y-1">
                              <button type="button" onClick={openHeldUntilDialog} className="text-left text-muted-foreground">
                                {heldUntilDisplayLabel}
                              </button>
                              <button type="button" className="block text-left font-semibold text-[#4299D9] hover:underline" onClick={openHeldUntilDialog}>Change</button>
                            </div>
                          </DetailRow>
                        )}
                        <DetailRow label="Status">
                          <div className="flex flex-col gap-1">
                            {isUnassignedTicketPage ? (
                              <span
                                className="inline-flex h-7 w-fit items-center gap-2 rounded-[10px] px-2 text-sm text-green-400"
                                style={{
                                  background:
                                    "linear-gradient(90deg, rgba(10,10,10,0.8), rgba(10,10,10,0.8)), linear-gradient(90deg, rgb(84,255,167), rgb(84,255,167))",
                                }}
                              >
                                <Check className="size-4" />
                                Completed
                              </span>
                            ) : (
                              <>
                                <button type="button" onClick={() => scrollToSection("blockedBy")} className="inline-flex h-7 w-fit items-center gap-2 rounded-[10px] bg-[#322313] px-2 text-sm text-[#d48a3b] transition-opacity hover:opacity-90"><Clock className="size-4" />Pending</button>
                                <button type="button" className="w-fit text-left text-muted-foreground hover:underline" onClick={() => scrollToSection("blockedBy")}>Waiting on blockers</button>
                              </>
                            )}
                          </div>
                        </DetailRow>
                        <DetailRow label="Priority"><div className="flex items-center gap-2"><Contrast className="size-4 shrink-0 text-amber-500" aria-hidden /><span className="text-foreground">Medium</span></div></DetailRow>
                        <DetailRow label="Scope"><span className="text-foreground">Frontend</span></DetailRow>
                        <DetailRow label="Labels" isLast>
                          <div className="flex items-center gap-1 pt-0.5">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#262626] px-2 py-[3px] text-sm font-normal leading-5 text-[#fafafa]"><img src={SIDEBAR_LABEL_DOT_ICON} alt="" aria-hidden className="size-2.5 shrink-0" />Backlog</span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#262626] px-2 py-[3px] text-sm font-normal leading-5 text-[#fafafa]"><img src={SIDEBAR_LABEL_DOT_ICON} alt="" aria-hidden className="size-2.5 shrink-0" />Bug</span>
                          </div>
                        </DetailRow>
                      </dl>
                    </CardContent>
                  </Card>
                </div>

                <section id="subtickets-section" className="space-y-2">
                  <div id="linked-tickets-section" className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8 shrink-0 rounded-[10px] bg-neutral-800 hover:bg-neutral-700"
                        aria-label="Collapse suggestions"
                        aria-expanded={isSubticketsOpen}
                        onClick={() => setIsSubticketsOpen((prev) => !prev)}
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            !isSubticketsOpen && "-rotate-90",
                          )}
                        />
                      </Button>
                      <h3 className="text-base font-semibold">Sub-tickets</h3>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8 rounded-full text-muted-foreground"
                        aria-label="Change layout"
                      >
                        <ArrowDownUp className="size-4" />
                      </Button>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-full bg-neutral-800 text-foreground hover:bg-neutral-700"
                            aria-label="Add subtask"
                          >
                            <Plus className="size-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          align="end"
                          sideOffset={8}
                          className="w-[424px] p-4 pb-3"
                        >
                          <div className="flex flex-col gap-3">
                            <p className="text-sm font-normal leading-none text-neutral-50">
                              Ticket
                            </p>
                            <input
                              type="text"
                              value={subtaskName}
                              onChange={(e) => setSubtaskName(e.target.value)}
                              placeholder="Enter a ticket name or ID"
                              className="h-10 w-full rounded-lg border border-neutral-700 bg-transparent px-4 text-sm text-neutral-50 placeholder:text-neutral-400 focus:outline-none focus:ring-0"
                            />
                            <div className="flex justify-end">
                              <button
                                type="button"
                                className="flex h-10 items-center justify-center rounded-full bg-neutral-800 px-5 text-sm font-medium text-neutral-400 hover:bg-neutral-700 hover:text-neutral-200"
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {isUnassignedTicketPage ? (
                    <div className="text-sm text-muted-foreground">
                      No sub-tasks
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-800">
                          <div className="h-full w-[31%] rounded-full bg-neutral-300" />
                        </div>
                        <span className="shrink-0 text-sm text-muted-foreground">
                          3 of 5 completed
                        </span>
                      </div>

                      {isSubticketsOpen && (
                        <Card className="gap-0 overflow-hidden bg-neutral-900 py-0 shadow-xs">
                      {/* Table header */}
                      <div className="flex h-10 items-center border-b">
                        <div className="flex min-w-0 flex-1 items-center px-3 text-xs text-neutral-400">Name</div>
                        <div className="w-12 shrink-0 px-2 text-center text-xs text-neutral-400">Pri.</div>
                        <div className="w-14 shrink-0 px-2 text-center text-xs text-neutral-400">Hby.</div>
                        <div className="w-32 shrink-0 px-2 text-xs text-neutral-400">Status</div>
                        <div className="w-12 shrink-0" />
                      </div>
                      {/* Table rows */}
                      {SUBTASK_SUGGESTIONS.map((label, index) => (
                        <div
                          key={label}
                          className={cn(
                            "flex items-center transition-colors hover:bg-neutral-800/40",
                            index !== SUBTASK_SUGGESTIONS.length - 1 && "border-b",
                          )}
                        >
                          {/* Name cell */}
                          {SUBTASK_ROW_IDS[index] === "T-0006985" ? (
                            <button
                              type="button"
                              className="flex min-w-0 flex-1 items-center gap-2.5 px-3 py-3.5 text-left"
                              onClick={() => setActiveTicketId("T-0006985")}
                            >
                              <span className="inline-flex h-7 shrink-0 items-center justify-center rounded-[10px] bg-neutral-800 px-2 text-sm text-neutral-300">
                                {SUBTASK_ROW_IDS[index]}
                              </span>
                              <span className="min-w-0 flex-1 truncate text-sm text-[#f5f5f5]">
                                {label}
                              </span>
                            </button>
                          ) : (
                            <div className="flex min-w-0 flex-1 items-center gap-2.5 px-3 py-3.5">
                              <span className="inline-flex h-7 shrink-0 items-center justify-center rounded-[10px] bg-neutral-800 px-2 text-sm text-neutral-300">
                                {SUBTASK_ROW_IDS[index]}
                              </span>
                              <span className="min-w-0 flex-1 truncate text-sm text-[#f5f5f5]">
                                {label}
                              </span>
                            </div>
                          )}
                          {/* Priority */}
                          <div className="flex w-12 shrink-0 items-center justify-center px-2">
                            <img
                              src={
                                index < 2
                                  ? SUBTICKET_PRIORITY_ICON_RED
                                  : SUBTICKET_PRIORITY_ICON_AMBER
                              }
                              alt=""
                              aria-hidden
                              className="size-4 shrink-0"
                            />
                          </div>
                          {/* Assignee */}
                          <div className="flex w-14 shrink-0 items-center justify-center px-2">
                            {index < 2 ? (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(246,95,21,0.24)]">
                                    <img
                                      src={SUBTICKET_HELD_BY_ROTATE_ICON}
                                      alt=""
                                      aria-hidden
                                      className="size-4 shrink-0"
                                    />
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>EvoResolver</TooltipContent>
                              </Tooltip>
                            ) : index === 2 ? (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="size-7 shrink-0 rounded-[10px] border-[1.8px] border-dashed border-neutral-600" />
                                </TooltipTrigger>
                                <TooltipContent>Unclaimed</TooltipContent>
                              </Tooltip>
                            ) : (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(147,39,148,0.55)] text-xs font-medium leading-none text-[#fc9fff]">
                                    {CURRENT_USER_INITIALS}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>Antonis Polemitis</TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                          {/* Status */}
                          <div className="flex w-32 shrink-0 items-center px-2">
                            {COMPLETED_SUBTASK_ROW_INDEXES.has(index) ? (
                              <span
                                className="inline-flex h-7 items-center gap-2 rounded-[10px] px-2 text-sm text-green-400"
                                style={{ background: "linear-gradient(90deg, rgba(10,10,10,0.8), rgba(10,10,10,0.8)), linear-gradient(90deg, rgb(84,255,167), rgb(84,255,167))" }}
                              >
                                <Check className="size-4" />
                                Complete
                              </span>
                            ) : (
                              <span className="inline-flex h-7 items-center gap-2 rounded-[10px] bg-neutral-800 px-2 text-sm text-neutral-300">
                                <img src="/src/assets/in-progress.svg" alt="" className="size-3.5 shrink-0" />
                                In progress
                              </span>
                            )}
                          </div>
                          {/* Actions */}
                          <div className="flex w-12 shrink-0 items-center justify-center px-2">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="size-8 shrink-0 text-muted-foreground"
                                  aria-label="Sub-ticket row actions"
                                >
                                  <MoreHorizontal className="size-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-32">
                                <DropdownMenuItem variant="destructive">
                                  Unlink
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                        </Card>
                      )}
                    </>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant="secondary"
                        size="icon"
                        className="size-8 shrink-0"
                        aria-label="Toggle linked tickets"
                        aria-expanded={isLinkedTicketsOpen}
                        onClick={() => setIsLinkedTicketsOpen((prev) => !prev)}
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            !isLinkedTicketsOpen && "-rotate-90",
                          )}
                        />
                      </Button>
                      <h3 className="text-base font-semibold">Linked tickets</h3>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8 text-muted-foreground"
                        aria-label="Change linked tickets layout"
                      >
                        <ArrowDownUp className="size-4" />
                      </Button>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-full bg-neutral-800 text-foreground hover:bg-neutral-700"
                            aria-label="Add linked ticket"
                          >
                            <Plus className="size-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          align="end"
                          sideOffset={8}
                          className="w-[424px] p-4 pb-3"
                        >
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <p className="text-sm font-normal leading-none text-neutral-50">
                                Relationship
                              </p>
                              <div className="relative">
                                <select
                                  defaultValue="is blocked by"
                                  className="h-10 w-full appearance-none rounded-lg border border-neutral-700 bg-neutral-900 pl-4 pr-10 text-sm text-neutral-50 focus:outline-none focus:ring-0 cursor-pointer"
                                >
                                  <option value="is blocked by">is blocked by</option>
                                  <option value="blocks">blocks</option>
                                  <option value="child of">child of</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <p className="text-sm font-normal leading-none text-neutral-50">
                                Ticket
                              </p>
                              <input
                                type="text"
                                placeholder="Enter a ticket name or ID"
                                className="h-10 w-full rounded-lg border border-neutral-700 bg-transparent px-4 text-sm text-neutral-50 placeholder:text-neutral-400 focus:outline-none focus:ring-0"
                              />
                            </div>
                            <div className="flex justify-end">
                              <button
                                type="button"
                                className="flex h-10 items-center justify-center rounded-full bg-neutral-800 px-5 text-sm font-medium text-neutral-400 hover:bg-neutral-700 hover:text-neutral-200"
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  {isLinkedTicketsOpen && (
                    <div className="space-y-4">
                      {isUnassignedTicketPage && (
                        <div>
                          <p className="mb-3 text-sm font-medium text-muted-foreground">
                            Child of
                          </p>
                          <div className="overflow-hidden rounded-xl bg-neutral-900">
                            <div className="flex items-center transition-colors hover:bg-neutral-800/40">
                              <button
                                type="button"
                                className="flex min-w-0 flex-1 items-center gap-2.5 px-3 py-3.5 text-left"
                                onClick={() => setActiveTicketId(ROOT_TICKET_ID)}
                              >
                                <span className="inline-flex h-7 shrink-0 items-center justify-center rounded-[10px] bg-neutral-800 px-2 text-sm text-neutral-300">
                                  {ROOT_TICKET_ID}
                                </span>
                                <span className="min-w-0 truncate text-sm text-[#f5f5f5]">
                                  {TICKET_DETAILS[ROOT_TICKET_ID].title}
                                </span>
                              </button>
                              <div className="flex w-12 shrink-0 items-center justify-center px-2">
                                <img
                                  src={SUBTICKET_PRIORITY_ICON_AMBER}
                                  alt=""
                                  aria-hidden
                                  className="size-4 shrink-0"
                                />
                              </div>
                              <div className="flex w-14 shrink-0 items-center justify-center px-2">
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <div className="flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(246,95,21,0.24)]">
                                      <img
                                        src={SUBTICKET_HELD_BY_ROTATE_ICON}
                                        alt=""
                                        aria-hidden
                                        className="size-4 shrink-0"
                                      />
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>EvoResolver</TooltipContent>
                                </Tooltip>
                              </div>
                              <div className="flex w-32 shrink-0 items-center px-2">
                                <span className="inline-flex h-7 w-fit items-center gap-2 rounded-[10px] bg-[#322313] px-2 text-sm text-[#d48a3b]">
                                  <Clock className="size-4" />
                                  Pending
                                </span>
                              </div>
                              <div className="flex w-12 shrink-0 items-center justify-center px-2">
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="size-8 shrink-0 text-muted-foreground"
                                  aria-label="Parent ticket actions"
                                >
                                  <MoreHorizontal className="size-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {!isUnassignedTicketPage && (
                        <div id="blocked-by-section">
                          <p className="mb-3 text-sm font-medium text-muted-foreground">Blocked by</p>
                          <div className="overflow-hidden rounded-xl bg-neutral-900">
                            {LINKED_TICKETS_BLOCKED_BY.map((ticket, idx) => (
                              <div
                                key={ticket.id}
                                className={cn(
                                  "flex items-center",
                                  idx !== LINKED_TICKETS_BLOCKED_BY.length - 1 && "border-b",
                                )}
                              >
                                <div className="flex min-w-0 flex-1 items-center gap-2.5 px-3 py-3.5">
                                  <span className="inline-flex h-7 shrink-0 items-center justify-center rounded-[10px] bg-neutral-800 px-2 text-sm text-neutral-300">
                                    {ticket.id}
                                  </span>
                                  <span className="min-w-0 truncate text-sm text-[#f5f5f5]">{ticket.name}</span>
                                </div>
                                <div className="flex w-12 shrink-0 items-center justify-center px-2">
                                  <img
                                    src={
                                      ticket.id === "T-0006984"
                                        ? SUBTICKET_PRIORITY_ICON_RED
                                        : SUBTICKET_PRIORITY_ICON_AMBER
                                    }
                                    alt=""
                                    aria-hidden
                                    className="size-4 shrink-0"
                                  />
                                </div>
                                <div className="flex w-14 shrink-0 items-center justify-center px-2">
                                  {idx === 0 ? (
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <div className="size-7 shrink-0 rounded-[10px] border-[1.8px] border-dashed border-neutral-600" />
                                      </TooltipTrigger>
                                      <TooltipContent>Unclaimed</TooltipContent>
                                    </Tooltip>
                                  ) : (
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <div className="flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(246,95,21,0.24)]">
                                          <img
                                            src={SUBTICKET_HELD_BY_ROTATE_ICON}
                                            alt=""
                                            aria-hidden
                                            className="size-4 shrink-0"
                                          />
                                        </div>
                                      </TooltipTrigger>
                                      <TooltipContent>EvoResolver</TooltipContent>
                                    </Tooltip>
                                  )}
                                </div>
                                <div className="flex w-32 shrink-0 items-center px-2">
                                  <span
                                    className={cn(
                                      "inline-flex h-7 items-center gap-2 rounded-[10px] px-2 text-sm",
                                      ticket.status === "complete"
                                        ? "text-green-400"
                                        : "bg-neutral-800 text-neutral-300",
                                    )}
                                    style={
                                      ticket.status === "complete"
                                        ? {
                                            background:
                                              "linear-gradient(90deg, rgba(10,10,10,0.8), rgba(10,10,10,0.8)), linear-gradient(90deg, rgb(84,255,167), rgb(84,255,167))",
                                          }
                                        : undefined
                                    }
                                  >
                                    {ticket.status === "complete" ? (
                                      <><Check className="size-3.5 text-emerald-400" />Complete</>
                                    ) : (
                                      <><img src="/src/assets/in-progress.svg" alt="" className="size-3.5 shrink-0" />In progress</>
                                    )}
                                  </span>
                                </div>
                                <div className="flex w-12 shrink-0 items-center justify-center px-2">
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="size-8 shrink-0 text-muted-foreground"
                                        aria-label="Linked ticket row actions"
                                      >
                                        <MoreHorizontal className="size-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-32">
                                      <DropdownMenuItem variant="destructive">
                                        Unlink
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div>
                        <p className="mb-3 text-sm font-medium text-muted-foreground">Blocks</p>
                        <div className="overflow-hidden rounded-xl bg-neutral-900">
                          {LINKED_TICKETS_BLOCKS.map((ticket, idx) => (
                            <div key={ticket.id} className="flex items-center">
                              <div className="flex min-w-0 flex-1 items-center gap-2.5 px-3 py-3.5">
                                <span className="inline-flex h-7 shrink-0 items-center justify-center rounded-[10px] bg-neutral-800 px-2 text-sm text-neutral-300">
                                  {ticket.id}
                                </span>
                                <span className="min-w-0 truncate text-sm text-[#f5f5f5]">{ticket.name}</span>
                              </div>
                              <div className="flex w-12 shrink-0 items-center justify-center px-2">
                                <img
                                  src={
                                    ticket.id === "T-0006984"
                                      ? SUBTICKET_PRIORITY_ICON_RED
                                      : SUBTICKET_PRIORITY_ICON_AMBER
                                  }
                                  alt=""
                                  aria-hidden
                                  className="size-4 shrink-0"
                                />
                              </div>
                              <div className="flex w-14 shrink-0 items-center justify-center px-2">
                                {idx === 0 ? (
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <div className="flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(246,95,21,0.24)]">
                                        <img
                                          src={SUBTICKET_HELD_BY_ROTATE_ICON}
                                          alt=""
                                          aria-hidden
                                          className="size-4 shrink-0"
                                        />
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>EvoResolver</TooltipContent>
                                  </Tooltip>
                                ) : (
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <div className="size-7 shrink-0 rounded-[10px] border-[1.8px] border-dashed border-neutral-600" />
                                    </TooltipTrigger>
                                    <TooltipContent>Unclaimed</TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                              <div className="flex w-32 shrink-0 items-center px-2">
                                <span className="inline-flex h-7 w-fit items-center gap-2 rounded-[10px] bg-[#322313] px-2 text-sm text-[#d48a3b]">
                                  <Clock className="size-4" />
                                  Pending
                                </span>
                              </div>
                              <div className="flex w-12 shrink-0 items-center justify-center px-2">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      className="size-8 shrink-0 text-muted-foreground"
                                      aria-label="Blocking ticket row actions"
                                    >
                                      <MoreHorizontal className="size-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="w-32">
                                    <DropdownMenuItem variant="destructive">
                                      Unlink
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </section>

                {/* Mobile-only: Run details + Advanced collapsed */}
                <div className="space-y-4 lg:hidden">
                  {/* Mobile Source card — matches desktop Figma design */}
                  <Card className="gap-0 overflow-hidden rounded-xl border-0 bg-neutral-900 py-0 shadow-xs">
                    {/* Header */}
                    <div className="flex items-center px-5 py-[10px]">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          className="-ml-2 flex size-8 shrink-0 items-center justify-center rounded-xl text-neutral-300 hover:bg-neutral-800/70"
                          aria-label="Toggle agent details"
                          aria-expanded={isAgentOpen}
                          onClick={() => setIsAgentOpen((prev) => !prev)}
                        >
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform",
                              !isAgentOpen && "-rotate-90",
                            )}
                          />
                        </button>
                        <span className="text-base font-semibold leading-6 text-neutral-50">
                          Source
                        </span>
                      </div>
                    </div>

                    {isAgentOpen && (
                      <>
                        {/* Agent card */}
                        <div className="px-3 pb-3">
                          <div className="overflow-hidden rounded-[12px] border border-neutral-800 bg-neutral-950">
                            <div className="flex items-center gap-4 p-4">
                              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(246,95,21,0.24)]">
                                <img src={SUBTICKET_HELD_BY_ROTATE_ICON} alt="" aria-hidden className="size-5 shrink-0" />
                              </div>
                              <div className="min-w-0 flex-1 space-y-0.5">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-semibold leading-5 text-neutral-50">EvoResolver</p>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <button
                                        type="button"
                                        className="flex size-6 items-center justify-center rounded-md text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
                                        aria-label="More options"
                                      >
                                        <MoreHorizontal className="size-4" />
                                      </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-44">
                                      <DropdownMenuItem onSelect={() => setIsPromptDialogOpen(true)}>
                                        See full prompt
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                                <p className="text-sm font-semibold leading-5 text-neutral-400">
                                  Agent Execution Chevron: Resize, Center, Test, Screenshot
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-1 px-2 pb-2">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button type="button" className="flex h-8 flex-1 items-center justify-center rounded-[12px] bg-[rgba(220,38,38,0.16)] hover:bg-[rgba(220,38,38,0.26)]" aria-label="Stop run">
                                    <CircleStop className="size-4 text-red-400" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>Stop run</TooltipContent>
                              </Tooltip>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button type="button" className="flex h-8 flex-1 items-center justify-center rounded-[12px] bg-neutral-800 hover:bg-neutral-700" aria-label="Rerun">
                                    <Play className="size-4 text-neutral-300" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>Rerun</TooltipContent>
                              </Tooltip>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button type="button" className="flex h-8 flex-1 items-center justify-center rounded-[12px] bg-neutral-800 hover:bg-neutral-700" aria-label="Download run output">
                                    <Download className="size-4 text-neutral-300" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>Download run output</TooltipContent>
                              </Tooltip>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button type="button" className="flex h-8 flex-1 items-center justify-center rounded-[12px] bg-neutral-800 hover:bg-neutral-700" aria-label="Open run details">
                                    <ExternalLink className="size-4 text-neutral-300" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>Open run details</TooltipContent>
                              </Tooltip>
                            </div>
                          </div>
                        </div>

                        {/* Detail rows */}
                        <dl className="text-sm">
                          <div className="flex items-start border-b border-neutral-800 px-5 py-3">
                            <dt className="w-24 shrink-0 text-sm font-normal leading-5 text-neutral-400">Agent run</dt>
                            <dd className="min-w-0 flex-1 space-y-1">
                              <div className="inline-flex h-7 w-[114px] items-center justify-center gap-2 rounded-[10px] bg-neutral-800 px-2 text-sm font-normal leading-5 text-neutral-300">
                                <img src="/src/assets/in-progress.svg" alt="" className="size-4 shrink-0" />
                                In progress
                              </div>
                              <p className="text-sm font-normal leading-5 text-muted-foreground">
                                {`Running ${Math.floor(agentRunSeconds / 60)}m ${agentRunSeconds % 60}s`}
                              </p>
                            </dd>
                          </div>
                          <div className="flex flex-col gap-2 border-b border-neutral-800 px-5 py-3">
                            <dt className="text-sm font-normal leading-5 text-neutral-400">Pull requests</dt>
                            <dd className="flex flex-wrap items-center gap-1">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="inline-flex h-7 items-center gap-1.5 rounded-[10px] bg-neutral-800 px-2 text-sm font-normal leading-5 text-neutral-300">
                                    <GitPullRequestArrow className="size-3.5 shrink-0 text-[#5CB55C]" />
                                    #7424
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>Open</TooltipContent>
                              </Tooltip>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="inline-flex h-7 items-center gap-1.5 rounded-[10px] bg-neutral-800 px-2 text-sm font-normal leading-5 text-neutral-300">
                                    <GitPullRequestArrow className="size-3.5 shrink-0 text-[#5CB55C]" />
                                    #7426
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>Open</TooltipContent>
                              </Tooltip>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="inline-flex h-7 items-center gap-1.5 rounded-[10px] bg-neutral-800 px-2 text-sm font-normal leading-5 text-neutral-300">
                                    <GitMerge className="size-3.5 shrink-0 text-[#9d72f2]" />
                                    #7428
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>Merged</TooltipContent>
                              </Tooltip>
                            </dd>
                          </div>
                          <div className="px-5 py-3">
                            <p className="text-xs font-normal leading-4 text-neutral-400">
                              Created 19 hours ago by Antonis Polemitis
                            </p>
                          </div>
                        </dl>
                      </>
                    )}
                  </Card>
                  <Card className="gap-0 py-0 shadow-xs">
                    <CardHeader className={cn("grid-rows-[auto] items-center gap-0 px-4 py-4", isDetailsSecondaryOpen && "border-b [.border-b]:pb-4")}>
                      <div className="flex flex-wrap items-center gap-2">
                        <Button type="button" variant="ghost" size="icon" className="size-7 -ml-1" onClick={() => setIsDetailsSecondaryOpen((p) => !p)}>
                          <ChevronRight className={cn("size-4 transition-transform", isDetailsSecondaryOpen && "rotate-90")} />
                        </Button>
                        <CardTitle className="text-base font-semibold">Advanced</CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                </div>

                <div id="activity-section" className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-8 shrink-0 rounded-[10px] bg-neutral-800 hover:bg-neutral-700"
                      aria-label="Collapse activity"
                      aria-expanded={isActivityOpen}
                      onClick={() => setIsActivityOpen((prev) => !prev)}
                    >
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform",
                          !isActivityOpen && "-rotate-90",
                        )}
                      />
                    </Button>
                    <h3 className="text-base font-semibold">Activity</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-8 rounded-full text-muted-foreground"
                      aria-label="Filter list"
                    >
                      <ListFilter className="size-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-8 rounded-full text-muted-foreground"
                      aria-label="Change layout"
                    >
                      <ArrowDownUp className="size-4" />
                    </Button>
                  </div>
                </div>

                {isActivityOpen && (
                  <section className="-mt-1 space-y-4">
                  <div className="flex w-fit items-center gap-0.5 rounded-[10px] bg-neutral-900 p-1">
                    <button
                      type="button"
                      className={cn(
                        "h-7 rounded-lg px-3 text-sm font-medium",
                        activityFilter === "all"
                          ? "bg-neutral-700 text-neutral-50"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                      onClick={() => setActivityFilter("all")}
                    >
                      All
                    </button>
                    <button
                      type="button"
                      className={cn(
                        "h-7 rounded-lg px-3 text-sm font-medium",
                        activityFilter === "comments"
                          ? "bg-neutral-700 text-neutral-50"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                      onClick={() => setActivityFilter("comments")}
                    >
                      Comments
                    </button>
                    <button
                      type="button"
                      className={cn(
                        "h-7 rounded-lg px-3 text-sm font-medium",
                        activityFilter === "notes"
                          ? "bg-neutral-700 text-neutral-50"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                      onClick={() => setActivityFilter("notes")}
                    >
                      Updates
                    </button>
                  </div>

                  {isCommentEditing ? (
                    <div
                      ref={commentEditorRef}
                      className="flex w-full flex-col items-end gap-2 rounded-xl border border-neutral-700 bg-neutral-950 px-[14px] pt-2 pb-[14px] focus-within:border-[#4299d9]"
                    >
                      <textarea
                        ref={commentTextareaRef}
                        value={commentText}
                        onChange={(event) => setCommentText(event.target.value)}
                        placeholder="Enter a comment"
                        className="block min-h-6 w-full resize-none overflow-hidden bg-transparent px-1.5 py-0 text-left text-sm leading-6 text-muted-foreground outline-none placeholder:text-muted-foreground"
                        autoFocus
                        onKeyDown={(event) => {
                          if (event.key === "Escape") {
                            event.preventDefault()
                            setCommentText("")
                            setIsCommentEditing(false)
                          }
                        }}
                      />
                      <div className="flex items-center justify-start gap-2">
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          className="h-9 rounded-full bg-neutral-700 px-4 text-sm font-medium leading-5 text-neutral-50 hover:bg-neutral-600"
                          onClick={cancelCommentEdit}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          className="h-9 rounded-full bg-[#932794] px-4 text-sm font-medium leading-5 text-neutral-50 hover:bg-[#7e2180]"
                          onClick={() => setIsCommentEditing(false)}
                        >
                          Comment
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="block w-full rounded-[12px] border border-neutral-700 bg-neutral-950 px-[14px] py-2 text-left focus-visible:border-[#4299d9] focus-visible:outline-none"
                      onClick={() => setIsCommentEditing(true)}
                    >
                      <span className="block w-full px-1.5 text-sm leading-6 text-muted-foreground">
                        Enter a comment
                      </span>
                    </button>
                  )}

                  <div className="space-y-4">
                    {filteredActivityEntries.map((entry, entryIdx) => {
                      const entryTags = entry.tags ?? []
                      const isBot = entry.initials === "CB"
                      const isUser = entry.author === CURRENT_USER_NAME
                      const subtitle = entryTags.length > 0 ? entryTags.join(", ") : null

                      return (
                        <div key={entryIdx} className="flex items-start gap-3">
                          {/* Avatar */}
                          <div className="mt-2 shrink-0">
                            {isBot ? (
                              <div className="flex size-9 items-center justify-center rounded-[10px] bg-[rgba(246,95,21,0.24)]">
                                <img
                                  src={SUBTICKET_HELD_BY_ROTATE_ICON}
                                  alt=""
                                  aria-hidden
                                  className="h-[20px] w-[20px] shrink-0"
                                />
                              </div>
                            ) : (
                              <div className="flex size-8 items-center justify-center rounded-[12px] bg-[rgba(147,39,148,0.55)] text-xs font-medium leading-none text-[#fc9fff]">
                                {entry.initials}
                              </div>
                            )}
                          </div>

                          {/* Card */}
                          <div
                            className={cn(
                              "min-w-0 flex-1 overflow-hidden rounded-[12px]",
                              isBot
                                ? "border-[1.6px] border-[rgba(246,95,21,0.28)]"
                                : "bg-neutral-900",
                            )}
                            style={
                              isBot
                                ? {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(90deg, #171717 0%, #171717 100%)",
                                  }
                                : undefined
                            }
                          >
                            {/* Header */}
                            <div className="flex items-start justify-between px-5 pt-4">
                              <div className="flex flex-col gap-0.5">
                                <div className="flex items-center gap-2.5">
                                  <span className="text-sm font-semibold leading-5 text-[#fafafa]">
                                    {entry.author}
                                  </span>
                                  <span className="size-[3px] shrink-0 rounded-full bg-neutral-500" />
                                  <span className="text-xs font-normal leading-4 text-neutral-400">
                                    {entry.time}
                                  </span>
                                </div>
                                {subtitle && (
                                  <p className="text-sm font-semibold leading-5 text-neutral-400">
                                    {subtitle}
                                  </p>
                                )}
                              </div>
                              {isUser && (
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <button
                                      type="button"
                                      className="flex size-4 shrink-0 items-center justify-center text-neutral-400 hover:text-neutral-200"
                                      aria-label="Message actions"
                                    >
                                      <MoreHorizontal className="size-4" />
                                    </button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="w-32">
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem variant="destructive">
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              )}
                            </div>

                            {/* Body */}
                            <div className={cn("px-5", isBot ? "pb-5 pt-3" : "py-4")}>
                              {entry.messages.map((message) => (
                                <div key={message}>
                                  {message === ACTIVITY_REVIEWED_MESSAGE ? (
                                    <p className="text-sm leading-6 text-[#e5e5e5]">
                                      Ticket <strong>T-0006982</strong> was
                                      reviewed and confirmed as{" "}
                                      <strong>in progress</strong>. Access and
                                      file scope were validated, the latest note
                                      was checked against the ticket
                                      requirements, and the next step is to
                                      review the...{" "}
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <button
                                            type="button"
                                            className="font-semibold text-[#e5e5e5] hover:underline"
                                          >
                                            See more
                                          </button>
                                        </DialogTrigger>
                                        <DialogContent>
                                          <DialogHeader>
                                            <DialogTitle>
                                              Activity update
                                            </DialogTitle>
                                          </DialogHeader>
                                          <p className="text-sm leading-6 text-foreground">
                                            {message}
                                          </p>
                                        </DialogContent>
                                      </Dialog>
                                    </p>
                                  ) : message === ACTIVITY_WORK_STARTED_MESSAGE ? (
                                    <p className="text-sm leading-6 text-[#e5e5e5]">
                                      Work started on ticket{" "}
                                      <strong>T-0006982</strong> in the{" "}
                                      <strong>main branch</strong>. Initial
                                      checks passed, including authentication,
                                      ticket access, ownership validation, and
                                      repository write access within the ticket
                                      scope.
                                    </p>
                                  ) : (
                                    <p className="text-sm leading-6 text-[#e5e5e5]">
                                      {message}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  </section>
                )}
                </div>
              </main>

              <aside
                className="hidden min-w-0 pl-0 lg:order-none lg:col-span-1 lg:block lg:self-start"
              >
                <div
                  ref={sidebarRef}
                  className="space-y-4 py-5 pr-5 lg:sticky lg:transition-none"
                >
                <Card className="gap-0 overflow-hidden py-0 shadow-xs">
                  <div className="divide-y">
                    <button
                      type="button"
                      className="flex w-full items-center px-5 py-3 text-left hover:bg-muted/20"
                      onClick={() => scrollToSection("activity")}
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-4">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-800">
                          <Activity className="size-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold leading-5 text-foreground">
                            {isUnassignedTicketPage ? "3 activity" : "8 activity"}
                          </p>
                          <p className="text-xs leading-4 text-muted-foreground">
                            {isUnassignedTicketPage
                              ? "Update added 18 mins ago"
                              : "Comment added 18 mins ago"}
                          </p>
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center px-5 py-3 text-left hover:bg-muted/20"
                      onClick={() => scrollToSection("subtickets")}
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-4">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-800">
                          <Workflow className="size-4" />
                        </div>
                        <p className="text-sm font-semibold leading-5 text-foreground">
                          {isUnassignedTicketPage ? "0 sub-tickets" : "5 sub-tickets"}
                        </p>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center px-5 py-3 text-left hover:bg-muted/20"
                      onClick={() => scrollToSection("linkedTickets")}
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-4">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-800">
                          <GitCompareArrows className="size-4" />
                        </div>
                        <p className="text-sm font-semibold leading-5 text-foreground">
                          2 linked tickets
                        </p>
                      </div>
                    </button>
                  </div>
                </Card>

                <Card data-source-section="true" className="gap-0 py-0 shadow-xs">
                  {isDetailsOpen && (
                    <>
                      <CardContent className="space-y-0 px-0 pb-0 pt-0">
                        <dl className="text-sm">
                          <DetailRow label="Held by">
                            <div className="-mx-1.5 -my-1 space-y-1">
                              <AssigneeMenu
                                assigneeId={displayedAssigneeId}
                                onAssigneeChange={setAssigneeId}
                                triggerClassName="flex items-center gap-2 rounded-md px-1.5 py-1 text-foreground transition-colors hover:bg-neutral-800"
                              >
                                {currentAssignee.id === "unclaimed" ? (
                                  <span className="size-7 shrink-0 rounded-[10px] border-[1.8px] border-dashed border-neutral-600" />
                                ) : currentAssignee.id === "evo" ? (
                                  <span className="flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(246,95,21,0.24)]">
                                    <img
                                      src={SUBTICKET_HELD_BY_ROTATE_ICON}
                                      alt=""
                                      aria-hidden
                                      className="size-4 shrink-0"
                                    />
                                  </span>
                                ) : (
                                  <ProfileAvatar
                                    initials={currentAssignee.initials}
                                    variant="purple"
                                  />
                                )}
                                <span
                                  className={
                                    currentAssignee.id === "unclaimed"
                                      ? "text-muted-foreground"
                                      : "text-foreground"
                                  }
                                >
                                  {currentAssigneeLabel}
                                </span>
                              </AssigneeMenu>
                              {currentAssignee.id === "unclaimed" || currentAssignee.id === "evo" ? (
                                <button
                                  type="button"
                                  className="ml-1.5 text-left font-semibold text-[#4299D9] hover:underline"
                                  onClick={assignToYou}
                                >
                                  Assign to you
                                </button>
                              ) : (
                                <AssigneeMenu
                                  assigneeId={displayedAssigneeId}
                                  onAssigneeChange={setAssigneeId}
                                  triggerClassName="ml-1.5 text-left font-semibold text-[#4299D9] hover:underline"
                                >
                                  Change
                                </AssigneeMenu>
                              )}
                            </div>
                          </DetailRow>
                          {currentAssignee.id !== "unclaimed" && (
                            <DetailRow label="Held until">
                              <div className="space-y-1">
                                <button
                                  type="button"
                                  onClick={openHeldUntilDialog}
                                  className="text-left text-muted-foreground"
                                >
                                  {heldUntilDisplayLabel}
                                </button>
                                <button
                                  type="button"
                                  className="block text-left font-semibold text-[#4299D9] hover:underline"
                                  onClick={openHeldUntilDialog}
                                >
                                  Change
                                </button>
                              </div>
                            </DetailRow>
                          )}
                          <DetailRow label="Status">
                            <div className="flex flex-col gap-1">
                              {isUnassignedTicketPage ? (
                                <span
                                  className="inline-flex h-7 w-fit items-center gap-2 rounded-[10px] px-2 text-sm text-green-400"
                                  style={{
                                    background:
                                      "linear-gradient(90deg, rgba(10,10,10,0.8), rgba(10,10,10,0.8)), linear-gradient(90deg, rgb(84,255,167), rgb(84,255,167))",
                                  }}
                                >
                                  <Check className="size-4" />
                                  Completed
                                </span>
                              ) : (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => scrollToSection("blockedBy")}
                                    className="inline-flex h-7 w-fit items-center gap-2 rounded-[10px] bg-[#322313] px-2 text-sm text-[#d48a3b] transition-opacity hover:opacity-90"
                                  >
                                    <Clock className="size-4" />
                                    Pending
                                  </button>
                                  <button
                                    type="button"
                                    className="w-fit text-left text-muted-foreground hover:underline"
                                    onClick={() => scrollToSection("blockedBy")}
                                  >
                                    Waiting on blockers
                                  </button>
                                </>
                              )}
                            </div>
                          </DetailRow>
                          <DetailRow label="Priority">
                            <div className="flex items-center gap-2">
                              <Contrast className="size-4 shrink-0 text-amber-500" aria-hidden />
                              <span className="text-foreground">Medium</span>
                            </div>
                          </DetailRow>
                          <DetailRow label="Scope">
                            <span className="text-foreground">Frontend</span>
                          </DetailRow>
                          <DetailRow label="Labels" isLast>
                            <div className="flex items-center gap-1 pt-0.5">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#262626] px-2 py-[3px] text-sm font-normal leading-5 text-[#fafafa]">
                                <img
                                  src={SIDEBAR_LABEL_DOT_ICON}
                                  alt=""
                                  aria-hidden
                                  className="size-2.5 shrink-0"
                                />
                                Backlog
                              </span>
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#262626] px-2 py-[3px] text-sm font-normal leading-5 text-[#fafafa]">
                                <img
                                  src={SIDEBAR_LABEL_DOT_ICON}
                                  alt=""
                                  aria-hidden
                                  className="size-2.5 shrink-0"
                                />
                                Bug
                              </span>
                            </div>
                          </DetailRow>
                        </dl>
                      </CardContent>
                    </>
                  )}
                </Card>

                <Card
                  data-source-section="true"
                  className="gap-0 overflow-hidden rounded-xl border-0 bg-neutral-900 py-0 shadow-xs"
                >
                  {/* Header */}
                  <div className="flex items-center px-5 py-[10px]">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="-ml-2 flex size-8 shrink-0 items-center justify-center rounded-xl text-neutral-300 hover:bg-neutral-800/70"
                        aria-label="Toggle agent details"
                        aria-expanded={isAgentOpen}
                        onClick={() => setIsAgentOpen((prev) => !prev)}
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            !isAgentOpen && "-rotate-90",
                          )}
                        />
                      </button>
                      <span className="text-base font-semibold leading-6 text-neutral-50">
                        Source
                      </span>
                    </div>
                  </div>

                  {isAgentOpen && (
                    <>
                      {/* Agent card */}
                      <div className="px-3 pb-3">
                        <div className="overflow-hidden rounded-[12px] border border-neutral-800 bg-neutral-950">
                          {/* EvoResolver row */}
                          <div className="flex items-center gap-4 p-4">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(246,95,21,0.24)]">
                              <img
                                src={SUBTICKET_HELD_BY_ROTATE_ICON}
                                alt=""
                                aria-hidden
                                className="size-5 shrink-0"
                              />
                            </div>
                            <div className="min-w-0 flex-1 space-y-0.5">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold leading-5 text-neutral-50">
                                  EvoResolver
                                </p>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <button
                                      type="button"
                                      className="flex size-6 items-center justify-center rounded-md text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
                                      aria-label="More options"
                                    >
                                      <MoreHorizontal className="size-4" />
                                    </button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="w-44">
                                    <DropdownMenuItem
                                      onSelect={() => setIsPromptDialogOpen(true)}
                                    >
                                      See full prompt
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                              <p className="text-sm font-semibold leading-5 text-neutral-400">
                                Agent Execution Chevron: Resize, Center, Test,
                                Screenshot
                              </p>
                            </div>
                          </div>
                          {/* Action buttons */}
                          <div className="flex gap-1 px-2 pb-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className="flex h-8 flex-1 items-center justify-center rounded-[12px] bg-[rgba(220,38,38,0.16)] hover:bg-[rgba(220,38,38,0.26)]"
                                  aria-label="Stop run"
                                >
                                  <CircleStop className="size-4 text-red-400" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>Stop run</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className="flex h-8 flex-1 items-center justify-center rounded-[12px] bg-neutral-800 hover:bg-neutral-700"
                                  aria-label="Rerun"
                                >
                                  <Play className="size-4 text-neutral-300" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>Rerun</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className="flex h-8 flex-1 items-center justify-center rounded-[12px] bg-neutral-800 hover:bg-neutral-700"
                                  aria-label="Download run output"
                                >
                                  <Download className="size-4 text-neutral-300" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>Download run output</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className="flex h-8 flex-1 items-center justify-center rounded-[12px] bg-neutral-800 hover:bg-neutral-700"
                                  aria-label="Open run details"
                                >
                                  <ExternalLink className="size-4 text-neutral-300" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>Open run details</TooltipContent>
                            </Tooltip>
                          </div>
                        </div>
                      </div>

                      {/* Detail rows */}
                      <dl className="text-sm">
                        {/* Agent run */}
                        <div className="flex items-start border-b border-neutral-800 px-5 py-3">
                          <dt className="w-24 shrink-0 text-sm font-normal leading-5 text-neutral-400">
                            Agent run
                          </dt>
                          <dd className="min-w-0 flex-1 space-y-1">
                            <div className="inline-flex h-7 w-[114px] items-center justify-center gap-2 rounded-[10px] bg-neutral-800 px-2 text-sm font-normal leading-5 text-neutral-300">
                              <img
                                src="/src/assets/in-progress.svg"
                                alt=""
                                className="size-4 shrink-0"
                              />
                              In progress
                            </div>
                            <p className="text-sm font-normal leading-5 text-muted-foreground">
                              {`Running ${Math.floor(agentRunSeconds / 60)}m ${agentRunSeconds % 60}s`}
                            </p>
                          </dd>
                        </div>

                        {/* Pull requests */}
                        <div className="flex flex-col gap-2 border-b border-neutral-800 px-5 py-3">
                          <dt className="text-sm font-normal leading-5 text-neutral-400">
                            Pull requests
                          </dt>
                          <dd className="flex flex-wrap items-center gap-1">
                            <span className="inline-flex h-7 items-center gap-1.5 rounded-[10px] bg-neutral-800 px-2 text-sm font-normal leading-5 text-neutral-300">
                              <GitPullRequestArrow className="size-3.5 shrink-0 text-[#5CB55C]" />
                              #7424
                            </span>
                            <span className="inline-flex h-7 items-center gap-1.5 rounded-[10px] bg-neutral-800 px-2 text-sm font-normal leading-5 text-neutral-300">
                              <GitPullRequestArrow className="size-3.5 shrink-0 text-[#5CB55C]" />
                              #7426
                            </span>
                            <span className="inline-flex h-7 items-center gap-1.5 rounded-[10px] bg-neutral-800 px-2 text-sm font-normal leading-5 text-neutral-300">
                              <GitMerge className="size-3.5 shrink-0 text-[#9d72f2]" />
                              #7428
                            </span>
                          </dd>
                        </div>

                        {/* Created footer */}
                        <div className="px-5 py-3">
                          <p className="text-xs font-normal leading-4 text-neutral-400">
                            Created 19 hours ago by Antonis Polemitis
                          </p>
                        </div>
                      </dl>
                    </>
                  )}

                  {/* Full-prompt dialog triggered from the EvoResolver ··· menu */}
                  <Dialog open={isPromptDialogOpen} onOpenChange={setIsPromptDialogOpen}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Full user prompt</DialogTitle>
                      </DialogHeader>
                      <div className="max-h-[60vh] space-y-6 overflow-y-auto pr-2 text-sm leading-7 text-foreground">
                        <p>
                          Resize and recenter the chevron in the Agent
                          Executions table so every row reads as a unified
                          line item from left to right. The current placement
                          makes the row feel visually top-heavy, so the goal
                          is to improve optical balance while preserving the
                          existing information hierarchy. This should feel
                          subtle: users should perceive cleaner alignment and
                          better scanability without noticing an obvious
                          structural redesign.
                        </p>
                        <p>
                          Keep all existing interactions intact while
                          adjusting spacing, alignment, and icon sizing to
                          match surrounding controls. Preserve current
                          variants, states, and accessibility behavior,
                          including hover, focus-visible, disabled, and
                          keyboard flows. Ensure the result remains consistent
                          across light and dark themes and continues to align
                          with established component patterns already used in
                          adjacent cards and tables.
                        </p>
                        <p>
                          Validate the implementation with quick local checks
                          and capture screenshots that clearly show before and
                          after behavior at the row level. Confirm that no
                          regressions are introduced in neighboring
                          components, especially where similar chevron icons
                          appear in headers, nested rows, and collapsible
                          controls. If spacing tokens are adjusted, verify
                          those changes do not cascade into unrelated layouts.
                        </p>
                        <p>
                          Deliver the update with maintainability as a primary
                          goal: avoid one-off overrides, prefer existing UI
                          primitives, and keep the structure easy to iterate
                          on for future design refinements. The final state
                          should be implementation-light but production-ready,
                          with clear intent in class usage and predictable
                          behavior under responsive breakpoints and variable
                          content lengths.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </Card>
                <Card className="gap-0 py-0 shadow-xs">
                  <CardHeader
                    className={cn(
                      "grid-rows-[auto] items-center gap-0 px-4 py-4",
                      isDetailsSecondaryOpen && "border-b [.border-b]:pb-4",
                    )}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-7 -ml-1"
                        aria-label="Toggle detail section"
                        aria-expanded={isDetailsSecondaryOpen}
                        onClick={() => setIsDetailsSecondaryOpen((prev) => !prev)}
                      >
                        <ChevronRight
                          className={cn(
                            "size-4 transition-transform",
                            isDetailsSecondaryOpen && "rotate-90",
                          )}
                        />
                      </Button>
                      <CardTitle className="text-base font-semibold">
                        Advanced
                      </CardTitle>
                    </div>
                  </CardHeader>
                  {isDetailsSecondaryOpen && (
                    <>
                      <CardContent className="space-y-0 px-0 pb-0 pt-0">
                        <dl className="text-sm">
                          <div className="border-b px-4 py-3.5 sm:py-3">
                            <button
                              type="button"
                              className="inline-flex items-center gap-2 font-semibold text-foreground hover:underline"
                            >
                              <FilePlus2 className="size-4" aria-hidden />
                              4 modified files
                            </button>
                          </div>
                          <div className="border-b px-4 py-3.5 sm:py-3">
                            <button
                              type="button"
                              className="inline-flex items-center gap-2 font-semibold text-foreground hover:underline"
                            >
                              <FileMinus2 className="size-4" aria-hidden />
                              0 files deleted
                            </button>
                          </div>
                          <div className="border-b px-4 py-3.5 sm:py-3">
                            <button
                              type="button"
                              className="font-semibold text-foreground hover:underline"
                            >
                              1 prefix
                            </button>
                          </div>
                          <div className="border-b px-4 py-3.5 sm:py-3">
                            <button
                              type="button"
                              className="font-semibold text-foreground hover:underline"
                            >
                              0 exclusive prefixes
                            </button>
                          </div>
                          <div className="border-b px-4 py-3.5 sm:py-3">
                            <button
                              type="button"
                              className="inline-flex items-center gap-2 font-semibold text-foreground hover:underline"
                            >
                              <Bolt className="size-4" aria-hidden />
                              Show raw config
                            </button>
                          </div>
                          <div className="border-b px-4 py-3.5 sm:py-3">
                            <button
                              type="button"
                              className="font-semibold text-foreground hover:underline"
                            >
                              Show agent input
                            </button>
                          </div>
                          <div className="px-4 py-3.5 sm:py-3">
                            <button
                              type="button"
                              className="font-semibold text-foreground hover:underline"
                            >
                              Show metadata
                            </button>
                          </div>
                        </dl>
                      </CardContent>
                    </>
                  )}
                </Card>
                </div>
              </aside>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

function DetailRow({
  label,
  children,
  isLast,
}: {
  label: string
  children: React.ReactNode
  isLast?: boolean
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 px-5 py-3",
        !isLast && "border-b",
      )}
    >
      <dt className="w-24 shrink-0 pt-px text-sm font-normal leading-5 text-muted-foreground">
        {label}
      </dt>
      <dd className="min-w-0 flex-1 text-sm leading-5 text-foreground">{children}</dd>
    </div>
  )
}
