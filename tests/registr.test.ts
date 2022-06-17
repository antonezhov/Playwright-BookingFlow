import { test, expect } from '@playwright/test'
import {gmail_client}  from '../data/gmail-client'
import {google}  from 'googleapis'


test('basic test', async ({ page }) => {
   
    await gmail_client.authorize()

    const emails:any = await gmail_client.getWelcomeEmails()
    console.log(emails)
    const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay))
    var newEmailFound = false;
    for (let i = 0; i < 17; i++) {
        await sleep(5000)
        console.log('check_emails')
        const currentEmails:any = await gmail_client.getWelcomeEmails()
        if (currentEmails.length > emails.length) {
            console.log('new_email')
            newEmailFound = true;
            break
        }
    }
    if (!newEmailFound) {
        throw new Error('New emails are not found')
        return
    }

});