import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo",
  description: "Приложение ToDo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
};
