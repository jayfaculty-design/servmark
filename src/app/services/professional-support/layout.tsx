import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Support Service | Servmark",
  description:
    "Comprehensive administrative, virtual assistance, and secretarial services that streamline daily business operations.",
};

export default function ProfessionalSupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
