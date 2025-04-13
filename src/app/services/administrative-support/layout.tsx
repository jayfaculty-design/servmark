import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administrative Support Service | Servmark",
  description:
    "Manages routine tasks like data entry, scheduling, document prep, and email handling to boost efficiency.",
};

export default function AdministrativeSupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
