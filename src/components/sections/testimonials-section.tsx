import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

const TESTIMONIAL_ITEMS = [
  {
    src: "https://avatars.githubusercontent.com/u/16860528",
    alt: "Avatar",
    title: "Accelerated Our AI Feature Delivery",
    description:
      "Integrating this into our dev workflow helped us cut model deployment times by 40%. It's now a key part of our MLOps stack and lets us iterate on features faster than ever.",
    name: "Jessica Ramos",
  },
  {
    src: "https://avatars.githubusercontent.com/u/20110627",
    alt: "Avatar",
    title: "Simplified Complex AI Pipelines",
    description:
      "What used to take weeks of backend orchestration now takes days. It’s flexible, dev-friendly, and integrates directly into our model serving and monitoring stack.",
    name: "Darren Patel",
  },
  {
    src: "https://avatars.githubusercontent.com/u/106103625",
    alt: "Avatar",
    title: "Seamless LLM Integration",
    description:
      "We needed a reliable way to connect multiple LLM endpoints with fallback and caching. This made it insanely easy and gave us observability out of the box.",
    name: "Chloe Lin",
  },
  {
    src: "https://avatars.githubusercontent.com/u/59228569",
    alt: "Avatar",
    title: "Production-Ready in Days",
    description:
      "I’ve never shipped AI features to production this fast. The DX is top-tier, and everything from auth to analytics is built in. Total win for any AI product team.",
    name: "Michael Kim",
  },
  {
    src: "https://avatars.githubusercontent.com/u/59442788",
    alt: "Avatar",
    title: "Built for AI Engineers, Not Just Devs",
    description:
      "Most tools miss the mark for AI workflows. This feels like it was made *for* us. It understands prompts, embeddings, retries, and human-in-the-loop out of the box.",
    name: "Lena Hoffman",
  },
  {
    src: "https://avatars.githubusercontent.com/u/89768406",
    alt: "Avatar",
    title: "Dev-First AI Infrastructure",
    description:
      "We use this to manage all our inference endpoints and feature toggles. It’s like Vercel, but for AI workloads. Honestly feels like cheating in terms of speed.",
    name: "Jamal Ortega",
  },
];

export const TestimonialsSection = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent className="py-2">
        {TESTIMONIAL_ITEMS.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 pl-4.5"
          >
            <Card className="relative group overflow-hidden h-full">
              <CardHeader className="flex items-center">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>{testimonial.title}</CardTitle>
                  <CardDescription>{testimonial.name}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                {testimonial.description}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex absolute bottom-[-40px] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};
