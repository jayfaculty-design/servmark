"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import SectionHeader from "./Heading";

const testimonials = [
  {
    name: "Rachel Nguyen",
    title: "Operations Manager at BrightPath Consulting",
    text: "ServMark's virtual assistants have transformed the way we work. Their attention to detail and proactive communication keeps our operations running smoothly — like clockwork.",
  },
  {
    name: "Mark Thompson",
    title: "Director of IT at VisionBridge",
    text: "We needed reliable IT help fast, and ServMark delivered. Their remote tech team resolved our issues swiftly and even optimized our system's performance.",
  },
  {
    name: "Ayesha Khan",
    title: "Founder of EcoBloom",
    text: "Thanks to ServMark's marketing support, our online presence has exploded. From crafting engaging content to managing our campaigns, their work is strategic and results-driven.",
  },
  {
    name: "Leo Mendez",
    title: "CEO of Zenith Labs",
    text: "We were struggling with onboarding and compliance until we brought ServMark on board. Their HR professionals streamlined our processes and made everything feel effortless.",
  },
  {
    name: "Vanessa Moore",
    title: "Founder of Moore Creative",
    text: "What I love about ServMark is how versatile they are. Whether it's admin, marketing, or tech help, they've been a reliable extension of my team.",
  },
];

export default function TestimonialsCarousel() {
  type CarouselApi = {
    scrollSnapList: () => number[];
    selectedScrollSnap: () => number;
    on: (evt: string, cb: () => void) => void;
    scrollTo: (index: number) => void;
  };

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 bg-gradient-to-br from-[#fefefe] to-primary/10">
      <div className="max-w-5xl mx-auto px-8">
        <div>
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Discover how our business support solutions have helped companies
            across industries streamline operations and accelerate growth."
          />
        </div>
        <div className="relative">
          <Carousel
            setApi={(api) => setApi((api as CarouselApi) || null)}
            className="w-full"
          >
            <CarouselContent className="items-stretch">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 p-2"
                >
                  <Card className="h-full rounded-2xl shadow-lg bg-white border-none hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Badge className="self-start bg-primary/10 text-primary border-none mb-4 px-3 py-1">
                        Testimonial
                      </Badge>
                      <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                        <Avatar>
                          <AvatarImage
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.name.split(" ")[0][0]}
                            {testimonial.name.split(" ")[1][0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - positioned inside the container */}
            <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 md:px-0">
              <CarouselPrevious className="relative left-0 -translate-x-1/4 bg-white border-none shadow-lg hover:bg-gray-50" />
              <CarouselNext className="relative right-0 translate-x-1/4 bg-white border-none shadow-lg hover:bg-gray-50" />
            </div>
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index ? "w-8 bg-primary" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
