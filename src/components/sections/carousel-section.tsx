import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Phone, GraduationCap, HeartPulse } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PortfolioItem {
  src?: string;
  videoSrc?: string;
  alt: string;
  title: string;
  description: string;
  link?: string;
  button?: string;
  logo?: string;
  icon?: LucideIcon;
  tags: string[];
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    src: "/agentive.png",
    alt: "Agentive",
    title: "Agentive",
    description:
      "Scaled to 50,000+ users — the leading SaaS platform helping AI agencies deliver and manage client solutions 10x faster.",
    link: "/agentive-ai-saas",
    logo: "/agentive_logo.png",
    tags: ["Saas", "Full-stack", "No-code", "Product Design"],
  },
  {
    videoSrc: "/recruitment_video.mp4",
    alt: "Voice AI for Recruitment",
    title: "Voice AI for Recruitment",
    description:
      "Cut recruiter costs by 5x — an AI voice agent that qualifies 10,000+ candidates automatically, deployed for one of Japan's largest recruitment firms.",
    link: "/voice-ai-for-recruitment",
    icon: Phone,
    tags: ["Voice AI", "Recruitment", "Automation"],
  },
  {
    videoSrc: "/hr-platform.mp4",
    alt: "HR & H&S Training Platform",
    title: "HR & H&S Training Platform",
    description:
      "Eliminated manual compliance tracking — an AI-powered training platform that auto-generates assessments and monitors staff certifications across 20+ facilities.",
    link: "/hr-training-platform",
    icon: GraduationCap,
    tags: ["AI Platform", "HR & Compliance", "SaaS"],
  },
  {
    videoSrc: "/read_rns_video.mp4",
    alt: "ReadyRNs",
    title: "ReadyRNs",
    description:
      "Helping thousands of nurses upskill faster — an AI-powered medical education platform with intelligent study tools and LLM-driven assessments.",
    link: "/readyrns",
    logo: "/rns_logo.png",
    tags: ["Saas", "Medical Platform", "LLM Orchestration"],
  },
  {
    src: "/conversa_crm.png",
    alt: "Conversa",
    title: "Conversa",
    description:
      "Zero missed calls, 24/7 — a conversational AI front desk handling phone, SMS, and email with persistent memory and 100+ integrations for service businesses.",
    link: "/conversa",
    logo: "/conversa-icon.png",
    tags: ["AI Product", "Voice AI", "Multi-Channel"],
  },
  {
    src: "/bucks_linkedin.jpeg",
    alt: "Healthcare Voice AI Agent",
    title: "Healthcare Voice AI Agent",
    description:
      "1,000+ users querying personal health data hands-free — a voice AI agent embedded in a mobile app delivering personalised meal and exercise plans in real time.",
    link: "/healthcare-voice-ai",
    icon: HeartPulse,
    tags: ["Voice AI", "Mobile App", "Healthcare"],
  },
  {
    src: "/aaa.png",
    alt: "AAAaccelerator",
    title: "AAAaccelerator",
    description:
      "The #1 AI community in the world — powering 1,000+ agency owners to launch, grow, and scale AI automation businesses.",
    button: "https://aaaaccelerator.com",
    logo: "/aaa_logo.png",
    tags: ["Analytics Tracking", "2025", "Agency Platform"],
  },
];

const badgeStyles = [
  { bg: "bg-red-100", text: "text-red-800" },
  { bg: "bg-blue-100", text: "text-blue-800" },
  { bg: "bg-green-100", text: "text-green-800" },
  { bg: "bg-purple-100", text: "text-purple-800" },
];

export const CarouselSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {PORTFOLIO_ITEMS.map((item, index) => (
        <Card
          key={index}
          className={`py-0 shadow-md border-none bg-white transition-opacity duration-300 ${item.button || item.link ? "cursor-pointer hover:opacity-70" : ""}`}
          onClick={() => {
            if (item.link) {
              window.location.href = item.link;
            } else if (item.button) {
              window.open(item.button, "_blank");
            }
          }}
        >
          <CardContent className="flex flex-col gap-4 px-0 p-6">
            <div className="flex gap-2 flex-wrap">
              {item.tags.map((tag, i) => {
                const { bg, text } = badgeStyles[i % badgeStyles.length];
                return (
                  <Badge
                    key={i}
                    className={`${bg} ${text} border-none font-medium`}
                  >
                    {tag}
                  </Badge>
                );
              })}
            </div>
            <AspectRatio ratio={16 / 9} className="w-full">
              {item.videoSrc ? (
                <video
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <Image
                  src={item.src!}
                  alt={item.alt}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </AspectRatio>

            <div className="flex flex-col mt-2">
              <div className="flex items-center gap-2">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={60}
                    height={60}
                    className="w-6 h-6 rounded-full"
                  />
                ) : item.icon ? (
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                ) : null}
                <CardTitle className="text-xl font-semibold my-1">
                  {item.title}
                </CardTitle>
              </div>
              <CardDescription className="text-muted-foreground text-sm">
                {item.description}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
