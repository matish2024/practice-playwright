// @ts-check

import {test, expect} from '@playwright/test';

test.describe('Test for Checkbox', () => {

    test.beforeEach(async({ page }) =>{ // hook executes before every test to go the page https:demoqa.com

        await page.goto('/', {waitUntil: 'domcontentloaded'})   // Go to the DEMOQA site

        await page.locator('h5').filter({ hasText: "Elements" }).click();  // Click on the Elements link

    });

    test('Click the checkbox', async({ page }) => {

        await page.locator('span.text').filter({hasText: "Check Box"}).click();   // Click on the Check Box

        await page.locator('span.rct-checkbox').click(); // Click on the checkbox

        await expect(page.locator('div[id="result"]')).toBeVisible();   // Assert the message is seen

        await expect(page.locator('span.rct-checkbox')).toBeChecked();  // Assert the checkbox is checked
        
    });

});