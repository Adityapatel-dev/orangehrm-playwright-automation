# OrangeHRM Playwright Automation Framework

Playwright + TypeScript automation framework for testing the OrangeHRM web application.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- API Testing
- AJV
- Git
- GitHub Actions

## Key Features

- Page Object Model (POM)
- Custom Playwright Fixtures
- UI Automation
- API Testing
- Data-Driven Testing
- API Request Chaining
- API/UI Integration Testing
- Negative API Testing
- JSON Schema Validation
- Authentication using `storageState`
- Smoke and Regression Testing
- Test Tags
- Cross-Browser Testing
- Screenshots, Videos and Traces on Failure
- HTML Reporting
- GitHub Actions CI/CD

## Project Structure

```text
orangehrm-playwright-automation/
├── .github/workflows/
│   └── playwright.yml
├── data/
├── fixtures/
├── pages/
├── reporters/
├── schemas/
├── tests/
│   ├── api/
│   ├── api-ui/
│   ├── data/
│   ├── data-driven/
│   └── framework/
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
````

## Installation

```bash
git clone https://github.com/Adityapatel-dev/orangehrm-playwright-automation.git
cd orangehrm-playwright-automation
npm ci
npx playwright install
```

## Run Tests

```bash
# TypeScript validation
npm run typecheck

# Smoke tests
npm run test:smoke

# Regression tests
npm run test:regression

# API tests
npm run test:api

# Chromium
npm run test:chromium

# Firefox
npm run test:firefox

# WebKit
npm run test:webkit

# Open HTML report
npm run report
```

## Test Coverage

The framework covers:

* Login and Logout
* Dashboard validation
* Data-driven login scenarios
* API authentication
* API health validation
* Negative API testing
* API request chaining
* Employee API workflows
* API schema validation
* API/UI integration
* Fixture validation
* Smoke and regression testing

## CI/CD

GitHub Actions is configured to automatically run Playwright smoke tests and publish test reports and artifacts.

```text
Git Push
   ↓
GitHub Actions
   ↓
Install Dependencies
   ↓
TypeScript Validation
   ↓
Playwright Smoke Tests
   ↓
HTML Report & Artifacts
```

## Author

**Aditya Patel**

GitHub:
[https://github.com/Adityapatel-dev](https://github.com/Adityapatel-dev)

Project:
[https://github.com/Adityapatel-dev/orangehrm-playwright-automation](https://github.com/Adityapatel-dev/orangehrm-playwright-automation)
