import React from "react";
import {Button} from 'react-bootstrap';
import '../common-primary-button/primary_button.css';

const PrimaryButton = (props) => {
    return(
        <>
            <Button className = "bttn_position" variant="primary">{props.bttnName}</Button>{' '}
        </>
    )
}

export default PrimaryButton