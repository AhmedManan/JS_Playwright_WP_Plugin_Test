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
## Test

| Test | Description                       | Status |
|------|-----------------------------------|--------|
| 01   | WordPress Login Test              | ✔️ |