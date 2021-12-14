import React, { Component } from 'react';
import moment from "moment";


class Event extends Component {
    state = {
        showMore: false,
    };

    render() {
        const { showMore } = this.state;
        const { summary, location, start, htmlLink, description } = this.props.event;
        const eventStart = moment(start.dateTime, "YYYY-MM-DD HH:mm").toDate();
        return (
            <div className="event">
                <h4 className="summary" as="h4">{summary}</h4>
                <div className="EventBody">
                    <p className="StartDate">
                        {`${eventStart}`} | {start.timeZone}
                    </p>
                    <p className="locations"> Location: {location} </p>

                    {showMore && (
                        <button className="ShowMore" onClick={() => this.setState({ showMore: !showMore })}>
                            hide details
                        </button>
                    )}
                    {!showMore && (
                        <button
                            className="ShowMore" onClick={() => this.setState({ showMore: !showMore })}>
                            show details
                        </button>
                    )}
                </div>
                {showMore && (
                    <div className="MoreInfo">
                        <h3>More about {summary} event:</h3>
                        <a href={htmlLink} target="_blank" rel="noopener noreferrer">
                            Click here to see more details on Google Calendar
                        </a>
                        <p className="EventDescription">{description}</p>
                    </div>
                )}
            </div >
        );
    }
}
export default Event;