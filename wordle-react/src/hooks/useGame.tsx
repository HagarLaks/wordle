import { useState} from "react";
import { gameBoard, theWord , feedbackBoard, allKeys} from "../components/Word";
import { IcurrentAttempt } from "../types/GameTypes";
  

export type useGameType ={
  userSubmitted:string
  user:string
  success:boolean
  fail:boolean
  board: string[][]
  guessFeedback: string[][]
  currentAttempt: IcurrentAttempt 
  handleInput: (inputFromKeyOrClick: string)=> void
  handleKeyDown: (event:KeyboardEvent)=> void
  setUser: React.Dispatch<React.SetStateAction<string | null>>
  setUserSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  handleInputUser: (e: any) => void
} 

export function useGame(){


    const [board, setBoard] = useState<string[][]>(gameBoard);
    const [ currentAttempt, setCurrentAttempt ] = useState({attempt:0, letterPos:0});
    const [guessFeedback, setGuessFeedback] = useState<string[][]>(feedbackBoard);
    const [success, setSeccess] = useState<boolean>(false)
    const [fail, SetFail] = useState<boolean>(false)
    const [user, setUser] = useState<string | null>(null)
    const [userSubmitted,setUserSubmitted] = useState<boolean>(false)

    
  
    const handleInput = (inputFromKeyOrClick:string)=>{
  
      if (inputFromKeyOrClick === "Delete" || inputFromKeyOrClick==="BACKSPACE"){
          if (currentAttempt.letterPos > 0){
              const newGameBoard = [...board]
              newGameBoard[currentAttempt.attempt][currentAttempt.letterPos-1] = '';
              setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -= 1})
          }
      } else {
              const newGameBoard = [...board]
  
              newGameBoard[currentAttempt.attempt][currentAttempt.letterPos] = inputFromKeyOrClick
              setBoard(newGameBoard)
  
              setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos += 1})
  
                  if (currentAttempt.letterPos === 5) {
                        
                            handleGuess(currentAttempt.attempt)
                            handleColorKeys(currentAttempt.attempt)
                            setCurrentAttempt({attempt: currentAttempt.attempt +=1, letterPos: currentAttempt.letterPos = 0})
                
                              }
            }
    }
  
    const handleKeyDown = (event:KeyboardEvent) => {


      if ((event.key.toLowerCase() >= 'a' && event.key.toLowerCase() <='z'&& event.key.length===1)||event.key==='Backspace'){
        console.log("inIf")
        handleInput(event.key.toUpperCase())
      
      }
      
  
    }
  
    const sendWord = async (word: string) => {
      const response = await fetch('http://localhost:3333/word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word }),
      });
      const data = await response.json();
      console.log(data);
    };
    let guessArray = ["","","","",""]
    const fetchGuessArray = async () => {
      const response = await fetch('http://localhost:3333/feedbackarray');
      const data = await response.json();
      console.log("logged",data.guessArray);
      guessArray = data.guessArray
      console.log(guessArray)
    };
    
    
    const handleGuess = (rowNum:number)=>{
        
        // const geussArray = feedbackBoard[rowNum]
        sendWord(gameBoard[rowNum].join(''))
        fetchGuessArray()

        // for (let i = 0; i < 5;i+=1) {
        //    const indexToCompare = theWord.indexOf(gameBoard[rowNum][i])
        //    if (indexToCompare === -1){
        //      geussArray[i] = "error"
        //    } else if (theWord[i] === gameBoard[rowNum][i]){
        //     geussArray[i] = "correct"
        //    } else {
        //     geussArray[i] = "almost"
        //    }
        // }
        
        const newFeedback = [...guessFeedback]
        newFeedback[rowNum] = guessArray
        setGuessFeedback(newFeedback);
        setTimeout(() => {
          handleSuccessorFail(rowNum)
        }, 1000);
        


        }
   
    const handleSuccessorFail= (rowNum:number)=>{
      const targetCorrect = "correct";
      const includesOnlyCorrect = guessArray.every((word) => word === targetCorrect);
      
      if ((currentAttempt.attempt===6)&&(!includesOnlyCorrect)){
        SetFail(true)
      }

     
      if (includesOnlyCorrect){
        setSeccess(true)
      }

      
    }

    const handleColorKeys = (rowNum:number)=>{
    const recentGuesse = gameBoard[rowNum][0]+ gameBoard[rowNum][1]+gameBoard[rowNum][2]+gameBoard[rowNum][3]+gameBoard[rowNum][4]
      
      const recentFeedback = feedbackBoard[rowNum]
      Object.keys(allKeys).forEach((letter)=>{
        if (recentGuesse.includes(letter)){
          const tempIndex = recentGuesse.indexOf(letter)
          allKeys[letter] = recentFeedback[tempIndex]
        } 
      })

    }

    
  
  
    return{
    userSubmitted,
    setUserSubmitted,
    user,
    setUser,
    success,
    fail,
    board,
    guessFeedback,
    currentAttempt,
    handleInput,
    handleKeyDown,
    handleGuess,
    handleSuccessorFail
    

  }  
}
    
