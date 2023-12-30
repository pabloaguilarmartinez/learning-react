import { test, expect } from '@playwright/test';

const LOCALHOST_URL: string = 'http://localhost:5173/';
const CAT_PREFIX_IMAGE_URL: string = 'https://cataas.com';

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = page.getByRole('paragraph');
  const image = page.getByRole('img');

  const textContent: string = await text.textContent();
  const imageSrc: string = await image.getAttribute('src');

  expect(textContent.length).toBeGreaterThan(0);
  expect(imageSrc.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});
