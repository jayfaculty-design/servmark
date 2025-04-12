"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeAbout = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
    triggerOnce: true, // Run animation only once
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
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div className="order-2 lg:order-1 relative" variants={fadeIn}>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                width={600}
                height={400}
                src="/images/about.svg"
                alt="About ServMark"
                className="w-full h-auto"
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/10 rounded-full"
                initial={{ scale: 0 }}
                animate={
                  inView ? { scale: 1, transition: { duration: 0.8 } } : {}
                }
              ></motion.div>
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full"
                initial={{ scale: 0 }}
                animate={
                  inView ? { scale: 1, transition: { duration: 0.8 } } : {}
                }
              ></motion.div>
            </div>
          </motion.div>

          <motion.div className="order-1 lg:order-2" variants={fadeIn}>
            <div className="inline-block mb-2">
              <motion.div
                className="h-1 w-16 bg-primary mb-1"
                initial={{ scaleX: 0 }}
                animate={
                  inView ? { scaleX: 1, transition: { duration: 0.6 } } : {}
                }
              ></motion.div>
              <motion.div
                className="h-1 w-10 bg-primary/70"
                initial={{ scaleX: 0 }}
                animate={
                  inView
                    ? { scaleX: 1, transition: { duration: 0.6, delay: 0.2 } }
                    : {}
                }
              ></motion.div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 capitalize">
              Who We Are
            </h2>

            <motion.div className="space-y-4 text-lg">
              <p className="text-gray-600">
                ServMark delivers comprehensive business support services
                designed to optimize operations and drive growth for
                organizations of all sizes.
              </p>
              <p className="text-gray-600">
                Our team of industry specialists works as an extension of your
                business, offering tailored strategies and implementation
                support.
              </p>
              <p className="text-gray-600 mb-8">
                ServMark combines deep knowledge with responsive service to help
                your business thrive in today's competitive landscape.
              </p>
            </motion.div>

            <motion.div
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/80 transition duration-300 group"
              variants={fadeIn}
            >
              <Link href="/who-we-are" className="flex items-center">
                <span>More About Us</span>
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
        </div>
      </motion.div>
    </section>
  );
};

export default HomeAbout;
