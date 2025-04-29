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

import { AvatarCircles } from "../ui/avatar-circles";

const TESTIMONIAL_ITEMS = [
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

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export const TestimonialsSection = () => {
  return (
    <SectionLayout>
      <h2 className="text-4xl font-bold">Testimonials</h2>
      <p className="text-muted-foreground text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <AvatarCircles numPeople={99} avatarUrls={avatars} />
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-[5%] gap-6">
          {TESTIMONIAL_ITEMS.map((item, index) => (
            <CarouselItem key={index} className="basis-[60%]">
              <Card className="relative group overflow-hidden">
                <CardContent className="flex items-center justify-center p-6 cursor-pointer">
                  test
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
