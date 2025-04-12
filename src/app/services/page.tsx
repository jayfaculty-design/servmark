"use client";
import SectionHeader from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";
import FeatureSection from "@/components/WhyChooseUs";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const customDescription = {
  heading: "What We Do",
  paragraphs: [
    "At ServMark, we’re passionate about empowering businesses to operate efficiently and grow sustainably. We are a team of experienced professionals offering tailored solutions in administration, IT, operations, HR, and marketing — all under one roof.",
    "Our approach is centered around understanding your unique challenges and crafting solutions that create measurable, lasting impact. We pride ourselves on transparency, proactive communication, and consistent results.",
  ],
  image: "/images/services.svg",
  altText: "What we do",
};

const mainServices = [
  {
    title: "Professional Support Services",
    description:
      "Comprehensive administrative, virtual assistance, and secretarial services that streamline daily business operations.",
    image: "/images/professional-support.webp",
    href: "/services/professional-support",
  },
  {
    title: "IT Support Services",
    description:
      "End-to-end tech support including helpdesk, system maintenance, cybersecurity, and infrastructure management.",
    image: "/images/it-support.webp",
    href: "/services/it-support",
  },
  {
    title: "Administrative Support Services",
    description:
      "Manages routine tasks like data entry, scheduling, document prep, and email handling to boost efficiency.",
    image: "/images/admin-support.webp",
    href: "/services/administrative-support",
  },
  {
    title: "Operational Support Services",
    description:
      "Improves business processes through logistics support, facilities management, and process optimization.",
    image: "/images/operational-support.webp",
    href: "/services/operational-support",
  },
  {
    title: "HR Support Services",
    description:
      "Covers recruitment, onboarding, employee management, policy creation, and HR compliance to build strong teams.",
    image: "/images/hr-support.webp",
    href: "/services/hr-support",
  },
  {
    title: "Marketing Support Services",
    description:
      "Drives brand awareness and engagement through digital marketing, social media, content creation, and market research.",
    image: "/images/marketing-support.webp",
    href: "/services/marketing-support",
  },
];

const ServicesPage = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: gridRef, inView: gridInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: finalSectionRef, inView: finalSectionInView } = useInView({
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
    <div>
      <motion.section
        ref={headerRef}
        className="pt-32 bg-gradient-to-br from-[#fefefe] to-primary/10"
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-5xl mx-auto px-8">
          <SectionHeader
            title="Our Services"
            subtitle="We provide a full range of business support services to help your company thrive—from operations and HR to IT and marketing. Let us handle the details so you can focus on your vision."
          />
        </div>

        <FeatureSection
          title="Our Services"
          description={customDescription}
          showReasons={false}
        />
      </motion.section>

      <motion.section
        ref={gridRef}
        className="px-6 md:px-10 lg:px-20 py-10"
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={gridInView ? { opacity: 1 } : {}}
          transition={{
            staggerChildren: 0.2, // Animates cards one after another
          }}
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                imageAlt={`${service.title} image`}
                href={service.href}
                onClick={() => console.log(`Clicked on ${service.title}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        ref={finalSectionRef}
        className="py-10 bg-white"
        initial="hidden"
        animate={finalSectionInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-8">
          <motion.div>
            <p className="mb-6">
              At ServMark, we’re passionate about empowering businesses across
              various industries to operate efficiently and grow sustainably. We
              are a team of experienced professionals offering tailored
              solutions in administration, IT, operations, HR, and marketing —
              all under one roof.
            </p>
            <p className="mb-6">
              Explore the industries we serve and discover how our tailored
              solutions can help your business thrive.
            </p>
            <motion.button
              className="bg-primary text-white px-5 py-4 rounded-lg font-bold hover:bg-primary/80 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Industries
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={finalSectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              layout="responsive"
              className="w-full h-auto rounded-xl shadow-md"
              src="/images/industry.jpg"
              alt="Our services"
              width={1200}
              height={800}
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
