const { expect } = require('@playwright/test');
const data = require('../data/data.js');

exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page;
        this.txtZipCode = 'input[data-test-id=zip-code-input]';
        // this.txtZipCode = 'input[name=zipCode] >> nth=0';
        this.btnGetStarted = 'button[data-test-id=zip-code-button]';
        this.btnIntercomClose = 'div[aria-label=Dismiss]';

    }

    async open() {
        await this.page.goto('');
        const frame = this.page.frame({name: "intercom-borderless-frame"})
        if (frame !=null) {
            await frame.click(this.btnIntercomClose)

        }   else throw new Error("No Such Frame")
        await this.page.locator(this.txtZipCode).waitFor();
        // await this.page.click(this.btnIntercomClose)

    }

    async zipCode(zipCode) {
        await this.page.fill(this.txtZipCode, zipCode);
    }

    async getStarted() {
        await this.page.click(this.btnGetStarted);
    }

}