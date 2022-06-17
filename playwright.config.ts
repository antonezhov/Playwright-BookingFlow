// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 999999,
  
  use: {
    viewport: { width: 640, height: 480 },
    browserName: 'webkit',
    httpCredentials: {
      username: 'portaldev',
      password: 'portaltest123!',
    },

   
      headless: false,
      
      launchOptions: {
        slowMo: 500,
        
        
      },

  },
  // projects: [
  //   {
  //     name: 'Desktop Chromium',
  //     use: {
  //       browserName: 'chromium',
  //     },
  //   },

    // Test against mobile viewports.
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // },
  // ],
};

module.exports = config;