const { chromium, expect } = require('@playwright/test');
const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { BookingPage } = require('../pages/BookingPage.js');


test('Home Page Start', async ({ page }) => {
  const homepage = new HomePage(page);
  const bookingflow = new BookingPage(page);

  await homepage.open();
  await homepage.zipCode('12345');
  await homepage.getStarted();
  // How Old Is Your Child?
  await bookingflow.ageSelect();
  await bookingflow.continue();
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.yesSelect();
  await bookingflow.continue();
  // Do You Have Insurance?
  await bookingflow.yesSelect();
  await bookingflow.continue();
  // What’s Your Insurance Provider?
  await bookingflow.providerSelect();
  await bookingflow.continue();
  // Let's Get Started
  await bookingflow.fillFirstName('Antony');
  await bookingflow.fillLastName('Tester');
  await bookingflow.fillPhone('(222) 222-222233');
  await bookingflow.fillEmail('autotest@email.com');
  await bookingflow.submit();
 

  // Scedule a Call
  await bookingflow.clickOn(bookingflow.callScheduleLocator);
  await bookingflow.clickOn(bookingflow.timeSlotLocator);
  await bookingflow.continue();
  await bookingflow.confirm();
 

});

 