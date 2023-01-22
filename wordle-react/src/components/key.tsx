import {useContext} from "react";
import { AppContext } from "../App";
// import { IUseGame } from "../types/GameTypes";
import { allKeys } from "./Word";
import { useGameType } from "../hooks/useGame";



export function Key({ keyVal, bigKey}){
        
    const { handleInput } = useContext<useGameType>(AppContext);
    const selectLetter = ()=>{
        
        console.log(`handleInput with ${keyVal}`)
        if (keyVal !== 'Enter'){
            handleInput(keyVal);
            
        }
    }
    
    const color = allKeys[keyVal]


    return(
        <div className={`key ${color}`}  id={bigKey && "big"} onClick={selectLetter} >{keyVal}</div>
    )

}