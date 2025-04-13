"use client";

import SectionHeader from "@/components/Heading";
import FeatureSection from "@/components/WhyChooseUs";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";


const customDescription = {
  heading: "What Sets Us Apart",
  paragraphs: [
    "With over 10 years of experience in the industry, we've developed a deep understanding of what our clients need to succeed.",
    "Our team of experts is committed to delivering exceptional results that exceed expectations and drive business growth.",
  ],
  image: "/images/choose.svg",
  altText: "Our advantages",
};

const AboutUs = () => {
  // InView hooks for scroll animations
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: journeyRef, inView: journeyInView } = useInView({
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
    <div className="bg-gradient-to-br from-[#fefefe] to-primary/10">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="About Servmark"
            subtitle="We are dedicated to providing top-notch business support solutions tailored to meet the unique needs of our clients."
          />
        </div>

        {/* About Us Introduction */}
        <div className="max-w-6xl mx-auto mt-10 md:mt-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
                At ServMark, we're passionate about empowering businesses to
                operate efficiently and grow sustainably. We are a team of
                experienced professionals offering tailored solutions in
                administration, IT, operations, HR, and marketing — all under
                one roof.
              </p>
              <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
                We believe that quality business support should be accessible to
                organizations of all sizes. Our approach combines industry
                expertise with personalized service to help our clients achieve
                sustainable growth.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition duration-300 transform hover:translate-y-1 shadow-md"
              >
                Get In Touch
              </Link>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                  width={600}
                  height={400}
                  src="/images/our-services.jpg"
                  alt="Our services"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Journey and Vision Section */}
      <motion.section
        ref={journeyRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={journeyInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={journeyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 pt-0">
                Our Journey
              </h2>
              <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                Founded with the belief that quality support shouldn't be out of
                reach for growing businesses, ServMark was created to bridge the
                gap between full-time hiring and reliable outsourcing. Over the
                years, we've worked with startups, small businesses, and
                enterprises to provide consistent, customized, and scalable
                support.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={journeyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                We envision a future where businesses of all sizes have access
                to top-tier support without the complexity or cost of
                traditional hiring. At ServMark, our goal is to become the
                trusted backbone for companies that want to scale smartly and
                sustainably. By continuously evolving with our clients' needs
                and the dynamic business landscape, we aim to set new standards
                for what reliable, people-first business support looks like in
                the modern age.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Feature Section */}
      <section>
        <FeatureSection
          title="What Sets Us Apart"
          description={customDescription}
        />
      </section>

      {/* Team Section */}

      {/* CTA Section */}
      <section className="text-center flex flex-col items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto p-8 md:p-12 bg-white rounded-3xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to grow with us?
          </p>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            Partner with ServMark for tailored business solutions that elevate
            your operations and drive sustainable growth.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
