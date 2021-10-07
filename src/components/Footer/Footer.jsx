import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav'

const Footer = () => {
    return (
        <footer>
        <div className="footer" id="footer">
            <ul className="footer-li">
                <Nav.Link><li className="footer-li-txt">About us</li></Nav.Link>
                <Nav.Link><li className="footer-li-txt">Contact us</li></Nav.Link>
            </ul>
            <p className="footer-txt">Made with <FontAwesomeIcon color="red" icon={faHeart} /> by Tejaswi, Tejashri and Swarangi<br></br>All rights reserved © 2021 Hack Ninjas Team</p>
        </div>
        </footer>
    )
}

export default Footer
