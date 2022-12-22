
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
                    <GuessLetter current={(currentAttempt.attempt===0 && currentAttempt.letterPos===1)? 'curfocus':''} letterPosision={1} attemptNum={0}/>
                    <GuessLetter current={(currentAttempt.attempt===0 && currentAttempt.letterPos===2)? 'curfocus':''} letterPosision={2} attemptNum={0}/>
                    <GuessLetter current={(currentAttempt.attempt===0 && currentAttempt.letterPos===3)? 'curfocus':''} letterPosision={3} attemptNum={0}/>
                    <GuessLetter current={(currentAttempt.attempt===0 && currentAttempt.letterPos===4)? 'curfocus':''} letterPosision={4} attemptNum={0}/>
                </div>
                <div className="row">
                    <GuessLetter letterPosision={0} attemptNum={1}/>
                    <GuessLetter current={(currentAttempt.attempt===1 && currentAttempt.letterPos===1)? 'curfocus':''} letterPosision={1} attemptNum={1}/>
                    <GuessLetter current={(currentAttempt.attempt===1 && currentAttempt.letterPos===2)? 'curfocus':''} letterPosision={2} attemptNum={1}/>
                    <GuessLetter current={(currentAttempt.attempt===1 && currentAttempt.letterPos===3)? 'curfocus':''} letterPosision={3} attemptNum={1}/>
                    <GuessLetter current={(currentAttempt.attempt===1 && currentAttempt.letterPos===4)? 'curfocus':''} letterPosision={4} attemptNum={1}/>
                </div>
                <div className="row">
                    <GuessLetter current={(currentAttempt.attempt===2 && currentAttempt.letterPos===0)? 'curfocus':''} letterPosision={0} attemptNum={2}/>
                    <GuessLetter current={(currentAttempt.attempt===2 && currentAttempt.letterPos===1)? 'curfocus':''} letterPosision={1} attemptNum={2}/>
                    <GuessLetter current={(currentAttempt.attempt===2 && currentAttempt.letterPos===2)? 'curfocus':''} letterPosision={2} attemptNum={2}/>
                    <GuessLetter current={(currentAttempt.attempt===2 && currentAttempt.letterPos===3)? 'curfocus':''} letterPosision={3} attemptNum={2}/>
                    <GuessLetter current={(currentAttempt.attempt===2 && currentAttempt.letterPos===4)? 'curfocus':''} letterPosision={4} attemptNum={2}/>
                </div>
                <div className="row">
                    <GuessLetter current={(currentAttempt.attempt===3 && currentAttempt.letterPos===0)? 'curfocus':''} letterPosision={0} attemptNum={3}/>
                    <GuessLetter current={(currentAttempt.attempt===3 && currentAttempt.letterPos===1)? 'curfocus':''} letterPosision={1} attemptNum={3}/>
                    <GuessLetter current={(currentAttempt.attempt===3 && currentAttempt.letterPos===2)? 'curfocus':''} letterPosision={2} attemptNum={3}/>
                    <GuessLetter current={(currentAttempt.attempt===3 && currentAttempt.letterPos===3)? 'curfocus':''} letterPosision={3} attemptNum={3}/>
                    <GuessLetter current={(currentAttempt.attempt===3 && currentAttempt.letterPos===4)? 'curfocus':''} letterPosision={4} attemptNum={3}/>
                </div>
                <div className="row">
                    <GuessLetter current={(currentAttempt.attempt===4 && currentAttempt.letterPos===0)? 'curfocus':''} letterPosision={0} attemptNum={4}/>
                    <GuessLetter current={(currentAttempt.attempt===4 && currentAttempt.letterPos===1)? 'curfocus':''} letterPosision={1} attemptNum={4}/>
                    <GuessLetter current={(currentAttempt.attempt===4 && currentAttempt.letterPos===2)? 'curfocus':''} letterPosision={2} attemptNum={4}/>
                    <GuessLetter current={(currentAttempt.attempt===4 && currentAttempt.letterPos===3)? 'curfocus':''} letterPosision={3} attemptNum={4}/>
                    <GuessLetter current={(currentAttempt.attempt===4 && currentAttempt.letterPos===4)? 'curfocus':''} letterPosision={4} attemptNum={4}/>
                </div>
                <div className="row">
                    <GuessLetter current={(currentAttempt.attempt===5 && currentAttempt.letterPos===0)? 'curfocus':''} letterPosision={0} attemptNum={5}/>
                    <GuessLetter current={(currentAttempt.attempt===5 && currentAttempt.letterPos===1)? 'curfocus':''} letterPosision={1} attemptNum={5}/>
                    <GuessLetter current={(currentAttempt.attempt===5 && currentAttempt.letterPos===2)? 'curfocus':''} letterPosision={2} attemptNum={5}/>
                    <GuessLetter current={(currentAttempt.attempt===5 && currentAttempt.letterPos===3)? 'curfocus':''} letterPosision={3} attemptNum={5}/>
                    <GuessLetter current={(currentAttempt.attempt===5 && currentAttempt.letterPos===4)? 'curfocus':''} letterPosision={4} attemptNum={5}/>
                </div>
            </div>
                
           
        
    )
}