import {useContext} from "react"
import { AppContext } from "../App"

export function GuessLetter({current, letterPosision, attemptNum}){
        const {board} = useContext(AppContext);
        const letter = board[attemptNum][letterPosision];
        
        
        


    return(
        <div className={`letter ${current}`} >{letter}</div>

    )
}