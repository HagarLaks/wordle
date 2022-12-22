import './App.scss';
import {Header} from "./components/Header.js";
import {Game} from "./components/Game";
import { useRef, useEffect, createContext , useState} from 'react';
import { gameBoard } from './components/Word';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(gameBoard);
  
  return (
    <div className='App'>
      <Header/>
      <AppContext.Provider value={{board, setBoard}}>
        <Game/> 
      </AppContext.Provider>
      
    </div>
    
  );
}

export default App;
