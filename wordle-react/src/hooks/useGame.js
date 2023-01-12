import {useEffect, useState} from "react";
import { gameBoard, theWord } from "../components/Word";

export function useGame(){

    const [board, setBoard] = useState(gameBoard);
    const [ currentAttempt, setCurrentAttempt ] = useState({attempt:0, letterPos:0});
    const [guessFeedback, setguessFeedback] = useState([]);
    
  
  
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

    const handleGuess = (rowNum)=>{
        const geusseArray = ["","","","",""]
        const recentGuesse = gameBoard[rowNum][0]+ gameBoard[rowNum][1]+gameBoard[rowNum][2]+gameBoard[rowNum][3]+gameBoard[rowNum][4]
        console.log(recentGuesse)
        for (let i = 0; i < 5;i++) {
           const indexToCompare = theWord.indexOf(gameBoard[rowNum][i])
           console.log(indexToCompare)
           if (indexToCompare === -1){
             geusseArray[i] = "error"
           } else if (indexToCompare === i){
            geusseArray[i] = "correct"
           } else {
            geusseArray[i] = "almost"
           }
        }
        console.log(geusseArray)
        setguessFeedback(geusseArray);
        console.log(guessFeedback)



        }
    
  
  
    return{
    board,
    guessFeedback,
    currentAttempt,
    handleInput,
    handleKeyDown,
    handleGuess

  }  
}
    
