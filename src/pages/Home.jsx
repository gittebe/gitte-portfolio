import { Helmet } from 'react-helmet-async';
import { HeaderSection } from "../sections/HeaderSection/HeaderSection";
import { BioSection } from "../sections/BioSection/BioSection";
import { SkillsSection } from "../sections/SkillsSection/SkillsSection";
import { ProjectsSection } from "../sections/ProjectsSection/ProjectsSection";
import { JourneySection } from "../sections/JourneySection/JourneySection";
import { FooterSection } from "../sections/FooterSection/FooterSection";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Portfolio Gitte</title>
        <meta name="description" content="Welcome to Gitte's Portfolio. Learn more about her skills, projects and her professional journey." />
      </Helmet>
      <HeaderSection />
      <main>
        <BioSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
      </main>
      <FooterSection />
    </>
  )
}