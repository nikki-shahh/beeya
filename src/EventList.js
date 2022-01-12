import React from "react";
import Event from "./Event";
import { Row, Col } from "react-bootstrap";

const EventList = ({ events }) => {
    if (!events) return null;
    return (
        <Row>
            <Col md={10} sm={12} className="event-list-wrapper">
                <ul className="EventList">
                    {events.map((event) => (
                        <li key={event.id}>
                            <Event event={event} />
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    );
};

export default EventList;