import React, {useContext} from "react";
import { AppContext } from "../App";

export function Key({keyVal, bigKey}){
    const { board, setBoard, currentAttempt, setCurrentAttempt } =useContext(AppContext);
    const selectLetter = ()=>{
        console.log(`handleInput with ${keyVal}`)
        handleInput(keyVal);
    }
    
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
                            newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal
                            setBoard(newGameBoard)
                            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})
                            console.log(currentAttempt)     
                        }
                                }
    }
    // const selectLetter = ()=>{
    //     if (keyVal === "Delete"){
    //             if (currentAttempt.letterPos > 0){
    //                 const newGameBoard = [...board]
    //                 newGameBoard[currentAttempt.attempt][currentAttempt.letterPos-1] = '';
    //                 setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -= 1})
    //                 console.log(currentAttempt)

    //             }} else if (keyVal === "Enter"){
    //                 if (currentAttempt.letterPos  > 4){
    //                     setCurrentAttempt({attempt: currentAttempt.attempt +=1, letterPos: currentAttempt.letterPos = 0})
    //                     console.log(currentAttempt)
    //                 }
    //                 }  else {
    //         if (currentAttempt.letterPos > 4) {return
    //         } else {
    //             const newGameBoard = [...board]
    //             newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal
    //             setBoard(newGameBoard)
    //             setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})
    //             console.log(currentAttempt)     
    //         }
            
             
    // };
    
// }

    return(
        <div className="key"  id={bigKey && "big"} onClick={selectLetter} >{keyVal}</div>
    )

}