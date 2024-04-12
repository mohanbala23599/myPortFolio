import React from "react";
import GreenButton from "../common-green-button/GreenButton";
import "../common-introduction/introduction.css";
import {button_name} from '../../property';

const Introduction = (props) => {
    return(
        <div className="container">
            <div>
                <h1 className="intro_h1">{props.serviceData["intro_h1_section_one"]}</h1>
                <h1 className="intro_h1">{props.serviceData["intro_h1_section_two"]}</h1>
            </div>
            <div className="m-t-20">
                <p className="intro_p">{props.serviceData["intro_desc_p_section_one"]}</p>
                <p className="intro_p">{props.serviceData["intro_desc_p_section_two"]} <a href="#" onClick={() => {
                    try{
                        let contactForm = document.getElementById('contact-form')
                        contactForm.scrollIntoView()
                    }
                    catch(err){

                    }
                }}>{props.serviceData["intro_desc_p_section_two_link"]}</a></p>
            </div>
            <div className="m-t-25">
                <GreenButton click = {props.click} bttnName = {button_name.intro_bttn_name}/>
            </div>
        </div>
    )
}

export default Introduction