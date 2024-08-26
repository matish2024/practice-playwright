// @ts-check

import { test, expect } from '@playwright/test';

test.describe('Checkboxes', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');     // Navigate to the site

        expect(page.url()).toBe('https://the-internet.herokuapp.com/');     // Assert the URL of the site
    });

    test('Check the checkbox', async({ page }) => {
        await page.getByRole('link').filter({ hasText: "Checkboxes"}).click();      // Click on the Checkboxes link

        await expect(page).toHaveURL(/checkboxes/);     // Assert the URL of the page

        const checkBox = page.locator('input[type="checkbox"]');
        await checkBox.first().check();     // Check the checkbox

        await expect(checkBox.first()).toBeChecked();   // Assert the checkbox is checked
    });

    test('Uncheck the checkbox', async({ page }) => {
        await page.getByRole('link').filter({ hasText: "Checkboxes"}).click();      // Click on the Checkboxes link

        await expect(page).toHaveURL(/checkboxes/);     // Assert the URL of the page

        await page.locator('input[type="checkbox"]').last().uncheck();     // Uncheck the checkbbox

        expect(page.locator('input[type="checkbox"]').last()).not.toBeChecked();     // Assert the checkbox is unchecked

    });
});