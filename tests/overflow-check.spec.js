const { test, expect } = require('@playwright/test');

test.setTimeout(60000);

const viewports = [
  { name: '320-phone', width: 320, height: 800 },
  { name: '375-iphone', width: 375, height: 812 },
  { name: '768-tablet', width: 768, height: 1024 },
];

const pages = [
  { name: 'home', path: '/' },
  { name: 'tools', path: '/tools.html' },
  { name: 'communities', path: '/communities.html' },
  { name: 'partners', path: '/partners.html' },
  { name: 'news', path: '/news.html' },
  { name: 'support', path: '/support.html' },
  { name: 'about', path: '/about.html' },
];

test('check horizontal overflow on all pages at mobile viewports', async ({ browser }) => {
  const results = [];
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    for (const pg of pages) {
      await page.goto(`http://127.0.0.1:4000${pg.path}`, { waitUntil: 'load', timeout: 15000 });
      const overflow = await page.evaluate(() => {
        return {
          bodyScrollWidth: document.body.scrollWidth,
          windowInnerWidth: window.innerWidth,
          hasHorizontalScroll: document.body.scrollWidth > window.innerWidth,
        };
      });
      results.push({ page: pg.name, viewport: vp.name, ...overflow });
    }
    await context.close();
  }

  console.log('\n=== HORIZONTAL OVERFLOW RESULTS ===');
  for (const r of results) {
    const status = r.hasHorizontalScroll ? 'OVERFLOW!' : 'OK';
    console.log(`${r.page} @ ${r.viewport}: scrollWidth=${r.bodyScrollWidth} innerWidth=${r.windowInnerWidth} => ${status}`);
  }

  const overflows = results.filter(r => r.hasHorizontalScroll);
  if (overflows.length > 0) {
    console.log('\nPages with horizontal overflow:');
    overflows.forEach(o => console.log(`  - ${o.page} @ ${o.viewport}`));
  }
});
