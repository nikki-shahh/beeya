import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: this.backgroundColor,
            fontSize: '1.2rem',
            padding: '10px',
            borderRadius: '5px'
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}
class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'brown';
        this.backgroundColor = 'whitesmoke';

    }
}
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
        this.backgroundColor = 'whitesmoke';

    }
}
export { InfoAlert, ErrorAlert };