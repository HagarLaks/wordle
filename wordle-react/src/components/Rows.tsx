import  {useContext, useEffect} from 'react'
import { gameBoard } from './Word'
import { Cell } from './Cell'
import { AppContext } from "../App"
import { useGameType } from '../hooks/useGame'


export function Rows() {
  const { handleKeyDown} = useContext<useGameType>(AppContext)
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
                    letterPosition={j}
                    attemptNum={0}
                    />
                    ))}
                    
                    </div>
      <div className="rows">
      {(gameBoard[1]).map((cell,j)=>(
            <Cell 
            key={j*2}
            letterPosition={j}
            attemptNum={1}
            />
            ))}
      
      </div>
      <div className="rows">
      {(gameBoard[2]).map((cell,j)=>(
      <Cell 
      key={j*3}
      letterPosition={j}
      attemptNum={2}

      />
      ))}
      
      </div>      
      <div className="rows">
      {(gameBoard[3]).map((cell,j)=>(
      <Cell 
      key={j*4}
      letterPosition={j}
      attemptNum={3}

      />
      ))}
      
      </div>
      <div className="rows">
      {(gameBoard[4]).map((cell,j)=>(
      <Cell 
      key={j*5}
      letterPosition={j}
      attemptNum={4}

      />
      ))}
      
      </div>        
      <div className="rows">
      {(gameBoard[5]).map((cell,j)=>(
      <Cell 
      key={j*6}
      letterPosition={j}
      attemptNum={5}

      />
      ))}
      </div>
      
    </>

   
  )
}
