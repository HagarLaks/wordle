
import { Keboard } from "./Keyboard";
import { GuessLetter } from "./GuesseLetter";
import { useState, useContext } from "react";
import { AppContext } from "../App";


 
export function Game(){
    const {board} = useContext(AppContext);

        
        
    return(
        
           
            <div className="board">
                
                <div className="row">
                    <GuessLetter letterPosision={0} attemptNum={0}/>
                    <GuessLetter letterPosision={1} attemptNum={0}/>
                    <GuessLetter letterPosision={2} attemptNum={0}/>
                    <GuessLetter letterPosision={3} attemptNum={0}/>
                    <GuessLetter letterPosision={4} attemptNum={0}/>
                </div>
                <div className="row">
                    <GuessLetter letterPosision={0} attemptNum={1}/>
                    <GuessLetter letterPosision={1} attemptNum={1}/>
                    <GuessLetter letterPosision={2} attemptNum={1}/>
                    <GuessLetter letterPosision={3} attemptNum={1}/>
                    <GuessLetter letterPosision={4} attemptNum={1}/>
                </div>
                <div className="row">
                    <GuessLetter letterPosision={0} attemptNum={2}/>
                    <GuessLetter letterPosision={1} attemptNum={2}/>
                    <GuessLetter letterPosision={2} attemptNum={2}/>
                    <GuessLetter letterPosision={3} attemptNum={2}/>
                    <GuessLetter letterPosision={4} attemptNum={2}/>
                </div>
                <div className="row">
                    <GuessLetter letterPosision={0} attemptNum={3}/>
                    <GuessLetter letterPosision={1} attemptNum={3}/>
                    <GuessLetter letterPosision={2} attemptNum={3}/>
                    <GuessLetter letterPosision={3} attemptNum={3}/>
                    <GuessLetter letterPosision={4} attemptNum={3}/>
                </div>
                <div className="row">
                    <GuessLetter letterPosision={0} attemptNum={4}/>
                    <GuessLetter letterPosision={1} attemptNum={4}/>
                    <GuessLetter letterPosision={2} attemptNum={4}/>
                    <GuessLetter letterPosision={3} attemptNum={4}/>
                    <GuessLetter letterPosision={4} attemptNum={4}/>
                </div>
                <div className="row">
                    <GuessLetter letterPosision={0} attemptNum={4}/>
                    <GuessLetter letterPosision={1} attemptNum={4}/>
                    <GuessLetter letterPosision={2} attemptNum={4}/>
                    <GuessLetter letterPosision={3} attemptNum={4}/>
                    <GuessLetter letterPosision={4} attemptNum={4}/>
                </div>
                <Keboard/>
            </div>
                
           
        
    )
}