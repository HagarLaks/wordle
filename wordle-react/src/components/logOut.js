import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';

import { AppContext } from '../App';
import { SignInModal } from '../pages/SignInModal';


export function LogOut() {
const {setUser, user, userSubmitted,setUserSubmitted} = useContext(AppContext)
const handleLogOut = ()=>{
  console.log("logging out")
  setUser(null)
  setUserSubmitted(false)
  localStorage.clear()
}
  

  return (
    <>
     {((userSubmitted===false)&&(user===null))? <SignInModal/> : <Button variant="light" onClick={handleLogOut}>
            Log Out
          </Button>}
     </>
      
      
  )  
}