
import Modal from 'react-bootstrap/Modal';
import { theWord } from '../components/Word';

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
