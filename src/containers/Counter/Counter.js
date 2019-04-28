import React from 'react';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import { connect } from 'react-redux';


class Counter extends React.Component {
    render() {
        return(
            <div className="">
                <CounterOutput count={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 15" clicked={this.props.onAddition} />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtraction} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        onAddition: () => dispatch({type: 'ADD'}),
        onSubtraction: () => dispatch({type: 'SUB'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
