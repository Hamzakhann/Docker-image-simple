import React from 'react';
import './partners.css'
import Slider from "react-slick";
const Partners = () =>{
  const settings = {
    arrows:false,
    centerMode: true,
    autoplaySpeed:5000,
    speed: 500,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
        <div className='container-fluid partner-background ' >
            <Slider {...settings}>
          <div>
              <img src='https://www.solodev.com/assets/carousel/image4.png' className='img img-fluid' />
          </div>
          <div>
          <img src='https://www.solodev.com/assets/carousel/image3.png' className='img img-fluid' />
          </div>
          <div>
          <img src='https://www.solodev.com/assets/carousel/image2.png' className='img img-fluid' />
          </div>
          <div>
          <img src='https://www.solodev.com/assets/carousel/image5.png' className='img img-fluid' />
          </div>
          <div>
          <img src='https://www.solodev.com/assets/carousel/image6.png' className='img img-fluid' />
          </div>
          <div>
          <img src='https://www.solodev.com/assets/carousel/image7.png' className='img img-fluid' />
          </div>
          <div>
          <img src='https://www.solodev.com/assets/carousel/image8.png' className='img img-fluid' />
          </div>

        </Slider>
        </div>
    )
}

export default Partners;