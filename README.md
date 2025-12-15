# Javascript Playwright WordPress Plugin Test
In this repository contains an automation test suite built with Playwright & JavaScript. I implement the Page Object Model (POM) design pattern.

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
## Project Structure
```bash
Playwright_WP_Plugin_Test
├─ .env                     ← .env variables
├─ playwright.config.js     ← config
├─ pages
│  └─ LoginPage.js          ← page object
├─ tests
│  └─ login.spec.js         ← actual test
├─ package.json
├─ Screenshots
├─ Utils
└─ Logs
``` 
## Tests

| Test | Description                       | Status |
|------|-----------------------------------|--------|
| 01   | WordPress Login Test              | ✔️ |