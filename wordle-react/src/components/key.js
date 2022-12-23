import React, {useContext} from "react";
import { AppContext } from "../App";

export function Key({keyVal, bigKey}){
    const { board, setBoard, currentAttempt, setCurrentAttempt } =useContext(AppContext)
    const selectLetter = ()=>{
        if (keyVal === "Delete"){
                if (currentAttempt.letterPos > 0){
                    const newGameBoard = [...board]
                    newGameBoard[currentAttempt.attempt][currentAttempt.letterPos-1] = '';
                    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -= 1})
                    console.log(currentAttempt)

                }} else if (keyVal === "Enter"){
                    if (currentAttempt.letterPos  > 4){
                        setCurrentAttempt({attempt: currentAttempt.attempt +=1, letterPos: currentAttempt.letterPos = 0})
                        console.log(currentAttempt)
                    }
                    }  else {
            if (currentAttempt.letterPos > 4) {return
            } else {
                const newGameBoard = [...board]
                newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal
                setBoard(newGameBoard)
                setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})
                console.log(currentAttempt)     
            }
            
            
        }

        
        
        
    };
    
  

    return(
        <div className="key"  id={bigKey && "big"} onClick={selectLetter} >{keyVal}</div>
    )

}