import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function ModalWindow(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{props.modalText.heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <p> {props.modalText.centeredModal}</p>
        <p>
           
          <Button variant='success'>{props.modalText.modalBody}</Button>{' '}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalWindow
