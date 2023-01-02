@smoke
Feature: F08_Wishlist | user could add a product to wishlist
    Scenario: user could add a proudct to wishlist successfully
        Given user on home page to add product to wishlist
        When user add "HTC One M8 Android L 5.0 Lollipop" to wishlist
        Then user could see a success message with a green background

    Scenario: user could add a proudct to wishlist and see the quantity
        Given user on home page to add product to wishlist
        When user add "HTC One M8 Android L 5.0 Lollipop" to wishlist
        And user waits for a success message to be gone
        And user goes to wishlist
        Then user could see the quantity of that product greater than zero


