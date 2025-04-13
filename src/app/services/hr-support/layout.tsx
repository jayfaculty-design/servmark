import { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
  title: "HR Support Service | Servmark",
  description:
    "Covers recruitment, onboarding, employee management, policy creation, and HR compliance to build strong teams.",
};

// Layout component for the HR Support page
export default function HRSupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}