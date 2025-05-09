import PortraitImg from "../../assets/gitte-greenbackground.jpg";
import "./BioImage.css";

export const BioImage = () => {
  return (
    <div className="bio-image-container">
      <div className="bio-image">
        <img src={PortraitImg} alt="Profile of Gitte Beckmann, a white woman with chin-length brown hair." />
      </div>
    </div>
  )
}