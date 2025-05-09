import { MediaLink } from "../../ui/MediaLink/MediaLink";
import github from "../../assets/logo-gitHub.png";
import linkedin from "../../assets/logo-linkedin.png";
import "./MediaLinkContainer.css"

export const MediaLinkContainer = () => {
  return (
    <div className="media-link-container">
      <MediaLink
        src={linkedin}
        alt="LinkedIn"
        aria="LinkedIn profile"
        link="https://www.linkedin.com/in/gittebeckmann/">
      </MediaLink>
      <MediaLink
        src={github}
        alt="GitHub"
        aria="GitHub profile"
        link="https://github.com/gittebe">
      </MediaLink>
    </div>
  )
}