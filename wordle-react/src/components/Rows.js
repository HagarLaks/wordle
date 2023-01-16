import React, {useContext, useEffect, useState} from 'react'
import { gameBoard } from './Word'
import { Cell } from './Cell'
import { AppContext } from "../App"
import { useGame } from '../hooks/useGame'


export function Rows({ currentAttempt,letterPosision}) {
  const {guessFeedback} = useContext(AppContext)
  console.log(guessFeedback)
  
  

  


  return (
  <>
       <div className="rows">
                    {(gameBoard[0]).map((cell,j)=>(
                    <Cell 
                    key={j}
                    letterPosision={j}
                    attemptNum={'0'}
                    className={guessFeedback[0][j]}
                    />
                    ))}
                    
                    </div>
      <div className="rows">
      {(gameBoard[1]).map((cell,j)=>(
            <Cell 
            key={j}
            letterPosision={j}
            attemptNum={'1'}
            />
            ))}
      
      </div>
      <div className="rows">
      {(gameBoard[2]).map((cell,j)=>(
      <Cell 
      key={j}
      letterPosision={j}
      attemptNum={'2'}

      />
      ))}
      
      </div>      
      <div className="rows">
      {(gameBoard[3]).map((cell,j)=>(
      <Cell 
      key={j}
      letterPosision={j}
      attemptNum={'3'}

      />
      ))}
      
      </div>
      <div className="rows">
      {(gameBoard[4]).map((cell,j)=>(
      <Cell 
      key={j}
      letterPosision={j}
      attemptNum={'4'}

      />
      ))}
      
      </div>        
      <div className="rows">
      {(gameBoard[5]).map((cell,j)=>(
      <Cell 
      key={j}
      letterPosision={j}
      attemptNum={'5'}

      />
      ))}
      </div>
      
    </>

   
  )
}
