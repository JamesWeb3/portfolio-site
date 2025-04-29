"use client";
import { DockDemo } from "@/components/dock-component";
import Image from "next/image";

import React from "react";
import { ContactForm } from "@/components/contact-form";
import { SectionLayout } from "@/layouts/section-layout";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CarouselSection } from "@/components/sections/carousel-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto overflow-hidden">
      <SectionLayout className="max-w-[1000px] md:px-40 sm:px-10 px-4">
        <nav className="flex justify-between w-full items-center">
          <div className="flex gap-4 font-medium">
            <p className="cursor-pointer hover:black/70 duration-300 transition-all">
              Portfolio
            </p>
            <p className="cursor-pointer hover:black/70 duration-300">About</p>
            <p className="cursor-pointer hover:black/70 duration-300">
              Contact
            </p>
          </div>
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
            <InteractiveHoverButton>Contact Me</InteractiveHoverButton>
            <ShimmerButton>Browse Portfolio</ShimmerButton>
          </div>
        </div>
      </SectionLayout>

      <CarouselSection />

      <SectionLayout className="max-w-[1000px] md:px-40 sm:px-10 px-4">
        <div className="flex flex-col gap-4 h-full justify-center">
          <h2 className="text-4xl font-bold">About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </p>
        </div>
      </SectionLayout>

      <TestimonialsSection />

      <SectionLayout className="max-w-[1000px] md:px-40 sm:px-10 px-4">
        <div className="flex flex-col gap-4 h-full justify-center">
          <h2 className="text-4xl font-bold text">Get in Touch </h2>
          <p className="text-muted-foreground text-sm">
            Get in touch for any request
          </p>

          <ContactForm />
        </div>
      </SectionLayout>
    </main>
  );
}
