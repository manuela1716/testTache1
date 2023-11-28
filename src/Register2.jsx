import React, {useState} from 'react';
import {Button, Col, Container, Form, Nav, Row, Tab} from "react-bootstrap";
import {NavLink, Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Register2 = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const history= useNavigate()

    const onNextStep = async (data) => {

        localStorage.setItem('brandName', data.brandName);
        localStorage.setItem('brandType', data.brandType);
        localStorage.setItem('adresse', data.adresse);
        localStorage.setItem('city', data.city);
        localStorage.setItem('zip', data.zip);
        localStorage.setItem('tax', data.tax);
        localStorage.setItem('doc1', data.doc1[0].name);
        localStorage.setItem('doc2', data.doc2[0].name);
        localStorage.setItem('doc3', data.doc3[0].name);

        history('/register3')
    }

    const onPreviousStep = () =>{
        history('/')
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
                                    <NavLink eventKey="link-1" to="/register2" className='navbar nave actives'><span className="number activess">2</span>Business Information</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="link-2" to="/register3" className='navbar nave'><span className="number">3</span>Additional User</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </Col>
                    <Col className='col-md-10 bg-white'>
                        <center>
                            <p style={{color:"#7b8080", marginTop:"40px"}}>Step 2</p>
                            <p className="display-6">Business Information</p>
                            <p className="col-6">Please enter an information about your company</p>
                        </center>
                        <Form onSubmit={handleSubmit(onNextStep)} encType='multipart/form-data format' className="mt-3">
                            <Row>
                                <p style={{color:'#7AB9FC'}}>GENERAL INFORMATION</p>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="brandName" >
                                        <Form.Label>Brand Name<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="text" {...register("brandName", { required: true, minLength:3 })} />
                                        {errors.brandName?.type==='required' && <span className='text-danger'>This is required</span>}
                                        {errors.brandName?.type==='minLength' && <span className='text-danger'>The name can have less than 3 caracters</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="brandType" >
                                        <Form.Label>Brand type<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="text" {...register("brandType", { required: true, minLength:3 })} />
                                        {errors.brandType?.type==='required' && <span className='text-danger'>This is required</span>}
                                        {errors.brandType?.type==='min' && <span className='text-danger'>The name can have less than 3 caracters</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="adresse" >
                                        <Form.Label>Street adresse<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="text" {...register("adresse", { required: true, minLength:3 })} />
                                        {errors.adresse?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="city" >
                                        <Form.Label>City<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="text" {...register("city", { required: true, minLength:3 })} />
                                        {errors.city?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="zip" >
                                        <Form.Label>Zip code<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="text" {...register("zip", { required: true, minLength:3 })} />
                                        {errors.zip?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Group className="mb-3" controlId="tax" >
                                        <Form.Label>Tax ID Number<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="text" {...register("tax", { required: true, minLength:3 })} />
                                        {errors.tax?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                                <p style={{color:'#7AB9FC'}}>DOCUMENTS</p>
                                <Col className="col-12">
                                    <Form.Group className="mb-3" controlId="doc1" >
                                        <Form.Label>Once the following documents are signed. You will be ready to get started<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="file"  id="doc1" {...register("doc1", { required: true, minLength:3 })} />
                                        {errors.doc1?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                                <Col className="col-12">
                                    <Form.Group className="mb-3" controlId="doc2" >
                                        <Form.Label></Form.Label>
                                        <Form.Control type="file"  id="doc2" {...register("doc2", { required: true, minLength:3 })} />
                                        {errors.doc2?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                                <p style={{color:'#7AB9FC'}}>COI PFD UPLOAD</p>
                                <Col className="col">
                                    <Form.Group className="mb-3" controlId="doc3" >
                                        <Form.Label>Once the following documents are signed. You will be ready to get started<span style={{color:'#7AB9FC'}}>*</span></Form.Label>
                                        <Form.Control type="file"  id="doc3" {...register("doc3", { required: true, minLength:3 })} />
                                        {errors.doc3?.type==='required' && <span className='text-danger'>This is required</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="mt-3">
                                <center><Button variant="transparent" style={{color:'#7AB9FC'}} size="md" className='w-25 float-start' >Back to Login</Button>{' '}</center>
                                <div className="w-50 float-end">
                                    <center><Button onClick={onPreviousStep} variant="none" style={{backgroundColor:'#7AB9FC', color:'white'}} size="md" className='w-50 float-start' >Previous Step</Button>{' '}</center>
                                    <center><Button type={"submit"}  variant="none" style={{backgroundColor:'#7AB9FC', color:'white'}} size="md" className='w-25 float-end me-5' >Next Step</Button>{' '}</center>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register2;