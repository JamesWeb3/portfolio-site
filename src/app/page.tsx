"use client";
import React from "react";
import { ContactForm } from "@/components/contact-form";
import { SectionLayout } from "@/layouts/section-layout";
import { CarouselSection } from "@/components/sections/carousel-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";

import { About1Section } from "@/components/sections/about1-section";
import { Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto overflow-hidden">
      <SectionLayout
        id="hero"
        className="max-w-[1000px] md:px-40 sm:px-10 px-4 md:mb-0 mb-28"
      >
        <HeroSection />
      </SectionLayout>

      <SectionLayout
        id="about"
        className="max-w-[1000px] md:px-40 sm:px-10 px-4 md:my-0 my-28"
      >
        <About1Section />
      </SectionLayout>

      <SectionLayout id="portfolio" className="px-4 md:my-0 my-28 bg-muted ">
        <div className="max-w-[1200px] w-full">
          <div className="flex gap-4 w-full items-center mb-4">
            <div className="bg-black rounded-full p-2 flex flex-col items-center justify-center mx-auto w-10 h-10">
              <Briefcase className="w-8 h-8 justify-center text-white" />
            </div>
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="text-4xl font-bold w-full text-left"
            >
              Browse my Portfolio
            </TextAnimate>
          </div>
          <BlurFade className="w-full" delay={0.5} duration={0.5}>
            <CarouselSection />
          </BlurFade>
        </div>
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

      <SectionLayout
        id="contact"
        className="max-w-[1000px] md:px-40 w-full md:my-0 my-28"
      >
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

      <SectionLayout
        id="footer"
        className="!h-40 max-w-[1000px] md:px-40 gap-1"
      >
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-muted-foreground text-sm"
        >
          James Oldham © 2025
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-muted-foreground text-sm"
        >
          Auckland, New Zealand
        </TextAnimate>
      </SectionLayout>
    </main>
  );
}
