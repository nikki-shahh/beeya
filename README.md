# Where2Bee 
An event application which is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

### Features, User Stories and scenarios:

FEATURE 1: FILTER EVENTS BY CITY

<p>User Story: As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.
<li>Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
<li>Scenario 2: User should see a list of suggestions when they search for a city.
<li>Scenario 3: User can select a city from the suggested list.

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

<p>User Story: As a user, I should be able to toggle between showing and hiding so that I can see more or less details about an event.
<li>Scenario 1: An event element is collapsed by default.
<li>Scenario 2: User can expand an event to see its details.
<li>Scenario 3: User can collapse an event to hide its details.

FEATURE 3: SPECIFY NUMBER OF EVENTS

<p>User Story: As a user, I would like to be able to see the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
<li>Scenario 1: When user hasn’t specified a number, 32 is the default number.
<li>Scenario 2: User can change the number of events they want to see.

FEATURE 4: USE THE APP WHEN OFFLINE

<p>User Story: As a user, I should be able to see the app when offline, so that I can see the events I viewed the last time I was online .
<li>Scenario 1: Show cached data when there’s no internet connection.
<li>Scenario 2: Show error when user changes the settings (city, time range).

FEATURE 5: DATA VISUALIZATION

<p>User Story: As a user, I should to be able to see a chart showing the upcoming events in each city, so that I can see what events are organized in which city.
<li>Scenario 1: Show a chart with the number of upcoming events in each city.

### Technical Requirements:

- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization
server instead of using a traditional server.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
as well as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of
1920px and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service
worker.
- Users may be able to install the app on desktop and add the app to their home screen
on mobile.
- The API call must use React axios and async/await.
- The app must implement an alert system using an OOP approach to show information to
the user.
- The app must make use of data visualization (recharts preferred).
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online monitoring tool.

