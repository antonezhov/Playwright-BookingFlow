import { test, chromium, expect } from '@playwright/test'
import { HomePage } from '../pages/elemy_home-page'
import { BookingPage } from '../pages/elemy_booking-page'
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
  await bookingflow.page.click(data.btnAutismCare)

  // How Old Is Your Child?
  await bookingflow.fillField(data.ageLocator, '3')
  await bookingflow.page.click(data.btnContinue)
  // Has Your Child Been Diagnosed With Autism Spectrum Disorder?
  await bookingflow.selectOption(data.yes)
  await bookingflow.page.click(data.btnContinue)
  // Do You Have Insurance?
  await bookingflow.selectOption(data.yes)
  await bookingflow.page.click(data.btnContinue)
  // await page.pause();
  await bookingflow.fillField(data.firstnameLocator,'Autotest')
  await bookingflow.fillField(data.lastnameLocator,'User')
  await bookingflow.fillEmail()
  await bookingflow.fillField(data.phoneLocator,'(222) 222-222233')
  await bookingflow.fillField(data.passLocator, 'Test111!')
  await bookingflow.fillField(data.passConfirmLocator, 'Test111!')
  await bookingflow.dropdownSelect(data.refferalLocator, 3)
  await bookingflow.page.click('text=Start Pre-Approval')
});

test('Unqualified by Age Scenario', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)

  await homepage.open()
  await homepage.zipCode('90011')
  await homepage.getStarted()

  // Autism Care Select
  await bookingflow.page.click(data.btnAutismCare)

  // How Old Is Your Child?
  await bookingflow.fillField(data.ageLocator, '10')
  await bookingflow.page.click(data.btnContinue)

  // Let's Get Started
  await bookingflow.fillEmail()
  await bookingflow.fillField(data.phoneLocator,'(222) 222-222233')
  await bookingflow.page.click(data.btnSubmit)
  // Go home
  await bookingflow.page.click(data.btnGoToHomePage)
});

test('Unqualified by ZipCode Scenario', async ({ page }) => {
  const homepage = new HomePage(page)
  const bookingflow = new BookingPage(page)

  await homepage.open()
  await homepage.zipCode('12345')
  await homepage.getStarted()

  // Let's Get Started
  await bookingflow.fillEmail()
  await bookingflow.fillField(data.phoneLocator,'(222) 222-222233')
  await bookingflow.page.click(data.btnSubmit)
  // Go home
  await bookingflow.page.click(data.btnGoToHomePage)
});