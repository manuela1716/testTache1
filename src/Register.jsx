import React from 'react';
import {Col, Container, Row, Nav, Tab, Form, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

const Register = () =>{

const { register, handleSubmit,reset, formState: { errors } } = useForm();

    return (
        <div>
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col className="col-md-10">
                        <Tab.Container id="my-tabs" defaultActiveKey="link-0">
                            <Nav fill variant="tabs" defaultActiveKey="link-0"
                                 activeKey="link-0"
                                 className="border-0 bg-light justify-item-center"
                                 style={{height: '50px', paddingBottom:'60px'}}
                            >
                                <Nav.Item>
                                    <NavLink eventKey="link-0" to="/" className='navbar nave actives'><span className="number activess">1</span>Your Profile</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="link-1" to="/register2" id="link-1" className='navbar nave'><span className="number">2</span>Business Information</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="link-2" to="/register1" className='navbar nave'><span className="number">3</span>Additional User</NavLink>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="link-0">
                                    <Container mt-5>
                                        <Row className='d-flex justify-content-center mt-5'>
                                            <Col className='col-md-8 mt-5'>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="module" style={{ position: 'relative', marginLeft:'-30px' }}>
                                                        <Form.Control type="text" placeholder="Entrer une ville ou un code postal" style={{  boxShadow: 'none' }} />
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="link-1" href="#link-1">Acheter</Tab.Pane>
                                <Tab.Pane eventKey="link-2">Estimer</Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;