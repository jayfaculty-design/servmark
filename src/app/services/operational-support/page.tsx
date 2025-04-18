"use client";
import SectionHeader from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";


// Service data
const operational = [
  {
    title: "Facilities Management",
    description:
      "Comprehensive oversight of business premises, vendor coordination, and maintenance programs.",
    image: "/images/facilities.jpg",
  },
  {
    title: "Cleaning and Maintenance",
    description:
      "Routine and project-based cleaning using eco-friendly practices and quality checks.",
    image: "/images/cleaning.jpg",
  },
  {
    title: "Security Services",
    description:
      "Layered protection strategies including surveillance, personnel, and emergency planning.",
    image: "/images/security.jpg",
  },
  {
    title: "Waste Management",
    description:
      "Sustainable disposal strategies, recycling programs, and regulatory compliance.",
    image: "/images/waste.jpg",
  },
  {
    title: "Fleet Management",
    description:
      "Vehicle acquisition, GPS tracking, maintenance scheduling, and safety oversight.",
    image: "/images/fleet.jpg",
  },
  {
    title: "Supply Chain and Logistics",
    description:
      "Inventory, warehousing, and distribution optimization to reduce costs and improve efficiency.",
    image: "/images/supply-chain.jpg",
  },
];

const OperationalSupportPage = () => {
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
          title="Operational Support Service"
          subtitle="Improves business processes through logistics support, facilities management, and process optimization."
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
            Reliable support. Seamless organization.
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-6">
            At ServMark, our operations team ensures your physical spaces,
            logistics, and infrastructure run smoothly and sustainably,
            supporting business continuity and performance.
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
            src="/images/operational-support.webp"
            alt="Operational support services"
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
          {operational.map((service, index) => (
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

export default OperationalSupportPage;
