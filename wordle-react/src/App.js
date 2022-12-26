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

  const handleInput = (inputFromKeyOrClick)=>{
    console.log('got to handleInput', inputFromKeyOrClick, currentAttempt)
    if (inputFromKeyOrClick === "Delete" || inputFromKeyOrClick==="BACKSPACE"){
        if (currentAttempt.letterPos > 0){
            
            const newGameBoard = [...board]
            newGameBoard[currentAttempt.attempt][currentAttempt.letterPos-1] = '';
            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -= 1})
            console.log(currentAttempt)
    }
} else if (inputFromKeyOrClick === "Enter"){
        

        if (currentAttempt.letterPos  > 4){
            setCurrentAttempt({attempt: currentAttempt.attempt +=1, letterPos: currentAttempt.letterPos = 0})
            console.log(currentAttempt)
        }
    } else {
                console.log('should print')
                if (currentAttempt.letterPos > 4) {return
                    } else {
                        console.log('got to last else')
                        const newGameBoard = [...board]
                        newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = inputFromKeyOrClick
                        setBoard(newGameBoard)
                        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})
                        console.log(currentAttempt)     
                    }
                            }
}

  const handleKeyDown = (event) => {
    console.log(event.key.toUpperCase());

  }

  // Enable the keydown event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
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
