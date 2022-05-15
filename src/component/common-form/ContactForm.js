import React from "react";
import {Form, Button} from 'react-bootstrap'
import '../common-form/contact-form.css';
import PrimaryButton from "../common-primary-button/PrimaryButton";

const ContactForm = () => {
    return(
        <>
            <div>
                <div style={{padding : "0px 0px 50px"}}>
                    <h2 style = {{color : "#9c9c9c"}}>Get in touch</h2>
                </div>
                <Form>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label style = {{color : "#9c9c9c"}}>EMAIL</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Label style = {{color : "#9c9c9c"}}>MESSAGE</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <div style={{padding : "25px 0px 0px 0px"}}>                        
                        <PrimaryButton bttnName = {'send'}/>
                    </div>
                </Form>
                <div className="d-flex col-md-12 justify-content-center" style={{padding : "70px 0px 0px 0px"}}>
                    {/* <div> */}
                        <span style={{padding : "0px 10px 0px 0px"}}>
                            <a style = {{color : "#9c9c9c", textDecoration : "none"}} href = "#">LinkedIn</a>
                        </span>
                        <span style={{padding : "0px 10px 0px 0px"}}>
                            <a style = {{color : "#9c9c9c", textDecoration : "none"}} href = "#">Email</a>
                        </span>
                        <span>
                            <a style = {{color : "#9c9c9c", textDecoration : "none"}} href = "#">GitHub</a>
                        </span>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default ContactForm