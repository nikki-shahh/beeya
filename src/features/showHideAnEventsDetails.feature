Feature: Show/hide event details

    Scenario: An event element is collapsed by default.
        Given the main page is open
        When the user has not clicked on the button
        Then all the event elements should be collapsed

    Scenario: User can expand an event to see its details.
        Given event element is collapsed
        When the user clicks on more details buttons on an event element
        Then the event element should expand

    Scenario: User can collapse an event to hide its details.
        Given event element is expanded and shows details
        When the user clicks on hide details button 
        Then the event element details should collapse
