"use client";
import Nav from "@/components/nav";
import Footer from "@/components/sections/footer";
import { Separator } from "@/components/ui/separator";
import UseCaseHeader from "@/layouts/usecase-header";
import UseCaseFooter from "@/layouts/usecase-footer";

export default function App() {
  return (
    <main className="bg-background min-h-screen relative">
      <div className="max-w-350 mx-auto lg:px-20 md:px-12 px-8">
        <Nav />
        <div className="flex flex-col gap-4 my-28 max-w-200 mx-auto text-muted-foreground">
          <UseCaseHeader
            title="Enterprise Healthcare Voice AI Agent Embedded in a Mobile App"
            description="A production-grade healthcare voice AI agent integrated directly into a mobile app, enabling 1,000+ users to query personal health data and receive AI-powered meal and exercise plan suggestions — hands-free, in real time, powered by ElevenLabs."
            imageSrc="/bucks_linkedin.jpeg"
            imageAlt="Enterprise Healthcare Voice AI Agent"
            stats={[
              { value: "1,000+", label: "Active Users" },
              { value: "Voice AI", label: "Interface Upgrade" },
              { value: "Real-Time", label: "Health Data Queries" },
            ]}
          />

          <div className="flex md:flex-row flex-col items-center justify-between gap-2">
            <p>
              Built for enterprise reliability, personalised health insights,
              and hands-free mobile interaction
            </p>
          </div>

          <Separator className="my-4" />

          <p>
            Health and wellness apps generate vast amounts of user data —
            activity levels, dietary logs, biometrics, and health goals. But
            translating that raw data into{" "}
            <strong className="text-foreground">
              actionable, personalised meal and exercise recommendations
            </strong>{" "}
            requires more than static algorithms. Users want instant,
            conversational guidance tailored to their profile.
          </p>

          <p>
            We delivered a{" "}
            <strong className="text-foreground">
              healthcare voice AI agent
            </strong>{" "}
            embedded directly into a mobile app that queries each user&apos;s
            health data in real time via function calls and generates
            <strong className="text-foreground">
              {" "}
              personalised meal plans and exercise suggestions
            </strong>{" "}
            through natural voice conversation. Powered by{" "}
            <strong className="text-foreground">ElevenLabs</strong> for
            low-latency, natural-sounding speech, the agent operates as an
            always-available AI health companion.
          </p>

          <p>
            No scrolling through menus.
            <br />
            No manual meal planning.
            <br />
            No generic recommendations that ignore your data.
          </p>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            The problem we solved
          </h2>

          <p>
            At scale, mobile health platforms hit predictable constraints when
            delivering personalised guidance:
          </p>

          <ul>
            <li>
              <strong className="text-foreground">
                Generic recommendations
              </strong>{" "}
              — most apps offer one-size-fits-all meal and exercise plans that
              ignore individual user data
            </li>
            <li>
              <strong className="text-foreground">
                Data locked in dashboards
              </strong>{" "}
              — health metrics sit in charts and tables, disconnected from
              actionable next steps
            </li>
            <li>
              <strong className="text-foreground">
                Hands-free requirement
              </strong>{" "}
              — users need voice interaction while cooking, exercising, or on
              the move
            </li>
            <li>
              <strong className="text-foreground">
                Real-time personalisation
              </strong>{" "}
              — suggestions must reflect the user&apos;s latest activity, goals,
              and dietary preferences
            </li>
            <li>
              <strong className="text-foreground">
                AI voice automation at scale
              </strong>{" "}
              — delivering reliable, low-latency voice across 1,000+ concurrent
              users requires production-grade infrastructure
            </li>
          </ul>

          <p>
            We engineered a{" "}
            <strong className="text-foreground">voice-first AI layer</strong>{" "}
            that queries user health data, runs personalisation logic, and
            delivers meal and exercise plan suggestions conversationally — all
            within the existing mobile app experience.
          </p>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Core platform: how it works
          </h2>

          <h3 className="font-bold text-foreground">
            1. Mobile-Embedded Voice AI Agent
          </h3>
          <p>
            The{" "}
            <strong className="text-foreground">
              healthcare voice AI agent
            </strong>{" "}
            lives inside the mobile app as a native feature. Users tap to speak
            and receive personalised health guidance through natural conversation
            — no navigation, no typing, no switching apps.
          </p>
          <ul>
            <li className="italic">
              voice UX patterns designed for health and wellness use cases
            </li>
            <li className="italic">
              session state persisted across app navigation for continuous
              context
            </li>
            <li className="italic">
              incremental rollout with controlled release and rapid iteration
              loops
            </li>
          </ul>

          <h3 className="font-bold text-foreground">
            2. ElevenLabs voice layer for low-latency in-app audio
          </h3>
          <p>
            We integrated{" "}
            <strong className="text-foreground">ElevenLabs</strong> to deliver
            natural, responsive speech optimised for mobile performance and
            real-time health conversations.
          </p>
          <ul>
            <li className="italic">
              streaming audio playback tuned for mobile networks and variable
              connectivity
            </li>
            <li className="italic">
              voice settings calibrated for clear, warm health guidance delivery
            </li>
            <li className="italic">
              graceful fallback to text mode when voice services degrade
            </li>
            <li>
              sub-second latency targets to keep conversations feeling immediate
              and natural
            </li>
          </ul>

          <h3 className="font-bold text-foreground">
            3. Real-time function calls for personalised health data
          </h3>
          <p>
            The voice agent executes{" "}
            <strong className="text-foreground">
              real-time function calls
            </strong>{" "}
            to query each user&apos;s health profile, activity history, dietary
            preferences, and biometric data — then synthesises this into
            personalised meal and exercise recommendations during the
            conversation.
          </p>
          <ul>
            <li className="italic">
              tool calls to retrieve user health profiles, activity logs, and
              dietary history
            </li>
            <li className="italic">
              real-time data comparison against nutritional guidelines and
              fitness goals
            </li>
            <li className="italic">
              schema-validated responses to prevent hallucinated meal plans or
              unsafe exercise suggestions
            </li>
            <li className="italic">
              guardrails for medical safety: flagging contraindications and
              escalation routes
            </li>
            <li>
              full traceability for each data query and generated recommendation
            </li>
          </ul>

          <h3 className="font-bold text-foreground">
            4. AI-powered meal plan generation
          </h3>
          <p>
            Based on the user&apos;s health data, the agent generates{" "}
            <strong className="text-foreground">personalised meal plans</strong>{" "}
            that account for dietary restrictions, caloric targets, macronutrient
            goals, and food preferences.
          </p>
          <ul>
            <li className="italic">
              dynamic meal suggestions based on real-time health metrics and
              goals
            </li>
            <li className="italic">
              ingredient substitutions for allergies, intolerances, and
              preferences
            </li>
            <li className="italic">
              portion guidance calibrated to the user&apos;s activity level and
              targets
            </li>
            <li>voice-delivered recipes and preparation guidance on demand</li>
          </ul>

          <h3 className="font-bold text-foreground">
            5. AI-powered exercise plan suggestions
          </h3>
          <p>
            The agent queries activity data and fitness goals to deliver{" "}
            <strong className="text-foreground">
              personalised exercise recommendations
            </strong>{" "}
            — from workout structure to recovery guidance.
          </p>
          <ul>
            <li className="italic">
              exercise routines tailored to fitness level, available equipment,
              and goals
            </li>
            <li className="italic">
              progressive overload and variation logic to prevent plateaus
            </li>
            <li className="italic">
              recovery recommendations based on recent activity intensity
            </li>
            <li>
              voice-guided workout instructions for hands-free use during
              training
            </li>
          </ul>

          <h3 className="font-bold text-foreground">
            6. Observability, reliability &amp; production operations
          </h3>
          <p>
            Serving 1,000+ active users required enterprise-grade observability
            across voice sessions, function calls, and AI-generated health
            recommendations.
          </p>
          <ul>
            <li className="italic">
              per-session traces: function call durations, retries, failure
              reasons, and outcomes
            </li>
            <li className="italic">
              monitoring dashboards for latency, error rates, and completion
              rates
            </li>
            <li className="italic">
              rate-limit handling and backoff strategies for dependent health
              data systems
            </li>
            <li className="italic">
              strict logging hygiene and access controls for sensitive health
              data
            </li>
            <li>
              staged rollout, feature flags, and rapid rollback capability
            </li>
          </ul>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Who this platform serves
          </h2>

          <p>
            This healthcare voice AI build was engineered for mobile health
            platforms operating at scale:
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
                  d="M12 6v12m6-6H6"
                />
              </svg>
              <span className="font-semibold text-foreground">
                Health &amp; Wellness App Users
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
                  d="M4 6h16M4 12h10M4 18h16"
                />
              </svg>
              <span className="font-semibold text-foreground">
                Nutrition &amp; Fitness Platforms
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
                  d="M7 7h10v10H7z"
                />
              </svg>
              <span className="font-semibold text-foreground">
                Enterprise Product &amp; Engineering
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
                  d="M12 2l9 4.5v11L12 22 3 17.5v-11L12 2z"
                />
              </svg>
              <span>
                Any mobile app needing voice-driven personalised health
                recommendations
              </span>
            </div>
          </div>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Implementation process
          </h2>

          <p>
            The rollout was executed as a controlled delivery pipeline with
            measurable milestones:
          </p>

          <div className="border border-border rounded-lg p-6 bg-muted space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Voice UX &amp; health data mapping
                </p>
                <p className="text-muted-foreground text-sm">
                  Use cases for meal and exercise guidance, safety scope, latency
                  targets
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Mobile embed + ElevenLabs streaming
                </p>
                <p className="text-muted-foreground text-sm">
                  Voice layer integration, session state, audio reliability
                  across mobile networks
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                3
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Function calls &amp; health data retrieval
                </p>
                <p className="text-muted-foreground text-sm">
                  User profile queries, meal/exercise logic, schema validation,
                  safety guardrails
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                4
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Personalisation engine hardening
                </p>
                <p className="text-muted-foreground text-sm">
                  Edge cases, dietary restrictions, contraindication flags, QA
                  verification
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                5
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Rollout &amp; monitoring
                </p>
                <p className="text-muted-foreground text-sm">
                  Staged release to 1,000+ users, dashboards, iteration loops,
                  reliability tuning
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Why users adopted this build
          </h2>

          <h3 className="font-bold text-foreground">
            Personalised meal plans via voice
          </h3>
          <p>
            Users receive AI-generated meal suggestions tailored to their health
            data, dietary preferences, and caloric targets — delivered
            conversationally, hands-free.
          </p>

          <h3 className="font-bold text-foreground">
            Exercise guidance powered by real-time data
          </h3>
          <p>
            The voice agent queries activity history and fitness goals to suggest
            workouts, recovery strategies, and progressive training plans.
          </p>

          <h3 className="font-bold text-foreground">
            Hands-free interaction inside mobile
          </h3>
          <p>
            Users get personalised health guidance while cooking, exercising, or
            commuting — no typing, no scrolling, no switching apps.
          </p>

          <h3 className="font-bold text-foreground">
            Real-time function calls for live data
          </h3>
          <p>
            Every recommendation is grounded in the user&apos;s actual health
            profile, retrieved via real-time function calls during the
            conversation.
          </p>

          <h3 className="font-bold text-foreground">
            Enterprise reliability at scale
          </h3>
          <p>
            Built with production-grade observability, safety guardrails, and
            ElevenLabs voice infrastructure to serve 1,000+ active users
            reliably.
          </p>

          <Separator className="my-4" />
          <h2 className="text-2xl font-bold text-foreground">
            Explore this build
          </h2>
          <p>
            If you need a{" "}
            <strong className="text-foreground">
              healthcare voice AI agent
            </strong>{" "}
            embedded in a mobile app — one that queries user health data and
            delivers personalised meal and exercise plan suggestions via natural
            voice conversation — this is the delivery pattern we build.
          </p>

          <UseCaseFooter sector="voice-ai-agents" />
        </div>

        <Footer />
      </div>
    </main>
  );
}
