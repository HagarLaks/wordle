import { createContext } from 'react';
import {Welcome} from './pages/Welcome'
import { Help } from './pages/Help';
import { Game } from "./components/Game";
import { useGame } from './hooks/useGame';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogOut } from './components/logOut';


export const AppContext = createContext(null);


function App() {
    const wordleApi = useGame();


  
  return (
    <AppContext.Provider value={wordleApi}>
    <div className='App'>
    
          
          <Router>
             
                  <nav>
                  
                    <ul>
                      
                        <li>
                           <Link className='Link outline-light' to='/'>Wordle</Link>
                        </li>
                       
                        
                        <li>
                          <Link className='Link' to='/game'><Help/></Link>
                        </li>
                        <li>
                          <Link className='Link' to='/'><LogOut/></Link>
                        </li>
                    </ul>                    
                          
                    </nav>
                 
              
             
              <Routes>
                  <Route path='/' element={<Welcome/>}/>

                  <Route path='/game' element={<Game/>}/>
                  
                

                 
                                        
                    
              </Routes>
           
          </Router>

      </div>
      </AppContext.Provider>

    
  );
}

export default App;
