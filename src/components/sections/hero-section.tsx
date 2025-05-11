import { DockDemo } from "@/components/dock-component";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { handleScroll } from "@/lib/useScroll";
import { TextAnimate } from "../ui/text-animate";
import { BlurFade } from "../ui/blur-fade";

export const HeroSection = () => {
  return (
    <>
      <nav className="flex justify-between h-20 w-full items-center">
        <BlurFade delay={0.3} duration={0.3}>
          <DockDemo />
        </BlurFade>
      </nav>

      <div className="flex flex-col gap-6 w-full h-full justify-center md:mt-[-50px] mt-[50px]">
        <BlurFade>
          <Image
            className="rounded-full w-32 sm:w-40 md:w-48 lg:w-52"
            src="/avatar.png"
            alt="Avatar"
            width={200}
            height={200}
          />
        </BlurFade>
        <h1 className="font-bold text-5xl leading-tight">
          <TextAnimate
            animation="slideLeft"
            by="character"
            className="md:text-6xl text-5xl font-bold"
          >
            Hey im Jimmy
          </TextAnimate>
          <TextAnimate
            animation="slideLeft"
            by="word"
            delay={0.3}
            className="md:text-4xl text-3xl font-bold mt-4"
          >
            A Software Engineer who loves AI
          </TextAnimate>{" "}
        </h1>
        <TextAnimate
          animation="slideLeft"
          by="word"
          className="text-muted-foreground"
          delay={0.3}
        >
          Im passionate about building intuitive, AI-powered products. I work
          across early-stage startups and fast-moving agency projects, turning
          ambitious ideas into polished digital experiences.
        </TextAnimate>
        <BlurFade delay={0.3} duration={0.3}>
          <div className="flex gap-4">
            <InteractiveHoverButton
              onClick={() => {
                handleScroll("contact");
              }}
            >
              Contact Me
            </InteractiveHoverButton>
            <ShimmerButton
              onClick={() => {
                handleScroll("portfolio");
              }}
            >
              Browse Portfolio
            </ShimmerButton>
          </div>
        </BlurFade>
      </div>
    </>
  );
};
