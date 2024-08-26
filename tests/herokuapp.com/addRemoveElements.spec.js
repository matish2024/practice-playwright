// @ts-check

import { test, expect } from '@playwright/test';

test.describe('Add/Remove Elements', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/'); // Navigate to the site

        expect(page.url()).toBe('https://the-internet.herokuapp.com/');   // Assert the URL of the site
    });

    test('Successfully add an element', async({ page }) => {
        await page.locator('a').filter({ hasText: 'Add/Remove Elements'}).click();  // Click on the Add/Remove Elements link

        await expect(page).toHaveURL(/add_remove_elements/);    // Assert URL of the Add/Remove Elements page

        await page.getByRole('button', { name: 'Add Element' }).click();    // Click the Add Element button

        await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();   // Assert the element is visible after adding
    });

    test('Delete an element', async({ page }) => {
        await page.locator('a').filter({ hasText: 'Add/Remove Elements'}).click();  // Click on the Add/Remove Elements link

        await expect(page).toHaveURL(/add_remove_elements/);    // Assert URL of the Add/Remove Elements page

        await page.getByRole('button', { name: 'Add Element' }).click();    // Click the Add Element button

        const deleteButton = page.getByRole('button', { name: 'Delete' });
        await deleteButton.click(); // Click on the Delete button

        await expect(deleteButton).toBeHidden();    //  Assert the Delete button is not visibile
        
    });
});