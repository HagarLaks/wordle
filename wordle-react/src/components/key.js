import React, {useContext} from "react";
import { AppContext } from "../App";

export function Key({keyVal, bigKey}){
    const { board, setBoard, currentAttempt, setCurrentAttempt } =useContext(AppContext)
    const selectLetter = ()=>{
        if (keyVal === "Delete"){
            const newGameBoard = [...board]
            newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = '';
            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -= 1})
            console.log(currentAttempt)

        }else if (keyVal === "Enter" && currentAttempt.letterPos  > 4){
            setCurrentAttempt({attempt: currentAttempt.attempt +=1, letterPos: currentAttempt.letterPos = 0})
            console.log(currentAttempt)

        } else {
            if (currentAttempt.letterPos > 4) return
            const newGameBoard = [...board]
            newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal
            setBoard(newGameBoard)
            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})
            console.log(currentAttempt)
            
        }

        
        
        
    };
    
  

    return(
        <div className="key"  id={bigKey && "big"} onClick={selectLetter} >{keyVal}</div>
    )

}