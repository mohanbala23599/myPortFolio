import React from "react";
import '../common-nofill-button/no_fill_button.css';
import {Button} from 'react-bootstrap'

const NoFillButton = (props) => {
    return(
        <>
            <Button onClick = {props.click} className="bttn_position" variant="outline-primary">{props.bttnName}</Button>
        </>
    )
}

export default NoFillButton