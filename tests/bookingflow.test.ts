import { test, chromium, expect } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { BookingPage } from '../pages/booking-page'
import { data } from '../data/data'

declare global {
  interface Date{
    yyyymmddhhminss: () => string;    
  }
}

test('Basic Positive Smoke', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)

  await homepage.open()
  await homepage.zipCode('90011')
  await homepage.getStarted()

  // Autism Care Select
  await bookingflow.clickOn(data.btnAutismCare)

  // How Old Is Your Child?
  await bookingflow.fillField(data.ageLocator, '3')
  await bookingflow.continue()
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(data.yes)
  await bookingflow.continue()
  // Do You Have Insurance?
  await bookingflow.selectOption(data.yes)
  await bookingflow.continue()
  // await page.pause();
  await bookingflow.fillFirstName('Autotest')
  await bookingflow.fillLastName('User')
  await bookingflow.fillEmail()
  await bookingflow.fillPhone('(222) 222-222233')
  await bookingflow.fillField(data.passLocator, 'Test111!')
  await bookingflow.fillField(data.passConfirmLocator, 'Test111!')
  await bookingflow.dropdownSelect(data.refferalLocator, 3)
  await bookingflow.clickOn('text=Start Pre-Approval')
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
  await bookingflow.fillField(data.ageLocator, '10')
  await bookingflow.continue()

  // Let's Get Started
  await bookingflow.fillEmail()
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

  // Let's Get Started
  await bookingflow.fillEmail()
  await bookingflow.fillPhone('(222) 222-222233')
  await bookingflow.submit()
  // Go home
  await bookingflow.clickOn(data.btnGoToHomePage)
});