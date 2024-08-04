// @ts-check

import {test, expect} from '@playwright/test';

test.describe('Tests for Main Page', () => {

  test.beforeEach(async({ page }) => {  // hook executes before every test to go the page https:demoqa.com

    await page.goto('/', { waitUntil: 'domcontentloaded' });

  });

  test('Verify the main page is working', async ({ page }) => {

    expect(page.url()).toBe('https://demoqa.com/'); //Assert the URL of the page
    await expect(page).toHaveTitle('DEMOQA'); //Assert the title of the page
    await expect(page.locator('div.top-card').filter({ hasText: "Elements" })).toBeVisible(); //Assert the div element to be visible

  });

  test('Verify the Elements page is working', async({ page }) => {

    await page.locator('h5').filter({ hasText: "Elements" }).click();  //Click on the Elements link

    expect(page.url()).toBe('https://demoqa.com/elements');  //Assert the URL of the page
    await expect(page.locator('div.header-text').filter({ hasText: "Elements" })).toBeVisible();  //Assert the div element to be visible

  });

  test('Verify the Forms page is working', async({ page }) => {

    await page.locator('h5').filter({ hasText: "Forms" }).click();  //Click on the Forms link

    expect(page.url()).toBe('https://demoqa.com/forms');  //Assert the URL of the page
    await expect(page.locator('div.header-text').filter({ hasText: "Forms" })).toBeVisible();  //Assert the div element to be visible

  });

  test('Verify the Alerts, Frames & Windows page is working', async({ page }) => {

    await page.locator('h5').filter({ hasText: "Alerts, Frame & Windows" }).click();  //Click on the Alerts, Frame & Windows link

    expect(page.url()).toBe('https://demoqa.com/alertsWindows');  //Assert the URL of the page
    await expect(page.locator('div.header-text').filter({ hasText: "Alerts, Frame & Windows" })).toBeVisible();  //Assert the div element to be visible

  });

  test('Verify the Widgets page is working', async({ page }) => {

    await page.locator('h5').filter({ hasText: "Widgets" }).click();  //Click on the Widgets link

    expect(page.url()).toBe('https://demoqa.com/widgets');  //Assert the URL of the page
    await expect(page.locator('div.header-text').filter({ hasText: "Widgets" })).toBeVisible();  //Assert the div element to be visible

  });

  test('Verify the Interactions page is working', async({ page }) => {

    await page.locator('h5').filter({ hasText: "Interactions" }).click();  //Click on the Interactions link

    expect(page.url()).toBe('https://demoqa.com/interaction');  //Assert the URL of the page
    await expect(page.locator('div.header-text').filter({ hasText: "Interactions" })).toBeVisible();  //Assert the div element to be visible

  });

  test('Verify the Book Store Application page is working', async({ page }) => {

    await page.locator('h5').filter({ hasText: "Book Store Application" }).click();  //Click on the Interactions link

    expect(page.url()).toBe('https://demoqa.com/books');  //Assert the URL of the page
    await expect(page.locator('div.header-text').filter({ hasText: "Book Store Application" })).toBeVisible();  //Assert the div element to be visible

  });


});