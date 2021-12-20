import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mount, shallow } from 'enzyme';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        let AppWrapper;
        let NumberOfEventsWrapper;
        given('the user hasn’t specified a number of events', () => {

        });

        when('the main page is open', () => {
            AppWrapper = mount(<App />);
        });

        then('the user will see 32 events as a default', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
            expect(NumberOfEventsWrapper.find('.DefaultNumber')).toHaveLength(1);
        });
    });
    test('User can change the number of events they want to see.', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the user did not specify a number of events', () => {

        });

        and('default number of events has been loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user specified a number', () => {
            AppWrapper.find('.NumberOfEvents').simulate('change', { target: { value: '13' } });
        });

        then('a list of events with the specified number will be displayed to the user', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.setState({ numberOfEvents: 13 });
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(13);
        });
    });
});