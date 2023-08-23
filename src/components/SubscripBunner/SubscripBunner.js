import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/esm/Container'
import ModalWindow from '../ModalWindow/ModalWindow'
import { useSelector } from 'react-redux'
import { selectModalText } from '../../store/filmsReducer'

function SubscripBunner(props) {
  const [modalShow, setModalShow] = useState({ show: false, index: 0 })
  const modalText = useSelector(selectModalText)
  return (
    <Container className='fs-4 d-flex justify-content-center mt-4'>
      <Badge
        onClick={() => setModalShow({ show: true, index: 0 })}
        bg='secondary'
        className=' d-flex align-items-center me-5 justify-content-center'
        style={{ minWidth: '450px', cursor: 'pointer' }}
      >
        <Row>
          <img
            style={{ height: '32px' }}
            className='me-5'
            alt='lightning'
            src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg'
          />
        </Row>
        <Row>30 дней подписки за 1 ₽</Row>
      </Badge>

      <Badge
        onClick={() => setModalShow({ show: true, index: 1 })}
        bg='secondary'
        className='d-flex align-items-center me-5 justify-content-center'
        style={{ minWidth: '450px', cursor: 'pointer' }}
      >
        <Row>
          <img
            style={{ height: '32px' }}
            alt='gift'
            className='me-5'
            src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg'
          />
        </Row>
        <Row>Активировать сертификат</Row>
      </Badge>

      <ModalWindow modalText={modalText[modalShow.index]} show={modalShow.show} onHide={() => setModalShow({...modalShow, show:false})} />
    </Container>
  )
}

export default SubscripBunner
