import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { mockData } from './mock-data';
import "./nprogress.css";
import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: mockData.slice(0, 32),
      locations: extractLocations(mockData),
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

  updateEvents = async (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);

      const eventsToShow = locationEvents.slice(0, eventCount);
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
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}
export default App;
