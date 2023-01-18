import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../App"


export function Welcome(){

    const { user} = useContext(AppContext)


    return (
        <>
            <div className="welcome">
                <div>Welcome {user}</div>
                <Link to='/game'><button >START</button></Link>
                </div>
          
                
      
            
        </>
        
    )
}