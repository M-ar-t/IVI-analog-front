import React, { useState } from 'react'
import NewMoviesItemFocus from './NewMoviesItemFocus'

export const NewMoviesItemChange = ({ id, rating, img, price, name }) => {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <div onMouseEnter={() => setIsFocus(true)} onMouseLeave={() => setIsFocus(false)}>
      {isFocus ? (
        <NewMoviesItemFocus id={id} rating={rating} img={img} price={price} name={name} setIsFocus={setIsFocus} />
      ) : (
        <div style={{ width: '153px' }}>
          <img alt='' src={img} className='mb-3' style={{ width: '153px', height: '235px', objectFit: 'cover' }} />
        </div>
      )}

      <div>{name.length > 18 ? name.substring(0, 17) + '...' : name}</div>
      <div style={{ fontSize: '12px' }}>{price === 0 ? <p className='text-danger'>Подписка</p> : 'Покупка'}</div>
    </div>
  )
}
