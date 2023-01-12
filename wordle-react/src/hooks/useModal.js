import React, {useState} from 'react'

export function useModal() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  return {
            show,
            setShow,
            handleClose,
            handleShow
  }
    
  
}
