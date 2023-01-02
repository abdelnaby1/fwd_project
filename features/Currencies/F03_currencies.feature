@smoke
Feature: F03_currencies | users could change the currency

    Scenario: users could change currency to euro
        Given user on home page to change currency
        When user changes curreny to euro
        Then the price of the products shown in euro