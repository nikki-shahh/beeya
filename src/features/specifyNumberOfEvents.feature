Feature: Specify Number of Events

    Scenario: When user hasn’t specified a number, 32 is the default number.
       
        Given the user hasn’t specified a number of events
        When the main page is open 
        Then the user will see 32 events as a default

    Scenario: User can change the number of events they want to see.
       
        Given the user did not specify a number of events
        And default number of events has been loaded
        When the user specified a number
        Then a list of events with the specified number will be displayed to the user