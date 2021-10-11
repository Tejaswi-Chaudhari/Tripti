import React from 'react'
import './home.css'
import home1 from '../../media/Home.gif'
import blob1 from '../../media/blob1.svg'
import blob2 from '../../media/blob2.svg'
import blob3 from '../../media/blob3.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CountUp from 'react-countup';

const Home = () => {

    return (
        <div>
            <img src={blob1} alt="blob" className="home-blob1"></img>
            <img src={blob2} alt="blob" className="home-blob2"></img>
            <img src={blob3} alt="blob" className="home-blob3"></img>
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

            
            {/* <CountUp
                className="account-balance"
                start={0}
                end={450}
                duration={2.75}
                separator=" "
                decimals={4}
                decimal=","
                prefix="EUR "
                suffix=" left"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            >
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp>

            <CountUp
                className="account-balance"
                start={0}
                end={3650}
                duration={2.75}
                separator=" "
                decimals={4}
                decimal=","
                prefix="EUR "
                suffix=" left"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            >
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp>

            <CountUp
                className="account-balance"
                start={0}
                end={1000}
                duration={2.75}
                separator=","
                decimals={4}
                decimal=","
                prefix="EUR "
                suffix=" left"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            >
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp> */}


        </div>
    )
}

export default Home
