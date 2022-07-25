import "./CarouselItem.css"

const CarouselItem = ({projecto}) => {
  return (
    <section className="card-container">
    <div class="card">
<div class="card-image"><img src={projecto.img} alt={projecto.title}/> </div>
  <div class="card-description">
    <p class="text-title"> {projecto.title}</p>
    <p class="text-body">{projecto.description}</p>
    <div className="botones-links">
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