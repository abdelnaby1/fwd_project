# @smoke
Feature: F04_Search | user can search for stores
    Background:
        Given user on home page so he can search

    Scenario Outline: user could search by product name
        When user searches for a <productName>
        Then user could see the results of that <productName>

        Examples:
            | productName |
            # | book        |
            | laptop      |
            | nike        |

    Scenario Outline: user could search for product using sku
        When user searches for a <sku>
        Then user could see the product whose own this <sku>

        Examples:
            | sku       |
            | SCI_FAITH |
            | APPLE_CAM |
            | SF_PRO_11 |

