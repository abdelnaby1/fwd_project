@smoke
Feature: F05_hoverCategories | user could hover a category
    Scenario: user could hover a category and click on one of sub-gategories
        Given user on a home page so he can hover on category
        When user hover on a category
        And user click on a sub-category if exist or just a category
        Then user could see category page details

