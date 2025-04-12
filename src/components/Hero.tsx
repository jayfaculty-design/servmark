"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          className="order-2 lg:order-1 mt-8 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            variants={fadeIn}
          >
            Simplify Operations with a Single Partner
          </motion.h1>
          <motion.p className="text-lg text-gray-600 mb-6" variants={fadeIn}>
            ServMark provides tailored business support solutions to streamline
            operations, enhance efficiency, and fuel growth.
          </motion.p>
          <motion.p className="text-lg text-gray-600 mb-8" variants={fadeIn}>
            From IT and administrative services to human resources and
            marketing, we're here to help your organization thrive at every
            stage.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={fadeIn}>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/80 transition duration-300 inline-block"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/10 transition duration-300 inline-block"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2 w-full">
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              effect="fade"
              loop={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay, EffectFade]}
              className="rounded-xl"
            >
              <SwiperSlide>
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <Image
                    src="/images/marketing.jpg"
                    alt="Marketing Services"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <Image
                    src="/images/hr.jpg"
                    alt="HR Services"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <Image
                    src="/images/lgx.jpg"
                    alt="Logistics Services"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
