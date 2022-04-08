import { Page, Locator, expect } from '@playwright/test'
import { data } from '../data/data';


export class BookingPage {
    readonly page: Page
   

    constructor(page: Page) {
        this.page = page;
    }

    async fillField(locator, data) {
        await this.page.click(locator);
        await this.page.fill(locator, data);
    }
    
    async selectOption(option) {
        await this.page.click(option);
    }

    async dropdownSelect(locator1,optionNumber:number) {
        await this.page.click(locator1);
        await this.page.click(`#react-select-2-option-${optionNumber}`);  
    }

    // Function allow to add yymmddhhss format to crean an unique email
    async fillEmail() {

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

        var date = new Date();
        var dateString = date.yyyymmddhhminss();
        const email = `anton.ezhov+${dateString}@elemy.com`
        await this.page.fill(data.emailLocator, email);
    }

}