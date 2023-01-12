
import Button from 'react-bootstrap/Button';
import { Help } from '../pages/Help';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function NavBar({handleShow}) {
  

  return (
    <>
    <Router>
        <nav>
        <ul>
          
            <li>
              <Link className='Link' id='wordle' to='/game'>Wordle</Link>
            </li>
            {/* <li>
              <Link className='Link' to='/'>Welcome</Link>
            </li> */}
            
            <li>
              <Link>
              <Button variant="primary" onClick={handleShow}>
                <Help/>
                </Button>

                </Link>
            </li>
        </ul>                    
              
      </nav>
      <Routes>
      <Route path='/' element={<Welcome/>}/>

      <Route path='/game' element={<Game/>}/>
                            
        
    </Routes>
    </Router>
</>

  )
}