import React from "react";
import Header from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";
import LatestNews from "../components/ui/LatestNews"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <LatestNews />
    </>
  );
}
