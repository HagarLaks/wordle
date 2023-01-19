import React, {useContext} from "react";
import { AppContext } from "../App";
import { allKeys } from "./Word";



export function Key({ keyVal, bigKey}){
        
    const { handleInput } = useContext(AppContext);
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