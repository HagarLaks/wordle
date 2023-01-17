import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export function SignInModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Sign In
      </Button>
      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          For saving your scores and statistics please sign in
          <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Name" required />
        <Form.Text className="text-muted">
          Enter your name
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleClose}>
        Sign In
      </Button>
    </Form>
          </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            sign In
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
}