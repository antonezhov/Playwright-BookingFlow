const { chromium, expect } = require('@playwright/test');

// const expect = require('expect');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });
  const context = await browser.newContext({
    httpCredentials: {
      username: 'portaldev',
      password: 'portaltest123!'
    },


  });

  // Open new page
  const page = await context.newPage();

  await page.goto('https://stg.elemy.com/');
  console.log('context', context)
  await context.addCookies([{
    name: 'xz',
    value:'1',
    url: 'https://stg.elemy.com/'

  }])

  // await context.close();
  // await browser.close();
})();