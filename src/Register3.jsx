import React from 'react';
import Register from "./Register";
import {Button, Col, Container, Form, Nav, Row, Tab} from "react-bootstrap";
import {NavLink, Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Register3 = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const history= useNavigate()

    const onsubmit = async (data) => {

        // To take a localstorage from the sever
        const name = localStorage.getItem('name');
        const lastName = localStorage.getItem('lastName');
        const email = localStorage.getItem('email');
        const phone = localStorage.getItem('phone');
        const password = localStorage.getItem('password');
        const confPassword = localStorage.getItem('confPassword');
        const brandName = localStorage.getItem('brandName');
        const brandType = localStorage.getItem('brandType');
        const adresse = localStorage.getItem('adresse');
        const city = localStorage.getItem('city');
        const zip = localStorage.getItem('zip');
        const tax = localStorage.getItem('tax');
        const doc1 = localStorage.getItem('doc1');
        const doc2 = localStorage.getItem('doc2');
        const doc3 = localStorage.getItem('doc3');

        console.log(name, lastName, email, phone, password, confPassword, brandName, brandType, adresse, city, zip, tax, doc1, doc2, doc3)
    }

    const onPreviousStep = () =>{
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
                                    <NavLink eventKey="link-0" to="/" className='navbar nave activese'><span className="number activess">1</span>Your Profile</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="link-1" to="/register2" className='navbar nave activese'><span className="number activess">2</span>Business Information</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="link-2" to="/register3" className='navbar nave actives'><span className="number activess">3</span>Additional User</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </Col>
                    <Col className='col-md-10 bg-white'>
                        <center>
                            <p style={{color:"#7b8080", marginTop:"40px"}}>Step 3</p>
                            <p className="display-6">Congratulation</p>
                        </center>
                        <Form onSubmit={handleSubmit(onsubmit)} encType='multipart/form-data format' className="mt-3" method="post">
                            <Row className="d-flex justify-content-center">
                                <Col className="col-md-6">
                                    <p style={{color:'#7AB9FC'}} className="my-3 fs-5 text-center ">Click here to Create Your User !!!</p>
                                    <center><Button type={"submit"}  variant="primary" style={{backgrondColor:'#7AB9FC', color:'white'}} size="md" className='w-25 mt-3' >Add User</Button>{' '}</center>
                                </Col>
                            </Row>
                            <div className="mt-3">
                                <center><Button variant="transparent" style={{color:'#7AB9FC'}} size="md" className='w-25 float-start' >Back to Login</Button>{' '}</center>
                                <div className="w-50 float-end">
                                    <center><Button onClick={onPreviousStep} variant="none" style={{backgroundColor:'#7AB9FC', color:'white'}} size="md" className='w-40 float-end me-5' >Previous Step</Button>{' '}</center>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register3;