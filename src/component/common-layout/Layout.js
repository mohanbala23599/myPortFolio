import React from "react"
import Header from "../common-header/Header"
import '../common-layout/layout.css';
import {header_options} from '../../property';

const Layout = (props) => {
    return(
        <div style = {{height : "100rem"}}>
            <div className="header-container">
                <Header navigateChat = {() => {
                    try{
                        let contactForm = document.getElementById('contact-form')
                        contactForm.scrollIntoView()
                    }
                    catch(err){

                    }
                }} title = {"Mohana sundaram"} options = {header_options}></Header>
            </div>
            <div>                
                {props.children}
            </div>
        </div>
    )
}

export default Layout