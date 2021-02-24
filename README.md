## How to run the tests

- Run `npm install` to install requirements packages.
- Call the `npm run test` command in a command line to run the tests on Chrome browser.

## Improvements suggestions

- As we have a test for successful login, it may need adding the following test cases for non-successful login as well (decision table test technique can be used to determine these test cases).
  - Should not login with the wrong email and display error message.
  - Should not login with the wrong password and display error.
  - Should not login without email and password.
- Adding several bugs to application project due to not mobile friendly environment, especially on the home page (assumed that app is designed mobile friendly).
- Create a web-app or use 3rd party application to display the test result (it helps when we have more test cases and want to share the result).
- Create a script to simplified running tests. This script can have the following features:
  - Run tests on several remote target browsers.
  - Run tests with the headless mode which is faster than run tests with UI.
  - Run tests on mobile devices by generating the QR code.
  - Run tests concurrently (it helps to run tests faster when we have many tests).
  - Generate test report.
- Create a guideline to describe and define some coding format in order to have a consistent coding style, for example:
  - Using camelCase format for naming methods.
  - Adding comments to describe the methods.

## Testing strategy in a Scrum/DevOps environment

1. Planning
   - Participate in sprint planning meeting, get familiar with tasks and estimating testing effort.
2. Developing and testing
   - Analyzing tasks with collaboration of developer to create user story (what to test) based on the requirement and design.
   - Design and implementing a test cases (manual, automation, non-functional, etc.) based on test condition as soon as the task is ready to test.
3. Execution
   - Run tests either manually or by using automated tool on desire environments.
   - Compare an actual results with expected results and if any differ, analysis and report it as an anomaly to developer.
4. Test review
   - Reviewing tests by another team member (ideally another tester).
5. Completion
   - Check whether all defect reports are closed.
   - Running regression test and report anomalies if any and re-test after fixing defects.
   - Participate in the retrospective meeting (what should avoid, what should do, etc.).
