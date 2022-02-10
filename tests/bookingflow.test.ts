import { test, chromium, expect } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { BookingPage } from '../pages/booking-page'
import { data } from '../data/data'

test('Basic Positive Smoke', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)
  
  await homepage.open()
  await homepage.zipCode('90011')
  await homepage.getStarted()

  // Autism Care Select
  await bookingflow.clickOn(data.btnAutismCare)

  // How Old Is Your Child?
  await bookingflow.ageSelect(data.age0_3)
  await bookingflow.continue()
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(data.yes)
  await bookingflow.continue()
  // Do You Have Insurance?
  await bookingflow.selectOption(data.yes)
  await bookingflow.continue()
  // What’s Your Insurance Provider?
  await bookingflow.providerSelect()
  await bookingflow.continue()
  // Let's Get Started
  await bookingflow.fillFirstName('Autotest')
  await bookingflow.fillLastName('User')
  await bookingflow.fillEmail('anton.ezhov+autotestleadver@elemy.com')
  await bookingflow.fillPhone('(222) 222-222233')
  await bookingflow.submit()
  // Scedule a Call
  const dt = new Date()
  const hr:number = dt.getUTCHours()
  console.log(hr)
  // if (hr >= 9 && hr < 21) {
  // await bookingflow.clickOn(data.callScheduleLocator)
  // }

  await bookingflow.clickOn(data.timeSlotLocator0)
  await bookingflow.continue()
  await bookingflow.confirm()

});


test('Positive Smoke Shortcut Scenario', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)
  
  await homepage.open()
  await homepage.zipCode('90011')
  await homepage.getStarted()

  // Autism Care Select
  await bookingflow.clickOn(data.btnAutismCare)
  // How Old Is Your Child?
  await bookingflow.ageSelect(data.age4_7)
  await bookingflow.continue()
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(data.no)
  await bookingflow.continue()
  // Do You Have Insurance?
  await bookingflow.selectOption(data.no)
  await bookingflow.continue()
  // Let's Get Started
  await bookingflow.fillFirstName('Autotest_Short')
  await bookingflow.fillLastName('User')
  await bookingflow.fillEmail('autotest@email.com')
  await bookingflow.fillPhone('(222) 222-222233')
  await bookingflow.submit()
  // Scedule a Call
  const dt = new Date()
  const hr:number = dt.getUTCHours()
  // if (hr >= 3 && hr < 14) {
  // await bookingflow.clickOn(data.callScheduleLocator)
  // }
  await bookingflow.clickOn(data.timeSlotLocator0)
  await bookingflow.continue()
  await bookingflow.confirm()

});

test('Unqualified by Age Scenario', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)

  await homepage.open()
  await homepage.zipCode('90011')
  await homepage.getStarted()

  // Autism Care Select
  await bookingflow.clickOn(data.btnAutismCare)
  // How Old Is Your Child?
  await bookingflow.ageSelect(data.age10)
  await bookingflow.continue()
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(data.yes)
  await bookingflow.continue();
  // Do You Have Insurance?
  await bookingflow.selectOption(data.yes)
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
  await bookingflow.clickOn(data.btnGoToHomePage)

});

test('Unqualified by ZipCode Scenario', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)

  await homepage.open()
  await homepage.zipCode('12345')
  await homepage.getStarted()

  // Autism Care Select
  await bookingflow.clickOn(data.btnAutismCare)
  // How Old Is Your Child?
  await bookingflow.ageSelect(data.age8_9)
  await bookingflow.continue()
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(data.yes)
  await bookingflow.continue();
  // Do You Have Insurance?
  await bookingflow.selectOption(data.yes)
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
  await bookingflow.clickOn(data.btnGoToHomePage)

});