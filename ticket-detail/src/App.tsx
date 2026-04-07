import { useEffect, useState } from "react"

import {
  Activity,
  ArrowDownUp,
  Bolt,
  Bot,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileMinus2,
  GitMerge,
  FilePlus2,
  ListFilter,
  Link,
  MoreHorizontal,
  Play,
  Plus,
  SignalMedium,
  Workflow,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import AgentsTableB from "@/imports/AgentsTableB/AgentsTableB"
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

const SUBTASK_PRIORITIES = ["M", "L", "M", "H", "L"] as const

const COMPLETED_SUBTASK_ROW_INDEXES = new Set<number>([2, 3, 4])
const CURRENT_USER_NAME = "Antonis Polemitis"
const CURRENT_USER_INITIALS = "AP"
const ACTIVITY_WORK_STARTED_MESSAGE =
  "Work started on ticket T-0006982 in the main branch. Initial checks passed, including authentication, ticket access, ownership validation, and repository write access within the ticket scope."
const ACTIVITY_REVIEWED_MESSAGE =
  "Ticket T-0006982 was reviewed and confirmed as in progress. Access and file scope were validated, the latest note was checked against the ticket requirements, and the next step is to review the current table, tests, and Playwright setup before making the smallest necessary change."
const ACTIVITY_COMPLETED_MESSAGE =
  "Completed the Agents executions chevron update within the approved frontend scope. The expand/collapse control is now centered and easier to see, the related test is passing, and the requested review screenshots were captured."
type ChatTranscriptEntry = {
  initials: string
  author: string
  time: string
  messages: readonly string[]
  tags?: readonly string[]
}

const CHAT_TRANSCRIPT: readonly ChatTranscriptEntry[] = [
  {
    initials: CURRENT_USER_INITIALS,
    author: CURRENT_USER_NAME,
    time: "15/10/2025, 11:58:15",
    messages: [
      "Approved to proceed with a small frontend-only refinement for the executions chevron.",
    ],
  },
  {
    initials: "CB",
    author: "EvoResolver",
    time: "15/10/2025, 11:57:56",
    messages: [ACTIVITY_COMPLETED_MESSAGE],
    tags: ["Activity", "In review"],
  },
  {
    initials: "CB",
    author: "EvoResolver",
    time: "15/10/2025, 11:58:18",
    messages: [ACTIVITY_REVIEWED_MESSAGE],
    tags: ["Activity", "In review"],
  },
  {
    initials: CURRENT_USER_INITIALS,
    author: CURRENT_USER_NAME,
    time: "15/10/2025, 11:58:24",
    messages: ["Once done, please share before-and-after screenshots for review."],
  },
  {
    initials: "CB",
    author: "EvoResolver",
    time: "15/10/2025, 11:58:26",
    messages: [ACTIVITY_WORK_STARTED_MESSAGE],
    tags: ["Activity", "In review"],
  },
  {
    initials: CURRENT_USER_INITIALS,
    author: CURRENT_USER_NAME,
    time: "15/10/2025, 11:58:33",
    messages: [
      "Please make sure the updated chevron feels visually centered and easier to scan in the row.",
    ],
  },
  {
    initials: "CB",
    author: "EvoResolver",
    time: "15/10/2025, 11:58:35",
    messages: [
      "Created a focused frontend ticket to improve the chevron size and alignment in the Agents executions name cell.",
    ],
  },
] as const

function ProfileAvatar({
  initials = "",
  className,
  icon,
}: {
  initials?: string
  className?: string
  icon?: React.ReactNode
}) {
  return (
    <Avatar className={cn("size-7", className)}>
      <AvatarFallback className="bg-neutral-700 text-[10px] font-semibold text-neutral-50">
        {icon ?? initials}
      </AvatarFallback>
    </Avatar>
  )
}

function IconMenu({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className={cn("shrink-0 shadow-xs", className)}
          aria-label={label}
        >
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem>Download Word</DropdownMenuItem>
        <DropdownMenuItem>Download Markdown</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function App() {
  const [isActivityOpen, setIsActivityOpen] = useState(true)
  const [isSubticketsOpen, setIsSubticketsOpen] = useState(true)
  const [isAgentOpen, setIsAgentOpen] = useState(true)
  const [isDetailsOpen, setIsDetailsOpen] = useState(true)
  const [isDetailsSecondaryOpen, setIsDetailsSecondaryOpen] = useState(false)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme")
    document.documentElement.classList.toggle("dark", storedTheme !== "light")
  }, [])

  const scrollToSection = (section: "activity" | "subtickets") => {
    if (section === "activity") {
      setIsActivityOpen(true)
      document
        .getElementById("activity-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }

    setIsSubticketsOpen(true)
    document
      .getElementById("subtickets-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-svh bg-[#0a0a0a]">
      <div className="pointer-events-none fixed inset-0 z-40">
        <AgentsTableB />
      </div>
      <div className="pt-[60px] md:pl-64">
        <div className="relative z-10 min-h-svh bg-muted/40 px-3 py-4 md:px-6 md:py-8">
          <div className="mx-auto max-w-[1460px] text-card-foreground">
            <div className="grid grid-cols-1 gap-6 p-0 lg:grid-cols-[minmax(0,1.7fr)_minmax(300px,0.95fr)] lg:gap-8">
              <main className="order-last min-w-0 space-y-6 lg:order-none lg:col-span-1">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-fit px-0 text-muted-foreground hover:text-foreground"
                  >
                    <ChevronLeft className="mr-1 size-4" />
                    Back
                  </Button>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="h-8 shrink-0 rounded-md px-2.5 text-xs font-semibold"
                    >
                      EvoResolver
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="h-8 shrink-0 rounded-md px-2.5 text-xs font-semibold"
                    >
                      Backlog
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="h-8 shrink-0 rounded-md px-2.5 font-mono text-xs font-semibold"
                    >
                      T-0006982
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="size-8"
                        aria-label="Previous issue"
                      >
                        <ChevronLeft className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="size-8"
                        aria-label="Next issue"
                      >
                        <ChevronRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]">
                    Agent Execution Chevron: Resize, Center, Test, Screenshot
                  </h2>
                </div>
                <section className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold">Description</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="text-left text-sm font-medium text-primary hover:underline"
                        >
                          See full prompt
                        </button>
                      </DialogTrigger>
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
                  </div>
                  <div className="w-full rounded-lg border bg-muted/20 px-4 py-5 text-left text-sm leading-6 text-foreground">
                    Adjusted the chevron in the Agent Executions table to
                    improve alignment and visual balance by increasing its size
                    and vertically centering it within the row. Also validated
                    the change with tests and captured screenshots to confirm
                    the updated behavior and presentation.
                  </div>
                </section>

                <section id="subtickets-section" className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant="secondary"
                        size="icon"
                        className="size-8 shrink-0"
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
                    <div className="flex items-center gap-0.5">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8 text-muted-foreground"
                        aria-label="Change layout"
                      >
                        <ArrowDownUp className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8 text-muted-foreground"
                        aria-label="Add subtask"
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <Progress value={20} className="h-2 flex-1" />
                    <span className="text-sm font-medium text-muted-foreground">
                      3 of 5 completed
                    </span>
                  </div>

                  {isSubticketsOpen && (
                    <Card className="gap-0 overflow-hidden py-0 shadow-xs">
                        <div className="flex items-center gap-3 border-b bg-muted/40 px-4 py-2.5 text-sm font-semibold text-foreground">
                          <div className="min-w-0 flex-1">Name</div>
                          <div className="w-[40px] shrink-0 text-center">Pri.</div>
                          <div className="w-[40px] shrink-0 text-center">Asg.</div>
                          <div className="w-[96px] shrink-0">Status</div>
                          <div className="w-8 shrink-0" />
                        </div>
                        {SUBTASK_SUGGESTIONS.map((label, index) => (
                          <div
                            key={label}
                            className={cn(
                              "group flex items-center gap-3 px-4 py-3.5",
                              index !== SUBTASK_SUGGESTIONS.length - 1 && "border-b",
                            )}
                          >
                            <div className="flex min-w-0 flex-1 items-center gap-3">
                              <div className="flex h-8 min-w-[5.5rem] shrink-0 items-center justify-center rounded-md border bg-background p-px">
                                <Badge
                                  variant="outline"
                                  className="h-7 w-full min-w-0 justify-center rounded-[5px] border-0 bg-transparent px-1.5 font-mono text-[10px] font-semibold text-foreground shadow-none hover:bg-transparent sm:text-xs"
                                >
                                  {SUBTASK_ROW_IDS[index]}
                                </Badge>
                              </div>
                              <span className="min-w-0 truncate text-sm leading-snug">
                                {label}
                              </span>
                            </div>
                            <div className="flex w-[40px] shrink-0 justify-center">
                              <span className="inline-flex size-7 items-center justify-center rounded-md border bg-muted text-xs font-semibold">
                                {SUBTASK_PRIORITIES[index]}
                              </span>
                            </div>
                            <div className="flex w-[40px] shrink-0 justify-center">
                              <ProfileAvatar initials="I" />
                            </div>
                            <div className="flex w-[96px] shrink-0 justify-start">
                              <Badge
                                variant="outline"
                                className="rounded-full font-semibold tracking-wide"
                              >
                                {COMPLETED_SUBTASK_ROW_INDEXES.has(index)
                                  ? "Completed"
                                  : "In progress"}
                              </Badge>
                            </div>
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
                                  Remove
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        ))}

                        <div className="flex flex-col gap-3 border-t bg-muted/20 p-4 sm:flex-row sm:items-center">
                          <Input
                            placeholder="Ticket name or ID"
                            className="h-11 flex-1 border bg-background shadow-none"
                            aria-label="Ticket name or ID"
                          />
                          <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            className="size-11 shrink-0 border-neutral-700 bg-neutral-700 text-neutral-50 shadow-none hover:border-neutral-700 hover:bg-neutral-700/90 hover:text-neutral-50 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/90"
                            aria-label="Add"
                          >
                            <Plus className="size-4" />
                          </Button>
                        </div>
                    </Card>
                  )}

                </section>

                <div id="activity-section" className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      className="size-8 shrink-0"
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
                  <div className="flex items-center gap-0.5">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-8 text-muted-foreground"
                      aria-label="Filter list"
                    >
                      <ListFilter className="size-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-8 text-muted-foreground"
                      aria-label="Change layout"
                    >
                      <ArrowDownUp className="size-4" />
                    </Button>
                  </div>
                </div>

                {isActivityOpen && (
                  <section className="-mt-1 space-y-4">
                  <div className="flex w-fit items-center rounded-md border bg-muted/30 p-1">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      className="h-8 bg-neutral-700 px-4 text-neutral-50 hover:bg-neutral-700/90 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/90"
                    >
                      All
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 px-4">
                      Comments
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 px-4">
                      Notes
                    </Button>
                  </div>

                  <div className="flex items-start gap-3">
                    <ProfileAvatar initials={CURRENT_USER_INITIALS} className="mt-1" />
                    <div className="flex-1 rounded-xl border bg-card p-3 text-card-foreground shadow-xs">
                      <Input
                        placeholder="Add a comment..."
                        className="h-11 flex-1 border bg-background px-3 text-base shadow-none"
                        aria-label="Add a comment"
                      />
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Button type="button" variant="secondary" size="sm">
                          Cancel
                        </Button>
                        <Button type="button" size="sm">
                          Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="pl-11">
                    <span className="text-sm font-medium text-muted-foreground">
                      Latest update 18m ago
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="space-y-5">
                        {CHAT_TRANSCRIPT.map((entry) => {
                          const entryTags = entry.tags ?? []
                          const showMeta =
                            entryTags.length > 0 ||
                            entry.author === CURRENT_USER_NAME

                          return (
                          <div
                            key={`${entry.author}-${entry.time}`}
                            className="flex items-start gap-3"
                          >
                            <ProfileAvatar
                              initials={entry.initials}
                              className="mt-1"
                              icon={
                                entry.initials === "CB" ? (
                                  <Bot className="size-3.5 text-neutral-50" />
                                ) : undefined
                              }
                            />
                            <div className="min-w-0 flex-1 overflow-hidden rounded-lg border">
                              <div className="flex items-start justify-between gap-3 border-b bg-muted/40 px-3 py-2 text-sm">
                                <div className="flex min-w-0 flex-wrap items-center gap-2">
                                  <span className="font-semibold text-foreground">
                                    {entry.author}
                                  </span>
                                  <span className="text-muted-foreground">
                                    {entry.time}
                                  </span>
                                </div>
                                {showMeta ? (
                                  <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
                                    {entryTags.map((tag) => (
                                      <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="font-normal"
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                    {entry.author === CURRENT_USER_NAME && (
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            type="button"
                                            variant="ghost"
                                            className="h-5 w-5 p-0 text-muted-foreground"
                                            aria-label="Message actions"
                                          >
                                            <MoreHorizontal className="size-4" />
                                          </Button>
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
                                ) : null}
                              </div>
                              <div className="space-y-1.5 px-3 py-2">
                                {entry.messages.map((message) => (
                                  <div key={message}>
                                    <p className="text-sm text-foreground">
                                      {message === ACTIVITY_WORK_STARTED_MESSAGE ? (
                                        <>
                                          Work started on ticket{" "}
                                          <strong>T-0006982</strong> in the{" "}
                                          <strong>main branch</strong>. Initial
                                          checks passed, including
                                          authentication, ticket access,
                                          ownership validation, and repository
                                          write access within the ticket scope.
                                        </>
                                      ) : message === ACTIVITY_REVIEWED_MESSAGE ? (
                                        <>
                                          Ticket <strong>T-0006982</strong> was
                                          reviewed and confirmed as{" "}
                                          <strong>in progress</strong>. Access and
                                          file scope were validated, the latest
                                          note was checked against the ticket
                                          requirements, and the next step is to
                                          review the current table, tests, and
                                          Playwright setup before making the
                                          smallest necessary change.
                                        </>
                                      ) : message === ACTIVITY_COMPLETED_MESSAGE ? (
                                        <>
                                          <strong>Completed</strong> the Agents
                                          executions chevron update within the{" "}
                                          <strong>approved</strong> frontend
                                          scope. The expand/collapse control is
                                          now centered and easier to see, the
                                          related test is passing, and the
                                          requested review screenshots were
                                          captured.
                                        </>
                                      ) : (
                                        message
                                      )}
                                    </p>
                                    {message.length > 140 && (
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <button
                                            type="button"
                                            className="mt-1 text-left text-sm font-medium text-primary hover:underline"
                                          >
                                            Show more
                                          </button>
                                        </DialogTrigger>
                                        <DialogContent>
                                          <DialogHeader>
                                            <DialogTitle>Activity update</DialogTitle>
                                          </DialogHeader>
                                          <p className="text-sm text-foreground">
                                            {message === ACTIVITY_WORK_STARTED_MESSAGE ? (
                                              <>
                                                Work started on ticket{" "}
                                                <strong>T-0006982</strong> in the{" "}
                                                <strong>main branch</strong>. Initial
                                                checks passed, including
                                                authentication, ticket access,
                                                ownership validation, and
                                                repository write access within
                                                the ticket scope.
                                              </>
                                            ) : message === ACTIVITY_REVIEWED_MESSAGE ? (
                                              <>
                                                Ticket <strong>T-0006982</strong> was
                                                reviewed and confirmed as{" "}
                                                <strong>in progress</strong>. Access
                                                and file scope were validated, the
                                                latest note was checked against the
                                                ticket requirements, and the next
                                                step is to review the current
                                                table, tests, and Playwright setup
                                                before making the smallest
                                                necessary change.
                                              </>
                                            ) : message === ACTIVITY_COMPLETED_MESSAGE ? (
                                              <>
                                                <strong>Completed</strong> the
                                                Agents executions chevron update
                                                within the <strong>approved</strong>{" "}
                                                frontend scope. The
                                                expand/collapse control is now
                                                centered and easier to see, the
                                                related test is passing, and the
                                                requested review screenshots were
                                                captured.
                                              </>
                                            ) : (
                                              message
                                            )}
                                          </p>
                                        </DialogContent>
                                      </Dialog>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  </section>
                )}
              </main>

              <aside className="order-first min-w-0 space-y-4 lg:order-none lg:col-span-1">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <Button
                    type="button"
                    variant="secondary"
                    className="h-9 gap-1.5 px-3 font-semibold shadow-xs"
                  >
                    <span>In progress</span>
                    <ChevronDown className="size-4" />
                  </Button>
                  <div className="flex flex-wrap items-center justify-end gap-1.5">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-9 gap-1.5 px-3 font-semibold shadow-xs"
                          onClick={() => scrollToSection("activity")}
                        >
                          <Activity className="size-4" />
                          8
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Activity</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-9 gap-1.5 px-3 font-semibold shadow-xs"
                          onClick={() => scrollToSection("subtickets")}
                        >
                          <Workflow className="size-4" />
                          5
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Sub-tickets</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="size-9 shadow-xs"
                          aria-label="Share issue"
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
                          variant="outline"
                          size="icon"
                          className="shrink-0 shadow-xs"
                          aria-label="More"
                        >
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <Card className="gap-0 py-0 shadow-xs">
                  <CardHeader
                    className={cn(
                      "grid-rows-[auto] items-center gap-0 px-4 py-4",
                      isDetailsOpen && "border-b [.border-b]:pb-4",
                    )}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-7 -ml-1"
                        aria-label="Toggle detail section"
                        aria-expanded={isDetailsOpen}
                        onClick={() => setIsDetailsOpen((prev) => !prev)}
                      >
                        <ChevronRight
                          className={cn(
                            "size-4 transition-transform",
                            isDetailsOpen && "rotate-90",
                          )}
                        />
                      </Button>
                      <CardTitle className="text-base font-semibold">
                        Ticket details
                      </CardTitle>
                    </div>
                  </CardHeader>
                  {isDetailsOpen && (
                    <>
                      <CardContent className="space-y-0 px-0 pb-0 pt-0">
                        <dl className="text-sm">
                          <DetailRow label="Assignee">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-foreground">
                                <span className="relative flex size-7 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/50" />
                                <span>Unassigned</span>
                              </div>
                              <button
                                type="button"
                                className="text-left font-medium text-primary hover:underline"
                              >
                                Assign to me
                              </button>
                            </div>
                          </DetailRow>
                          <DetailRow label="Priority">
                            <div className="flex items-center gap-2">
                              <SignalMedium
                                className="size-4 shrink-0 self-center text-foreground/70"
                                aria-hidden
                              />
                              <span className="text-foreground">Medium</span>
                            </div>
                          </DetailRow>
                          <DetailRow label="Parent">
                            <div className="flex min-w-0 flex-col gap-1">
                              <span className="font-mono text-xs text-muted-foreground">
                                T-0006983
                              </span>
                              <span className="truncate text-foreground">
                                Conduct Stakeholder Interviews
                              </span>
                            </div>
                          </DetailRow>
                          <DetailRow label="Due date">
                            <span>None</span>
                          </DetailRow>
                          <DetailRow label="Scope">
                            <span className="text-foreground">Frontend</span>
                          </DetailRow>
                          <DetailRow label="Labels">
                            <Badge variant="secondary" className="font-normal">
                              Bug reported
                            </Badge>
                          </DetailRow>
                          <DetailRow label="Reporter" isLast>
                            <div className="flex items-center gap-2 text-foreground">
                              <ProfileAvatar initials={CURRENT_USER_INITIALS} />
                              <span>{CURRENT_USER_NAME}</span>
                            </div>
                          </DetailRow>
                        </dl>
                      </CardContent>
                      <CardFooter className="[.border-t]:pt-3 flex flex-col items-start justify-center gap-1 border-t bg-muted/20 px-4 py-3 text-xs text-muted-foreground">
                        <span>Created 19 hours ago</span>
                        <span>Latest update 18m ago</span>
                      </CardFooter>
                    </>
                  )}
                </Card>

                <Card className="gap-0 py-0 shadow-xs">
                  <CardHeader
                    className={cn(
                      "flex flex-row items-center justify-between gap-3 space-y-0 px-4 py-3",
                      isAgentOpen && "border-b [.border-b]:pb-3",
                    )}
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-7 -ml-1"
                        aria-label="Toggle agent details"
                        aria-expanded={isAgentOpen}
                        onClick={() => setIsAgentOpen((prev) => !prev)}
                      >
                        <ChevronRight
                          className={cn(
                            "size-4 transition-transform",
                            isAgentOpen && "rotate-90",
                          )}
                        />
                      </Button>
                      <CardTitle className="text-base font-semibold">
                        Run details
                      </CardTitle>
                    </div>
                    <div className="ml-auto flex shrink-0 items-center justify-end gap-1.5">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="size-9 shadow-xs"
                            aria-label="Share issue"
                          >
                            <Play className="size-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Rerun</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="size-9 shadow-xs"
                            aria-label="Open external"
                          >
                            <ExternalLink className="size-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Open externally</TooltipContent>
                      </Tooltip>
                      <IconMenu label="More">
                        <MoreHorizontal className="size-4" />
                      </IconMenu>
                    </div>
                  </CardHeader>
                  {isAgentOpen && (
                    <>
                      <CardContent className="space-y-0 px-0 pb-0 pt-0">
                        <dl className="text-sm">
                          <DetailRow label="Agent">
                            <span className="text-white">EvoResolver</span>
                          </DetailRow>
                          <DetailRow label="Name">
                            <span className="block truncate text-foreground">
                              Agent Execution Chevron: Resize, Center, Test, Screenshot
                            </span>
                          </DetailRow>
                          <DetailRow label="Progress">
                            <span className="text-white">Completed</span>
                          </DetailRow>
                          <DetailRow label="Start date">
                            <span className="text-white">15/10/2025, 11:57:56</span>
                          </DetailRow>
                          <DetailRow label="End date">
                            <span className="text-white">15/10/2025, 12:57:56</span>
                          </DetailRow>
                          <DetailRow label="Run time">
                            <span className="text-white">48m 22s</span>
                          </DetailRow>
                          <DetailRow label="Pull request">
                            <div className="inline-flex items-center gap-2">
                              <a
                                href="#"
                                className="font-medium text-primary hover:underline"
                              >
                                #4489
                              </a>
                              <GitMerge
                                className="size-4 shrink-0 text-muted-foreground"
                                aria-hidden
                              />
                            </div>
                          </DetailRow>
                          <DetailRow label="Initiated by" isLast>
                            <div className="flex items-center gap-2 text-foreground">
                              <ProfileAvatar initials={CURRENT_USER_INITIALS} />
                              <span>{CURRENT_USER_NAME}</span>
                            </div>
                          </DetailRow>
                        </dl>
                      </CardContent>
                    </>
                  )}
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
              </aside>
            </div>
          </div>
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
        "grid grid-cols-1 gap-1 px-4 py-3.5 sm:grid-cols-[minmax(0,120px)_1fr] sm:gap-4 sm:py-3",
        !isLast && "border-b",
      )}
    >
      <dt className="font-medium text-muted-foreground">{label}</dt>
      <dd className="min-w-0 text-muted-foreground">{children}</dd>
    </div>
  )
}
