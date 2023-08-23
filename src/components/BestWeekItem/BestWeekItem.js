import React from 'react'
import { useSelector } from 'react-redux'
import { takePlaceNumber } from '../../store/filmsReducer'
import s from './BestWeekItem.module.css'

function BestWeekItem({ img, name, index }) {
  const placeNumber = useSelector(takePlaceNumber)
  return (
    <div className={s.hover} style={{ position: 'relative', height: '457px', width: '224px' }}>
      <img style={{ height: '457px', width: '224px', objectFit: 'cover' }} alt='' src={img} />
      <div
        className='text-uppercase  p-2 text-white-50'
        style={{
          position: 'absolute',
          letterSpacing: '3px',
          fontSize: '14px',
        }}
      >
        {name}
      </div>
      <img
        style={{ position: 'absolute', height: '66px', zIndex: '1', bottom: '-115px', left: '0px' }}
        alt=''
        src={placeNumber[index]}
      />
    </div>
  )
}

export default BestWeekItem
