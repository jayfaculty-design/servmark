"use client";
import SectionHeader from "@/components/Heading";
import { Mail, Phone } from "lucide-react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

// Contact Details
const details = [
  {
    title: "Customer Support",
    description:
      "Our support team is available around the clock to address any concerns or queries you may have.",
  },
  {
    title: "Feedback and Suggestions",
    description:
      "We value your feedback and are continuously working to improve ServMark. Your input is crucial in shaping the future of ServMark.",
  },
];

// Metadata

const page = () => {
  // InView hooks for scroll animations
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: contactInfoRef, inView: contactInfoInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: mapRef, inView: mapInView } = useInView({
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
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#fefefe] to-primary/10">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        className="max-w-5xl mx-auto px-6 sm:px-8"
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <SectionHeader
          title="Contact Us"
          subtitle="Got any questions? Feel free to email, call, or complete the form — we've got you covered 24/7."
          titleColor="text-gray-800"
          subtitleColor="text-gray-600"
          dividerColor="bg-primary"
          secondaryDividerColor="bg-primary/70"
        />
      </motion.div>

      <motion.div
        ref={contactInfoRef}
        className="max-w-6xl mx-auto px-6 sm:px-8 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14"
        initial="hidden"
        animate={contactInfoInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        {/* Contact Info */}
        <motion.div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Are you ready?
          </h2>
          <p className="mb-8 text-gray-700 text-lg leading-relaxed">
            Feel free to reach out to us — we’re here and ready to assist you
            with any concerns or queries!
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 hover:bg-primary/10 transition rounded-lg p-2">
              <Mail className="text-primary" />
              <p className="text-gray-800 font-medium">hello@servmark.com</p>
            </div>
            <div className="flex items-center gap-4 hover:bg-primary/10 transition rounded-lg p-2">
              <Phone className="text-primary" />
              <p className="text-gray-800 font-medium">+233 240 536 268</p>
            </div>
          </div>

          <div className="space-y-8">
            {details.map((detail, index) => (
              <div
                key={index}
                className="hover:shadow-lg hover:bg-gray-50 rounded-lg p-4 transition"
              >
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  {detail.title}
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <div>
          <form className="bg-white px-6 sm:px-8 py-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="space-y-2 mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Get in Touch
              </h1>
              <p className="text-gray-600">
                We'll get back to you within 24 hours
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    type="text"
                    placeholder="Godfred"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    type="text"
                    placeholder="Entsie"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400"
                  />
                  <input
                    id="email"
                    name="email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto mt-14">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31871.518979129156!2d-0.20779035379050663!3d5.608867902980758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9166f6b1fc7d%3A0x9716ae3b9c8dbbf3!2sServMark%20Head%20Office!5e0!3m2!1sen!2sgh!4v1683123456789!5m2!1sen!2sgh"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </section>
  );
};

export default page;
