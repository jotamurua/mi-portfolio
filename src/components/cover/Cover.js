import "./Cover.css"
import covervideo from "../../media/covervideo.mp4"
const Cover = () => {
  return (
    <div className="containervideo">
        <video className="video" src={covervideo} autoPlay loop muted></video>
        <h1> Joel Murua</h1>
        <p>Front-end Developer</p>
        <button onClick={() => window.scroll({
  top: 480,
  behavior: 'smooth'
})}><ion-icon name="arrow-down-circle-outline" size="large"></ion-icon></button>

    </div>
  )
}

export default Cover