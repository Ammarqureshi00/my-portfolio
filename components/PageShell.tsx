import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "@/app/pages.css";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="top" className="pg">{children}</main>
      <Footer />
      <Reveal />
    </>
  );
}
