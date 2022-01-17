const { chromium, expect } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000
  });
  const context = await browser.newContext({
    httpCredentials: {
      username: 'portaldev',
      password: 'portaltest123!'
    },


  });

  // Open new page
  const page = await context.newPage();

  const url = 'https://stg.elemy.com/'


  await page.goto(url);


  // Click main [data-test-id="zip-code-input"]
  await page.click('main [data-test-id="zip-code-input"]');
  // Fill main [data-test-id="zip-code-input"]
  await page.fill('main [data-test-id="zip-code-input"]', '12345');
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.elemy.com/parent-booking?z=MTIzNDU=' }*/),
    page.click('main [data-test-id="zip-code-button"]')
  ]);

  // Click text=0 - 3 Years Old
  await page.click('text=0 - 3 Years Old');

  // Click text=Continue
  await page.click('text=Continue');
  await expect(page).toHaveURL('https://stg.elemy.com/parent-booking?z=MTIzNDU=');

  // Click text=Yes
  await page.click('text=Yes');
  // Click text=Continue
  await page.click('text=Continue');
  await expect(page).toHaveURL('https://stg.elemy.com/parent-booking?z=MTIzNDU=');

  // Click text=Yes
  await page.click('text=Yes');
  // Click text=Continue
  await page.click('text=Continue');
  // assert.equal(page.url(), 'https://stg.elemy.com/parent-booking?z=MTIzNDU=');
  // Click #provider div div:has-text("Select insurance provider")
  await page.click('#provider div div:has-text("Select insurance provider")');
  // Click #react-select-2-option-3
  await page.click('#react-select-2-option-3');
  // Click text=Continue
  await page.click('text=Continue');
  // assert.equal(page.url(), 'https://stg.elemy.com/parent-booking?z=MTIzNDU=');
  // Click input[name="firstName"]
  await page.click('input[name="firstName"]');
  // Fill input[name="firstName"]
  await page.fill('input[name="firstName"]', 'Autotest');
  // Click input[name="lastName"]
  await page.click('input[name="lastName"]');
  // Fill input[name="lastName"]
  await page.fill('input[name="lastName"]', 'Autotest');
  // Click [placeholder="example@elemy.com"]
  await page.click('[placeholder="example@elemy.com"]');
  // Fill [placeholder="example@elemy.com"]
  await page.fill('[placeholder="example@elemy.com"]', 'autotest@email.com');
  // Click [data-test-id="phone-input"]
  await page.click('[data-test-id="phone-input"]');
  // Fill [data-test-id="phone-input"]
  await page.fill('[data-test-id="phone-input"]', '(222) 222-222233');

  // await page.pause();


  // Click button:has-text("Submit")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://stg.elemy.com/parent-booking?z=MTIzNDU=' }*/),
    page.click('button:has-text("Submit")')
  ]);

 
  // Click [data-test-id="time-slot-0-1"]
  await page.click('[data-test-id="time-slot-0-1"]');
  // Click [data-test-id="working-time-continue-button"]


  // Click [data-test-id="non-working-time-continue-button"]
  await page.click('[data-test-id="non-working-time-continue-button"]');
  // assert.equal(page.url(), 'https://stg.elemy.com/parent-booking?z=MTIzNDU=');
  // Click [data-test-id="edit-time-slot-button"]
  await page.click('[data-test-id="edit-time-slot-button"]');
  // assert.equal(page.url(), 'https://stg.elemy.com/parent-booking?z=MTIzNDU=');
  // Click text=Wed22
  // await page.pause();
  await page.click('text=Wed');
  // Click [data-test-id="time-slot-2-2"]
  await page.click('[data-test-id="time-slot-2-2"]');
  // Click [data-test-id="non-working-time-continue-button"]
  await page.click('[data-test-id="non-working-time-continue-button"]');
  // assert.equal(page.url(), 'https://stg.elemy.com/parent-booking?z=MTIzNDU=');
  // Click [data-test-id="confirm-call-button"]
  await page.click('[data-test-id="confirm-call-button"]');
  // Go to https://stg.elemy.com/parent-booking?z=MTIzNDU=
  await page.goto('https://stg.elemy.com/parent-booking?z=MTIzNDU=');
  // Click svg
  await page.click('svg');
  // assert.equal(page.url(), 'https://stg.elemy.com/');

  await context.close();
  await browser.close();

})();