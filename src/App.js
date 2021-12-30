import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
  './api';
import { Container, Row, Col } from "react-bootstrap";
import { InfoAlert } from './Alert';
import "./nprogress.css";
import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      locations: {},
      showWelcomeScreen: undefined,
      numberOfEvents: 32,
      currentLocation: "all"
    };
  }
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events)
          });
        }
      });
    }
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
    if (newVal < 1 || newVal > 32) {
      await this.setState({
        errorText: "Please choose a number between 1 and 32",
      });
    } else {
      await this.setState({
        errorText: "",
        numberOfEvents: newVal,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />
    return (
      <div className="App">
        <main>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            {!navigator.onLine ? (<InfoAlert text='You are offline!' />) : (<InfoAlert text=' ' />)}
          </div>
          <Container fluid>
            <Row className="d-flex justify-content-center pt-0">
              <Col md={3} sm={10}>
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents
                  numberOfEvents={this.state.numberOfEvents}
                  updateNumberOfEvents={this.updateNumberOfEvents}
                  errorText={this.state.errorText}
                />
              </Col>
            </Row>
            <EventList events={this.state.events} />
          </Container>
          <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => { getAccessToken() }} />
        </main>
      </div>
    );
  }
}
export default App;
