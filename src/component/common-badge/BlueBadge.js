import React from "react";
import {Badge} from 'react-bootstrap/'
import '../common-badge/blue_badge.css';

const BlueBadge = (props) => {
    return(
        <>
            <Badge pill bg="primary" className = "brd-radius">
                {props.name}
            </Badge>{' '}
        </>
    )
}

export default BlueBadge