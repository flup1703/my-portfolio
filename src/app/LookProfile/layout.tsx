import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Look",
  description: "LookProfile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
};
