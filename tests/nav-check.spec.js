const { test } = require('@playwright/test');

test.setTimeout(60000);

test('check nav menu visibility at different viewports', async ({ browser }) => {
  for (const width of [320, 375, 768, 1024, 1072, 1280]) {
    const context = await browser.newContext({
      viewport: { width, height: 800 },
    });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4000/', { waitUntil: 'load', timeout: 15000 });

    const navState = await page.evaluate(() => {
      const hamburgerLabel = document.querySelector('label[for=menu]');
      const menuItems = document.querySelectorAll('#menu-container li');
      const hamburgerVisible = hamburgerLabel ? window.getComputedStyle(hamburgerLabel).display !== 'none' : false;
      const firstItemVisible = menuItems.length > 0 ? window.getComputedStyle(menuItems[0]).display !== 'none' : false;
      return { hamburgerVisible, firstItemVisible, menuItemCount: menuItems.length };
    });

    console.log(`${width}px: hamburger=${navState.hamburgerVisible ? 'VISIBLE' : 'hidden'}, items=${navState.firstItemVisible ? 'VISIBLE' : 'hidden'} (${navState.menuItemCount} items)`);
    await context.close();
  }
});
