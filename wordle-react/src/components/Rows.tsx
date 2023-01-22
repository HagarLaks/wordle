import React, {useContext, useEffect} from 'react'
import { gameBoard } from './Word'
import { Cell } from './Cell'
import { AppContext } from "../App"
import { type } from '@testing-library/user-event/dist/type'
import { useGameType } from '../hooks/useGame'

export type letterProps={
  letterPossision:number
  attemptNum: number
  key: string
}
export function Rows() {
  const {guessFeedback, handleKeyDown} = useContext<useGameType>(AppContext)
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  
  
  return (
  <>
       <div className="rows">
                    {(gameBoard[0]).map((cell,j)=>(
                    <Cell 
                    key={j}
                    letterPosision={j}
                    attemptNum={'0'}
                    />
                    ))}
                    
                    </div>
      <div className="rows">
      {(gameBoard[1]).map((cell,j)=>(
            <Cell 
            key={j*2}
            letterPosision={j}
            attemptNum={'1'}
            />
            ))}
      
      </div>
      <div className="rows">
      {(gameBoard[2]).map((cell,j)=>(
      <Cell 
      key={j*3}
      letterPosision={j}
      attemptNum={'2'}

      />
      ))}
      
      </div>      
      <div className="rows">
      {(gameBoard[3]).map((cell,j)=>(
      <Cell 
      key={j*4}
      letterPosision={j}
      attemptNum={'3'}

      />
      ))}
      
      </div>
      <div className="rows">
      {(gameBoard[4]).map((cell,j)=>(
      <Cell 
      key={j*5}
      letterPosision={j}
      attemptNum={'4'}

      />
      ))}
      
      </div>        
      <div className="rows">
      {(gameBoard[5]).map((cell,j)=>(
      <Cell 
      key={j*6}
      letterPosision={j}
      attemptNum={'5'}

      />
      ))}
      </div>
      
    </>

   
  )
}
