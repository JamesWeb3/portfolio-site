import { DockDemo } from "@/components/dock-component";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { handleScroll } from "@/lib/useScroll";
import { TextAnimate } from "../magicui/text-animate";

export const HeroSection = () => {
  return (
    <>
      <nav className="flex justify-between w-full items-center">
        <DockDemo />
      </nav>

      <div className="flex flex-col gap-6 w-full h-full justify-center">
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="Avatar"
          width={150}
          height={150}
        />
        <h1 className="font-bold text-5xl leading-tight">
          <TextAnimate
            animation="slideLeft"
            by="character"
            className="text-5xl font-bold"
          >
            Hey im Jimmy.
          </TextAnimate>
          <TextAnimate
            animation="slideLeft"
            by="word"
            delay={0.3}
            className="text-5xl font-bold mt-4"
          >
            Software & Product Engineer
          </TextAnimate>{" "}
        </h1>
        <TextAnimate animation="slideLeft" by="word" delay={0.3}>
          Crafting Seamless Digital Experiences Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos.
        </TextAnimate>
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
      </div>
    </>
  );
};
