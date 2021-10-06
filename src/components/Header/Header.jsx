import React from 'react'
import './header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Header = () => {
    return (
        <div>
            <Navbar className="nav-whole">
                <Container className="nav-c">
                    <Navbar.Brand href="a" className="nav-brand">Tripti</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="nav">
                            <Nav.Link href="a" className="nav-txt-rd">Add Food</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">Need Food</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">Causes worth donating</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">NGOs</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">Government Schemes</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">Give them a treat</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">For restaurants</Nav.Link>
                            <Button className="btn-login">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
