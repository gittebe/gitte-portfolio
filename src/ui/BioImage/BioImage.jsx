import PortraitImg from "../../assets/portrait-img.jpg"
import "./BioImage.css"

export const BioImage = () => {
  return (
    <div className="bio-image-container">
      <div className="bio-image">
        <img src={PortraitImg} alt="bio-image" className='image-down' />
      </div>
    </div>
  )
}