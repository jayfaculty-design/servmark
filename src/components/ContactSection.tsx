"use client";
import { MapPin, MessageCircle, Phone, ExternalLink, Mail } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import SectionHeader from "./Heading";
import Link from "next/link";

const contactDetails = [
  {
    icon: <MessageCircle />,
    title: "Chat Our Support",
    description: "We're here to help you 24/7",
    contact: "hello@servmark.ltd",
    action: "Send Email",
    href: "mailto:hello@servmark.ltd",
    color: "bg-blue-500",
  },
  {
    icon: <MapPin />,
    title: "Visit Us",
    description: "Visit Our Headquarters",
    contact: "123 Business Avenue, Accra",
    action: "View on Google Maps",
    href: "https://goo.gl/maps/...",
    external: true,
    color: "bg-green-500",
  },
  {
    icon: <Phone />,
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm",
    contact: "+233 240 536 268",
    action: "Call Now",
    href: "tel:+233240536268",
    color: "bg-purple-500",
  },
];

const ContactSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="px-4 py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn}>
          <SectionHeader
            title="Get In Touch With Us"
            subtitle="If you need help or have any questions, please feel free to reach out to us. Our team is ready to assist you."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2, duration: 0.6 },
                },
              }}
            >
              <div className={`${detail.color} p-6 flex items-center`}>
                <div className="text-white p-3 rounded-full bg-white/20 mr-4">
                  {React.cloneElement(detail.icon, {
                    size: 28,
                    className: "text-white",
                  })}
                </div>
                <h2 className="text-xl font-bold text-white">{detail.title}</h2>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-3">{detail.description}</p>
                <p className="text-gray-900 font-semibold text-lg mb-4">
                  {detail.contact}
                </p>

                <a
                  href={detail.href}
                  className="flex items-center text-primary hover:underline font-medium group"
                  target={detail.external ? "_blank" : undefined}
                  rel={detail.external ? "noopener noreferrer" : undefined}
                >
                  <span>{detail.action}</span>
                  {detail.external ? (
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.8 },
            },
          }}
        >
          <Link
            href="/contact"
            style={{ padding: "16px 2rem 16px 2rem" }}
            className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Contact Us Now
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
