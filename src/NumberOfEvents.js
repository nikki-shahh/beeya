import React, { Component } from 'react';

class NumberOfEvents extends Component {
    render() {
        return (
            <div className="DefaultNumber">
                <input
                    type="number"
                    className="NumberOfEvents"
                    value={this.props.numberOfEvents}
                    onChange={this.props.updateNumberOfEvents}
                />
            </div>
        );
    }
}
export default NumberOfEvents;