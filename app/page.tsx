import Navbar from "@/components/Navbar"
import Herosection from "@/components/Herosection";
import CTAsection from "@/components/Ctasection";
import WhyHubble from "@/components/WhyHubble";
import ServicesSection from "@/components/ServicesSection";
import Whyworkwith from "@/components/Whyworkwith";
import FAQSection from "@/components/FAQSection";
import Pricingsection from "@/components/Pricingsection";
import Notsuresection from "@/components/Notsuresection";
import HeroSection from "@/components/Herosection";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
  
    <Navbar/>
    <HeroSection/>
    <CTAsection/>
    <ServicesSection/>
    <Whyworkwith/>
    <WhyHubble/>
    <Notsuresection/>
    <FAQSection/>
    <Pricingsection/>
    
     
    </main>
  );
}


