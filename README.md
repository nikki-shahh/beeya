# where2bee
building a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

### Key Features:
- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

### User Story and Scenario:

USER STORY: As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.
<p>Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.<br/>
Scenario 2: User should see a list of suggestions when they search for a city.<br/>
Scenario 3: User can select a city from the suggested list.</p>

USER STORY: As a user, I should be able to toggle between showing and hiding so that I can see more or less details about an event.
<p>Scenario 1: An event element is collapsed by default.<br/>
Scenario 2: User can expand an event to see its details.<br/>
Scenario 3: User can collapse an event to hide its details.</p>
 
USER STORY: As a user, I would like to be able to see the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
<p>Scenario 1: When user hasn’t specified a number, 32 is the default number.<br/>
Scenario 2: User can change the number of events they want to see.</p>

USER STORY: As a user, I should be able to see the app when offline, so that I can see the events I viewed the last time I was online .
<p>Scenario 1: Show cached data when there’s no internet connection.<br/>
Scenario 2: Show error when user changes the settings (city, time range).</p>


USER STORY: As a user, I should to be able to see a chart showing the upcoming events in each city, so that I can see what events are organized in which city.
<p>Scenario 1: Show a chart with the number of upcoming events in each city.</p>

### Technical Requirements:
<ul>
<li> The app must be a React application.</li>
<li> The app must be built using the TDD technique.</li>
<li> The app must use the Google Calendar API and OAuth2 authentication flow.</li>
<li> The app must use serverless functions (AWS lambda is preferred) for the authorization
server instead of using a traditional server.</li>
<li> The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
as well as on IE11.</li>
<li> The app must display well on all screen sizes (including mobile and tablet) widths of
1920px and 320px.</li>
<li> The app must pass Lighthouse’s PWA checklist.</li>
<li> The app must work offline or in slow network conditions with the help of a service
worker.</li>
<li> Users may be able to install the app on desktop and add the app to their home screen
on mobile.</li>
<li> The API call must use React axios and async/await.</li>
<li> The app must implement an alert system using an OOP approach to show information to
the user.</li>
<li> The app must make use of data visualization (recharts preferred).</li>
<li> The app must be covered by tests with a coverage rate >= 90%.</li>
<li> The app must be monitored using an online monitoring tool. </li></ul>
