const { test, chromium, expect } = require('@playwright/test')
const { HomePage } = require('../pages/HomePage.js')
const { BookingPage } = require('../pages/BookingPage.js')


test('Basic Positive Smoke', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)
  
  await homepage.open()
  await homepage.zipCode('90011')
  await homepage.getStarted()
  // How Old Is Your Child?
  await bookingflow.ageSelect(bookingflow.age0_3)
  await bookingflow.continue()
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(bookingflow.yes)
  await bookingflow.continue()
  // Do You Have Insurance?
  await bookingflow.selectOption(bookingflow.yes)
  await bookingflow.continue()
  // What’s Your Insurance Provider?
  await bookingflow.providerSelect()
  await bookingflow.continue()
  // Let's Get Started
  await bookingflow.fillFirstName('Autotest')
  await bookingflow.fillLastName('User')
  await bookingflow.fillEmail('autotest@email.com')
  await bookingflow.fillPhone('(222) 222-222233')
  await bookingflow.submit()
  // Scedule a Call
  await bookingflow.clickOn(bookingflow.callScheduleLocator)
  await bookingflow.clickOn(bookingflow.timeSlotLocator0)
  await bookingflow.continue()
  await bookingflow.confirm()

});


test('Positive Smoke Shortcut Scenario', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)

  await homepage.open()
  await homepage.zipCode('90011')
  await homepage.getStarted()
  // How Old Is Your Child?
  await bookingflow.ageSelect(bookingflow.age4_7)
  await bookingflow.continue()
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(bookingflow.no)
  await bookingflow.continue()
  // Do You Have Insurance?
  await bookingflow.selectOption(bookingflow.no)
  await bookingflow.continue()
  // Let's Get Started
  await bookingflow.fillFirstName('Autotest_Short')
  await bookingflow.fillLastName('User')
  await bookingflow.fillEmail('autotest@email.com')
  await bookingflow.fillPhone('(222) 222-222233')
  await bookingflow.submit()
  // Scedule a Call
  await bookingflow.clickOn(bookingflow.callScheduleLocator)
  await bookingflow.clickOn(bookingflow.timeSlotLocator0)
  await bookingflow.continue()
  await bookingflow.confirm()

});

test('Unqualified by Age Scenario', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)

  await homepage.open()
  await homepage.zipCode('90011')
  await homepage.getStarted()
  // How Old Is Your Child?
  await bookingflow.ageSelect(bookingflow.age10)
  await bookingflow.continue()
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(bookingflow.yes)
  await bookingflow.continue();
  // Do You Have Insurance?
  await bookingflow.selectOption(bookingflow.yes)
  await bookingflow.continue()
  // What’s Your Insurance Provider?
  await bookingflow.providerSelect()
  await bookingflow.continue()
  // Let's Get Started
  await bookingflow.fillFirstName('Autotest_Short')
  await bookingflow.fillLastName('User')
  await bookingflow.fillEmail('autotest@email.com')
  await bookingflow.fillPhone('(222) 222-222233')
  await bookingflow.submit()
  // Go home
  await bookingflow.clickOn(bookingflow.btnGoToHomePage)

});

test('Unqualified by ZipCode Scenario', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)

  await homepage.open()
  await homepage.zipCode('12345')
  await homepage.getStarted()
  // How Old Is Your Child?
  await bookingflow.ageSelect(bookingflow.age8_9)
  await bookingflow.continue()
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(bookingflow.yes)
  await bookingflow.continue();
  // Do You Have Insurance?
  await bookingflow.selectOption(bookingflow.yes)
  await bookingflow.continue()
  // What’s Your Insurance Provider?
  await bookingflow.providerSelect()
  await bookingflow.continue()
  // Let's Get Started
  await bookingflow.fillFirstName('Autotest_Short')
  await bookingflow.fillLastName('User')
  await bookingflow.fillEmail('autotest@email.com')
  await bookingflow.fillPhone('(222) 222-222233')
  await bookingflow.submit()
  // Scedule a Call
  await bookingflow.clickOn(bookingflow.btnGoToHomePage)

});