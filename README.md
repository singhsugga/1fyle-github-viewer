#### A simple Angular app for displaying the github user profile and its repositories based on the username provided.
Hosted version of this application can be found here: https://flourishing-sawine-3b137d.netlify.app/ 
##### 1. Running the project
`ng serve` this will run the project on `localhost:4200`. make sure angualar cli and nodejs is installed on your system.
##### 2. Running the Unit test
`ng test` will run the test suits with karma on `localhost:9876`

To get the code coverage report use `ng test --code-coverage`

![Coverage Report](./readme/coverage.png?raw=true "Covergae Report")

### Assumptions
1. If user name, Location is not available it will show '--' as a empty placeholder

### Error and Edge cases
1. Error screen will show up witha error image/message and possible actions.
![Error](./readme/error.png?raw=true "Error Screen")
2. If user frequently changes the page, before a http call is completd the previous request will get cancelled to prevent any race condition.



