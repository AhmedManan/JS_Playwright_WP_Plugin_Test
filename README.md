# Javascript Playwright WordPress Plugin Test
In this repository contains an automation test suite built with Playwright & JavaScript. I implement the Page Object Model (POM) design pattern.

Project Documentation PDF: <a href="https://github.com/AhmedManan/Playwright_WP_Plugin_Automation_Test/Document/Playwright_WordPress_Plugin_Automation_Test.pdf" target="_blank">JS_Playwright_Automation_Test.pdf</a>

## Project Setup

### Prerequisites

Before running the playwright tests, ensure you have the following installed on your system:

- NodeJS ( Installed in your device)
- Java ( Installed in your device)
- A Code Editor ( VSCode is recommended )

### Installation

- Clone this repository to your local machine.
- Install all prerequisites

To create a new playwright project, go to your project root directory and open terminal. Use the below command:
```bash
npm init playwright@latest
```   
When you first clone this repository, go to your project root directory and open terminal. Use the below command:
```bash
npm install
```   

Install the browsers Playwright needs:
```bash
npm install playwright
```

### Setting Up Environment
A .env file is a plain text file used to store environment variables for an application,
especially during local development or testing. It follows a simple key-value format, making
it easy to manage configuration settings. To setup the project you need to create a .env file
using the .env.example file provided in the project repository.

```bash
BASE_URL= Website Base URL
ADMIN_USERNAME= Admin Username
ADMIN_PASSWORD= Admin Password

```   
### Run Tests
To execute the entire test suite across all configured browsers (Chromium, Firefox, WebKit) run command:
```bash
npx playwright test
```   
Run only the tests within the ```plugin.spec.js``` file:
```bash
npx playwright test tests/plugin.spec.js
``` 
To open the browser and visually watch the tests execute (useful for debugging):
```bash
npx playwright test --headed
``` 
## Project Structure
```bash
Playwright_WP_Plugin_Test
├─ .env                     ← .env Variables
├─ playwright.config.js     ← Config
├─ pages                    ← Page Objects Directory
│  ├─ LoginPage.js
│  ├─ DashboardPage.js
│  ├─ PluginPage.js
│  └─ pluginDashboardPage.js      
├─ test_data                ← Test Data Directory (yml, csv, txt etc)
│  └─ plugin.yml
├─ tests                    ← actual tests Directory
│  ├─ login.spec.js
│  └─ plugin.spec.js        
├─ package.json
├─ Screenshots
├─ Utils                    ← Test Utils Directory
│  └─ pluginDataLoader.js
└─ Logs
``` 
## Tests

### WordPress Functionality
| Test | Description                          | Status |
|------|--------------------------------------|--------|
| 01   | WordPress Login Test                 | ✔️ |
| 02   | WordPress Plugin Page Navigation Test| ✔️ |

### Plugin Functionality
| Test | Description                           | Status |
|------|---------------------------------------|--------|
| 01   | Verify Plugin In Installed Plugin List| ✔️ |
| 02   | Plugin Dashboard Page Navigation Test | ✔️ |

## Additional Topics

### Playwright Javascript WordPress Plugin Test
In the bellow mentioned repository contains an automation test suite built with Playwright, Python & Pytest. I implement the Page Object Model (POM) design pattern.

 **Project Link:** [Python_Playwright_WP_Plugin_Test](https://github.com/AhmedManan/QA_WPPOOL_Assignment)

### Similar Topics & Articles

[Python Complete Cheat Sheet](https://mananacademy.com/complete-python-cheat-sheet/)

[Complete JavaScript Cheat sheet](https://mananacademy.com/complete-javascript-cheat-sheet/)

[⬆️ Back to Top](#javascript-playwright-wordpress-plugin-test)