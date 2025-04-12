"use client";
import React from "react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Space_Grotesk } from "@next/font/google";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"], // Add more subsets if necessary
});

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //  newsletter submission logic here
    setIsSubmitted(true);
    setEmail("");
    // Reset submission state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const { ref: newsletterRef, inView: newsletterInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: mainFooterRef, inView: mainFooterInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: bottomBarRef, inView: bottomBarInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <footer
      style={{ fontFamily: spaceGrotesk.style.fontFamily }}
      className="bg-primary text-white"
    >
      {/* Newsletter Section */}
      <motion.div
        ref={newsletterRef}
        className="bg-gradient-to-r from-primary to-secondary py-12 border-b border-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={newsletterInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated with ServMark
              </h3>
              <p className="text-white/80">
                Subscribe to our newsletter for the latest industry insights,
                service updates, and exclusive resources.
              </p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="flex-grow relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 pr-4 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="h-12 px-6 bg-white text-primary hover:bg-white/90 rounded-lg font-medium transition-colors transform hover:scale-105"
                >
                  {isSubmitted ? (
                    <span className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 animate-pulse" />
                      Subscribed!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
              <p className="text-white/60 text-sm mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.div
        ref={mainFooterRef}
        className="max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={mainFooterInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo21.png"
                alt="ServMark Logo"
                width={160}
                height={40}
                className="mb-2"
              />
              <div className="w-12 h-1 bg-white rounded-full"></div>
            </div>
            <p className="mb-6">
              Comprehensive business support solutions tailored to help
              organizations thrive in today's fast-paced world.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                <p>
                  123 ServMark Avenue, Suite 400
                  <br />
                  Accra, Ghana
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <p>+233 246 623 0866</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <p>hello@servmark.com</p>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/professional-support"
                  className="text-white/60 hover:text-white/40 transition-colors"
                >
                  Professional Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-support"
                  className="text-white/60 hover:text-white/40 transition-colors"
                >
                  IT Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/administrative-support"
                  className="text-white/60 hover:text-white/40 transition-colors"
                >
                  Administrative Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/operational-support"
                  className="text-white/60 hover:text-white/40 transition-colors"
                >
                  Operational Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hr-support"
                  className="text-white/60 hover:text-white/40 transition-colors"
                >
                  HR Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing-support"
                  className="text-white/60 hover:text-white/40 transition-colors"
                >
                  Marketing Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/who-we-are"
                  className="text-white/60 hover:text-white/40 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-white/40 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white/40 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Working Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-white/60">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white text-primary hover:bg-white/60 hover:text-primary p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white text-primary hover:bg-white/60 hover:text-primary p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white text-primary hover:bg-white/60 hover:text-primary p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white text-primary hover:bg-white/60 hover:text-primary p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        ref={bottomBarRef}
        className="border-t border-white/30"
        initial={{ opacity: 0, y: 50 }}
        animate={bottomBarInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} ServMark Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white/60 hover:underline hover:underline-offset-2 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:underline hover:underline-offset-2 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:underline hover:underline-offset-2 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
