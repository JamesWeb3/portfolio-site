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
              title="AI-Powered HR & Health and Safety Training Platform"
              description="A custom training platform built for a nursing home provider — combining AI-generated assessments, government legislation integration, and staff progress tracking to modernise HR and health & safety compliance."
              videoSrc="/hr-platform.mp4"
              stats={[
                { value: "AI", label: "Generated Assessments" },
                { value: "Live", label: "Legislation API" },
                { value: "100%", label: "Compliance Tracking" },
              ]}
            />


            <Separator className="my-4" />

            <p>
              Nursing homes operate under strict regulatory requirements. Staff must complete ongoing training
              across HR policies, health &amp; safety procedures, and compliance mandates — all of which change
              as government legislation is updated.
            </p>

            <p>
              We built a{" "}
              <strong className="text-foreground">custom AI-powered training platform</strong> that eliminates
              manual training administration, keeps content aligned with current legislation, and uses
              intelligent assessment to ensure staff genuinely understand the material.
            </p>

            <p>
              No more outdated training packs.
              <br />
              No more paper-based tracking.
              <br />
              No more compliance gaps.
            </p>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Core platform: how it works</h2>

            <h3 className="font-bold text-foreground">1. Government Legislation API Integration</h3>
            <p>
              The platform connects directly to government legislation sources via API, pulling in the latest
              regulatory requirements for health &amp; safety and employment law. Training content is automatically
              kept in sync with current legislation — when regulations change, the training updates.
            </p>

            <h3 className="font-bold text-foreground">2. AI-Generated Quiz System</h3>
            <p>
              Each training module culminates in an AI-generated assessment that mixes three question types
              to thoroughly test comprehension:
            </p>
            <ul>
              <li>
                <strong className="text-foreground">Multiple choice</strong> — Tests knowledge of specific policies,
                procedures, and legislative requirements
              </li>
              <li>
                <strong className="text-foreground">True or false</strong> — Challenges common misconceptions and
                verifies understanding of key compliance points
              </li>
              <li>
                <strong className="text-foreground">AI-generated scenarios</strong> — Creates realistic workplace
                situations where staff must apply their training to make the right decision
              </li>
            </ul>
            <p>
              Questions are generated dynamically, so no two assessments are identical — preventing staff
              from memorising answers rather than learning the material.
            </p>

            <h3 className="font-bold text-foreground">3. Staff Progress & Compliance Dashboard</h3>
            <p>Management has full visibility into:</p>
            <ul>
              <li className="italic">which staff have completed required training</li>
              <li className="italic">individual assessment scores and pass rates</li>
              <li className="italic">upcoming training deadlines and expiring certifications</li>
              <li className="italic">organisation-wide compliance status at a glance</li>
              <li>areas where staff are consistently underperforming</li>
            </ul>

            <h3 className="font-bold text-foreground">4. Training Module Builder</h3>
            <p>
              Administrators can create and assign training modules covering any topic — from manual handling
              and infection control to privacy policies and workplace behaviour. Each module is linked to the
              relevant legislation and assessment criteria.
            </p>

            <h3 className="font-bold text-foreground">5. Automated Reminders & Escalation</h3>
            <p>
              The system automatically notifies staff of upcoming and overdue training. If deadlines are missed,
              escalation alerts are sent to management — ensuring nothing falls through the cracks.
            </p>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">The AI assessment engine</h2>

            <p>The assessment system is the core differentiator of this platform. Here&apos;s how it works:</p>

            <div className="border border-border rounded-lg p-6 bg-muted space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-foreground">Content Analysis</p>
                  <p className="text-muted-foreground text-sm">
                    The AI ingests the training module content and linked legislation, identifying key
                    concepts, compliance requirements, and practical application points.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-foreground">Question Generation</p>
                  <p className="text-muted-foreground text-sm">
                    A balanced mix of multiple choice, true/false, and scenario-based questions is generated.
                    Scenarios present realistic workplace situations specific to the nursing home environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-foreground">Adaptive Difficulty</p>
                  <p className="text-muted-foreground text-sm">
                    If a staff member fails an assessment, the retake generates fresh questions with adjusted
                    focus on the areas they got wrong — reinforcing weak points rather than retesting strengths.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold text-foreground">Instant Feedback</p>
                  <p className="text-muted-foreground text-sm">
                    After each assessment, staff receive detailed explanations for incorrect answers — linking
                    back to the specific legislation or policy section they need to review.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">The problem we solved</h2>

            <p>Before this platform, the nursing home faced common but costly training challenges:</p>

            <ul>
              <li>
                <strong className="text-foreground">Manual tracking</strong> — Training records lived in spreadsheets
                and paper files, making it difficult to know who was compliant at any given time
              </li>
              <li>
                <strong className="text-foreground">Outdated content</strong> — Training materials lagged behind
                legislative changes, creating compliance risk
              </li>
              <li>
                <strong className="text-foreground">Tick-box culture</strong> — Staff could complete training without
                genuinely understanding the material, since assessments were static and predictable
              </li>
              <li>
                <strong className="text-foreground">Admin burden</strong> — HR spent significant time chasing
                completions, scheduling sessions, and manually recording results
              </li>
              <li>
                <strong className="text-foreground">Audit anxiety</strong> — Without real-time compliance data,
                preparing for regulatory audits was stressful and time-consuming
              </li>
            </ul>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Who this platform serves</h2>

            <div className="border border-border rounded-lg p-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="font-semibold text-foreground">Caregivers & Nursing Staff</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="font-semibold text-foreground">Health & Safety Officers</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
                <span className="font-semibold text-foreground">HR Managers</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                <span className="font-semibold text-foreground">Facility Management</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <span className="font-semibold text-foreground">Compliance & Audit Teams</span>
              </div>
            </div>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Why this approach works</h2>

            <h3 className="font-bold text-foreground">Always Current</h3>
            <p>Government legislation API integration means training content reflects the latest regulations automatically — no manual updates required.</p>

            <h3 className="font-bold text-foreground">Genuine Comprehension</h3>
            <p>AI-generated assessments with dynamic questions and realistic scenarios ensure staff actually understand the material, not just memorise answers.</p>

            <h3 className="font-bold text-foreground">Zero Admin Overhead</h3>
            <p>Automated assignment, tracking, reminders, and escalation eliminate the manual work that previously consumed HR hours every week.</p>

            <h3 className="font-bold text-foreground">Audit-Ready at All Times</h3>
            <p>Real-time compliance dashboards mean the organisation is always prepared for regulatory audits — no last-minute scramble to compile records.</p>

            <h3 className="font-bold text-foreground">Scalable Across Facilities</h3>
            <p>The platform can be rolled out across multiple sites with consistent training standards and centralised reporting.</p>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Technical architecture</h2>

            <p>The platform was engineered for reliability, security, and seamless content delivery:</p>

            <ul>
              <li>
                <strong className="text-foreground">Government API integration</strong> — Real-time connection to
                legislation databases ensures training content stays current with regulatory changes
              </li>
              <li className="italic">AI assessment engine generating unique question sets per attempt</li>
              <li className="italic">role-based access control for staff, managers, and administrators</li>
              <li className="italic">encrypted data storage for sensitive HR and training records</li>
              <li className="italic">responsive design for completion on any device during or between shifts</li>
              <li>comprehensive audit trail for every training interaction and assessment result</li>
            </ul>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Get in touch</h2>
            <p>
              If your organisation needs a smarter approach to HR and health &amp; safety training — one that
              stays current with legislation and genuinely tests staff comprehension — we can build
              something similar tailored to your industry and compliance requirements.
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
