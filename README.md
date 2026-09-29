# Inspired Mobile Testing

An automated testing practice project with native mobile UI tests and REST API tests. The mobile suite uses WebdriverIO, Appium, and Mocha; the API suite uses Playwright Test against the public Restful Booker API.

## Project Layout

```text
api/
	tests/              API tests for authentication and bookings
	playwright.config.js
mobile/
	config/             WebdriverIO Android and shared configuration
	test/pageobjects/   Mobile page objects
	test/specs/         Login, signup, forms, swipe, and WebView tests
	apps/               Expected location for the Android app under test
evidence/             Screenshots and other test evidence
```

## Requirements

- Node.js 20 or later and npm 10 or later
- Internet access for the Restful Booker API: `https://restful-booker.herokuapp.com`
- For Android tests: Android Studio/SDK, an Android 14 emulator named `emulator-5554`, ADB available on `PATH`, and Appium with the UiAutomator2 driver

## API Tests

Install the API test dependencies and run the suite:

```powershell
cd api
npm install
npm test
```

The tests check token creation with valid credentials and booking creation with a matching response. To open the generated HTML report after a run:

```powershell
npm run report
```

The report is written to `api/playwright-report/`.

## Android Tests

The Android configuration expects the application package at:

```text
mobile/apps/android.wdio.native.app.v2.2.0.apk
```

It targets an Android 14 emulator with device name `emulator-5554`. Start the emulator and Appium server, then run from the `mobile` directory:

```powershell
cd mobile
npm run test:android
```

**Current setup gaps:** `mobile/apps/` is empty, so the APK must be provided before tests can run. Also, `mobile/package.json` does not declare the WebdriverIO/Appium dependencies recorded in `mobile/package-lock.json`; a clean dependency install is therefore not currently reproducible. Restore the dependency declarations before setting up a fresh checkout. Failed mobile tests attempt to save screenshots under `evidence/`.

## iOS Status

Although `mobile/package.json` defines a `test:ios` script, the referenced `config/wdio.ios.conf.js` is not present. The iOS test command is not currently configured.