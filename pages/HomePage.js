const { test, expect } = require('@playwright/test');
const data = require('../data/data.js');

exports.HomePage = class HomePage {

    

    constructor(page) {
        this.page = page;
        // this.txtZipCode = 'input[data-test-id=zip-code-input]';
        this.txtZipCode = 'input[name=zipCode] >> nth=2';
        this.btnGetStarted = 'button[data-test-id=zip-code-button] >> nth=2';
        this.btnIntercomClose = 'div[aria-label=Dismiss]';

    }



    async open() {
        await this.page.goto('');
        // INTERCOM COMMENT BELOW 

        // await this.page.pause();
        // await this.page.waitForFunction(() => document.querySelector('iframe[name="intercom-borderless-frame"]'), {timeout: 13000});
        // const iframe = this.page.frame(({name: "intercom-borderless-frame"}))
        // if (iframe !=null) {
        //     await iframe.click(this.btnIntercomClose)

        // }   else throw new Error("No Such Frame")
     
        
    }

    async zipCode(zipCode) {
        await this.page.fill(this.txtZipCode, zipCode);
    }

    async getStarted() {
        await this.page.click(this.btnGetStarted);
    }

    

}