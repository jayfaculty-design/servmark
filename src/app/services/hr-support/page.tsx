"use client";
import SectionHeader from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

// Metadata for the page
// export const metadata: Metadata = {
//   title: "HR Support Service | Servmark",
//   description:
//     "Covers recruitment, onboarding, employee management, policy creation, and HR compliance to build strong teams.",
// };

// HR Services
const hr = [
  {
    title: "Recruitment and Staffing",
    description:
      "Job description development, candidate sourcing, screening, skills assessment, and interview coordination.",
    image: "/images/recruit.jpg",
  },
  {
    title: "Employee Training and Development",
    description:
      "Customized onboarding, leadership development, technical skills programs, and continuous learning.",
    image: "/images/training.jpg",
  },
  {
    title: "Benefits Administration",
    description:
      "Enrollment management, claims support, compliance tracking, and benefits program optimization.",
    image: "/images/benefit.jpg",
  },
  {
    title: "Compliance Management",
    description:
      "Regulatory updates, policy implementation, audits, and training to ensure labor law compliance.",
    image: "/images/compliance.jpg",
  },
  {
    title: "Performance Management Systems",
    description:
      "Goal-setting frameworks, evaluation tools, feedback channels, and recognition initiatives.",
    image: "/images/evaluation.jpg",
  },
  {
    title: "Employee Engagement Programs",
    description:
      "Culture-building strategies, wellness programs, team-building activities, and internal communications.",
    image: "/images/employee-engage.jpg",
  },
];

const HRSupportPage = () => {
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
          title="HR Support Service"
          subtitle="Covers recruitment, onboarding, employee management, policy creation, and HR compliance to build strong teams."
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
            Empower your workforce. Elevate your organization.
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-6">
            Our dedicated HR specialists help you build and sustain a strong
            organizational culture. From attracting top talent to developing
            high-performing teams, we manage the human side of business so you
            can focus on achieving your strategic goals.
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
            src="/images/hr.jpg"
            alt="HR support services"
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
          {hr.map((service, index) => (
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
          Ready to strengthen your HR foundation?
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

export default HRSupportPage;
