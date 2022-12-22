import './App.scss';
import {Header} from "./components/Header.js";
import {Game} from "./components/Game";
import { useRef, useEffect, createContext , useState} from 'react';
import { gameBoard } from './components/Word';
import { Keboard } from './components/Keyboard';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(gameBoard);
  const [ currentAttempt, setCurrentAttempt ] = useState({attempt:0, letterPos:0});
  
  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
      </nav>
      
      <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt}}>
        <div className="game">
          <Game /> 
          <Keboard/>
        </div>
      </AppContext.Provider>
      
    </div>
    
  );
}

export default App;
