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
                    <a href="https://www.linkedin.com/in/joelmurua/" >
                    <ion-icon name="logo-linkedin" className="iconos"></ion-icon>
                    </a>
                    <a href="https://github.com/jotamurua">
                    <ion-icon name="logo-github" className="iconos"></ion-icon>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5493425212930">
                    <ion-icon name="logo-whatsapp" className="iconos"></ion-icon>
                    </a>
                    <a href="mailto:joel.l.murua@gmail.com">
                    <ion-icon name="mail-outline" className="iconos"></ion-icon>
                    </a>
                    
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer
