import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='https://images.pexels.com/photos/5392513/pexels-photo-5392513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      alt=''
    />
    <div className='carousel-item__details'>
      <div>
        <img
          className='carousel-item__details--img'
          src='./imagen/play-icon.png'
          alt='Play Icon'
        />
        <img
          className='carousel-item__details--img'
          src='./imagen/plus-icon.png'
          alt='Plus Icon'
        />
      </div>
      <p className='carousel-item__details--title'>Título descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
