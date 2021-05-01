Feature: sample karate test script
Scenario: aaa

Given url 'https://swapi.dev/api/people/1/'
When method get
Then status 200