import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Servmark",
  description:
    "Discover how Servmark is revolutionizing business support with tailored solutions and a commitment to excellence.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
