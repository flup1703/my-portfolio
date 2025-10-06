import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather",
  description: "Приложение погоды.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
};
