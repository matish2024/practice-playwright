// @ts-check

import { test, expect } from '@playwright/test';

test.describe('Test for Buttons', () => {

    test.beforeEach(async({ page }) =>{ // hook executes before every test to go the page https:demoqa.com

        await page.goto('/', {waitUntil: 'domcontentloaded'})   // Go to the DEMOQA site

        await page.locator('h5').filter({ hasText: "Elements" }).click();  // Click on the Elements link

    });

    test('Need to double click', async({ page }) => {

        await page.locator('span.text').filter({ hasText: "Buttons" }).click();   // Click on the Buttons

        await page.locator('button[id="doubleClickBtn"]').dblclick();   // Double click the button

        await expect(page.locator('p[id="doubleClickMessage"]')).toHaveText('You have done a double click');    // Assert the message is seen after double clicking

    });

    test('Need to right click', async({ page }) => {

        await page.locator('span.text').filter({ hasText: "Buttons" }).click();   // Click on the Buttons

        await page.locator('button[id="rightClickBtn"]').click({ button: 'right' });   // Right click the button

        await expect(page.locator('p[id="rightClickMessage"]')).toHaveText('You have done a right click');    // Assert the message is seen after right clicking

    });

    test('Need to click a button', async({ page }) => {

        await page.locator('span.text').filter({ hasText: "Buttons" }).click();   // Click on the Buttons

        await page.getByRole('button', { name: 'Click Me', exact: true }).click();   // Click the button

        await expect(page.locator('p[id="dynamicClickMessage"]')).toHaveText('You have done a dynamic click');    // Assert the message is seen after clicking

    }); 

});