import AboutSection from "./Aboutsection";
import AboutTextSection from "./Abouttextsection";
import LogoWallSection from "./Logowallsection";
import StorySection from "./Storysection";
import TeamSection from "./Teamsection";
import ClientsSection from "./Clientssection";

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <AboutTextSection />
      <LogoWallSection />
      <StorySection />
      <TeamSection />
      <ClientsSection />
    </main>
  );
}