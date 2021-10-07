import React from 'react'
import './needhelp.css'
import gif1 from "../../media/gif1.gif"
import { Button, Form, Col, Image, Row } from "react-bootstrap";

const Needhelp = () => {
    return (
        <div className="container-ele">
            <h1 className="needhelp-h">Need help?</h1>
            <p>When you are walking down the street, is there someone who is hungry?
                <br></br>We will be really happy to send help in the form of food to that person
                <br></br>Please drop in the address of that place
                <br></br>Remember, you are awesome and you did an amazing job helping us with our goal of #FeedIndia
            </p>
            <Row>
                <Col lg={4}>
                    <div className="img-container" >
                        <Image src={gif1} className="help-gif-el" alt="GIF here" />
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="form-container">
                        <Form className="form-ele needhelp-el">

                            <div className="container-2">

                                <Form.Group className="address1-el form-grp" controlId="formGridAddress1">
                                    <Form.Label>Address line-1</Form.Label>
                                    <Form.Control className="form-Control-el" placeholder="1234 Main St" />
                                </Form.Group>
                            </div>

                            <div className="container-2">

                                <Form.Group className="address2-el form-grp" controlId="formGridAddress2">
                                    <Form.Label>Address line-2</Form.Label>
                                    <Form.Control className="form-Control-el" placeholder="Apartment, studio, or floor" />
                                </Form.Group>

                            </div>

                            <div className="container-2">
                                <Row className="row-el">

                                    <Form.Group className="form-grp" as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control className="form-Control-el" />
                                    </Form.Group>


                                    <Form.Group className="form-grp" as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control className="form-Control-el" />
                                    </Form.Group>


                                    <Form.Group className="form-grp" as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control className="form-Control-el" />
                                    </Form.Group>

                                </Row>
                            </div>

                            <Button className="button-ele btn" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Needhelp