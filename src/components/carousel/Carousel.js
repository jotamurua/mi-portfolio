import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { projectosRealizados } from '../../data/data';
import "./Carousel.css"
import CarouselItem from './CarouselItem/CarouselItem';


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
      
      <CarouselItem projecto={projecto} key={projecto.id}/>

    ))}
    </Slider>
    </div>
    
    )
}

export default Carousel