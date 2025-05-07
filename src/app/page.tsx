"use client";
import React from "react";
import { ContactForm } from "@/components/contact-form";
import { SectionLayout } from "@/layouts/section-layout";
import { CarouselSection } from "@/components/sections/carousel-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { HeroSection } from "@/components/sections/hero-section";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { avatars } from "@/data/avatars";
import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { AboutSection } from "@/components/sections/about-section";
import { BlurFade } from "@/components/ui/blur-fade";

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
        <div className="flex flex-col gap-4 h-full justify-center">
          <TextAnimate
            animation="slideLeft"
            by="character"
            className="text-4xl font-bold"
          >
            About
          </TextAnimate>

          <TextAnimate
            animation="slideLeft"
            by="word"
            className="text-muted-foreground"
          >
            In 2021 I graduated from the Auckland University of Technology with
            a degree in Mechnical Engineer. After struggling to find interest in
            this career I quickly switched to software.
          </TextAnimate>

          <BlurFade delay={0.3} duration={0.3}>
            <div className="flex items-center flex-wrap gap-2">
              <TextAnimate
                animation="slideLeft"
                by="character"
                className="text-muted-foreground"
              >
                In 2023 I was employed as a fronteng engineer for
              </TextAnimate>
              <BlurFade delay={0.3} duration={0.3}>
                <Link
                  href="https://morningside.ai"
                  target="_blank"
                  className="text-[#469c71] hover:text-[#469c71]/80 transition-all duration-200 font-semibold"
                >
                  Morningside AI
                </Link>
                <Image
                  src="/msai_logo.png"
                  alt="Morningside Logo"
                  width={20}
                  height={20}
                  className="rounded-full inline-block mb-2 ml-3"
                />
              </BlurFade>
              <TextAnimate
                animation="slideLeft"
                by="character"
                className="text-muted-foreground"
                delay={0.3}
              >
                Since then I have worked with some of the biggest clients in the
                world such as the Milwaukee Bucks NBA team, with a mission of
                implemetning AI solutions into their business.
              </TextAnimate>
              <TextAnimate
                animation="slideLeft"
                by="character"
                className="text-muted-foreground"
                delay={0.5}
              >
                I have also had the opportunity to build and scale startups such
                as Agentive, now boasting over 50,000 users.
              </TextAnimate>
            </div>
          </BlurFade>
        </div>
      </SectionLayout>

      <div className="w-full max-w-[1000px] mt-[-300px]">
        <AboutSection />
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
            Browse the different startups and projects I have worked on...
          </TextAnimate>
        </div>
        <BlurFade className="w-full" delay={0.5} duration={0.5}>
          <CarouselSection />
        </BlurFade>
      </SectionLayout>

      <SectionLayout className="max-w-[1000px] w-full" id="testimonials">
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
      </SectionLayout>

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
        <BlurFade className="w-full" delay={0.5} duration={0.5}>
          <ContactForm />
        </BlurFade>
      </SectionLayout>

      <SectionLayout id="footer" className="h-40 max-w-[1000px] md:px-40">
        hi
      </SectionLayout>
    </main>
  );
}
