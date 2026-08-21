import { test, expect } from '@playwright/test';

test.describe('Responsive Navigation and Layout Checks', () => {
  test('Home page renders correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.preloader', { state: 'hidden', timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(1000);
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test('Projects page renders correctly', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForSelector('.preloader', { state: 'hidden', timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(1000);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test('Contact page renders correctly', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForSelector('.preloader', { state: 'hidden', timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(1000);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});
