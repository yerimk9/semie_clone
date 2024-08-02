"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="section1">
        <Section1 />
      </div>
      <div className="h-screen"></div>

      <Footer />
    </div>
  );
}
