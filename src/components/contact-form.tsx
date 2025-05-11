"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { BlurFade } from "./ui/blur-fade";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }),
});

export function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    setMessageSent(true);

    setIsLoading(false);
  }

  return (
    <>
      {messageSent ? (
        <BlurFade delay={0.5} duration={0.5}>
          <div className="flex flex-col items-center justify-center mt-8 gap-4">
            <Image
              src="https://agentive-public.s3.amazonaws.com/email_sent.svg"
              alt="Email sent confirmation"
              width={120}
              height={120}
            />
            <p className="text-muted-foreground text-sm">
              Your Message has been sent!
            </p>
          </div>
        </BlurFade>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full"
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 justify-between">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Full Name" type="name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="resize-none h-40"
                      placeholder="Leave your message here ..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full" size="lg" type="submit">
              {isLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <p> Send Message</p>
              )}
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
