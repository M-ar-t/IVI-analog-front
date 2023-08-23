import React, { useCallback, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/esm/CloseButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch } from 'react-redux'
import { postRating } from '../../store/filmsReducer'

function StarModalWindow({id,...props}) {
  const ratingNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [hoverBtn, setHoverBtn] = useState(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [clickBtn, setClickBtn] = useState(null)

  const dispatch = useDispatch()

  const processClick = (i) => {
    setIsDisabled(false)
    setClickBtn(i)
  }
  const processResultClick = () => {
    props.onHide()
    console.log(clickBtn);
    dispatch(postRating({id:id,rating:clickBtn}))
  }
            
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Body className='grid-example bg-dark rounded-2'>
        <CloseButton onClick={props.onHide} variant='white' style={{ position: 'absolute', right: '15px' }} />
        <Modal.Title id='contained-modal-title-vcenter' className='text-white bg-dark'>
          <h3>Ваша оценка</h3>
          <h6 className='text-white-50 mb-4'>Оценки улучшают рекомендации</h6>
        </Modal.Title>

       <Container className='p-1 bg-secondary mb-4 rounded-2'>
       <ButtonGroup className='me-2 ' aria-label='First group'>
          {ratingNum.map((item, i) => (
            <Button
              onClick={() => {
                processClick(item)
              }}
              onMouseEnter={() => setHoverBtn(i+1)}
              onMouseLeave={() => setHoverBtn(null)}
              variant={item ===hoverBtn? 'danger' : item ===clickBtn? 'dark' : 'secondary'}
              key={item}
              className='text-white fs-5 fw-bold px-3 rounded-2'
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
       </Container>

        <Button disabled={isDisabled} onClick={processResultClick} variant='danger'>
          Оценить
        </Button>
      </Modal.Body>
    </Modal>
  )
}
export default StarModalWindow
