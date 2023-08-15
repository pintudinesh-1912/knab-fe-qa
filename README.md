# knab-fe-qa

This project is just a simple FE automation project which makes use of the Playwright framework. This project only covers tests for creating a board in Trello. Please note that since there is a captcha check for creation of new accounts for the website, this project makes use of the existing accounts only. Please also note that the free account only allows 7 boards creation after which the suite will start failing. In such a case, either change the account (by creating a new set of account) or manually remove the boards from the website.

Website for reference: https://trello.com/login

**Noteworthy features**
- Project is based on Playwright Framework
- Makes use of BDD and POM
- Coding is done in Typescript
- HTML reports are generated
- CI/CD pipelines are configured
- Parallel execution enabled for 2 instances


**Steps to execute project Locally**
- Pre-requisite : Node v13 and above. Link to download node: https://nodejs.org/en/download
- Perform the below steps at the root of the project:
  - `npm install` : Installs all the required dependencies
  - `npx playwright install` : Installs playwright for local execution and browser downloads
  - `npm test` : Executes the test suite and generates the report
    - Report Path : "test-reports/html-report/index.html"

**Project Configuration**
- Project supports all the native browsers viz, chrome, firefox and webkit (safari)
- By default, the project runs in headless mode (on Chromium browser)
  - In order to change this behaviour, please pass env variable for Browser as "webkit" or "firefox"
  - In order to change browser settings, please also refer cucumber.json 
- Screenshots are only captured in case of failures