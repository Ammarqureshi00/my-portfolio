import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Toolbox from "@/components/Toolbox";
import Work from "@/components/Work";
import About from "@/components/About";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="top">
        <Hero />
        <Toolbox />
        <Work />
        <About />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
