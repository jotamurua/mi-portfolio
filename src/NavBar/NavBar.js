import "./NavBar.css"

const NavBar = ({scrolling}) => {
const toTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}

  return (
    <nav className={`navbar ${scrolling>20 ? "scrolled" : null}`}>
        <div className="navbar__logo" onClick={toTop}>
        <ion-icon name="home" ></ion-icon>
        </div>
    </nav>
  )
}

export default NavBar