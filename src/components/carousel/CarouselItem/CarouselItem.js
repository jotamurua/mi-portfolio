import React from 'react'

const CarouselItem = ({projecto}) => {
  return (
    <div className='card'>
        <div className='card-top'>
        <a href={projecto.url} target="_blank" rel="noopener noreferrer">
          <img src={projecto.img} alt={projecto.title}/>
          <h4> 
           {projecto.title}
          </h4>
        </a>
        </div>
        <div className='card-bottom'>
          
          <p>
            {projecto.description}
          </p>
        </div>
      </div>
  )
}

export default CarouselItem