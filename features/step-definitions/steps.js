import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page.js';

const pages = {
    main: MainPage
}

Given(/^User is located on the (\w+) page of saucedemo website$/, async (page) => {
    await pages[page].open()
});

When(/^User click “Login” button$/, async () => {
    await MainPage.clickLoginBtn()   
});

Then(/^User should see “(.+)” error message$/, async (message) => {
   await MainPage.checkErrorMsg(message)
});
