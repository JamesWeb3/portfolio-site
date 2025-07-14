import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const CAROUSEL_ITEMS = [
  {
    src: "/image1.png",
    alt: "Agentive",
    title: "Agentive",
    description:
      "Agentive is the go-to service delivery platform for AI Automation Agency owners. Easily create AI solutions for your clients. Boasting over 50,000 users.",
    button: "https://agentivehub.com",
    logo: "/agentive_logo.png",
    tags: ["Saas", "Full-stack", "No-code", "Product Design"],
  },
  {
    src: "/image2.png",
    alt: "Morningside AI",
    title: "Morningside AI Website",
    description:
      "Morningside AI  is an AI platform built out of Auckland, New Zealand. We help educate, develop and consult on Bespoke Ai soltuion for clients and organizations around the world.",
    button: "https://morningside.ai",
    logo: "/msai_logo.png",
    tags: ["Website", "UI Design", "Lead Funnel"],
  },
  {
    src: "/image4.png",
    alt: "ReadyRNs",
    title: "ReadyRNs",
    description:
      "ReadyRNs is an AI powered nursing platform enabling nurses, doctors, practitioners and RN's to learn and educate themselves using a variety of AI tools.",
    logo: "/rns_logo.png",
    tags: ["Saas", "Medical Platform", "LLM Orchestration"],
  },
  {
    src: "/image3.png",
    alt: "AAAaccelerator",
    title: "AAAaccelerator",
    description:
      "The AAAaccelerator is the number 1 AI community in the world. We help startups grow and scale their businesses. Founded by Liam Ottley and inventor of the AI Automation Agency.",
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
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="gap-4">
        {CAROUSEL_ITEMS.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-[45%] basis-[90%] p-2 pl-3 max-w-[400px]"
          >
            <Card className="py-0 shadow-md border-none bg-white">
              <CardContent className="flex flex-col gap-4 px-0 p-6">
                <div className="flex gap-2">
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
                <AspectRatio ratio={16 / 8} className="w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1280}
                    height={720}
                    onClick={() => item.button && window.open(item.button, "_blank")}
                    className={`w-full max-w-[400px] max-h-[180px] h-auto object-cover rounded-xl mx-auto   ${item.button ? "cursor-pointer hover:blur-sm duration-300" : "cursor-default"}`}
                  />
                </AspectRatio>

                <div className="flex flex-col mt-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={60}
                      height={60}
                      className="w-6 h-6 rounded-full"
                    />
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
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex gap-4 absolute bottom-[-40px] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};
