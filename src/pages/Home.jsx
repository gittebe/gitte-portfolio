import { BioSection } from "../sections/BioSection/BioSection"
import { SkillsSection } from "../sections/SkillsSection/SkillsSection"
import { ProjectsSection } from "../sections/ProjectsSection/ProjectsSection"
import { Navigation } from "../ui/Navigation/Navigation"
import { JourneySection } from '../sections/JourneySection/JourneySection'
import { FooterSection } from '../sections/FooterSection/FooterSection'

export const Home = () => {
  return (
    <>
      <Navigation />
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <FooterSection />
    </>
  )
}