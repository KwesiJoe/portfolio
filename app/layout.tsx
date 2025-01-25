import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What's Your?",
  description: "narrow down to your top 3 interests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
