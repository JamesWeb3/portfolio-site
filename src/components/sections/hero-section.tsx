import { DockDemo } from "@/components/dock-component";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { handleScroll } from "@/lib/useScroll";

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
          Hey im Jimmy.
          <br />
          Software & Product Engineer{" "}
        </h1>
        <p>
          Crafting Seamless Digital Experiences Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos.
        </p>
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
