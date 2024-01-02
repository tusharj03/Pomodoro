import React from "react";
import CTA_Card from "@/Components/Landing/CTA_Card";
import Hero from "@/Components/Landing/Hero";
import InfoCard from "@/Components/Landing/InfoCard";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/index";
export default function Home() {
  return (
    <div>
      <Hero />
      <CTA_Card>
        <h4 className="cta-card--heading">What is this?</h4>
        <p className="cta-card--desc">
          This is Sara Ziaja's digital companion, offering focus, relaxation, and more. Create your unique sound environment by mixing a range of calming sounds. With 15 (sorta) high-quality background options, customize your ideal blend and adjust volumes to your liking.
        </p>
      </CTA_Card>
      <InfoCard />
      <Footer />
    </div>
  );
}
