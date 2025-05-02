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

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto overflow-hidden">
      <SectionLayout
        id="hero"
        className="max-w-[1000px] md:px-40 sm:px-10 px-4"
      >
        <HeroSection />
      </SectionLayout>
      <SectionLayout id="portfolio">
        <CarouselSection />
      </SectionLayout>

      <SectionLayout id="about" className="max-w-[1000px] md:px-40">
        <div className="flex flex-col gap-4 h-full justify-center">
          <h2 className="text-4xl font-bold">About</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
            <br />
            <br />
            <div className="flex items-center gap-2">
              Software Engineer for
              <Link href="https://morningside.ai" target="_blank" className="text-[#469c71] hover:text-[#469c71]/80 transition-all duration-200  font-semibold">Morningside AI</Link>
              <Image
                src="/msai_logo.png"
                alt="Morningside Logo"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </p>
        </div>
      </SectionLayout>
      <SectionLayout
        className="max-w-[1000px] md:px-40 w-full"
        id="testimonials"
      >
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <AvatarCircles numPeople={99} avatarUrls={avatars} />
        <TestimonialsSection />
      </SectionLayout>

      <SectionLayout id="contact" className="max-w-[1000px] md:px-40 w-full">
        <div className="w-full">
          <h2 className="text-4xl font-bold text">Get in Touch </h2>
          <p className="text-muted-foreground text-sm">
            Get in touch for any request
          </p>
        </div>

        <ContactForm />
      </SectionLayout>

      <SectionLayout id="footer" className="h-40 max-w-[1000px] md:px-40">
        hi
      </SectionLayout>
    </main>
  );
}
