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
              title="Agentive: No-Code AI Agent SaaS"
              description="Build, train, and deploy intelligent AI agents to WhatsApp, websites, Telegram, and beyond, without writing a single line of code."
              iframeSrc="https://www.youtube.com/embed/3HqcgCPG87o"
              stats={[
                { value: "75,000+", label: "Users Acquired" },
                { value: "0 → Scale", label: "Built from Scratch" },
                { value: "100,000+", label: "Agents Created" },
              ]}
            />

            <div className="flex md:flex-row flex-col items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <p>Trusted by thousands of businesses worldwide</p>
               
              </div>
              <Button size="sm" variant="secondary" asChild>
                <a href="https://agentivehub.com" target="_blank" rel="noopener noreferrer">
                  Visit Agentive
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <Separator className="my-4" />

            <p>
              In 2024, the AI landscape exploded with possibilities, but most businesses were locked out. Building AI agents
              required deep technical expertise, expensive development teams, and months of iteration. The gap between
              AI&apos;s potential and practical deployment was massive.
            </p>

            <p>
              Agentive was built to bridge that gap. A{" "}
              <strong className="text-foreground">no-code platform</strong> that empowers anyone to create, train, and deploy
              sophisticated AI agents powered by OpenAI&apos;s GPT technology, and deploy them anywhere their customers already
              are.
            </p>

            <p>
              No coding required.
              <br />
              No technical expertise needed.
              <br />
              No limits on where you can deploy.
            </p>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">The challenge we solved</h2>

            <p>Before Agentive, businesses faced a frustrating reality:</p>

            <ul>
              <li>
                <strong className="text-foreground">High barrier to entry</strong> - Building AI agents required developers, API
                expertise, and infrastructure
              </li>
              <li>
                <strong className="text-foreground">Fragmented deployment</strong> - Each platform (WhatsApp, web, Telegram)
                needed separate integrations
              </li>
              <li>
                <strong className="text-foreground">Training complexity</strong> - Teaching AI about your business meant wrestling
                with prompts and fine-tuning
              </li>
              <li>
                <strong className="text-foreground">Expensive scaling</strong> - Costs spiraled as usage grew
              </li>
            </ul>

            <p>We built Agentive to eliminate every one of these barriers.</p>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Core platform: how it works</h2>

            <p>Agentive was purpose-built around three core pillars, giving businesses complete control over their AI agents from creation to deployment.</p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-border rounded-lg p-6 bg-muted space-y-3">
                <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h13.26M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <h3 className="text-lg font-bold text-foreground">Building Agents</h3>
                <p className="text-sm text-muted-foreground">Create sophisticated AI agents using a visual drag-and-drop builder. Design conversation flows, set decision logic, and configure behavior, all without writing a single line of code.</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-muted space-y-3">
                <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                <h3 className="text-lg font-bold text-foreground">Managing Agents</h3>
                <p className="text-sm text-muted-foreground">Train, monitor, and optimize your agents from a single dashboard. Upload knowledge bases, track conversation analytics, measure performance, and continuously refine responses.</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-muted space-y-3">
                <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
                <h3 className="text-lg font-bold text-foreground">Deploying Agents</h3>
                <p className="text-sm text-muted-foreground">Launch your agents to any channel with one click. Deploy to WhatsApp, Slack, Telegram, Discord, websites, and more, reaching customers wherever they already are.</p>
              </div>
            </div>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Building Agents</h2>

            <p>
              Agentive was built directly on top of the OpenAI API. Users connected their own OpenAI API key to power their agents, and we provided the interface layer on top. Essentially, we built a wrapper that made the full power of GPT accessible to anyone, without needing to write a single line of code.
            </p>

            <p>To create an agent on Agentive, users would:</p>
            <ul>
              <li><strong className="text-foreground">Choose their AI model</strong> - select from available OpenAI models depending on their needs</li>
              <li><strong className="text-foreground">Set the temperature</strong> - control how creative or deterministic the agent&apos;s responses would be</li>
              <li><strong className="text-foreground">Write the system prompt</strong> - define the agent&apos;s personality, role, and instructions</li>
            </ul>

            <h3 className="font-bold text-foreground">Vector Store Knowledge Base</h3>
            <p>
              Beyond the base prompt, we built out a full vector store knowledge base. Users could upload documents, PDFs, and other files directly to their agent. These documents were embedded and stored so the agent could reference them in real time during conversations, giving it deep, specific knowledge about the user&apos;s business.
            </p>

            <h3 className="font-bold text-foreground">Function Calling & Tools</h3>
            <p>
              Agentive also supported function calls. Users could configure custom tools that allowed their agents to send and receive information from external systems. This meant agents weren&apos;t limited to just conversation - they could look up order statuses, book appointments, submit forms, query databases, and more.
            </p>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Managing Agents</h2>

            <p>
              Once an agent was built, Agentive gave users full control over its lifecycle and performance from a single dashboard.
            </p>

            <h3 className="font-bold text-foreground">Publish & Draft Mode</h3>
            <p>
              Users could toggle their agent between draft mode and published. Draft mode let users test and iterate on their agent privately before pushing changes live. When ready, a single click would publish the agent to all connected channels.
            </p>

            <h3 className="font-bold text-foreground">Conversation Analytics</h3>
            <p>
              Every conversation was logged and searchable. Users could review full chat transcripts, see which questions were being asked most frequently, and identify gaps in their agent&apos;s knowledge base.
            </p>

            <h3 className="font-bold text-foreground">Performance Tracking</h3>
            <p>
              Built-in metrics gave users visibility into how their agents were performing: total conversations, response quality, user satisfaction signals, and usage trends over time.
            </p>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Deploying Agents</h2>

            <p>
              Deployment was where Agentive truly stood out. With one click, users could push their agent live to any channel their customers were already using. Each integration was built natively to take full advantage of platform-specific features like rich messages, buttons, and media sharing.
            </p>

            <div className="border border-border rounded-lg p-6 bg-muted space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">WhatsApp</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E01E5A">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Slack</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#26A5E4">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Telegram</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#5865F2">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Discord</span>
                </div>
              </div>
            </div>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Use cases our users built</h2>
            <p>With 75,000+ users, Agentive powered AI agents across every industry:</p>

            <div className="border border-border rounded-lg p-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <span className="font-semibold text-foreground">Customer Support Bots</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span className="font-semibold text-foreground">E-commerce Assistants</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span className="font-semibold text-foreground">Appointment Scheduling</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <span className="font-semibold text-foreground">Educational Tutors</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="font-semibold text-foreground">Lead Qualification</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <span className="font-semibold text-foreground">FAQ & Knowledge Base Agents</span>
              </div>
            </div>

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Scaling story: 0 to 75,000 users</h2>

            <p>
              Agentive launched in 2024 with a clear mission: democratize AI agent creation. The growth trajectory tells the
              story of market demand meeting the right solution:
            </p>

            <div className="border border-border rounded-lg p-6 bg-muted space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Product-Market Fit</p>
                  <p className="text-muted-foreground text-sm">
                    Validated demand through early user feedback and rapid iteration cycles
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Viral Growth Mechanics</p>
                  <p className="text-muted-foreground text-sm">
                    Built-in sharing and referral systems drove organic user acquisition
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Community Building</p>
                  <p className="text-muted-foreground text-sm">
                    Active user community sharing templates, use cases, and best practices
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Scalable Infrastructure</p>
                  <p className="text-muted-foreground text-sm">
                    Architecture designed from day one to handle explosive growth
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Technical architecture</h2>

            <p>Building a platform that scales to 75,000+ users required careful technical decisions:</p>

            <ul>
              <li>
                <strong className="text-foreground">Modern stack</strong> - React/Next.js frontend with serverless backend
                architecture
              </li>
              <li className="italic">real-time WebSocket connections for live chat functionality</li>
              <li className="italic">distributed message queue for handling high-volume deployments</li>
              <li className="italic">OpenAI API integration with intelligent rate limiting and fallbacks</li>
              <li className="italic">multi-tenant architecture with isolated data and compute</li>
              <li className="italic">CDN-backed asset delivery for global performance</li>
              <li>comprehensive API layer enabling custom integrations</li>
            </ul>

            <Separator className="my-4" />
            <h2 className="text-2xl font-bold text-foreground">Why businesses chose Agentive</h2>

            <h3 className="font-bold text-foreground">Zero Learning Curve</h3>
            <p>Non-technical users could build and deploy their first agent in under 30 minutes.</p>

            <h3 className="font-bold text-foreground">Deploy Anywhere</h3>
            <p>One agent, unlimited channels: WhatsApp, web, Telegram, and more from a single dashboard.</p>

            <h3 className="font-bold text-foreground">True No-Code</h3>
            <p>No hidden complexity. No &quot;just a little code needed.&quot; Genuinely accessible to anyone.</p>

            <h3 className="font-bold text-foreground">Affordable Scaling</h3>
            <p>Pricing designed for growing businesses, not enterprise budgets.</p>

            <h3 className="font-bold text-foreground">Rapid Innovation</h3>
            <p>Weekly feature releases kept the platform at the cutting edge of AI capabilities.</p>
            

            <Separator className="my-4" />
            <h2 className="text-xl font-bold text-foreground">Explore the platform</h2>
            <p>
              Agentive represents what&apos;s possible when powerful AI technology meets thoughtful product design. Visit the
              platform to see how no-code AI agent building works.
            </p>

            <Button variant="secondary" asChild>
              <a href="https://agentivehub.com" target="_blank" rel="noopener noreferrer">
                Visit Agentive
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </Button>

           
          </div>

          <Footer />
        </div>
    </main>
  );
}
