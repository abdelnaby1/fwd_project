# @smoke
Feature:  F06_homeSliders | user could click on each slider

    Scenario: user redirected to another page when click on the first slider
        Given user on home page
        When user click on the first slider
        Then user redirected to "https://demo.nopcommerce.com/nokia-lumia-1020"

    Scenario: user redirected to another page when click on the second slider
        Given user on home page
        When user click on the second slider
        Then user redirected to "https://demo.nopcommerce.com/iphone-6"

