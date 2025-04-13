import { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
  title: "Operational Support Service | Servmark",
  description:
    "Improves business processes through logistics support, facilities management, and process optimization.",
};

// Layout component for the Operational Support page
export default function OperationalSupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
