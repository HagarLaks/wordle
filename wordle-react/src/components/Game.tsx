
import  { useContext } from "react";
import { AppContext } from "../App";
import {Keyboard} from './Keyboard'
import { Rows } from "./Rows";
import SuccessDialog from "../pages/SuccessDialog";
import FailDialog from "../pages/FailDialog";
import { useGameType } from "../hooks/useGame";
 
export function Game(){
    const { success, fail } = useContext<useGameType>(AppContext);
   
    return(
        
        <div className="game">
            <div className="board">
                {" "}
                {success?<SuccessDialog/> : fail? <FailDialog/> :<Rows/>}
                </div>
            <Keyboard/> 
        </div>
           
        
    )
}