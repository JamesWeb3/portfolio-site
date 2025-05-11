import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const CAROUSEL_ITEMS = [
  {
    src: "/agentive.png",
    alt: "Agentive",
    title: "Agentive SaaS",
    description:
      "Agentive is the go-to service delivery platform for AI Automation Agency owners. Easily create AI solutions for your clients. Boasting over 50,000 users.",
    button: "https://agentivehub.com",
    logo: "/agentive_logo.png",
  },
  {
    src: "/morningsideai.png",
    alt: "Morningside AI",
    title: "Morningside AI Website",
    description:
      "Morningside AI  is an AI platform built out of Auckland, New Zealand. We help educate, develop and consult on Bespoke Ai soltuion for clients and organizations around the world.",
    button: "https://morningside.ai",
    logo: "/msai_logo.png",
  },
  {
    src: "/aaaaccelerator.png",
    alt: "AAAaccelerator",
    title: "AAAaccelerator",
    description: "The AAAaccelerator is the number 1 AI community in the world. We help startups grow and scale their businesses. Founded by Liam Ottley and inventor of the AI Automation Agency.",
    button: "https://aaaaccelerator.com",
    logo: "/aaa_logo.png",
  },
  {
    src: "/readyrns.png",
    alt: "ReadyRNs",
    title: "ReadyRNs",
    description: "ReadyRNs is an AI powered nursing platform enabling nurses, doctors, practitioners and RN's to learn and educate themselves using a variety of AI tools.",
    button: "https://readyrns.com",
    logo: "/rns_logo.png",
  },
];
export const CarouselSection = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="gap-6">
        {CAROUSEL_ITEMS.map((item, index) => (
          <CarouselItem
            key={index}
            className="lg:basis-[50%] md:basis-[70%] grid-cols-3  p-2 md:pl-0 pl-5"
          >
            <Card className="relative group overflow-hidden py-0 shadow-md">
              <CardContent className="flex items-center justify-center px-0">
                <AspectRatio ratio={16 / 8} className="w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                  />
                </AspectRatio>

                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-3 flex flex-col justify-end">
                <Image src={item.logo} alt={item.alt} width={100} height={100} className="w-10 h-10" />
                  <h3 className="text-xl font-semibold my-1">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    {item.description}
                  </p>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => window.open(item.button, "_blank")}
                      variant="secondary"
                      className="w-fit"
                    >
                      Browse <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
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
      <div className="pointer-events-none absolute inset-y-0 left-0 lg:w-1/4 md:w-1/6 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 lg:w-1/4 md:w-1/6 bg-gradient-to-l from-background"></div>
    </Carousel>
  );
};
