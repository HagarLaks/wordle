import { gameBoard , feedbackBoard} from "./Word";
import { letterProps } from "../types/GameTypes";



export function Cell({letterPosition, attemptNum}:letterProps){


        const letter = gameBoard[attemptNum][letterPosition];
       
        const color = feedbackBoard[attemptNum][letterPosition]


    return(
       
        <div className={`letter ${color} `}>{letter}</div>

    )
}