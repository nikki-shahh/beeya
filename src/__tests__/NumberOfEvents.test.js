import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
    test('render default number of events', () => {
        expect(NumberOfEventsWrapper.find('.DefaultNumber')).toHaveLength(1);
    });
    test('render a list with the specified number of events', () => {
        const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.NumberOfEvents').prop('value')).toBe(numberOfEvents);
    });
});