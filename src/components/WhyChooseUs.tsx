"use client";
import React from "react";
import {
  BarChart3,
  Clock,
  HandshakeIcon,
  Layers3Icon,
  SettingsIcon,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

// Default content if none is provided
const defaultReasons = [
  {
    title: "Tailored Solutions",
    description:
      "We don't do one-size-fits-all. Our strategies are customized to your unique business needs.",
    icon: <SettingsIcon className="w-6 h-6" />,
  },
  {
    title: "End-to-End Service Offering",
    description:
      "From consulting and tech to operations and HR, we cover every angle of business support.",
    icon: <Layers3Icon className="w-6 h-6" />,
  },
  {
    title: "Multidisciplinary Team",
    description:
      "Our experts come from diverse fields, ensuring well-rounded insights and innovative problem-solving.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Client-Centered Approach",
    description:
      "We build lasting partnerships through active listening, clear communication, and consistent delivery.",
    icon: <HandshakeIcon className="w-6 h-6" />,
  },
  {
    title: "Scalable Support",
    description:
      "Whether you're a startup or an enterprise, our services scale with your growth.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Data-Driven Results",
    description:
      "We track performance and outcomes to ensure your business gains measurable value.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Reliability You Can Count On",
    description:
      "Our team is responsive, proactive, and dedicated to your long-term success.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "24/7 Support",
    description: "Always available when you need assistance",
    icon: <Clock className="w-6 h-6" />,
  },
];

const defaultDescription = {
  heading: "Why Choose Us",
  paragraphs: [
    "At Servmark, we don't just provide services—we deliver strategic solutions that are tailored, integrated, and aligned with your goals. Our multidisciplinary expertise spans professional services, IT, HR, operations, marketing, and administration, allowing us to support businesses holistically. We take the time to understand your unique challenges and craft solutions that create measurable, lasting impact.",
    "What sets us apart is our dedication to becoming a true extension of your team. We pride ourselves on transparency, proactive communication, and consistent results. Whether you're navigating a complex project or seeking long-term operational support, Servmark brings the right people, tools, and insights to help your business thrive in any environment.",
  ],
  image: "/images/choose.svg",
  altText: "why choose us",
};

const FeatureSection = ({
  title = "Why Choose Us",
  description = defaultDescription,
  reasons = defaultReasons,
  showImage = true,
  showDescriptionSection = true,
  backgroundColor = "bg-white",
  iconColor = "bg-primary",
  textColor = "text-gray-900",
  descriptionColor = "text-gray-600",
  showReasons = true,
  reasonsPerRow = { mobile: 1, tablet: 2, desktop: 4 },
  className = "",
  reasonClassName = "",
  maxWidth = "max-w-6xl",
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const gridCols = `grid-cols-1 md:grid-cols-${reasonsPerRow.tablet} lg:grid-cols-${reasonsPerRow.desktop}`;

  return (
    <motion.section
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] to-primary/10 ${backgroundColor} ${className}`}
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      {showDescriptionSection && (
        <motion.div
          className={`${maxWidth} mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-10 items-center`}
          variants={fadeIn}
        >
          <div>
            <div className="inline-block mb-2">
              <motion.div
                className="h-1 w-16 bg-primary mb-1"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
              ></motion.div>
              <motion.div
                className="h-1 w-10 bg-primary/70"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: 1,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                }}
              ></motion.div>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-6`}>
              {description.heading || title}
            </h2>
            <div className="space-y-4">
              {description.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className={`${descriptionColor} text-lg`}
                  variants={fadeIn}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {showImage && (
            <motion.div
              className="flex justify-center items-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
            >
              <div className="absolute w-64 h-64 bg-primary/5 rounded-full -z-10 blur-2xl"></div>
              <div className="relative">
                <Image
                  src={description.image}
                  width={300}
                  height={300}
                  alt={description.altText}
                  className="w-72 sm:w-80 lg:w-96 h-auto"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {showReasons && (
        <motion.div
          className={`${maxWidth} ${
            showDescriptionSection ? "mt-16 md:mt-20" : ""
          } mx-auto`}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          <div
            className={`grid ${gridCols} grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8`}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 flex flex-col items-center ${reasonClassName}`}
                variants={fadeIn}
              >
                <div
                  className={`${iconColor} p-4 rounded-full text-white mb-4 shadow-md`}
                >
                  {reason.icon}
                </div>
                <h3
                  className={`text-xl font-semibold ${textColor} mb-3 text-center`}
                >
                  {reason.title}
                </h3>
                <p className={`text-center ${descriptionColor} text-sm`}>
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default FeatureSection;
