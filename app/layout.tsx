import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway", // اسم الـ CSS variable
  subsets: ["latin"], // اللغة
  weight: ["400", "700"], // اختيارات الوزن
});

export const metadata: Metadata = {
  title: "FasterUi",
  description: "UI Dark Template for Webflow Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="[scroll-behavior:smooth]"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased `}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
