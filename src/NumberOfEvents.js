import React, { Component } from 'react';

class NumberOfEvents extends Component {

    render() {
        return (
            <div className="DefaultNumber">
                <label>How many events? </label>
                <input
                    type="text"
                    className="NumberOfEvents"
                    value={this.props.numberOfEvents}
                    onChange={(e) => this.props.updateNumberOfEvents(e)}
                />
            </div>
        );
    }
}
export default NumberOfEvents;