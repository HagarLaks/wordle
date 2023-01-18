import React, {useContext} from "react";

import { AppContext } from "../App";

export function Key({color, keyVal, bigKey}){
        
    const { handleInput } = useContext(AppContext);
    const selectLetter = ()=>{
        
        console.log(`handleInput with ${keyVal}`)
        if (keyVal !== 'Enter'){
            handleInput(keyVal);
            
        }
    }
    


    return(
        <div className={`key ${color}`}  id={bigKey && "big"} onClick={selectLetter} >{keyVal}</div>
    )

}