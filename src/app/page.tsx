"use client";
import React from "react";
import { ContactForm } from "@/components/contact-form";
import { SectionLayout } from "@/layouts/section-layout";
import { CarouselSection } from "@/components/sections/carousel-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TextAnimate } from "@/components/ui/text-animate";
import { About2Section } from "@/components/sections/about2-section";
import { BlurFade } from "@/components/ui/blur-fade";

import { About1Section } from "@/components/sections/about1-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto overflow-hidden">
      <SectionLayout
        id="hero"
        className="max-w-[1000px] md:px-40 sm:px-10 px-4"
      >
        <HeroSection />
      </SectionLayout>

      <SectionLayout id="about" className="max-w-[1000px] md:px-40 ">
       <About1Section/>
      </SectionLayout>

      <div className="w-full max-w-[1000px] mt-[-250px]">
        <About2Section />
      </div>

      <SectionLayout id="portfolio" className="mt-40">
        <div className="flex flex-col gap-4">
          <TextAnimate
            animation="slideLeft"
            by="character"
            className="text-4xl font-bold w-full text-center"
          >
            Portfolio
          </TextAnimate>
          <TextAnimate
            animation="slideLeft"
            by="character"
            className="w-full text-center text-muted-foreground"
          >
            Browse the different startups and projects I have worked on.
          </TextAnimate>
        </div>
        <BlurFade className="w-full" delay={0.5} duration={0.5}>
          <CarouselSection />
        </BlurFade>
      </SectionLayout>

      {/* <SectionLayout className="max-w-[1000px] w-full" id="testimonials">
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-4xl font-bold"
        >
          Testimonials
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-muted-foreground text-sm"
        >
          Here are some of the testimonials from my clients.
        </TextAnimate>
        <BlurFade delay={0.5} duration={0.5}>
          <AvatarCircles numPeople={4} avatarUrls={avatars} />
          <TestimonialsSection />
        </BlurFade>
      </SectionLayout> */}

      <SectionLayout id="contact" className="max-w-[1000px] md:px-40 w-full">
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-4xl font-bold"
        >
          Get in Touch
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-muted-foreground mb-6"
        >
          Get in touch for any request
        </TextAnimate>
        <BlurFade className="w-full max-w-[500px]" delay={0.5} duration={0.5}>
          <ContactForm />
        </BlurFade>
      </SectionLayout>

      <SectionLayout id="footer" className="h-40 max-w-[1000px] md:px-40">
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-muted-foreground text-sm"
        >
          James Oldham © 2025, Auckland, New Zealand
        </TextAnimate>
      </SectionLayout>
    </main>
  );
}
