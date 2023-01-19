import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function Help() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Help
      </Button>
      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to play?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
            </p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back to game
          </Button>
      
        </Modal.Footer>
      </Modal>
    </>
  );
}

