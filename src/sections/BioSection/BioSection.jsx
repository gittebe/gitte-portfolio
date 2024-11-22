import { BioCard } from "../../components/BioCard/BioCard"
import { BioImage } from "../../ui/BioImage/BioImage"
import "./BioSection.css"

export const BioSection = () => {
  return (
    <section className="bio-section">
      <div className="bio-header">
        <BioCard />
      </div>
      <div className="bio-body">
        <BioImage />
      </div>
    </section>
  )
}