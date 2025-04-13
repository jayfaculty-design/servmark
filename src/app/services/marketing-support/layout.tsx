import { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
  title: "Marketing Support Service | Servmark",
  description:
    "Drives brand awareness and engagement through digital marketing, social media, content creation, and market research.",
};

// Layout component for the Marketing Support page
export default function MarketingSupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
