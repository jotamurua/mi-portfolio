import "./CarouselItem.css"

const CarouselItem = ({projecto}) => {
  return (
    <section className="carrousel-item__box">
    <div class="carrousel-item__card">
<div class="carrousel-item__image"><img src={projecto.img} alt={projecto.title}/> </div>
  <div class="carrousel-item__description">
    <p class="carrousel-item__title"> {projecto.title}</p>
    <p class="carrousel-item__body">{projecto.description}</p>
    <div className="carrousel-item__links">
    <a href={projecto.url} target="_blank" rel="noopener noreferrer">
      <button>
       <ion-icon name="logo-github"></ion-icon>
      </button>
    </a>
    {projecto.deploy &&
    <a href={projecto.deploy} target="_blank" rel="noopener noreferrer">
    <button>
      <ion-icon name="globe-outline"></ion-icon>
    </button>
    </a>
    }
</div>
  </div>
</div>

</section>
  )
}

export default CarouselItem