const { test } = require('@playwright/test');

test.setTimeout(120000);

const viewports = [
  { name: '320-phone', width: 320, height: 800 },
  { name: '375-iphone', width: 375, height: 812 },
  { name: '768-tablet', width: 768, height: 1024 },
  { name: '1024-smalldesktop', width: 1024, height: 768 },
  { name: '1280-desktop', width: 1280, height: 900 },
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

test('screenshot all pages at all viewports', async ({ browser }) => {
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    for (const pg of pages) {
      await page.goto(`http://127.0.0.1:4000${pg.path}`, { waitUntil: 'load', timeout: 15000 });
      await page.screenshot({
        path: `tests/screenshots/${pg.name}-${vp.name}.png`,
        fullPage: true,
      });
    }

    await context.close();
  }
});
