import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event/> Component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData} />);
    });
    test('renders summary', () => {
        const EventWrapper = shallow(<Event event={mockData} />);
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });
    test('renders location', () => {
        const EventWrapper = shallow(<Event event={mockData} />);
        expect(EventWrapper.find('.locations')).toHaveLength(1);
    });
    test('renders StartDate', () => {
        const EventWrapper = shallow(<Event event={mockData} />);
        expect(EventWrapper.find('.StartDate')).toHaveLength(1);
    });
    test("renders ShowMore button", () => {
        expect(EventWrapper.find(".ShowMore")).toHaveLength(1);
    });
    test("showMore true", () => {
        expect(EventWrapper.state("showMore")).toBe(false);
    });
    test("change showMore state to false when click on ShowMore", () => {
        EventWrapper.find('.ShowMore').simulate('click')
        expect(EventWrapper.state("showMore")).toBe(true);
    });
    test("test that show/hide details button is rendered", () => {
        expect(EventWrapper.find(".EventBody button")).toHaveLength(1);
    });
});