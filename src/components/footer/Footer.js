import "./Footer.css"

const Footer = () => {
  return (
    <footer className= "footer">
        <div className="footer-info">
            <div className="texto">
            <h1> Joel Murua</h1>
            <p>
                Buenos Aires, Argentina.
            </p>
            
            <h3> Contactame en mis redes</h3>
            </div>   

            
            <div className="footer-sns">
                
                <div className="sns-links">
                    <a href="/" >
                    <ion-icon name="logo-linkedin" className="iconos"></ion-icon>
                    </a>
                    <a href="/">
                    <ion-icon name="logo-github" className="iconos"></ion-icon>
                    </a>
                    <a href="/">
                    <ion-icon name="logo-whatsapp" className="iconos"></ion-icon>
                    </a>
                    <a href="/">
                    <ion-icon name="mail-outline" className="iconos"></ion-icon>
                    </a>
                    
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer