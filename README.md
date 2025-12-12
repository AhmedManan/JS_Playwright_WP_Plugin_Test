# Javascript Playwright WordPress Plugin Test
In this repository contains an automation test suite built with Playwright, Python & Pytest. I implement the Page Object Model (POM) design pattern.

## Project Structure
```bash
Playwright_WP_Plugin_Test
├─ .env                     ← your variables
├─ playwright.config.js     ← 10-line config
├─ pages
│  └─ LoginPage.js          ← page object
├─ tests
│  └─ login.spec.js         ← actual test
└─ package.json
``` 
## Test

| Test | Description                       | Status |
|------|-----------------------------------|--------|
| 01   | WordPress Login Test              | ✔️ |