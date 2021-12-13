import React, { Component } from 'react';


class Event extends Component {
    state = {
        collapsed: true,
    };

    handleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { event } = this.props;
        const { collapsed } = this.state;

        return (
            <div className="event">
                <h4 className="summary" as="h4">{event.summary}</h4>
                <div className="EventBody">
                    <p className="StartDate">
                        {event.start.dateTime} | {event.start.timeZone}
                    </p>
                    <p className="location"> location:{event.location}</p>
                    <button variant="primary" className="ShowMore" onClick={this.handleClick}>
                        More details
                    </button>
                    <div className={`MoreInfo ${collapsed ? `hide` : `show`}`}>
                        <h3>More about {event.summary} event:</h3>
                        <a href={event.htmlLink} rel="noreferrer" target="_blank">
                            Click here to see more details on Google Calendar
                        </a>
                        <p className="EventDescription">{event.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Event;