import React from 'react';
import classes from './BlueButton.module.css'

const BlueButton = ({children, ...props}) => {
    return (
        <button className={classes.blue_button} {...props}>{children}</button>
    );
};

export default BlueButton;