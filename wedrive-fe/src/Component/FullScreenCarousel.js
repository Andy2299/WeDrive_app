import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../imgs/banner1.png';
import banner2 from '../imgs/banner2.png';
import './css/Carousel.css';

const FullScreenCarousel = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      infiniteLoop
      autoPlay
      interval={30000}
      transitionTime={500}
    >
      <div className='div-banner1'>
        <div className='container-1'>
          <h2>Taycan</h2>
          <p id='idMarca'>Porshe</p>
          <img src={banner1}/>
          <div className='bannerInfo'>
            <div className='contaimerInfo'>
              <p className='tituleBanner'>357<span>km</span></p>
              <p id='infoBanner'>Rango estimado</p>
            </div>
            <div className='contaimerInfo'>
              <p className='tituleBanner'>750<span>HP</span></p>
              <p id='infoBanner'>Caballos de fuerza</p>
            </div>
            <div className='contaimerInfo'>
              <p className='tituleBanner'>2.6<span>s</span></p>
              <p id='infoBanner'>De 0 a 100km/h</p>
            </div>
          </div>
        </div>

        {/* <img
          src="https://example.com/image1.jpg"
          alt="Imagen 1"
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        /> */}
      </div>
      <div className='div-banner1'>
      <div className='container-1'>
          <h2>E-tron</h2>
          <p id='idMarca'>Audi</p>
          <img src={banner2}/>
          <div className='bannerInfo'>
            <div className='contaimerInfo'>
              <p className='tituleBanner'>357<span>km</span></p>
              <p id='infoBanner'>Rango estimado</p>
            </div>
            <div className='contaimerInfo'>
              <p className='tituleBanner'>750<span>HP</span></p>
              <p id='infoBanner'>Caballos de fuerza</p>
            </div>
            <div className='contaimerInfo'>
              <p className='tituleBanner'>2.6<span>s</span></p>
              <p id='infoBanner'>De 0 a 100km/h</p>
            </div>
          </div>
      </div>
        {/* <img
          src="https://example.com/image2.jpg"
          alt="Imagen 2"
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        /> */}
      </div>
      {/* <div>
        <img
          src="https://example.com/image3.jpg"
          alt="Imagen 3"
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        />
      </div> */}
    </Carousel>
  );
};

export default FullScreenCarousel;
