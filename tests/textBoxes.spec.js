// @ts-check

import { test, expect } from '@playwright/test';

test.describe('Test for Text Boxes', () => {

    test.beforeEach(async({ page }) =>{ // hook executes before every test to go the page https:demoqa.com

        await page.goto('/', {waitUntil: 'domcontentloaded'})   // Go to the DEMOQA site

        await page.locator('h5').filter({ hasText: "Elements" }).click();  // Click on the Elements link

    });

    test('Enter all details', async({ page }) => {
        
        await page.locator('span.text').filter({hasText: "Text Box"}).click();   // Click on the Text Box

        // Define the locators for the text fields
        const fullName = page.locator('input[id="userName"]');
        const email = page.locator('input[id="userEmail"]');
        const currentAddress = page.locator('textarea[id="currentAddress"]');
        const permAddress = page.locator('textarea[id="permanentAddress"]');

        // Assertions for the fields to be visible
        expect(fullName).toBeVisible();
        expect(email).toBeVisible();
        expect(currentAddress).toBeVisible();
        expect(permAddress).toBeVisible();

        await fullName.fill('Test Name');   // Enter the name in the Full Name field
        await email.fill('test@test.com');  // Enter the email in the Email field
        await currentAddress.fill('Test Location'); // Enter current address in the Current Address field
        await permAddress.fill('Test Location'); // Enter permanent address in the Permanent Address field

        await page.locator('button[id="submit"]').click();  // Click on the Submit button

        await expect(page.locator('div[id="output"]')).toBeVisible();   // Assert the output is visible

        await expect(page.locator('p[id="name"]')).toContainText('Test Name');   // Assert the Full Name
        await expect(page.locator('p[id="email"]')).toContainText('test@test.com');   // Assert the Email
        await expect(page.locator('p[id="currentAddress"]')).toContainText('Test Location');   // Assert the Current Location
        await expect(page.locator('p[id="permanentAddress"]')).toContainText('Test Location');   // Assert the Permanent Location       

    });

    test('Invalid Email should not be submitted', async({ page }) => {

        await page.locator('span.text').filter({hasText: "Text Box"}).click();   // Click on the Text Box

        // Define the locators for the text fields
        const fullName = page.locator('input[id="userName"]');
        const email = page.locator('input[id="userEmail"]');
        const currentAddress = page.locator('textarea[id="currentAddress"]');
        const permAddress = page.locator('textarea[id="permanentAddress"]');

        await fullName.fill('Test Name');   // Enter the name in the Full Name field
        await email.fill('test');  // Enter the email in the Email field
        await currentAddress.fill('Test Location'); // Enter current address in the Current Address field
        await permAddress.fill('Test Location'); // Enter permanent address in the Permanent Address field

        await page.locator('button[id="submit"]').click();  // Click on the Submit button

        await expect(email).toHaveClass(/field-error/); // Assert the email field have class - field-error

    });

});