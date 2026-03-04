"use client";
import Nav from "@/components/nav";
import Footer from "@/components/sections/footer";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRightIcon } from "lucide-react";
import UseCaseHeader from "@/layouts/usecase-header";

export default function App() {
  return (
    <main className="bg-background min-h-screen relative">
      <div className="max-w-350 mx-auto lg:px-20 md:px-12 px-8">
        <Nav />
        <div className="flex flex-col gap-4 my-28 max-w-200 mx-auto text-muted-foreground">
          <UseCaseHeader
            title="Conversa: Conversational AI Front Desk for Service Businesses"
            description="A turnkey conversational AI platform that handles every inbound call, SMS, and email — with persistent memory, intelligent escalation, and 100+ system integrations — operating as your autonomous AI front desk 24/7."
            iframeSrc="https://www.youtube.com/embed/M21xcudW3F0"
            stats={[
              { value: "24/7", label: "AI Call Handling" },
              { value: "3 Channels", label: "Phone, SMS, Email" },
              { value: "100+", label: "System Integrations" },
            ]}
          />

          <div className="flex md:flex-row flex-col items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <p>
                Trusted by service businesses across Australia &amp; New Zealand
              </p>
              <AvatarCircles
                avatarUrls={[
                  {
                    imageUrl: "/testimonial1.png",
                    profileUrl: "",
                  },
                  {
                    imageUrl: "/testimonial2.png",
                    profileUrl: "",
                  },
                ]}
                numPeople={5}
              />
            </div>
            <Button size="sm" variant="secondary" asChild>
              <a
                href="https://conversa.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Conversa
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <Separator className="my-4" />

          <p>
            Every missed call is missed revenue. Every overwhelmed receptionist
            is a bottleneck. Every after-hours inquiry that goes unanswered is a
            customer choosing your competitor. For multi-location service
            businesses, healthcare practices, and professional services firms,
            the{" "}
            <strong className="text-foreground">
              front desk is the highest-leverage chokepoint
            </strong>{" "}
            in your operation.
          </p>

          <p>
            Conversa is a{" "}
            <strong className="text-foreground">
              conversational AI platform
            </strong>{" "}
            purpose-built as{" "}
            <strong className="text-foreground">
              AI front desk infrastructure
            </strong>{" "}
            for service businesses. It handles inbound phone calls, SMS, and
            email within a single unified platform — with{" "}
            <strong className="text-foreground">
              persistent conversation memory
            </strong>
            , intelligent human escalation, and deep integration with your
            existing CRM, booking, and workflow systems.
          </p>

          <p>
            No more missed calls.
            <br />
            No more overwhelmed reception teams.
            <br />
            No more lost revenue from after-hours inquiries.
          </p>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            The problem we solve
          </h2>

          <p>
            Service businesses face a common set of{" "}
            <strong className="text-foreground">front desk automation</strong>{" "}
            challenges:
          </p>

          <ul>
            <li>
              <strong className="text-foreground">
                Missed calls = missed revenue
              </strong>{" "}
              — when phones go unanswered, customers book with competitors
            </li>
            <li>
              <strong className="text-foreground">Overwhelmed staff</strong> —
              reception teams juggle calls, walk-ins, and admin tasks
              simultaneously
            </li>
            <li>
              <strong className="text-foreground">After-hours gap</strong> —
              inquiries outside business hours sit unanswered until morning
            </li>
            <li>
              <strong className="text-foreground">
                Context loss across channels
              </strong>{" "}
              — customers repeat themselves across phone, SMS, and email
              interactions
            </li>
            <li>
              <strong className="text-foreground">Scaling bottleneck</strong> —
              adding locations means hiring more reception staff at every site
            </li>
          </ul>

          <p>
            Conversa eliminates these constraints with{" "}
            <strong className="text-foreground">conversational AI</strong> that
            works alongside your team — handling routine inquiries autonomously
            while escalating complex cases intelligently.
          </p>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Core platform: how it works
          </h2>

          <h3 className="font-bold text-foreground">
            1. Unified multi-channel AI communication
          </h3>
          <p>
            Handle all inbound communications through a{" "}
            <strong className="text-foreground">
              single conversational AI platform
            </strong>
            :
          </p>
          <ul>
            <li className="italic">
              phone calls — 24/7 AI call handling with natural, human-quality
              conversation
            </li>
            <li className="italic">
              SMS — automated responses, appointment confirmations, and
              follow-ups
            </li>
            <li className="italic">
              email — intelligent drafting, triage, and response automation
            </li>
            <li>shared conversation context across all three channels</li>
          </ul>
          <p>
            One{" "}
            <strong className="text-foreground">AI front desk</strong>, three
            channels, complete coverage.
          </p>

          <h3 className="font-bold text-foreground">
            2. Persistent memory &amp; conversation context
          </h3>
          <p>
            Unlike basic chatbots, Conversa maintains{" "}
            <strong className="text-foreground">
              persistent conversation memory
            </strong>
            :
          </p>
          <ul>
            <li className="italic">
              previous conversations with each customer across all channels
            </li>
            <li className="italic">
              booking history, preferences, and past interactions
            </li>
            <li className="italic">
              outstanding issues and scheduled follow-ups
            </li>
            <li className="italic">
              context that carries seamlessly across phone, SMS, and email
            </li>
            <li>relationship history that builds over time</li>
          </ul>
          <p>
            Customers never have to repeat themselves — the AI remembers
            everything.
          </p>

          <h3 className="font-bold text-foreground">
            3. Intelligent human escalation
          </h3>
          <p>
            The{" "}
            <strong className="text-foreground">conversational AI</strong> knows
            when to hand off to a human:
          </p>
          <ul>
            <li className="italic">
              confidence thresholds trigger automatic escalation
            </li>
            <li className="italic">
              single unified inbox for reviewing and managing escalated
              conversations
            </li>
            <li className="italic">
              full conversation context passed to human agents — no information
              lost
            </li>
            <li className="italic">
              seamless handoff without customer frustration
            </li>
            <li>
              escalation analytics to continuously improve AI handling rates
            </li>
          </ul>

          <h3 className="font-bold text-foreground">
            4. AI workflow automation &amp; actions
          </h3>
          <p>
            Configure the AI to take real actions inside your business systems:
          </p>
          <ul>
            <li className="italic">
              book appointments directly into your calendar or scheduling tool
            </li>
            <li className="italic">
              update CRM records automatically after every interaction
            </li>
            <li className="italic">
              send follow-up confirmations and reminders via SMS or email
            </li>
            <li className="italic">
              trigger internal notifications and team alerts
            </li>
            <li>
              execute multi-step{" "}
              <strong className="text-foreground">
                AI workflow automation
              </strong>{" "}
              based on conversation outcomes
            </li>
          </ul>

          <h3 className="font-bold text-foreground">
            5. 100+ system integrations
          </h3>
          <p>
            Conversa connects to{" "}
            <strong className="text-foreground">100+ systems</strong> your
            business already uses:
          </p>
          <ul>
            <li className="italic">CRMs — Salesforce, HubSpot, Zendesk</li>
            <li className="italic">
              vertical SaaS — Cliniko, ServiceTitan, Timely, Jobber
            </li>
            <li className="italic">e-commerce — Shopify</li>
            <li className="italic">
              productivity — Google Workspace, Microsoft 365, Outlook
            </li>
            <li className="italic">automation — Zapier, Airtable</li>
          </ul>
          <p>
            <strong className="text-foreground">
              Turnkey AI integration
            </strong>{" "}
            with your existing stack — not against it.
          </p>

          <h3 className="font-bold text-foreground">
            6. Analytics &amp; performance reporting
          </h3>
          <p>
            Understand your{" "}
            <strong className="text-foreground">AI front desk</strong>{" "}
            performance:
          </p>
          <ul>
            <li className="italic">
              call volume trends, peak hours, and staffing insights
            </li>
            <li className="italic">
              AI resolution rates and conversation outcomes
            </li>
            <li className="italic">escalation frequency and reasons</li>
            <li className="italic">
              channel performance breakdown across phone, SMS, and email
            </li>
            <li>ROI tracking and revenue attribution</li>
          </ul>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Who this platform serves
          </h2>

          <p>
            Conversa is built for{" "}
            <strong className="text-foreground">service businesses</strong> with
            high inbound communication volume:
          </p>
          <div className="border border-border rounded-lg p-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              <span className="font-semibold text-foreground">
                Healthcare Practices
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
              <span className="font-semibold text-foreground">
                Trade &amp; Home Services
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                />
              </svg>
              <span className="font-semibold text-foreground">
                Legal &amp; Professional Services
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
              <span className="font-semibold text-foreground">
                Wellness &amp; Beauty
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              <span className="font-semibold text-foreground">
                Multi-Location Businesses
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
              <span>Any business with high inbound call volume</span>
            </div>
          </div>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Implementation process
          </h2>

          <p>
            Conversa follows a structured two-week implementation designed for
            operational reliability:
          </p>

          <div className="border border-border rounded-lg p-6 bg-muted space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Discovery &amp; fit assessment
                </p>
                <p className="text-muted-foreground text-sm">
                  Understanding your business, call patterns, and system
                  integration requirements
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Architecture &amp; integration design
                </p>
                <p className="text-muted-foreground text-sm">
                  Mapping CRM, booking, and workflow integrations across all
                  channels
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                3
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Multi-channel configuration
                </p>
                <p className="text-muted-foreground text-sm">
                  Setting up AI call handling, SMS automation, and email response
                  workflows
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                4
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Validation testing
                </p>
                <p className="text-muted-foreground text-sm">
                  Rigorous end-to-end testing across all channels before going
                  live
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                5
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Go-live activation
                </p>
                <p className="text-muted-foreground text-sm">
                  Billing begins only after successful activation and live call
                  verification
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Why businesses choose Conversa
          </h2>

          <h3 className="font-bold text-foreground">
            Capture lost revenue with 24/7 AI call handling
          </h3>
          <p>
            Every answered call is a potential booking. Every after-hours inquiry
            becomes a captured opportunity instead of lost revenue.
          </p>

          <h3 className="font-bold text-foreground">
            Free your team from routine inquiries
          </h3>
          <p>
            Reception staff focus on high-value interactions while the{" "}
            <strong className="text-foreground">conversational AI</strong>{" "}
            handles routine calls, SMS, and email autonomously.
          </p>

          <h3 className="font-bold text-foreground">
            Scale locations without hiring
          </h3>
          <p>
            Add new locations without proportionally growing your front desk team
            — the{" "}
            <strong className="text-foreground">AI front desk</strong> scales
            with your business.
          </p>

          <h3 className="font-bold text-foreground">
            True multi-channel with persistent memory
          </h3>
          <p>
            Phone, SMS, and email through a{" "}
            <strong className="text-foreground">
              single conversational AI platform
            </strong>{" "}
            with shared context and conversation history.
          </p>

          <h3 className="font-bold text-foreground">
            Production-grade reliability
          </h3>
          <p>
            Built for uptime and consistency with enterprise-grade
            infrastructure, 99.9% SLA, and real-time monitoring.
          </p>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Explore Conversa
          </h2>
          <p>
            If your business is losing calls, overwhelmed at the front desk, or
            missing after-hours opportunities, Conversa delivers{" "}
            <strong className="text-foreground">
              turnkey conversational AI
            </strong>{" "}
            that starts handling calls in weeks, not months.
          </p>

          <Button variant="secondary" asChild>
            <a
              href="https://conversa.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Conversa
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </Button>

        </div>

        <Footer />
      </div>
    </main>
  );
}
