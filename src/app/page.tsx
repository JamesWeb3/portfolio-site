"use client";
import { DockDemo } from "@/components/dock-component";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ContactForm } from "@/components/contact-form";
// import Autoplay from "embla-carousel-autoplay";
import { SectionLayout } from "@/layouts/section-layout";

export default function Home() {
  const handleTestAPI = async () => {
    console.log("HITTING HERE 0/4");

    const response = await fetch(`/api/testApi`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log("API RESPONSE 2/4", response);
  };

  return (
    <main className="flex flex-col items-center max-w-[1000px] mx-auto">
      <SectionLayout>
        <DockDemo />
        <div className="flex flex-col gap-6">
          <Image
            className="rounded-full"
            src="/avatar.png"
            alt="Avatar"
            width={120}
            height={120}
          />
          <h1 className="font-bold text-4xl">
            Hey im Jimmy.
            <br />
            Software & Product Manager Engineer{" "}
          </h1>
          <p>
            Crafting Seamless Digital Experiences Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
        <div className="flex gap-4">
          <Button onClick={handleTestAPI}>Deploy Now</Button>
          <Button variant="secondary">Deploy Now</Button>
        </div>
      </SectionLayout>

      <SectionLayout>
        {" "}
        {/* plugins={[plugin.current]} */}
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <AspectRatio ratio={16 / 9}>
                      {/* <Image src="/avatar.png" alt="Avatar" fill />  */}
                    </AspectRatio>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </SectionLayout>

      <SectionLayout>
        <div className="flex flex-col gap-4 h-full justify-center px-40">
          <h2 className="text-3xl font-bold">About</h2>
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

      <SectionLayout>
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p>Get in touch for any request</p>
        <ContactForm />
      </SectionLayout>
    </main>
  );
}
