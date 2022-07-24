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
    
    <button> <ion-icon name="logo-github"></ion-icon>
</button>
<button><ion-icon name="globe-outline"></ion-icon>
</button>

</div>
  </div>
</div>

</section>
  )
}

export default CarouselItem