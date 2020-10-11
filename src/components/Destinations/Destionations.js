import React from 'react';
import Destination from "./Destination";
import classes from './Destinations.module.scss'

const Destinations = (props) => {
    return (
            <nav>
            <ul className={classes.Destinations}>
                {
                    props.destinations.map((post)=>
                        <Destination key={post.id} post={post} isLoading={props.isLoading} />
                    )
                }
            </ul>
            </nav>
    );
};

export default Destinations;
