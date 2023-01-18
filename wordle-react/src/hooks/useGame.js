import {useEffect, useState} from "react";
import { gameBoard, theWord , feedbackBoard} from "../components/Word";

export function useGame(){

    const [board, setBoard] = useState(gameBoard);
    const [ currentAttempt, setCurrentAttempt ] = useState({attempt:0, letterPos:0});
    const [guessFeedback, setGuessFeedback] = useState(feedbackBoard);
    const [success, setSeccess] = useState(false)
    const [fail, SetFail] = useState(false)

  
  
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
                            console.log(currentAttempt.attempt)
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
  
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    });



    const handleGuess = (rowNum)=>{
        const geussArray = feedbackBoard[rowNum]
        const recentGuesse = gameBoard[rowNum][0]+ gameBoard[rowNum][1]+gameBoard[rowNum][2]+gameBoard[rowNum][3]+gameBoard[rowNum][4]
        console.log(recentGuesse)
        for (let i = 0; i < 5;i+=1) {
           const indexToCompare = theWord.indexOf(gameBoard[rowNum][i])
           console.log(indexToCompare)
           if (indexToCompare === -1){
             geussArray[i] = "error"
           } else if (theWord[i] === gameBoard[rowNum][i]){
            geussArray[i] = "correct"
           } else {
            geussArray[i] = "almost"
           }
        }
        
        const newFeedback = [...guessFeedback]
        newFeedback[rowNum] = geussArray
        console.log(geussArray, rowNum)
        console.log("newFeedback", newFeedback)
        setGuessFeedback(newFeedback);
        setTimeout(() => {
          handleSuccessorFail(rowNum)
        }, 1000);
        

        }
   
        const handleSuccessorFail= (rowNum)=>{

          if ((theWord.join(""))===(gameBoard[rowNum].join(""))){

            setSeccess(true)
      }
        if ((currentAttempt.attempt===6)&&(theWord.join(""))!==(gameBoard[rowNum].join(""))){
          SetFail(true)
        }
    }
     
  
  
    return{
    success,
    fail,
    board,
    guessFeedback,
    currentAttempt,
    handleInput,
    handleKeyDown,
    handleGuess,
    handleSuccessorFail

  }  
}
    
