import { Link } from "react-router-dom"
export function Welcome(){



    return (
        <>
            <div className="welcome">
                <div>Welcome User</div>
                <Link to='/game'><button >START</button></Link>
                </div>
          
                
      
            
        </>
        
    )
}