import { TextAnimate } from "../ui/text-animate";
import { BlurFade } from "../ui/blur-fade";
import { Card, CardContent } from "../ui/card";
import { NumberTicker } from "../ui/number-ticker";
import Link from "next/link";
import Image from "next/image";

export const About1Section = () => {
  return (
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
        In 2021 I graduated from the Auckland University of Technology with a
        degree in Mechnical Engineering. After struggling to find interest in
        this career I quickly switched to software. 💻
      </TextAnimate>

      <BlurFade delay={0.3} duration={0.3}>
        <div className="flex items-center flex-wrap gap-2">
          <TextAnimate
            animation="slideLeft"
            by="word"
            className="text-muted-foreground"
          >
            In 2023 I was employed as a Frontend Engineer for
          </TextAnimate>
          <BlurFade delay={0.3} duration={0.3} className="mb-[-3px]">
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
              className="rounded-full inline-block mb-1 ml-2"
            />
          </BlurFade>
          <TextAnimate
            animation="slideLeft"
            by="word"
            className="text-muted-foreground"
            delay={0.3}
          >
            Since then I have worked with some of the biggest clients in the
            world implementing AI solutions into business.
          </TextAnimate>
          <TextAnimate
            animation="slideLeft"
            by="word"
            className="text-muted-foreground"
            delay={0.5}
          >
            I have also had the opportunity to build and scale startups such as
            Agentive, now boasting over 50,000 users. 📊
          </TextAnimate>
        </div>
      </BlurFade>
      <TextAnimate
        animation="slideLeft"
        by="word"
        className="text-muted-foreground"
        delay={1}
      >
        Collectivley, my platforms have gained:
      </TextAnimate>
      <div className="grid grid-cols-3 gap-2">
        <Card className="py-4">
          <CardContent className="px-4">
            <NumberTicker
              value={3}
              symbol="M+"
              className="md:text-3xl text-xl font-bold"
            />

            <p className="text-muted-foreground md:text-sm text-xs">Website Views</p>
          </CardContent>
        </Card>
        <Card className="py-4">
          <CardContent className="px-4">
            <NumberTicker
              value={190}
              symbol="+"
              className="md:text-3xl text-xl font-bold"
            />
            <p className="text-muted-foreground md:text-sm text-xs">Countries Reached</p>
          </CardContent>
        </Card>
        <Card className="py-4">
          <CardContent className="px-4">
            <NumberTicker
              symbol="K+"
              value={500}
              className="md:text-3xl text-xl font-bold"
            />
            <p className="text-muted-foreground md:text-sm text-xs">
              Generated for Clients
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
