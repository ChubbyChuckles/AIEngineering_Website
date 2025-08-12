import { test, expect } from '@playwright/test';

// Simple smoke test verifying Transition layers appear briefly during route change.
// Because animations are fast, we just ensure at least one transition layer exists on first load
// and navigation to another page re-renders (keyed by route).

test.describe('Page Transition', () => {
  test('shows transition layer on initial load and navigating', async ({ page }) => {
    await page.goto('/');
    // initial load should include Transition component layers
    const layers = await page.locator('[data-testid="transition-layer"]').count();
    expect(layers).toBeGreaterThan(0);

    // Navigate to About via direct link (if present) else programmatic
    await page.goto('/about');
    const aboutLayers = await page.locator('[data-testid="transition-layer"]').count();
    expect(aboutLayers).toBeGreaterThan(0);
  });
});
