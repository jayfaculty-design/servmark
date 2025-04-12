import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeIndustries from "@/components/HomeIndustries";
import HomeServices from "@/components/HomeServices";
import TestimonialsCarousel from "@/components/Testimonials";
import FeatureSection from "@/components/WhyChooseUs";
import { Space_Grotesk } from "@next/font/google";
import { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});
export const metadata: Metadata = {
  title:
    "Servmark - Ghana's number one expert solution to professional services",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <div style={{ fontFamily: spaceGrotesk.style.fontFamily }}>
      <Hero />
      <HomeAbout />
      <HomeIndustries />
      <HomeServices />
      <FeatureSection />
      <TestimonialsCarousel />
      <ContactSection />
    </div>
  );
}
