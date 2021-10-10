import React from 'react'
import './treat.css'
import img1 from "../../media/img1.jpg"

import { Button, Form, Row, Col, Image, FloatingLabel } from "react-bootstrap";

const Treat = () => {
    return (
        <div className="container-class">
            <h6>..</h6>

            <h1 className="h1-el">Share your special day </h1>
            <p className="treat-para">
                Although there are unlimited ideas to celebrate our special days like  birthday, anniversary, festivals, share your joyous moments by providing food to poor and hungry patients outside hospitals, as by seeking happiness for others, and find it for yourself !

                Celebrate your Birthday in a unique way.You can plan your special day along with your friends, family or colleagues by feeding the needy. Sharing gifts and spreading smiles with our loved ones is a cherishing experience! Share your Happiness!
            </p>

            <Form className="form-treat">

                <Form className="mb-3-el">
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                </Form>

                <Form.Group className="mb-3-el" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3-el" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Reason for treat</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>





                <FloatingLabel className="mb-3-el" controlId="floatingTextarea2" label="">
                    Address where you will offer treat
                    <Form.Control
                        as="textarea"
                        placeholder="What will you donate?"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </Form>
        </div>
    )
}

export default Treat