import FooterImageDown from "./../../assets/FooterImageDown.png"
import FooterImageUp from "./../../assets/FooterImageUp.png"
import "./FooterImage.css"

export const FooterImage = () => {
  return (
    <div className="footer-image-container">
      <div className="footer-image">
        <img src={FooterImageDown} alt="bio-image" className='image-down' />
      </div>
      <div className='footer-image-top-layer'>
        <img src={FooterImageUp} alt="" className='image-up' />
      </div>
    </div>
  )
}