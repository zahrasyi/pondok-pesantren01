import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { CampusLife } from "@/components/CampusLife";
import { News } from "@/components/News";
import { Partners } from "@/components/Partner"; // Import komponen baru
import { Admissions } from "@/components/Admissions";
import { Footer } from "@/components/Footer";
import { FounderQuote } from "@/components/FounderQuote";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <Hero />
      <News />
      <StatsBar />
      <About />
      {/* <Partners/>
      <FounderQuote/>
      <Programs />
      <CampusLife /> */}
      <Admissions />
      <Footer />
    </main>
  );
}