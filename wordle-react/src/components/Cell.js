import {useContext} from "react"
import { gameBoard , feedbackBoard} from "./Word";


export function Cell({letterPosision, attemptNum, }){
        // const {board} = useContext(AppContext);
        const letter = gameBoard[attemptNum][letterPosision];
        
        // const { currentAttempt} = useContext(AppContext);

        
        


    return(
       
        <div className={`letter ` }>{letter}</div>

    )
}