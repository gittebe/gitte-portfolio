import { HeaderSection } from "../sections/HeaderSection/HeaderSection";
import { BioSection } from "../sections/BioSection/BioSection";
import { SkillsSection } from "../sections/SkillsSection/SkillsSection";
import { ProjectsSection } from "../sections/ProjectsSection/ProjectsSection";
import { JourneySection } from "../sections/JourneySection/JourneySection";
import { FooterSection } from "../sections/FooterSection/FooterSection";

export const Home = () => {
  return (
    <>
      <HeaderSection />
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <FooterSection />
    </>
  )
}