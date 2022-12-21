import { useGame } from "../hooks/useGame";
import { LetterContext } from "../providers/LetterContext";
import { Keboard } from "./Keyboard";
import { Word } from "./Word";


 
export function Game(){

    const gamefunction = useGame();

    return(
        <LetterContext.provider value={gamefunction}>
        <Word/>
        <Word/>
        <Word/>
        <Word/>
        <Word/>
        <Keboard/>   
        </LetterContext.provider>
        
    )
}