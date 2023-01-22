import { gameBoard , feedbackBoard} from "./Word";
// import { useContext } from "react";
// import { AppContext } from "../App";
import { useGameType } from "../hooks/useGame";
import { letterProps } from "./Rows";




export function Cell({letterPosision, attemptNum}){


        const letter = gameBoard[attemptNum][letterPosision];
       
        const color = feedbackBoard[attemptNum][letterPosision]

        // const { currentAttempt} = useContext(AppContext);

        // const feedbackWithLetter = {theLetter:letter, theColor: color}

    return(
       
        <div className={`letter ${color} `}>{letter}</div>

    )
}