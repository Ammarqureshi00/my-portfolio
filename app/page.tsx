import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Toolbox from "@/components/Toolbox";
import Work from "@/components/Work";
import About from "@/components/About";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import WhyWork from "@/components/WhyWork";
import HomeFAQ from "@/components/HomeFAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import ConversionCTA from "@/components/ConversionCTA";
import StickyActionBar from "@/components/StickyActionBar";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="top" className="mobile-actions-space">
        <Hero />
        <Toolbox />
        <Work />
        <WhyWork />
        <About />
        <Services />
        <Approach />
        <Testimonials />
        <HomeFAQ />
        <Contact />
        <ConversionCTA />
      </main>
      <Footer />
      <StickyActionBar />
      <Reveal />
    </>
  );
}
