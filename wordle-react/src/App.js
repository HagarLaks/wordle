import { createContext } from 'react';
import {Welcome} from './pages/Welcome'
import { Game } from "./components/Game";
import { useGame } from './hooks/useGame';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useModal, handleShow } from './hooks/useModal';
import {Help} from './pages/Help'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export const AppContext = createContext();

function App({handleShow}) {
    const wordleApi = useGame();


  
  return (
    <div className='App'>
    <AppContext.Provider value={wordleApi}>
          
          <Router>
             
                  <nav>
                  
                    <ul>
                      
                        <li>
                           <Link className='Link' to='/'>Wordle</Link>
                        </li>
                        {/* <li>
                          <Link className='Link' to='/'>Welcome</Link>
                        </li> */}
                        
                        <li>
                          <Link className='Link' to='/help'>Help</Link>
                        </li>
                    </ul>                    
                          
                    </nav>
                 
              
             
              <Routes>
                  <Route path='/' element={<Welcome/>}/>

                  <Route path='/game' element={<Game/>}/>

                 
                                        
                    
              </Routes>
           
          </Router>

      </AppContext.Provider>
      </div>
    
  );
}

export default App;
