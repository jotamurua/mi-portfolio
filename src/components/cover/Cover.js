import "./Cover.css"
import covervideo from "../../media/covervideo.mp4"
const Cover = () => {
  return (
    <div className="containervideo">
        <video className="video" src={covervideo} autoPlay loop muted></video>
        <h1> grax santos sos un capo</h1>
        <p>Front-end Developer</p>

    </div>
  )
}

export default Cover