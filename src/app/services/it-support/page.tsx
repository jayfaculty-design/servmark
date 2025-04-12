"use client";
import SectionHeader from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

// Metadata for the page
// export const metadata: Metadata = {
//   title: "IT Support Service | Servmark",
//   description:
//     "End-to-end tech support including helpdesk, system maintenance, cybersecurity, and infrastructure management.",
// };

// IT Services
const itServices = [
  {
    title: "IT Infrastructure Management",
    description:
      "Design, implementation, and monitoring of network architecture, server environments, and storage systems.",
    image: "/images/infras.jpg",
  },
  {
    title: "Software Development",
    description:
      "Custom application design, development, deployment, and maintenance for scalable and secure solutions.",
    image: "/images/webdev.jpg",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Threat detection, data protection, compliance solutions, and incident response to defend against evolving digital risks.",
    image: "/images/cyber.jpg",
  },
  {
    title: "Cloud Services",
    description:
      "Migration and management of hybrid, private, or public cloud solutions that enhance flexibility and reduce costs.",
    image: "/images/cloud.jpg",
  },
  {
    title: "Technical Support & Helpdesk",
    description:
      "Tiered helpdesk models, remote troubleshooting, and onsite support to ensure uninterrupted operations.",
    image: "/images/helpdesk.jpg",
  },
  {
    title: "Data Analytics",
    description:
      "Collection, processing, and interpretation of data to uncover insights and support informed decision-making.",
    image: "/images/analytics.jpg",
  },
];

const ITSupportPage = () => {
  // Hooks for scroll-based animations
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

  // Animation definitions
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
            title="IT Support Service"
            subtitle="End-to-end tech support including helpdesk, system maintenance, cybersecurity, and infrastructure management."
            titleColor="text-gray-800"
            subtitleColor="text-gray-600"
            dividerColor="bg-primary"
            secondaryDividerColor="bg-primary/70"
          />
        </div>

        <div className="max-w-6xl pb-5 pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-snug">
              When reliable systems meet expert support, downtime becomes a
              thing of the past.
            </h1>
            <p className="text-sm md:text-base text-gray-700 mb-6">
              Our expert IT team provides end-to-end technology solutions that
              empower your business to thrive in a digital-first world. From
              software development to cloud migration, we deliver reliable and
              innovative support tailored to your technical needs.
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
              src="/images/it-support.webp"
              alt="Our services"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
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
          {itServices.map((service, index) => (
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
      </motion.section>

      <motion.section
        ref={ctaRef}
        className="text-center flex flex-col items-center justify-center py-20 min-h-[40vh] bg-white px-6 md:px-12 shadow-lg"
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <p className="text-2xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
          Let us elevate your IT infrastructure and digital capabilities
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
        >
          Contact Us
        </Link>
      </motion.section>
    </div>
  );
};

export default ITSupportPage;
