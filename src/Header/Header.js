import React from 'react'
import "./Header.css"
import { Navbar, Nav} from 'react-bootstrap';
function Header() {
    return (
        <div className='header'>
             <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Tapendra</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
               </Nav>
               
            </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Header
