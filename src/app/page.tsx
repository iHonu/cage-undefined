import type { Metadata } from "next";
import HeroSection from "@/components/hero/HeroSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cage Undefined | Empowering Through Technology",
    description:
      "We are a free, volunteer-driven and donation-powered service dedicated to making technology education accessible to everyone. Join our community of learners and innovators.",
    viewport: "width=device-width, initial-scale=1",
    icons: {
      icon: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Cage Undefined | Empowering Through Technology",
      description:
        "We are a free, volunteer-driven and donation-powered service dedicated to making technology education accessible to everyone.",
      type: "website",
      locale: "en_US",
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
    </main>
  );
}
