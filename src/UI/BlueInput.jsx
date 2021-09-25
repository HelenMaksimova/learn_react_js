import React from 'react';
import classes from './BlueInput.module.css'

const BlueInput = (props) => {
    return (
        <input className={classes.blue_input} {...props}/>
    );
};

export default BlueInput;