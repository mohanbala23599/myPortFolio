import React,{useState} from "react";
import {Navbar, Button, Nav, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../common-header/header.css';

const Header = (props) => {

    const [toggleChatBool, setToggleChatBool] = useState(false)
    const [scrollActive, setScrollActive] = useState(false)

    function toggleChat (bool){
        setToggleChatBool(!toggleChatBool)
    }

    window.addEventListener('scroll',() => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        let header = document.getElementById('header');
        let lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        if(st != 0){
            setScrollActive(true)
        }
        else{
            setScrollActive(false)
        }
    })

    return(
        <>
            <Navbar id = "header" className = {scrollActive == true ? "header-scroll-active" : "header-scroll-inactive"} collapseOnSelect expand="lg" variant="dark">
                <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <div>
                        <span className="p-t-5"><i className="bi bi-card-heading"></i></span>
                        <span>{props.title}</span>
                    </div>
                    <div className="p-b-10">
                    <Button onMouseEnter={toggleChat} onMouseLeave = {toggleChat} className = {toggleChatBool == true ? 'd-flex align-items-center chat-button-active' : 'd-flex align-items-center chat-button-inactive'}>
                        <span className={toggleChatBool == true ? 'd-none' : 'chat-active-dot'}><i className="bi bi-circle-fill dot-icon"></i></span>
                        <span className={toggleChatBool == true ? 'chat-now' : 'online'}>{toggleChatBool == true ? 'CHAT NOW' : 'ONLINE'}</span>
                    </Button>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        {props.options.map((options) => {
                            return(
                                <>
                                    <Nav.Link id= {options.id} key = {options.id} href = {options.link} className = "header-options-link">{options.link_name}</Nav.Link>
                                </>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header