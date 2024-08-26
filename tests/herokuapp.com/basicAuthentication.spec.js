// @ts-check

import { test, expect } from '@playwright/test';

test.describe('Basic Authentication', () => {
    test('Basic Authentication', async({  browser }) => {
        const context = await browser.newContext(
            {
                httpCredentials:
                {
                    username: 'admin',
                    password: 'admin'
                }
            }
        );

        const page = await context.newPage();
        await page.goto("https://the-internet.herokuapp.com/basic_auth");   // Navigate to the Basic Auth page
        await expect(page.locator("div.example>h3")).toHaveText("Basic Auth");  // Assert the text after basic authentication
    
    });
});