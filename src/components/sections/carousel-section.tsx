import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { SectionLayout } from "@/layouts/section-layout";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const CAROUSEL_ITEMS = [
  {
    src: "/agentive.png",
    alt: "Avatar",
    title: "Avatar",
    description: "Avatar",
    button: "Button",
  },
  {
    src: "/morningsideai.png",
    alt: "Avatar",
    title: "Avatar",
    description: "Avatar",
    button: "Button",
  },
  {
    src: "/aaaaccelerator.png",
    alt: "Avatar",
    title: "Avatar",
    description: "Avatar",
    button: "Button",
  },
];
export const CarouselSection = () => {
  return (
    <SectionLayout>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full bg-red-500"
      >
        <CarouselContent className="-ml-[5%] gap-6">
          {CAROUSEL_ITEMS.map((item, index) => (
            <CarouselItem key={index} className="basis-[60%]">
              <Card className="relative group overflow-hidden">
                <CardContent className="flex items-center justify-center p-6 cursor-pointer">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>

                  {/* Hover overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-3 flex flex-col justify-end">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">
                      {item.description}
                    </p>
                    <button className="mt-auto self-start bg-white text-black text-sm px-3 py-1 rounded hover:bg-gray-200">
                      {item.button}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex gap-4 bg-orange-500 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </SectionLayout>
  );
};
