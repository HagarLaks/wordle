import React, {useContext} from "react";
import { AppContext } from "../App";

export function Key({keyVal, bigKey}){
    const { board, setBoard, currentAttempt, setCurrentAttempt , handleInput} =useContext(AppContext);
    const selectLetter = ()=>{
        console.log(`handleInput with ${keyVal}`)
        handleInput(keyVal);
    }


    return(
        <div className="key"  id={bigKey && "big"} onClick={selectLetter} >{keyVal}</div>
    )

}