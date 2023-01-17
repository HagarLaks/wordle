
import { Cell as Cell } from "./Cell";
import React, { useContext, useRef } from "react";
import { AppContext } from "../App";
import {Keyboard} from './Keyboard'
import {Help} from '../pages/Help'
import { gameBoard } from "./Word";
import { Rows } from "./Rows";
import SuccessDialog from "../pages/SuccessDialog";

 
export function Game(){
    const { success } = useContext(AppContext);
   
    return(
        
        <div className="game">
            <div className="board">
                {" "}
                {success?<SuccessDialog/> : <Rows/>}
                </div>
            <Keyboard/> 
        </div>
           
        
    )
}