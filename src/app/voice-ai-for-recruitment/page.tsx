"use client";
import Nav from "@/components/nav";
import Footer from "@/components/sections/footer";
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
              title="AI Voice Agent for Candidate Qualification"
              description="An outbound voice AI system that calls job applicants, loads their CV in real-time, verifies identity, assesses motivators, and determines role fit — deployed for one of Japan's largest recruitment firms."
              videoSrc="/recruitment_video.mp4"
              stats={[
                { value: "24/7", label: "Outbound Calling" },
                { value: "10,000+", label: "Hours Saved" },
                { value: "5x", label: "Cheaper Than Human Recruiter" },
              ]}
            />


            <Separator className="my-4" />

            <p className="text-muted-foreground">
              Sentry AI, in partnership with <a href="https://www.dynaflow.ai/" target="_blank" className="text-purple-500 font-semibold cursor-pointer hover:text-purple-500/80 transition-colors duration-300">DynaFlow</a>, is building AI-powered recruitment voice agents across the Asia region.
            </p>
            <p>
              High-volume recruitment is slow and expensive. Qualifying 10,000 candidates manually takes months
              of recruiter time — each call averaging 10–15 minutes, each hire costing more than it should.
              Delays in outreach mean top candidates accept other offers before they&apos;re even contacted.
            </p>

            <p>
              Our{" "}
              <strong className="text-foreground">AI voice agent for recruitment</strong> eliminates that bottleneck.
              It calls 10,000+ candidates in days instead of months, at a rate{" "}
              <strong className="text-foreground">roughly 5x cheaper than a human recruiter</strong>. Every call uses{" "}
              <strong className="text-foreground">real-time live function calls</strong> to pull the candidate&apos;s CV mid-conversation,
              assess fit against the role, and — if they&apos;re not the right match — recommend alternative jobs to them live on the call.
            </p>

            <p>
              The result: faster time-to-hire, dramatically lower cost-per-screen, and zero candidates lost to slow follow-up.
              The system is now live with one of the largest recruitment companies in Japan, processing
              candidate qualifications at scale across multiple job categories.
            </p>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">How the call flow works</h2>

            <p>Each outbound call follows a structured qualification pipeline:</p>

            <div className="border border-border rounded-lg p-6 bg-muted space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-foreground">CV Retrieval</p>
                  <p className="text-muted-foreground text-sm">
                    Before the call connects, the agent triggers a function call to load the candidate&apos;s CV
                    and the job listing they applied for, giving it full context for the conversation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-foreground">Identity Verification</p>
                  <p className="text-muted-foreground text-sm">
                    The agent opens by confirming it&apos;s speaking with the right person — verifying name,
                    contact details, and that they did apply for the role in question.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-foreground">Job Confirmation</p>
                  <p className="text-muted-foreground text-sm">
                    The agent confirms the specific role the candidate applied for, outlines key details about
                    the position, and checks the candidate is still interested in proceeding.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold text-foreground">Motivator Assessment</p>
                  <p className="text-muted-foreground text-sm">
                    A series of qualifying questions assess what matters most to the candidate — remote vs. in-office
                    preference, salary expectations, commute tolerance, career growth priorities, and work-life balance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                  5
                </div>
                <div>
                  <p className="font-semibold text-foreground">Fit Determination</p>
                  <p className="text-muted-foreground text-sm">
                    Based on the candidate&apos;s responses and the role requirements, the agent reaches a conclusion
                    on whether the job is a strong fit and communicates this clearly to the candidate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm shrink-0">
                  6
                </div>
                <div>
                  <p className="font-semibold text-foreground">Alternative Job Matching</p>
                  <p className="text-muted-foreground text-sm">
                    If the role isn&apos;t the right fit, the system triggers an asynchronous query against the full
                    job database to surface alternative positions that better match the candidate&apos;s motivators
                    and experience — keeping them engaged in the pipeline rather than lost.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">The problem we solved</h2>

            <p>High-volume recruitment teams face a set of compounding challenges when qualifying candidates manually:</p>

            <ul>
              <li>
                <strong className="text-foreground">Recruiter bandwidth</strong> — Each qualification call takes 10-15 minutes,
                creating a hard ceiling on how many candidates can be processed daily
              </li>
              <li>
                <strong className="text-foreground">Inconsistent screening</strong> — Different recruiters ask different questions
                and weight answers differently, leading to inconsistent qualification decisions
              </li>
              <li>
                <strong className="text-foreground">Candidate drop-off</strong> — Delays in outreach mean candidates accept
                other offers before they&apos;re even contacted
              </li>
              <li>
                <strong className="text-foreground">Lost pipeline value</strong> — When a candidate isn&apos;t right for one role,
                they&apos;re rarely matched to alternatives and simply fall out of the funnel
              </li>
              <li>
                <strong className="text-foreground">Scaling cost</strong> — Processing more applications means hiring more
                recruiters, with no improvement in per-call efficiency
              </li>
            </ul>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Technical architecture</h2>

            <p>The system was engineered for reliability and natural conversation flow at scale:</p>

            <ul>
              <li>
                <strong className="text-foreground">Real-time CV loading</strong> — Function calling retrieves candidate
                data and job details before the call connects, so the agent has full context from the first word
              </li>
              <li>
                <strong className="text-foreground">Structured conversation engine</strong> — The call follows a defined
                pipeline (verify, confirm, assess, determine) while allowing natural conversational flow within each stage
              </li>
              <li>
                <strong className="text-foreground">Motivator scoring</strong> — Candidate responses are scored against
                role attributes to produce a quantified fit assessment, not just a subjective opinion
              </li>
              <li>
                <strong className="text-foreground">Async job matching</strong> — When fit is negative, an asynchronous
                query runs against the job database to suggest alternatives without blocking the call flow
              </li>
              <li>
                <strong className="text-foreground">ATS integration</strong> — Qualification outcomes, motivator scores,
                and call summaries are written back to the applicant tracking system automatically
              </li>
              <li>
                <strong className="text-foreground">Low-latency voice</strong> — Optimised for natural-sounding conversation
                with minimal response delay, critical for candidate experience
              </li>
            </ul>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Why this approach works</h2>

            <h3 className="font-bold text-foreground">Speed to Contact</h3>
            <p>Candidates are called within minutes of applying, not days. Faster outreach means fewer drop-offs and more engaged candidates.</p>

            <h3 className="font-bold text-foreground">Consistent Qualification</h3>
            <p>Every candidate goes through the same structured assessment. No variation between recruiters, no questions missed, no bias in scoring.</p>

            <h3 className="font-bold text-foreground">No Candidate Left Behind</h3>
            <p>The async job matching ensures candidates who aren&apos;t right for one role are immediately surfaced alternatives — turning a rejection into a new opportunity.</p>

            <h3 className="font-bold text-foreground">Recruiter Time Reclaimed</h3>
            <p>Human recruiters focus on high-value activities — final interviews, client relationships, and closing — while the AI handles initial qualification at scale.</p>

            <h3 className="font-bold text-foreground">Scale Without Limits</h3>
            <p>Process thousands of applications without proportionally growing the recruitment team. The system scales with volume, not headcount.</p>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
            <p>
              If your recruitment team is spending too much time on initial candidate qualification calls,
              we can build something similar for your workflow. Every implementation is tailored to your
              specific screening criteria, ATS, and job categories.
            </p>

            <Button variant="secondary" onClick={() => window.dispatchEvent(new Event("open-contact-widget"))}>
                Contact Us
                <ArrowUpRightIcon className="w-4 h-4" />
            </Button>

          </div>

          <Footer />
        </div>
    </main>
  );
}
