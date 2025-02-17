const { expect } = require('@wdio/globals')


// test/specs/saucedemo-login.spec.js

describe('SauceDemo Login Page', () => {
    it('should allow valid login and display products page', async () => {
        // Navigate to SauceDemo
        await browser.url('https://www.saucedemo.com/');

        // Verify that the login page is loaded
        const loginTitle = await $('div.login_logo');
        await expect(loginTitle).toBeDisplayed();

        // Enter valid username and password
        const usernameField = await $('#user-name');
        await usernameField.setValue('standard_user');

        const passwordField = await $('#password');
        await passwordField.setValue('secret_sauce');

        // Click the login button
        const loginButton = await $('#login-button');
        await loginButton.click();

        // Wait for the products page to load
        const productsTitle = await $('div.product_label');


        // Verify that a product is displayed on the products page
        const firstProduct = await $('.inventory_item');
        await expect(firstProduct).toBeDisplayed();
    });

    it('should show an error for invalid login', async () => {
        // Navigate to SauceDemo
        await browser.url('https://www.saucedemo.com/');

        // Enter invalid username and password
        const usernameField = await $('#user-name');
        await usernameField.setValue('invalid_user');

        const passwordField = await $('#password');
        await passwordField.setValue('invalid_password');

        // Click the login button
        const loginButton = await $('#login-button');
        await loginButton.click();

        // Verify the error message is displayed
        const errorMessage = await $('h3[data-test="error"]');
    });
});
