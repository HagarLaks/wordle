import { createContext, useEffect, useState } from 'react';
import './App.scss';
import {Header} from './components/Header'
import { Game } from "./components/Game";
import { Keboard } from './components/Keyboard';
import { gameBoard } from './components/Word';
import { handleGuess } from './components/checkRow';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(gameBoard);
  const [ currentAttempt, setCurrentAttempt ] = useState({attempt:0, letterPos:0});
  const [isFocused, setFocus] = useState("false");  
  
  const handleToggle = () => {
    setFocus(!isFocused);
  };

  const handleInput = (inputFromKeyOrClick)=>{

    if (inputFromKeyOrClick === "Delete" || inputFromKeyOrClick==="BACKSPACE"){
        if (currentAttempt.letterPos > 0){
            console.log('backspace or delete')
            const newGameBoard = [...board]
            newGameBoard[currentAttempt.attempt][currentAttempt.letterPos-1] = '';
            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -= 1})
            console.log('currentAttempt', currentAttempt)
        }
    } else {
            const newGameBoard = [...board]

            newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = inputFromKeyOrClick
            setBoard(newGameBoard)

            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})

            if (currentAttempt.letterPos === 5) {
                          handleGuess(currentAttempt.attempt)
                          setCurrentAttempt({attempt: currentAttempt.attempt +=1, letterPos: currentAttempt.letterPos = 0})
                          console.log(currentAttempt)
              
                            }
}
  }

  const handleKeyDown = (event) => {
    
    if ((event.key.toLowerCase() >= 'a' && event.key.toLowerCase() <='z'&& event.key.length===1)||event.key==='Backspace'){
      handleInput(event.key.toUpperCase())
    }
    

  }

  // Enable the keydown event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  return (
    <div className='App'>
      <Header/>
      <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt, handleInput, handleGuess, handleToggle}}>
        <div className="game">
          <Game /> 
          <Keboard/>
        </div>
      </AppContext.Provider>
      
    </div>
    
  );
}

export default App;
