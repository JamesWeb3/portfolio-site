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
              title="ReadyRNs: AI-Powered Nursing Education Platform"
              description="Transforming nursing education with 20+ AI-integrated tools for clinical scenario training and professional development."
              videoSrc="/read_rns_video.mp4"
            />

            <div className="flex md:flex-row flex-col items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <p>Trusted by nursing professionals nationwide</p>
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
                  numPeople={3}
                />
              </div>
              <Button size="sm" variant="secondary" asChild>
                <a href="https://www.readyrns.com/" target="_blank" rel="noopener noreferrer">
                  Visit ReadyRNs
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <Separator className="my-4" />

            <p>
              Nursing education has traditionally relied on classroom instruction, textbooks, and limited clinical hours.
              But the gap between theoretical knowledge and real-world patient care remains a critical challenge for
              students, new graduates, and even experienced nurses transitioning to new specialties.
            </p>

            <p>
              ReadyRNs provides a comprehensive{" "}
              <strong className="text-foreground">AI-driven nursing education platform</strong> that delivers realistic clinical
              scenario training, immediate feedback, and personalized learning paths accessible anywhere, anytime.
            </p>

            <p>
              No more anxiety before clinical rotations.
              <br />
              No more guessing if you&apos;re prepared.
              <br />
              No more gaps between knowledge and practice.
            </p>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Core platform: how it works</h2>

            <h3 className="font-bold text-foreground">1. 20+ Integrated AI-Powered Tools</h3>
            <p>
              The platform combines specialized AI programming with comprehensive nursing education tools designed to meet
              learners at any stage of their career.
            </p>

            <h3 className="font-bold text-foreground">2. Interactive Clinical Scenario Simulations</h3>
            <p>
              Practice realistic patient care scenarios in a safe environment. Revisit challenging situations repeatedly
              until you achieve mastery without risk to real patients.
            </p>

            <h3 className="font-bold text-foreground">3. NCLEX Preparation & Practice Questions</h3>
            <p>Each module includes:</p>
            <ul>
              <li>comprehensive practice question banks</li>
              <li>adaptive difficulty based on performance</li>
              <li>detailed rationales for every answer</li>
              <li>test-taking strategy guidance</li>
              <li>progress tracking and analytics</li>
            </ul>

            <h3 className="font-bold text-foreground">4. Clinical Decision-Making Support</h3>
            <p>Develop critical thinking skills through:</p>
            <ul>
              <li>lab result interpretation guides</li>
              <li>medication mastery modules</li>
              <li>clinical skills checklists</li>
              <li>patient assessment frameworks</li>
              <li>prioritization exercises</li>
            </ul>
            <p>Build confidence before stepping into real clinical environments.</p>

            <h3 className="font-bold text-foreground">5. AI-Powered Personalized Mentoring</h3>
            <p>The platform provides:</p>
            <ul>
              <li className="italic">&quot;Just-in-time information&quot; when you need it most</li>
              <li className="italic">Personalized learning recommendations</li>
              <li className="italic">Immediate feedback on scenario performance</li>
              <li className="italic">Identification of knowledge gaps</li>
              <li className="italic">Adaptive content based on your progress</li>
            </ul>
            <p>
              Like having an experienced nurse mentor available{" "}
              <strong className="text-foreground">24/7</strong>.
            </p>

            <h3 className="font-bold text-foreground">6. D.E.P.A. Method for Healthcare Systems</h3>
            <p>
              For hospitals and healthcare organizations, the proprietary D.E.P.A. method enables:
            </p>
            <ul>
              <li className="italic">identification of clinical competency gaps</li>
              <li className="italic">accelerated development from novice to expert</li>
              <li className="italic">standardized training across departments</li>
              <li className="italic">measurable outcomes and progress tracking</li>
              <li>reduced onboarding time for new nurses</li>
            </ul>
            <p>A systematic approach to building nursing excellence across your organization.</p>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Who this platform serves</h2>
            <p>ReadyRNs is designed for nursing professionals at every career stage:</p>

            <div className="border border-border rounded-lg p-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-semibold text-foreground">Nursing Students</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <span className="font-semibold text-foreground">New Graduates</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="font-semibold text-foreground">Practicing RNs &amp; LPNs</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <span className="font-semibold text-foreground">Nursing Schools &amp; Educators</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                <span className="font-semibold text-foreground">Healthcare Systems &amp; Hospitals</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span className="font-semibold text-foreground">Nurses transitioning to new specialties</span>
              </div>
            </div>

           

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Why organizations choose ReadyRNs</h2>

            <h3 className="font-bold text-foreground">Practice Without Risk</h3>
            <p>Nurses can make mistakes and learn from them in a safe, simulated environment.</p>

            <h3 className="font-bold text-foreground">Learn Anytime, Anywhere</h3>
            <p>Flexible, self-paced learning accessible from any device, on any schedule.</p>

            <h3 className="font-bold text-foreground">Bridge the Theory-Practice Gap</h3>
            <p>Students arrive at clinical rotations better prepared, with hands-on scenario experience.</p>

            <h3 className="font-bold text-foreground">Standardize Training Quality</h3>
            <p>Consistent, high-quality education across all nurses in your organization.</p>

            <h3 className="font-bold text-foreground">Track Progress & Outcomes</h3>
            <p>Detailed analytics help identify gaps and measure improvement over time.</p>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Technical implementation</h2>
            <p>This platform was built with modern web technologies and AI integration:</p>
            <ul>
              <li>responsive, mobile-first design</li>
              <li className="italic">real-time AI feedback systems</li>
              <li className="italic">adaptive learning algorithms</li>
              <li className="italic">secure user authentication and data management</li>
              <li className="italic">scalable infrastructure for institutional deployment</li>
            </ul>
            <p>Architected to handle thousands of concurrent users while maintaining performance.</p>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Explore the platform</h2>
            <p>
              If you&apos;d like to see how ReadyRNs transforms nursing education, visit the platform to explore the tools,
              scenarios, and AI-powered learning experience.
            </p>

            <Button variant="secondary" asChild>
              <a href="https://www.readyrns.com/" target="_blank" rel="noopener noreferrer">
                Visit ReadyRNs
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </Button>


          </div>

          <Footer />
        </div>
    </main>
  );
}
