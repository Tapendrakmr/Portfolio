import React from 'react'
import {useEffect,useState} from 'react'

import "./Header.css"
import { Navbar, Nav, Button} from 'react-bootstrap';
function Header() {
    const [show,handleShow]=useState(false)
    useEffect(() => {

        window.addEventListener("scroll", function() {
            if (window.scrollY > 200) {
                handleShow(true)
            } else {
               handleShow(false)
            }
        })
    }, [])

    return (

        <div className={`header ${show && "fixed-nav"}`}>
             <Navbar bg="light" expand="lg" style={{height: "100%"}} >
            <Navbar.Brand href="#home" >Tapendra</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto float-right">
                <Nav.Link className="section-link"  href="#home">Home</Nav.Link>
                <Nav.Link className="section-link"  href="#link">Services</Nav.Link>
                <Nav.Link className="section-link"  href="#link">Projects</Nav.Link>
                <Nav.Link className="section-link"  href="#link">About</Nav.Link>
                <Button style={{background: "orange", border:'none'}} className="section-link"  >Contact Me</Button>{' '}
               </Nav>
               
            </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Header
