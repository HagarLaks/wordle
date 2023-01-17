import React , {useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../App';
import { theWord } from '../components/Word';

export default function SuccessDialog() {
  const { currentAttempt } = useContext(AppContext);
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Succuss!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h1>Well done!</h1>
          <p>you found the word of the day in {currentAttempt.attempt} attempts! </p> 
          <p> the word is {theWord} </p>
        </Modal.Body>

        {/* <Modal.Footer> */}
          {/* <Button variant="secondary">Close</Button> */}
          {/* <Button variant="primary">Save changes</Button> */}
        {/* </Modal.Footer> */}
      </Modal.Dialog>
    </div>
  )
}
