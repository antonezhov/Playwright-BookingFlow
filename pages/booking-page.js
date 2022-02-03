const { test, expect } = require('@playwright/test');


exports.BookingPage = class BookingPage {

    constructor(page) {
        this.page = page;
        this.age0_3 = "label[for='0-3yrs']"
        this.age4_7 = "label[for='4-7yrs']"
        this.age8_9 = "label[for='8-9yrs']"
        this.age10 = "label[for='10+yrs']"   
        this.btnContinue = 'text=Continue'
        this.btnSubmit = 'button:has-text("Submit")'
        this.btnConfirm = 'button:has-text("Confirm")'
        this.btnGoToHomePage = 'button:has-text("Go to Homepage")'
        this.yes = "label[for='yes']" 
        this.no = "label[for='no']"   
        this.iDontKnow = "I Don't Know"
        this.providerLocator = 'div[id=provider]'
        this.provederOption = '#react-select-2-option-3'
        this.firstnameLocator = 'input[name="firstName"]'
        this.lastnameLocator = 'input[name="lastName"]'
        this.emailLocator = '[placeholder="example@elemy.com"]'
        this.phoneLocator = '[data-test-id="phone-input"]'
        this.timeSlotLocator0 = '[data-test-id="time-slot-0-0"]'
        this.callScheduleLocator = 'button[data-test-id="open-time-slots-modal"]'
        this.callMeNowLocator = 'text=Call Me Now'
    }

    async ageSelect(age) {
        await this.page.click(age);
    }

    async continue() {
        await this.page.click(this.btnContinue);
    }

    async submit() {
        await this.page.click(this.btnSubmit);
    }

    async confirm() {
        await this.page.click(this.btnConfirm);
    }

    async selectOption(option) {
        await this.page.click(option);
    }

    async providerSelect() {
        await this.page.click(this.providerLocator);
        await this.page.click(this.provederOption);
    }

    async fillFirstName(firstname) {
        await this.page.fill(this.firstnameLocator, firstname);
    }

    async fillLastName(lastname) {
        await this.page.fill(this.lastnameLocator, lastname);
    }

    async fillEmail(email) {
        await this.page.fill(this.emailLocator, email);
    }

    async fillPhone(phone) {
        await this.page.fill(this.phoneLocator, phone);
    }

    async clickOn(locator) {
        await this.page.click(locator);
    }
}