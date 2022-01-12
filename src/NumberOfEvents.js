import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    render() {
        return (
            <div className="DefaultNumber">
                <label>How many events? </label>
                <br></br>
                <input
                    type="text"
                    className="NumberOfEvents"
                    value={this.props.numberOfEvents}
                    onChange={(e) => this.props.updateNumberOfEvents(e)}
                />
                <ErrorAlert text={this.props.errorText} />
            </div>
        );
    }
}
export default NumberOfEvents;