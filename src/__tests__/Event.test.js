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
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });
    test('renders StartDate', () => {
        const EventWrapper = shallow(<Event event={mockData} />);
        expect(EventWrapper.find('.StartDate')).toHaveLength(1);
    });
    test("renders ShowMore button", () => {
        expect(EventWrapper.find(".ShowMore")).toHaveLength(1);
    });
    test("collapsed true", () => {
        expect(EventWrapper.state("collapsed")).toBe(true);
    });
    test("change collapsed state to false when click on ShowMore", () => {
        EventWrapper.find('.ShowMore').simulate('click')
        expect(EventWrapper.state("collapsed")).toBe(false);
    });
    test("expand the event details when collapsed state is false ", () => {
        EventWrapper.setState({
            collapsed: false,
        });
        const moreInfo = EventWrapper.find(".MoreInfo");
        expect(moreInfo.find(".show")).toHaveLength(1);
    });
    test("hide the event details when collapsed state is true", () => {
        EventWrapper.setState({
            collapsed: true,
        });
        const moreInfo = EventWrapper.find(".MoreInfo");
        expect(moreInfo.find(".hide")).toHaveLength(1);
    });
});