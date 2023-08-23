import React, { useEffect } from 'react'
import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms, selectAllFilms } from '../../store/filmsReducer'

function Carousel(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFilms())
  }, [dispatch])

  const films = useSelector(selectAllFilms)

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: '90px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {films?.map((item) => (
        <div key={item.name}>
          <img alt={item.name} src={item.img} />
        </div>
      ))}
    </Slider>
  )
}

export default Carousel
