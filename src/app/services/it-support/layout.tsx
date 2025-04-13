import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support Service | Servmark",
  description:
    "End-to-end tech support including helpdesk, system maintenance, cybersecurity, and infrastructure management.",
};

export default function ITSupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
