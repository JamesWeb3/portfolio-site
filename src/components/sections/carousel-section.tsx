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

const CAROUSEL_ITEMS = [
  {
    src: "/agentive.png",
    alt: "Agentive",
    title: "Agentive SaaS",
    description:
      "Agentive is the go-to service delivery platform for AI Automation Agency owners. Easily create AI solutions for your clients. Boasting over 50,000 users.",
    button: "https://agentivehub.com",
  },
  {
    src: "/morningsideai.png",
    alt: "Morningside AI",
    title: "Morningside AI Website",
    description: "Avatar",
    button: "https://morningside.ai",
  },
  {
    src: "/aaaaccelerator.png",
    alt: "Avatar",
    title: "Avatar",
    description: "Avatar",
    button: "https://aaaaccelerator.com",
  },
  {
    src: "/readyrns.png",
    alt: "ReadyRNs",
    title: "ReadyRNs",
    description: "ReadyRNs",
    button: "https://readyrns.com",
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
                    className="w-full h-auto object-cover"
                  />
                </AspectRatio>

                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-3 flex flex-col justify-end">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    {item.description}
                  </p>
                  <Button className="mt-auto self-start bg-white text-black text-sm px-3 py-1 rounded hover:bg-gray-200">
                    {item.button}
                  </Button>
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
