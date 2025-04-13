"use client";
import SectionHeader from "@/components/Heading";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";



// Marketing services data
const marketing = [
  {
    title: "Market Research",
    description:
      "Comprehensive data collection and analysis to uncover trends, evaluate competitors, and understand customer preferences.",
    image: "/images/marketing-research.jpg",
  },
  {
    title: "Branding",
    description:
      "Strategic development of your brand identity with visual design, messaging frameworks, and positioning strategies to stand out in the marketplace.",
    image: "/images/branding.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Integrated marketing campaigns across search engines, social media, email, and other digital platforms to drive engagement and maximize ROI.",
    image: "/images/digital-marketing.jpg",
  },
  {
    title: "Content Creation",
    description:
      "High-quality content development, including articles, videos, infographics, case studies, and social media posts optimized for search engines.",
    image: "/images/content.jpg",
  },
  {
    title: "Event Planning",
    description:
      "End-to-end event management, from conceptualizing corporate events to coordinating venues, vendors, and day-of execution.",
    image: "/images/event.jpg",
  },
];

const MarketingSupportPage = () => {
  // InView hooks for scroll-based animations
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
          title="Marketing Support Service"
          subtitle="Drives brand awareness and engagement through digital marketing, social media, content creation, and market research."
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
            Amplify your brand. Accelerate growth.
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-6">
            At ServMark, we provide comprehensive marketing support services
            that help elevate your business's presence and impact. Our expert
            marketing team delivers tailored strategies to increase visibility,
            engagement, and revenue across both digital and traditional
            channels.
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
            src="/images/marketing.jpg"
            alt="Marketing support services"
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
          {marketing.map((service, index) => (
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
          Ready to enhance your marketing impact?
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

export default MarketingSupportPage;
