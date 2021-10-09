import React from 'react'
import './header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';



const Header = () => {
    const history = useHistory();
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    // + adding the use
    useEffect(() => {
        getData();

        // we will use async/await to fetch this data
        async function getData() {
            const res = await fetch("http://localhost:9002/user/:id");
            const data = await res.json();

            // store the data into our name variable
            setName(data);
            setEmail(data);
        }
    }, []); // <- you may need to put the setName function in this array

    return (
        <div>
            <Navbar fixed="top" className="nav-whole">
                <Container className="nav-c">
                    <Navbar.Brand href="/" className="nav-brand">Tripti</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav me-auto">
                            <Nav.Link href="/addfood" className="nav-txt-rd">Add Food</Nav.Link>
                            <Nav.Link href="/needhelp" className="nav-txt-rd">Need Help</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">Donate</Nav.Link>
                            <Nav.Link href="/ngos" className="nav-txt-rd">NGOs</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">Government Schemes</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">Give them a treat</Nav.Link>
                            <Nav.Link href="a" className="nav-txt-rd">For restaurants</Nav.Link>
                            <Button className="btn-login" onClick={() => history.push("/Login")}>Login</Button>
                            <h1 className="nav-txt-rd">Heloo</h1>
                            {name && (
                                <div className="name">

                                    {/* loop over the name */}
                                    {name.map((data, index) => (
                                        <div key={index}>
                                            <h2>use name is {data.name}</h2>
                                            <h2>use email is {data.email}</h2>
                                        </div>
                                    ))}

                                </div>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header


