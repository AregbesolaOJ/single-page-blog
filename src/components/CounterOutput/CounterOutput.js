import React from 'react';
import './CounterOutput.css';

const CounterOutput = (props) => {
    return (
        <div className="output">
            <h1>Counter: {props.count}</h1>
        </div>
    )
}

export default CounterOutput;