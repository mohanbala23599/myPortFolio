import React from "react";
import {Button} from 'react-bootstrap';
import '../common-green-button/green_button.css';

const GreenButton = (props) => {
    return(
        <>
            <Button onClick={props.click} className="bttn_position" variant="warning">{props.bttnName}</Button>{' '}
        </>
    )
}

export default GreenButton