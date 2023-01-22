import React, { useState, useContext , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../App';
import { useGameType } from '../hooks/useGame';

export function SignInModal() {
const {setUser, user, setUserSubmitted} = useContext<useGameType>(AppContext)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

 

let input = "";
const handleInputUser = (e) =>{
  input = e.target.value;


}
const handleUserSubmit = ()=>{
  setUser(input);
  setUserSubmitted(true);
    handleClose();
  }


  return (
    <>
     <Button variant="light" onClick={handleShow}>
            Sign In
          </Button>
          <Modal className='modal' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              For saving your scores and statistics please sign in
              <form method="post" >
                    <ul>
                      <li>
                        <label htmlFor="name">User name:</label>
                        <input type="text" id="name" name="user_name" onChange={handleInputUser}/>
                      </li>
                      <br/>
                      <div className="button">
                    <button type="submit" onClick={handleUserSubmit}>Sign in</button>
                  </div>
                    </ul>
            </form>
              </Modal.Body>
          
          </Modal>
      
      
      
    </>
  );
}