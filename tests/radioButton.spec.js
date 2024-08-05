// @ts-check

import { test, expect } from '@playwright/test';

test.describe('Test for Text Boxes', () => {

    test.beforeEach(async({ page }) =>{ // hook executes before every test to go the page https:demoqa.com

        await page.goto('/', { waitUntil: 'domcontentloaded' })   // Go to the DEMOQA site

        await page.locator('h5').filter({ hasText: "Elements" }).click();  // Click on the Elements link

    });

    test('Select a radio button', async({ page }) => {

        await page.locator('span.text').filter({ hasText: "Radio Button"}).click(); // Click on the Radio Button

        await page.locator('input[id="yesRadio"]').check({ force: true });   // Click on the Yes radio button

        await expect(page.locator('span.text-success')).toContainText('Yes');   // Assert the correct message is shown

    });

    test('No checkbox should be disabled', async({ page }) => {

        await page.locator('span.text').filter({ hasText: "Radio Button"}).click(); // Click on the Radio Button

        const noCheckBox = page.getByLabel('No');   // Storing locator for checkbox for reuseability

        await expect(noCheckBox).toBeDisabled();    // Assert the checkbox to be disabled
        await expect(noCheckBox).toHaveClass(/disabled/);   // Assert the checkbox to have class as disabled

    });

});