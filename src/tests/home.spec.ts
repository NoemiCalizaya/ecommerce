import { test, expect } from '@playwright/test';

test('homepage has URL', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page).toHaveURL(/\//);
  
});
