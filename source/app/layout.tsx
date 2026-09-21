import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ancient Seas · An immersive ocean",
  description: "Swim freely through an imagined prehistoric ocean. Sunlit shallows, ancient marine creatures, and a world to get lost in.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
