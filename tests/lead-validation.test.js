const { test, chromium, expect } = require('@playwright/test')
const { HomePage } = require('../pages/home-page.js')
const { BookingPage } = require('../pages/booking-page.js')
const salesforce_client = require('../data/salesforce-client.js')
const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay))


Date.prototype.yyyymmddhhminss = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  var hh = this.getHours();
  var min = this.getMinutes();
  var ss = this.getSeconds();
  return [this.getFullYear(),
  (mm > 9 ? '' : '0') + mm,
  (dd > 9 ? '' : '0') + dd,
  (hh > 9 ? '' : '0') + hh,
  (min > 9 ? '' : '0') + min,
  (ss > 9 ? '' : '0') + ss
  ].join('');
};

test('Validation of SalesForce LeadFields after completion of the Booking Flow', async ({ page }) => {
  var date = new Date();
  var dateString = date.yyyymmddhhminss();
  console.log(dateString)

  const email = `anton.ezhov+leadfields-${dateString}@elemy.com`
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
  await bookingflow.fillEmail(email)
  await bookingflow.fillPhone('(222) 222-222233')
  await bookingflow.submit()
  // Scedule a Call
  const dt = new Date()
  const hr = dt.getUTCHours
  if (hr >= 3 && hr < 14) {
    await bookingflow.clickOn(bookingflow.callScheduleLocator)
  }
  await bookingflow.clickOn(bookingflow.timeSlotLocator0)
  await bookingflow.continue()
  await bookingflow.confirm()
  await salesforce_client.initSalesforceToken()



  for (let i = 0; i < 17; i++) {
    await sleep(10000)
    const leadoutput = await salesforce_client.getLeadFieldsByEmail(email)
    if (leadoutput.totalSize > 0) {
      console.log('leadoutput', JSON.stringify(leadoutput))

      const leadRecords = leadoutput.records[0]
      console.log('LeadRecord', leadRecords)
      if (!leadRecords.Company) {
        console.log('records[0].Company is missing')
      }
      else {
        console.log('records[0].Company does exist')
      }

      const checkFields = (lead, fieldNames) => {
        const missing = []
        for (const field of fieldNames) {
          if (lead[field] === undefined || lead[field] === null || lead[field] === '') {
            missing.push(field)
          }
          if (missing.length) {
            console.log(`Missing fields: ${missing.join()}`)
          }
          else {

            console.log(`${field} record field does exist`)
          }
        }
      }

      checkFields(leadRecords, ['Company', 'Status', 'Id', 'Email', 'SproutUserID__c','Lead_Type_4_0__c', 'Address', 'Out_of_Service_Area__c','Diagnosis_Documents_collected__c', 'Client_Code__c', 'CreatedById', 'Appointment_No_Show__c', 'Booked_Calendly_Slot__c', 'Cash_Pay__c', 'Contacted__c','Blah_blah'])
      break
    }
  }





});

