"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Building2,
  HeartPulse,
  LightbulbIcon,
  Building,
  ShoppingCart,
  Truck,
  UtensilsCrossed,
  Briefcase,
} from "lucide-react";
import SectionHeader from "./Heading";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

const getIndustryIcon = (name: string): JSX.Element => {
  switch (name) {
    case "Healthcare":
      return (
        <HeartPulse className="w-12 h-12 md:w-16 md:h-16 mb-4 text-primary" />
      );
    case "Startups":
      return (
        <LightbulbIcon className="w-12 h-12 md:w-16 md:h-16 mb-4 text-primary" />
      );
    case "Large Enterprises":
      return (
        <Building className="w-12 h-12 md:w-16 md:h-16 mb-4 text-primary" />
      );
    case "Technology & SaaS":
      return (
        <Building2 className="w-12 h-12 md:w-16 md:h-16 mb-4 text-primary" />
      );
    case "E-commerce & Retail":
      return (
        <ShoppingCart className="w-12 h-12 md:w-16 md:h-16 mb-4 text-primary" />
      );
    case "Logistics & Transport":
      return <Truck className="w-12 h-12 md:w-16 md:h-16 mb-4 text-primary" />;
    case "Hospitality":
      return (
        <UtensilsCrossed className="w-12 h-12 md:w-16 md:h-16 mb-4 text-primary" />
      );
    case "Professional Services":
      return (
        <Briefcase className="w-12 h-12 md:w-16 md:h-16 mb-4 text-primary" />
      );
    default:
      return (
        <Building2 className="w-12 h-12 md:w-16 md:h-16 mb-4 text-primary" />
      );
  }
};

const industries = [
  {
    name: "Healthcare",
    description:
      "Supports healthcare providers with transcription services, document management, HR compliance, and secure IT infrastructure.",
  },
  {
    name: "Startups",
    description:
      "Helps startups scale by providing operational support, HR, marketing, and IT services.",
  },
  {
    name: "Large Enterprises",
    description:
      "Provides strategic consulting and technology solutions to streamline workflows.",
  },
  {
    name: "Technology & SaaS",
    description:
      "Offers software development, cloud services, and cybersecurity solutions.",
  },
  {
    name: "E-commerce & Retail",
    description:
      "Optimizes supply chains, marketing, and customer support for retail growth.",
  },
  {
    name: "Logistics & Transport",
    description:
      "Improves fleet operations, warehouse management, and distribution efficiency.",
  },
  {
    name: "Hospitality",
    description:
      "Supports staffing, cleaning, and guest experience enhancements.",
  },
  {
    name: "Professional Services",
    description:
      "Provides back-office support like HR, accounting, and marketing for agencies and firms.",
  },
];

const HomeIndustries = () => {
  const carouselRef = useRef(null);

  // Scroll detection
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] to-primary/10"
      ref={ref}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <SectionHeader
          title="Industries We Serve"
          subtitle="We specialize in providing tailored solutions to a diverse range of industries, ensuring that your unique needs are met with precision and care."
        />

        <div className="mt-10">
          <Carousel
            ref={carouselRef}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {industries.map((industry, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 transition-all duration-300"
                >
                  <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-primary/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.6, delay: index * 0.1 },
                          }
                        : {}
                    }
                  >
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      {getIndustryIcon(industry.name)}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      {industry.name}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base flex-grow">
                      {industry.description}
                    </p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static translate-x-0 left-0 mr-2" />
              <CarouselNext className="relative static translate-x-0 right-0" />
            </div>
          </Carousel>
        </div>

        <motion.div
          className="flex items-center justify-center mt-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-primary/90 hover:bg-primary text-white font-medium rounded-lg transition-all duration-300"
          >
            <span>Explore All Industries</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeIndustries;
