import React from 'react';
import {Button, Col, Container, Form, Nav, Row, Tab} from "react-bootstrap";
import {NavLink, Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Register1 = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const history= useNavigate()

    const onNextStep = async (data) => {

        localStorage.setItem('name', data.name);
        localStorage.setItem('lastName', data.lastName);
        localStorage.setItem('email', data.email);
        localStorage.setItem('phone', data.phone);
        localStorage.setItem('password', data.password);
        localStorage.setItem('confPassword', data.confPassword);
        history('/register2')
    }

    return (
        <div className="">
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
                                    <NavLink eventKey="link-1" to="/register2" className='navbar nave'><span className="number">2</span>Business Information</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="link-2" to="/register3" className='navbar nave'><span className="number">3</span>Additional User</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </Col>
                    <Col className='col-md-10 bg-white'>
                        <center>
                            <p style={{color:"#7b8080", marginTop:"40px"}}>Step 1</p>
                            <p className="display-6">Your profile</p>
                            <p className="col-6">Enter the login information for your account. You will be able to create additional users after registering. </p>
                        </center>
                        <Form onSubmit={handleSubmit(onNextStep)} encType='multipart/form-data format' className="mt-3">
                            <Row>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="name" >
                                        <Form.Label>First Name<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="text" {...register("name", { required: true, minLength:3 })} />
                                        {errors.name?.type==='required' && <span className='text-danger'>This is required</span>}
                                        {errors.name?.type==='minLength' && <span className='text-danger'>The name can't have less than 3 caracters</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="lastName" >
                                        <Form.Label>Last Name<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="text" {...register("lastName", { required: true, minLength:3 })} />
                                        {errors.lastName?.type==='required' && <span className='text-danger'>This is required</span>}
                                        {errors.lastName?.type==='minLength' && <span className='text-danger'>The last name can't have less than 3 caracters</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="email" >
                                        <Form.Label>Email<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="email" {...register("email", { required: true })} />
                                        {errors.email?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="phone" >
                                        <Form.Label>Phone Number<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="text" {...register("phone", { required: true })} />
                                        {errors.phone?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="password" >
                                        <Form.Label>Password<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="password" {...register("password", { required: true })} />
                                        {errors.password?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="confPassword" >
                                        <Form.Label>Confirm Password<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="password" {...register("confPassword", { required: true })} />
                                        {errors.confPassword?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="mt-3">
                                <center><Button  variant="transparent" style={{color:'#7AB9FC'}} size="md" className='w-25 float-start' >Back to Login</Button>{' '}</center>
                                <center><Button type={"submit"} variant="none" style={{backgroundColor:'#7AB9FC', color:'white'}} size="md" className='w-25 float-end' >Next Step</Button>{' '}</center>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register1;