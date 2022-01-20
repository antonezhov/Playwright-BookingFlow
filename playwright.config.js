// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 60000,
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
        slowMo: 500,
        
        
      },

  },
};

module.exports = config;