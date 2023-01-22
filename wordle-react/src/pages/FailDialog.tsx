import React , {useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../App';
import { theWord } from '../components/Word';
import { useGameType } from '../hooks/useGame';

export default function FailDialog() {
  


  return (
    <div>
       <>
      
       <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Fail</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You didn't find the word. Try next Time</p>
          <p> the word is {theWord} </p>
        </Modal.Body>

      </Modal.Dialog>
    </div>
    </>
    </div>
  )
}
