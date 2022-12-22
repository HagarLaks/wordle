
import { GuessLetter } from "./GuesseLetter";
import React, { useContext } from "react";
import { AppContext } from "../App";


 
export function Game(){
    const {board, currentAttempt} = useContext(AppContext);
    

        
        
    return(
        
        
            <div className="board">
                {" "}
                
                <div className="row">
                    <GuessLetter current={(currentAttempt.attempt===0 && currentAttempt.letterPos===0)? 'curfocus':''} letterPosision={0} attemptNum={0}/>
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
                    <GuessLetter letterPosision={0} attemptNum={5}/>
                    <GuessLetter letterPosision={1} attemptNum={5}/>
                    <GuessLetter letterPosision={2} attemptNum={5}/>
                    <GuessLetter letterPosision={3} attemptNum={5}/>
                    <GuessLetter letterPosision={4} attemptNum={5}/>
                </div>
            </div>
                
           
        
    )
}