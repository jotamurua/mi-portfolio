import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { projectosRealizados } from '../../data/data';
import "./Carousel.css"


const Carousel = () => {
  var settings = {
    className: "center",
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    
    
    
  };
  return (
    <div className='carousel'>
    <h3>Mis Proyectos:</h3>
    <Slider {...settings} className="slider">
    {projectosRealizados.map ((projecto) => 
    (
      
      <div className='card'>
        <div className='card-top'>
        <a href={projecto.url}>
          <img src={projecto.img} alt={projecto.title}/>
          <h4> 
           {projecto.title}
</h4></a>
        </div>
        <div className='card-bottom'>
          
          <p>
            {projecto.description}
          </p>
        </div>
      </div>

    ))}
    </Slider>
    </div>
    
    )
}

export default Carousel