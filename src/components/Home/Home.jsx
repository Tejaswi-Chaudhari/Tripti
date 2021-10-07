import React from 'react'
import './home.css'
import home1 from '../../media/Home.gif'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col className="home-left">
                    <h1 className="home-h">WELCOME</h1>
                    <p className="home-txt">We strongly believe that food is a <strong>Necessity</strong> and not a <strong>luxury</strong></p>
                    <p className="home-txt1">We are glad that you joined us in our mission to <strong>#FeedIndia</strong></p>
                </Col>
                <Col>
                    <img src={home1} alt="img" className="home-img1"></img>
                </Col>
            </Row>
            </Container>
         
        </div>
    )
}

export default Home
