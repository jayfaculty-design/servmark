"use client";
import SectionHeader from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

// Metadata for the page

// Service data
const professional = [
  {
    title: "Management Consulting",
    description:
      "In-depth organizational analysis and tailored strategies to increase productivity and profitability.",
    image: "/images/consulting.jpg",
  },
  {
    title: "Accounting Services",
    description:
      "Accurate bookkeeping, financial forecasting, reconciliations, and reporting to support sound business decisions.",
    image: "/images/accounting.jpg",
  },
  {
    title: "Marketing Strategy",
    description:
      "Insight-driven plans that align with business goals and elevate brand positioning.",
    image: "/images/marketing-strategy.jpg",
  },
  {
    title: "Human Resources Management",
    description:
      "End-to-end HR solutions including recruitment, performance management, and employee relations.",
    image: "/images/hrm.jpg",
  },
  {
    title: "Public Relations",
    description:
      "Strategic communication planning, media relations, and crisis management to boost brand reputation.",
    image: "/images/relation.jpg",
  },
  {
    title: "Specialized Services",
    description:
      "Guest communication and booking coordination (for Airbnb/short-term rentals), scheduling cleaners and managing property listings, vendor communication and operations support, etc.",
    image: "/images/hotel.jpg",
  },
];

const ProfessionalSupportPage = () => {
  // InView hooks for animation triggers
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: offeringsRef, inView: offeringsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: finalCTARef, inView: finalCTAInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Animation properties
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-32 bg-gradient-to-br from-[#fefefe] to-primary/10">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        className="max-w-5xl mx-auto px-4 md:px-8"
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <SectionHeader
          title="Professional Support Service"
          subtitle="Comprehensive administrative, virtual assistance, and secretarial services that streamline daily business operations."
        />
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        ref={headerRef}
        className="max-w-6xl pb-5 pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-8"
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-snug">
            When precision meets dedication, your business runs smoother than
            ever.
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-6">
            At ServMark, we streamline day-to-day operations with expert virtual
            assistance, secretarial support, and task management—freeing up your
            internal team to focus on strategic growth. Our goal is to make sure
            the small stuff doesn’t slow you down.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={headerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            layout="responsive"
            className="w-full h-auto rounded-lg shadow-lg"
            width={1200}
            height={800}
            src="/images/professional-support.jpg"
            alt="Our services"
          />
        </motion.div>
      </motion.div>

      {/* Offerings Section */}
      <motion.div
        ref={offeringsRef}
        className="p-8 md:p-20"
        initial="hidden"
        animate={offeringsInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="inline-block mb-2">
          <motion.div
            className="h-1 w-16 bg-primary mb-1"
            initial={{ scaleX: 0 }}
            animate={offeringsInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>
          <motion.div
            className="h-1 w-10 bg-primary/70"
            initial={{ scaleX: 0 }}
            animate={offeringsInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          ></motion.div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Our Offerings
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={offeringsInView ? { opacity: 1 } : {}}
          transition={{
            staggerChildren: 0.2, // Stagger animation for service cards
          }}
        >
          {professional.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={offeringsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <ServiceCard
                title={service.title}
                image={service.image}
                description={service.description}
                showButton={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.section
        ref={finalCTARef}
        className="text-center flex flex-col items-center justify-center py-20 min-h-[40vh] bg-white px-6 md:px-12 shadow-lg"
        initial="hidden"
        animate={finalCTAInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <p className="text-2xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
          Ready to elevate your business operations?
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
        >
          Contact Us
        </Link>
      </motion.section>
    </section>
  );
};

export default ProfessionalSupportPage;
