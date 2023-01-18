import { Key } from "./key";
import React from "react";
import { allKeys} from "./Word";


export function Keyboard(){

   const keys1 = allKeys[0]
   const keys2 = allKeys[1]
   const keys3 = allKeys[2]
   
    return(
        <div className="keyboard">

             <div className="line1">{keys1.map((key)=>{
                return <Key  key={key} keyVal={key}/>;
             })} 
             </div>
             <div className="line2">{keys2.map((key)=>{
                return  <Key key={key} keyVal={key}/>;
             })} 
             </div>
             <div className="line3">
             <Key keyVal={"Enter"} bigKey/>
             {keys3.map((key)=>{
                return  <Key key={key} keyVal={key}/>;
             })} 
              <Key keyVal={"Delete"} bigKey/>
             </div>
            
        </div>
    )
}