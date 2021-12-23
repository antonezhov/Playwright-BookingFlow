const { chromium, expect } = require('@playwright/test');
const { test } = require('@playwright/test');
const { MainPage } = require('../pages/main-page.js');


test('Elemy/booking flow_01', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.zipCode('12345');
    await mainPage.getStarted();

  });