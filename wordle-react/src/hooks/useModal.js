import React, {useState} from 'react'

export function useModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return {
            show,
            setShow,
            handleClose,
            handleShow
  }
    
  
}
