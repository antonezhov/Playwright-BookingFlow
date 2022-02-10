import { Page, Locator, expect } from '@playwright/test'
import { data } from '../data/data';


export class BookingPage {
    readonly page: Page
    // readonly age0_3: string
    // readonly age4_7: string
    // readonly ge4_7: string
    // readonly age8_9: string
    // readonly age10: string
    // readonly btnContinue: string
    // readonly btnSubmit: string
    // readonly btnConfirm: string
    // readonly btnGoToHomePage: string
    // readonly yes: string
    // readonly no: string
    // readonly iDontKnow: string
    // readonly providerLocator: string
    // readonly provederOption: string
    // readonly firstnameLocator: string
    // readonly lastnameLocator: string
    // readonly emailLocator: string
    // readonly phoneLocator: string
    // readonly timeSlotLocator0: string
    // readonly callScheduleLocator: string
    // readonly callMeNowLocator: string
    // readonly btnAutismCare: string

    constructor(page: Page) {
        this.page = page;
        // this.age0_3 = "label[for='0-3yrs']"
        // this.age4_7 = "label[for='4-7yrs']"
        // this.age8_9 = "label[for='8-9yrs']"
        // this.age10 = "label[for='10+yrs']"
        // this.btnContinue = 'text=Continue'
        // this.btnSubmit = 'button:has-text("Submit")'
        // this.btnConfirm = 'button:has-text("Confirm")'
        // this.btnGoToHomePage = 'button:has-text("Go to Homepage")'
        // this.btnAutismCare = 'a[class="ServiceSelectionScreen__CardWrapper-sc-1qnccqx-2 ippqOn"]'
        // this.yes = "label[for='yes']"
        // this.no = "label[for='no']"
        // this.iDontKnow = "I Don't Know"
        // this.providerLocator = 'div[id=provider]'
        // this.provederOption = '#react-select-2-option-3'
        // this.firstnameLocator = 'input[name="firstName"]'
        // this.lastnameLocator = 'input[name="lastName"]'
        // this.emailLocator = '[placeholder="example@elemy.com"]'
        // this.phoneLocator = '[data-test-id="phone-input"]'
        // this.timeSlotLocator0 = '[data-test-id="time-slot-0-0"]'
        // this.callScheduleLocator = 'button[data-test-id="open-time-slots-modal"]'
        // this.callMeNowLocator = 'text=Call Me Now'
    }

    async ageSelect(age:string) {
        await this.page.click(age);
    }

    async continue() {
        await this.page.click(data.btnContinue);
    }

    async submit() {
        await this.page.click(data.btnSubmit);
    }

    async confirm() {
        await this.page.click(data.btnConfirm);
    }

    async selectOption(option) {
        await this.page.click(option);
    }

    async providerSelect() {
        await this.page.click(data.providerLocator);
        await this.page.click(data.provederOption);
    }

    async fillFirstName(firstname) {
        await this.page.fill(data.firstnameLocator, firstname);
    }

    async fillLastName(lastname) {
        await this.page.fill(data.lastnameLocator, lastname);
    }

    async fillEmail(email) {
        await this.page.fill(data.emailLocator, email);
    }

    async fillPhone(phone) {
        await this.page.fill(data.phoneLocator, phone);
    }

    async clickOn(locator) {
        await this.page.click(locator);
    }
}