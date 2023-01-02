@smoke
Feature:  F06_homeSliders | user could click on each slider

    Background:
        Given user on home page to click on slider

    Scenario: user redirected to another page when click on the first slider
        When user click on the first slider
        Then user redirected to "https://demo.nopcommerce.com/nokia-lumia-1020"

    Scenario: user redirected to another page when click on the second slider
        When user click on the second slider
        Then user redirected to "https://demo.nopcommerce.com/iphone-6"

