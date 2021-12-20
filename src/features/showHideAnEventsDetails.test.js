import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../event';
import { mockData } from '../mock-data';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        AppWrapper = mount(<App />);
        given('the main page is open', () => {

            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        when('the user has not clicked on the button', () => {

        });
        then('all the event elements should be collapsed', () => {
            let EventWrapper;
            EventWrapper = shallow(<Event event={mockData[0]} />)
            expect(EventWrapper.find('.MoreInfo')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let EventWrapper;
        EventWrapper = shallow(<Event event={mockData[0]} />);

        given('event element is collapsed', () => {
            expect(EventWrapper.find('.MoreInfo')).toHaveLength(0);
        });

        when('the user clicks on more details buttons on an event element', () => {
            EventWrapper.update();
            EventWrapper.find('.ShowMore').simulate('click');
        });

        then('the event element should expand', () => {
            expect(EventWrapper.state("showMore")).toBe(true);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let EventWrapper;
        EventWrapper = shallow(<Event event={mockData[0]} />);

        given('event element is expanded and shows details', () => {
            EventWrapper.find('.ShowMore').simulate('click');
            expect(EventWrapper.state("showMore")).toBe(true);
        });

        when('the user clicks on hide details button', () => {
            EventWrapper.update();
            EventWrapper.find('.ShowMore').simulate('click');
        });

        then('the event element details should collapse', () => {
            expect(EventWrapper.state("showMore")).toBe(false);
        });
    });
});