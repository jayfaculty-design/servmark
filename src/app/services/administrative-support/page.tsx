"use client";
import SectionHeader from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

// Service data
const admin = [
  {
    title: "Virtual Assistant Services",
    description:
      "Enhance productivity and focus on core business functions with remote support for calendar management, email correspondence, travel arrangements, and basic customer service.",
    image: "/images/va.jpg",
  },
  {
    title: "Data Entry and Processing",
    description:
      "Maintain accurate records and streamline information management with efficient data input, verification, and organization across formats and platforms.",
    image: "/images/entry.jpg",
  },
  {
    title: "Document Management and Preparation",
    description:
      "Optimize your information ecosystem with document digitization, classification, indexing, and secure repositories that improve accessibility.",
    image: "/images/document.jpg",
  },
  {
    title: "Office Administration",
    description:
      "Create a well-organized workplace with professional office logistics, supply management, equipment maintenance, and vendor coordination.",
    image: "/images/office2.jpg",
  },
  {
    title: "Call Center Operations",
    description:
      "Deliver exceptional customer experiences with 24/7 support, multilingual capabilities, CRM integration, and order processing.",
    image: "/images/call.jpg",
  },
  {
    title: "Transcription Services",
    description:
      "Convert audio and video into accurate transcripts with fast turnaround times, confidentiality, and support for interviews, webinars, and meetings.",
    image: "/images/transcription.jpg",
  },
];

const AdministrativeSupportPage = () => {
  // InView hooks for animation triggers
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: offeringsRef, inView: offeringsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
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
        className="max-w-5xl mx-auto px-8"
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <SectionHeader
          title="Administrative Support Service"
          subtitle="Manages routine tasks like data entry, scheduling, document prep, and email handling to boost efficiency."
          titleColor="text-gray-800"
          subtitleColor="text-gray-600"
          dividerColor="bg-primary"
          secondaryDividerColor="bg-primary/70"
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
        <motion.div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-snug">
            Behind every successful business is a well-oiled administrative
            engine — and we're here to keep it running.
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-6">
            Our expert admin team takes the pressure off your internal staff by
            handling daily operations, communications, and documentation. We
            ensure your business runs smoothly behind the scenes so you can
            focus on what matters most.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={headerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            layout="responsive"
            className="w-full h-auto rounded-xl shadow-lg"
            width={1200}
            height={800}
            src="/images/admin-support.webp"
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
        <h3 className="text-xl md:text-3xl font-extrabold text-gray-800 mb-6">
          Our Offerings
        </h3>
        <div className="inline-block">
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={offeringsInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.2 }}
        >
          {admin.map((service, index) => (
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
        ref={ctaRef}
        className="text-center flex flex-col items-center justify-center py-20 min-h-[40vh] bg-white px-6 md:px-12 shadow-lg"
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <p className="text-2xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
          Ready to simplify your operations?
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

export default AdministrativeSupportPage;
