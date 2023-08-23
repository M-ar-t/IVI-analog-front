import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch, useSelector } from 'react-redux'
import { findTopFilms, selectTopFilms } from '../../store/filmsReducer'
import BestWeekItem from '../BestWeekItem/BestWeekItem'

function BestWeek(props) {
  const dispatch = useDispatch()
  // console.log(topFilms);

  useEffect(() => {
    dispatch(findTopFilms())
  }, [dispatch])
  const topFilms = useSelector(selectTopFilms)

  return (
    <Container className='py-5'>
      <h4 className='mb-4'>
        <img
          className='me-3'
          style={{ height: '28px', width: '116px' }}
          alt='top10'
          src='https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg'
        />
        <span className='text-white'>за неделю</span>
      </h4>
     <Container className='d-flex gap-4 pb-5'>
     {topFilms.map((item, index) => (
        <BestWeekItem index={index} key={item.id} img={item.img} name={item.name} />
      ))}
     </Container>
    </Container>
  )
}

export default BestWeek
