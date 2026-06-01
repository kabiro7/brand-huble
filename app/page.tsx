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
import Feedback from "@/components/feedback";
import BlogSection from "@/components/blogsection";
import BlogSection1 from "@/components/blogsection1";
import Footer from "@/components/footer";
import Project from "@/components/project"
import FeaturedProject from "@/components/featureproject";
import Contact from "@/components/contact";
import Process from "@/components/process";
import TheEngine from "@/components/theengine";
import TheIncubator from "@/components/Theincubator";
import TeamSection from "@/components/teamsection";
import ProjectArchive from "@/components/projectarchive";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
  
    <Navbar/>
    <HeroSection/>
    <CTAsection/>
    <Project/>
    <FeaturedProject/>
    <ServicesSection/>
    <Process/>
    <Feedback/>
    <BlogSection/>
    <FAQSection/>
    <TeamSection/>
    <Pricingsection/>
    <TheEngine/>
    <TheIncubator/>
    <Whyworkwith/>
    <WhyHubble/>
    <Notsuresection/>
    <ProjectArchive/>
    <BlogSection1/>
    <Contact/>
    <Footer/>
     
    </main>
  );
}


