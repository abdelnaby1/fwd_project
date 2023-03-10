@smoke
Feature: F07_followUs | user can follow us on soical websties
    Scenario: user opens facebook link
        Given user on home page to follow
        When user opens facebook link
        Then "https://www.facebook.com/nopCommerce" is opened in new tab

    Scenario: user opens twitter link
        Given user on home page to follow
        When user opens twitter link
        Then "https://twitter.com/nopCommerce" is opened in new tab

    Scenario: user opens rss link
        Given user on home page to follow
        When user opens rss link
        Then "https://demo.nopcommerce.com/new-online-store-is-open" is opened in new tab

    Scenario: user opens youtube link
        Given user on home page to follow
        When user opens youtube link
        Then "https://www.youtube.com/user/nopCommerce" is opened in new tab