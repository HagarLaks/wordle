import React, {useContext} from "react";
import { AppContext } from "../App";

export function Key({keyVal, bigKey}){
    const { board, setBoard, currentAttempt, setCurrentAttempt } =useContext(AppContext)
    const selectLetter = ()=>{
        const newGameBoard = [...board]
        newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal
        setBoard(newGameBoard)
        if (currentAttempt.letterPos < 4){
            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})
            console.log(currentAttempt)
        } else if (currentAttempt.attempt<6){
            console.log("Word typed")
            setCurrentAttempt ({...currentAttempt, attempt: currentAttempt.attempt+1, letterPos: 0})
        } else {
            console.log("Done guessing")
        }
        
    };
    
  

    return(
        <div className="key"  id={bigKey && "big"} onClick={selectLetter} >{keyVal}</div>
    )

}