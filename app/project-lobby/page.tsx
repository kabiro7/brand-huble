import Project from "@/components/project";
import FeaturedProject from "@/components/featureproject";
import ProjectArchive from "@/components/projectarchive";
import Feedback from "@/components/feedback";

export default function ProjectLobbyPage() {
  return (
    <main>
      <Project />
      <FeaturedProject />
      <ProjectArchive/>
      <Feedback />
    </main>
  );
}