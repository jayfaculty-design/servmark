"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Professional Support Services",
    description:
      "Comprehensive administrative, virtual assistance, and secretarial services that streamline daily business operations.",
    imagePath: "professional-support.webp",
    href: "/services/professional-support",
  },
  {
    name: "IT Support Services",
    description:
      "End-to-end tech support including helpdesk, system maintenance, cybersecurity, and infrastructure management.",
    imagePath: "it-support.webp",
    href: "/services/it-support",
  },
  {
    name: "Administrative Support Services",
    description:
      "Manages routine tasks like data entry, scheduling, document prep, and email handling to boost efficiency.",
    imagePath: "admin-support.webp",
    href: "/services/administrative-support",
  },
  {
    name: "Operational Support Services",
    description:
      "Improves business processes through logistics support, facilities management, and process optimization.",
    imagePath: "operational-support.webp",
    href: "/services/operational-support",
  },
  {
    name: "HR Support Services",
    description:
      "Covers recruitment, onboarding, employee management, policy creation, and HR compliance to build strong teams.",
    imagePath: "hr-support.webp",
    href: "/services/hr-support",
  },
  {
    name: "Marketing Support Services",
    description:
      "Drives brand awareness and engagement through digital marketing, social media, content creation, and market research.",
    imagePath: "marketing-support.webp",
    href: "/services/marketing-support",
  },
];
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const HomeServices = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
    triggerOnce: true, // Animate only once when the element comes into view
  });
  const { ref: carouselRef, inView: carouselInView } = useInView({
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
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div>
            <div className="inline-block mb-2">
              <motion.div
                className="h-1 w-16 bg-primary mb-1"
                initial={{ scaleX: 0 }}
                animate={sectionInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              ></motion.div>
              <motion.div
                className="h-1 w-10 bg-primary/70"
                initial={{ scaleX: 0 }}
                animate={sectionInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              ></motion.div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">
                At Servmark, we deliver a wide range of business support
                solutions tailored to help organizations thrive in today's
                fast-paced world. From professional and administrative
                assistance to IT, HR, operations, and marketing services, our
                multidisciplinary team works as an extension of your business.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Whether you're a startup looking for expert guidance or an
                established company seeking scalable support, our customized
                services are designed to meet your unique challenges.
              </p>
            </div>
            <motion.div className="w-fit" whileHover={{ scale: 1.05 }}>
              <Link
                href="/services"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/80 transition duration-300 group"
              >
                <span>Explore Our Services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                className="w-full h-auto"
                src="/images/our-services.jpg"
                alt="Our services"
                width={600}
                height={400}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/10 rounded-full"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
              ></motion.div>
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div ref={carouselRef} className="mt-24">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0 }}
            animate={carouselInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Service Categories
          </motion.h3>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <motion.div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static translate-x-0 left-0" />
              <CarouselNext className="relative static translate-x-0 right-0" />
            </motion.div>
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Improved ServiceCard component
interface Service {
  name: string;
  description: string;
  imagePath: string;
  href: string;
}

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="h-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={`/images/${service.imagePath}`}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-5">{service.description}</p>
        <Link
          href={service.href}
          className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300 group"
        >
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
};

export default HomeServices;
