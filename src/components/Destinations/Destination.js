import React from 'react';
import classes from './Destinations.module.scss'

const Destination = (props) => {
    return (
        <>
            <li className={ props.isLoading ? `${classes.item}   fade-out` : `${classes.item}  fade-in`} data-hover={ props.post.destination}>
                <a href="#0" tabIndex="0">
                <h2>{props.post.destination}</h2>
                <div className={classes.divider}> </div>
                <p>{props.post.direct}</p>
                <p>{props.post.from}</p>
                <p>{props.post.priceAndDate}</p>
                </a>
            </li>
        </>
    );
};

export default Destination;
