import ProgressBar from 'react-bootstrap/ProgressBar'
import { PiBookmarkSimpleBold } from 'react-icons/pi'
import { FaRegStar } from 'react-icons/fa'
import { useState } from 'react'
import StarModalWindow from './StarModalWindow'


export default function NewMoviesItemFocus({id, img, rating }) {
    const [modalShow, setModalShow] = useState(false)

    const int = String(rating).replace('.', ',').slice(0, 2)
    const remainder = String(rating).replace('.', ',').slice(2, 3)
  
    return (
      <div
        style={{
          position: 'relative',
          width: '153px',
          cursor: 'pointer',
          transform: 'scale(1.02)',
        }}
      >
        <img
          alt=''
          src={img}
          className='mb-3'
          style={{
            opacity: '0.4',
            width: '153px',
            height: '235px',
            objectFit: 'cover',
          }}
        />
        <div className='fs-4 fw-semibold' style={{ position: 'absolute', color: 'white', top: '30%', left: '20px' }}>
          {int}
          <span className='fs-5'>{remainder}</span>
        </div>
        <div style={{ position: 'absolute', color: 'lightgray', top: '41%', left: '20px', fontSize: '12px' }}>сюжет</div>
  
        <ProgressBar
          style={{ height: '5px', width: '120px', position: 'absolute', top: '50%', left: '20px' }}
          variant='danger'
          now={Number(String(rating)[0]) * 10}
        />
  
        <PiBookmarkSimpleBold title ='Смотреть позже' style={{ position: 'absolute', top:'20px', right:'15px',transform:'scale(1.6)'}} />
        <FaRegStar  onClick={() => setModalShow(true)}
        title ='Уже смотрел, оценить'  style={{ position: 'absolute', top:'60px', right:'15px', transform:'scale(1.6)' }}/>
      
      <StarModalWindow id={id} show={modalShow} onHide={() => setModalShow(false)} />

      </div>
    )
  }