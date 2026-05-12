import { test, expect } from '@playwright/test';

test.describe('Wedding Invitation UI Redesign', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
    });

    test('should display the new couple names', async ({ page }) => {
        await expect(page.locator('.names-wrap h1')).toContainText('Joel & Jeena');
    });

    test('should have a working countdown timer', async ({ page }) => {
        const days = page.locator('#days');
        const hours = page.locator('#hours');
        await expect(days).not.toBeEmpty();
        await expect(hours).not.toBeEmpty();
    });

    test('should navigate to sections via navbar', async ({ page }) => {
        await page.click('text=Family');
        const familySection = page.locator('#family');
        await expect(familySection).toBeInViewport();
    });

    test('should have the specific bible quote', async ({ page }) => {
        await expect(page.locator('.bible-quote')).toContainText('it is not good for the man to be alone');
    });
});
