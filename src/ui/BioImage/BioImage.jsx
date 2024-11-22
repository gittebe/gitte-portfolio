import BioImageDown from "../../assets/BioImageDown.png"
import BioImageUp from "../../assets/BioImageUp.png"
import "./BioImage.css"

export const BioImage = () => {
  return (
    <div className="bio-image-container">
      <div className="bio-image">
        <img src={BioImageDown} alt="bio-image" className='image-down' />
      </div>
      <div className='bio-image-top-layer'>
        <img src={BioImageUp} alt="" className='image-up' />
      </div>
    </div>
  )
}