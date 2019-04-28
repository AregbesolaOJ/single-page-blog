import React from 'react';
import './CounterControl.css';

const CounterControl = (props) => {
    return (
        <div onClick={props.clicked} className="control">
            <p>{props.label}</p>
        </div>
    )
}

export default CounterControl;