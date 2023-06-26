import "./Footer.css"

const Footer = () => {
  return (
    <footer className= "footer">
        <div className="footer__info">
            <div className="footer__text">
            <h1> Joel Murua</h1>
            <p>
                Buenos Aires, Argentina.
            </p>
            <a href="https://drive.google.com/file/d/1zZguHvmdAKvgfryLq5PNjgVUwbGu1nKT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <p> Descarga mi CV!</p>
            </a>
            
            <h3> Contactame en mis redes</h3>
            </div>   

            
            <div className="footer__sns">
                
                <div className="footer__links">
                    <a href="https://www.linkedin.com/in/joelmurua/" className="footer__icons" target="_blank" rel="noopener noreferrer" >
                    <ion-icon name="logo-linkedin" ></ion-icon>
                    </a>
                    <a href="https://github.com/jotamurua" className="footer__icons" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-github"   target="_blank" rel="noopener noreferrer"></ion-icon>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5493425212930" className="footer__icons" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-whatsapp" ></ion-icon>
                    </a>
                    <a href="mailto:joel.l.murua@gmail.com" className="footer__icons" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="mail-outline" ></ion-icon>
                    </a>
                    
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer
