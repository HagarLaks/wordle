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
            {/* <div className="welcome"> */}
        
            <Container className="welcome" fluid>
                <h1>Welcome {user===null? "Guest" : user} </h1>
                
                <Link to='/game'> <button className="wbutton" size="lg" >
                <Button variant="outline-light" >
                        Start as a guest
                    </Button>
                 </button></Link>
                 <div>
                    <Link to='/'><button className="wbutton" size="lg"><LogOut/></button></Link>
                 </div>
                
          
                </Container>
                {/* </div> */}
                
                
      
            
        </>
        
    )
}