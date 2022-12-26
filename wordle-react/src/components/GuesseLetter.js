import {useContext, useRef} from "react"
import { AppContext } from "../App"

export function GuessLetter({current, letterPosision, attemptNum}){
        const {board, setBoard, currentAttempt, setCurrentAttempt} = useContext(AppContext);
        const letter = board[attemptNum][letterPosision];
        const chars = /[a-z]/g;
        // const handleKeyDown = window.addEventListener("keydown", (event)=>{
        //         console.log(event);
        //         if (event.key.match(chars)){
        //             if (currentAttempt.letterPos > 4) return
        //                 const newGameBoard = [...board]
        //                 newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = event.key.toUpperCase
        //                 setBoard(newGameBoard)
        //                 setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})
        //                 letter = board[attemptNum][letterPosision];

        //                 console.log(currentAttempt)
        //         }
        //         window.removeEventListener("keydown",event);
        //     })



        // const keyPressed = window.addEventListener("keydown", (event)=>{
        //     if (event.key === "Backspace"){
        //         const newGameBoard = [...board]
        //         newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = '';
        //         setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -= 1})
        //         console.log(currentAttempt)
    
        //     }else if (event.key === "Enter" && currentAttempt.letterPos  > 4){
        //         setCurrentAttempt({attempt: currentAttempt.attempt +=1, letterPos: currentAttempt.letterPos = 0})
        //         console.log(currentAttempt)
    
        //     } else if (event.key ==={
        //         if (currentAttempt.letterPos > 4) return
        //         const newGameBoard = [...board]
        //         newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = event.key
        //         setBoard(newGameBoard)
        //         setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})
        //         console.log(currentAttempt)
        //     }   
            

        // })

        


    return(
        <div className={`letter ${current}`} >{letter}</div>

    )
}