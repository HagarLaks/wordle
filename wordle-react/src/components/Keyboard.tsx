import { Key } from "./key";
import React from "react";

export interface IKeyboard {
   key?: string;
   keyVal?: string;
   bigKey? : boolean;
   children?: React.ReactNode; 
 }

export function Keyboard(){

const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
 const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
 const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    return(
        <div className="keyboard">

             <div className="line1">{keys1.map((key)=>{
                return <Key key={key} keyVal={key} bigKey={false}/>;
             })} 
             </div>
             <div className="line2">{keys2.map((key)=>{
                return  <Key key={key} keyVal={key} bigKey={false}/>;
             })} 
             </div>
             <div className="line3">
             <Key keyVal={"Enter"} bigKey/>
             {keys3.map((key)=>{
                return  <Key key={key} keyVal={key} bigKey={false}/>;
             })} 
              <Key keyVal={"Delete"} bigKey/>
             </div>
            
        </div>
    )
}