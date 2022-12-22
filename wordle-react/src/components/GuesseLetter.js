import {useContext} from "react"
import { AppContext } from "../App"

export function GuessLetter({current, letterPosision, attemptNum}){
        const {board, currentAttempt, setCurrentAttempt} = useContext(AppContext);
        const letter = board[attemptNum][letterPosision];

      
        const handleKeyDown = (event)=>{
                console.log(event)
        }


    return(
        <div className={`letter ${current}` } >{letter}</div>

    )
}