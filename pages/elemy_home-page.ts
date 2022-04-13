import type { Page }  from '@playwright/test';
import { data } from '../data/data';

export class HomePage {
    readonly page: Page;
    // txtZipCode: string
    // btnGetStarted: string
    // btnIntercomClose: string

    constructor(page: Page) {
        this.page = page;
        

    }

    async open() {
        await this.page.goto('');
    }

    async zipCode(zipCode:string) {
        await this.page.fill(data.txtZipCode, zipCode);
    }

    async getStarted() {
        await this.page.click(data.btnGetStarted);
    }

}