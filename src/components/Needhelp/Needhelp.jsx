import React from 'react'
import './needhelp.css'
import gif1 from "../../media/gif1.gif"
import { Button, Form, Col, Image, Row } from "react-bootstrap";

const Needhelp = () => {
    return (
        <div>
            <div>
                <h1>Need help?</h1>
            </div>

            <div className="container-ele">
                <div className="img-container" >
                    <Image src={gif1} className="help-gif-el" alt="GIF here" />
                </div>

                <div className="form-container">
                    <Form className="form-ele needhelp-el">

                        <div className="container-2">

                            <Form.Group className="address1-el form-grp" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control className="form-Control-el" placeholder="1234 Main St" />
                            </Form.Group>
                        </div>

                        <div className="container-2">

                            <Form.Group className="address2-el form-grp" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
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

            </div>
        </div>
    )
}

export default Needhelp