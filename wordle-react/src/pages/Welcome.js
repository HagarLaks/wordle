import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../App"
import { LogOut } from "../components/logOut"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



export function Welcome(){

    const { user} = useContext(AppContext)


    return (
        <>
        
            <Container className="welcome" fluid>
                <h1>Welcome {user===null? "Guest" : user} </h1>
                
                <Link to='/game'> 
                <Button variant="light" >
                        Start
                    </Button>
                </Link>
                 <div>
                    <Link to='/'><LogOut/></Link>
                 </div>
                
          
                </Container>
                {/* </div> */}
                
                
      
            
        </>
        
    )
}