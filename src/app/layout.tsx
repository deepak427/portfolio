import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepak Singh | Senior Full-Stack Engineer",
  description: "Senior Full-Stack Engineer specializing in high-performance web applications, scalable systems, and AI integration. Building digital excellence.",
  keywords: "Deepak Singh, Senior Full-Stack Engineer, React Developer, Next.js Expert, AI Integration, Scalable Systems, Software Architect",
  authors: [{ name: "Deepak Singh" }],
  creator: "Deepak Singh",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dipu.dev",
    title: "Deepak Singh | Senior Full-Stack Engineer",
    description: "Building scalable, high-performance digital solutions. Partner with a senior engineer for your next ambitious project.",
    siteName: "Deepak Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Singh | Senior Full-Stack Engineer",
    description: "Building scalable, high-performance digital solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} antialiased bg-background text-foreground selection:bg-secondary/30 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
