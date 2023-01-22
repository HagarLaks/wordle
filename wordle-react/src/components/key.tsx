import {useContext} from "react";
import { AppContext } from "../App";
import { allKeys } from "./Word";
import { useGameType } from "../hooks/useGame";
import { IKeyboard } from "./Keyboard";



export function Key({ keyVal, bigKey}:IKeyboard){
        
    const { handleInput } = useContext<useGameType>(AppContext);
    const selectLetter = ()=>{
        
        if (keyVal !== 'Enter'){
        handleInput(keyVal);
            
        }
    }
    
    const color = allKeys[keyVal]


    return(
        <div className={`key ${color} ${bigKey && "big"}`}  onClick={selectLetter} >{keyVal}</div>
    )

}