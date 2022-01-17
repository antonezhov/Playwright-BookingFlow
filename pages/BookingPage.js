const { test, expect } = require('@playwright/test');
const data = require('../data/data.js');


exports.BookingPage = class BookingPage {

    

    constructor(page) {
        this.page = page;
        this.age = "label[for='0-3yrs']";
        this.btnContinue = 'text=Continue';
        this.btnSubmit = 'button:has-text("Submit")'
        this.btnConfirm = 'button:has-text("Confirm")'
        this.yes = "text=Yes"
        this.providerLocator = 'div[id=provider]'
        this.provederOption = '#react-select-2-option-3'
        this.firstnameLocator = 'input[name="firstName"]'
        this.lastnameLocator = 'input[name="lastName"]'
        this.emailLocator = '[placeholder="example@elemy.com"]'
        this.phoneLocator = '[data-test-id="phone-input"]'
        this.timeSlotLocator = '[data-test-id="time-slot-0-1"]'
        this.callScheduleLocator = '[data-test-id="open-time-slots-modal"]'
    }

    async ageSelect() {
        await this.page.click(this.age);
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

    async yesSelect() {
        await this.page.click(this.yes);
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