import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logo-ticker";
import Pricing from "@/components/pricing";
import ProductShowcase from "@/components/product-showcase";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
