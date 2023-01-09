import { gameBoard, theWord } from './Word';
 

export const handleGuess = (rowNum)=>{
    const geusseArray = ["","","","",""]
    const recentGuesse = gameBoard[rowNum][0]+ gameBoard[rowNum][1]+gameBoard[rowNum][2]+gameBoard[rowNum][3]+gameBoard[rowNum][4]
    console.log(recentGuesse)
    for (let i = 0; i < 5;i++) {
       const indexToCompare = theWord.indexOf(gameBoard[rowNum][i])
       console.log(indexToCompare)
       if (indexToCompare === -1){
         geusseArray[i] = "error"
       } else if (indexToCompare === i){
        geusseArray[i] = "correct"
       } else {
        geusseArray[i] = "almost"
       }
    }
    console.log(geusseArray)
}