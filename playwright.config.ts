// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 150000,
  
  use: {
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://stg.elemy.com',
    httpCredentials: {
      username: 'portaldev',
      password: 'portaltest123!',
    },

    browserName: 'chromium',
      headless: false,
      
      launchOptions: {
        slowMo: 200,
        
        
      },

  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
      },
    },

    // Test against mobile viewports.
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // },
  ],
};

module.exports = config;