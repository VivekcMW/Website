import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import AsianBornGlobal from "../components/AsianBornGlobal";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Products from "../components/Products";
import CustomerLogos from "../components/CustomerLogos";
import TestimonialSection from "../components/TestimonialSection";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AsianBornGlobal />
      <Services />
      <Clients />
      <Products />
      <CustomerLogos />
      <TestimonialSection />
      <About />
      <Newsletter />
      <CaseStudiesSection />
      <ContactForm />
    </>
  );
}
