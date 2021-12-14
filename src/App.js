import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { Container, Row, Col } from "react-bootstrap";
import { mockData } from './mock-data';
import "./nprogress.css";
import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      locations: {},
      numberOfEvents: 32,
      currentLocation: "all"
    };
  }

  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = async (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);

      const eventsToShow = locationEvents.slice(0, numberOfEvents);
      if (this.mounted) {
        this.setState({
          events: eventsToShow,
          currentLocation: location,
        });
      }
    });
  };

  updateNumberOfEvents = async (e) => {
    const newVal = e.target.value ? parseInt(e.target.value) : 32;
    await this.setState({ numberOfEvents: newVal });
    this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
  };

  render() {
    return (
      <div className="App">
        <main>
          <img src={logo} className="App-logo" alt="logo" />
          <Container fluid>
            <Row className="d-flex justify-content-center pt-0">
              <Col md={3} sm={10}>
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
              </Col>
            </Row>
            <EventList events={this.state.events} />
          </Container>
        </main>
      </div>
    );
  }
}
export default App;
