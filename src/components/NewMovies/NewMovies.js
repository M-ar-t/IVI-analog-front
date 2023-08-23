import React from 'react'
import { useSelector } from 'react-redux'
import { NewMoviesItemChange } from '../NewMoviesItem/NewMoviesItem'
import { selectAllFilms, selectNewMovies } from '../../store/filmsReducer'
import Container from 'react-bootstrap/esm/Container'
import { IoIosArrowForward } from 'react-icons/io'
// import filmController from '../../../../server/controllers/filmController'

function NewMovies(props) {
  const newMovies = useSelector(selectNewMovies)
  return (
    <Container className='mt-5 pt-3 text-bg-dark'>
      <h4 className='mb-4'>
        Фильмы-новинки
        <IoIosArrowForward color='white' size={25} />
      </h4>
      <Container className='d-flex gap-4 pb-5'>
        {newMovies.map((item) => (
          <NewMoviesItemChange ratingCount = {item.ratingCount} ratingSum={item.ratingSum} key={item.id} img={item.img} id={item.id} name={item.name} price={item.price} />
        ))}
      </Container>
    </Container>
  )
}

export default NewMovies
