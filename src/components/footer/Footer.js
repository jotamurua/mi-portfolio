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
            <a href="/" target="_blank" rel="noopener noreferrer">
                <p> Descarga mi CV!</p>
            </a>
            
            <h3> Contactame en mis redes</h3>
            </div>   

            
            <div className="footer-sns">
                
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/joelmurua/" className="iconos" target="_blank" rel="noopener noreferrer" >
                    <ion-icon name="logo-linkedin" ></ion-icon>
                    </a>
                    <a href="https://github.com/jotamurua" className="iconos">
                    <ion-icon name="logo-github"   target="_blank" rel="noopener noreferrer"></ion-icon>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5493425212930" className="iconos" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-whatsapp" ></ion-icon>
                    </a>
                    <a href="mailto:joel.l.murua@gmail.com" className="iconos" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="mail-outline" ></ion-icon>
                    </a>
                    
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer
