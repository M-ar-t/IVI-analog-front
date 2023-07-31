import React from 'react';
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";

function Carousel(props) {

  const srcImg =[
    'https://thumbs.dfs.ivi.ru/storage33/contents/8/b/9514da24aeab845a293bcae18f55a7.jpg/1216x524/?q=85',
    'https://thumbs.dfs.ivi.ru/storage28/contents/2/6/e26b6342da5169c4af338ec72a097a.jpg/1216x524/?q=85',
    'https://thumbs.dfs.ivi.ru/storage2/contents/7/7/9f2d667bf7a91a2bdb5caedd0a97a0.jpg/1216x524/?q=85',
    'https://thumbs.dfs.ivi.ru/storage33/contents/f/a/7dd2e7f8b299721651cdb4773edf66.jpg/1216x524/?q=85'
  ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true,

        centerMode: true,
        centerPadding: '100px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
            breakpoint: 480,
            settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
      };
    return (
        <Slider {...settings} >
          <div>
            <img alt  ='' src={srcImg[0]}/>
          </div>
          <div>
            <img alt  ='' src={srcImg[1]}/>
          </div>
          <div>
            <img alt  ='' src={srcImg[2]}/>
          </div>
          <div>
            <img alt  ='' src={srcImg[3]}/>
          </div>
          
        </Slider>
    );
}

export default Carousel;