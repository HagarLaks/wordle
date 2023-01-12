import {useContext} from "react"
import { AppContext } from "../App"

export function GuessLetter({current, letterPosision, attemptNum}){
        const {board} = useContext(AppContext);
        const letter = board[attemptNum][letterPosision];
        const {guessFeedback} = useContext(AppContext)
        const toColor = guessFeedback[letterPosision]
        
        
        


    return(
       
        <div className={`letter ${current} ${toColor}`} >{letter}</div>

    )
}