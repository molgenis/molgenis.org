const { test, expect } = require('@playwright/test');

const pages = [
  { name: 'home', path: '/' },
  { name: 'partners', path: '/partners.html' },
  { name: 'communities', path: '/communities.html' },
  { name: 'tools', path: '/tools.html' },
  { name: 'news', path: '/news.html' },
  { name: 'about', path: '/about.html' },
  { name: 'support', path: '/support.html' },
];

for (const page of pages) {
  test(`${page.name} page matches screenshot`, async ({ page: p }) => {
    await p.goto(page.path, { waitUntil: 'networkidle' });
    await expect(p).toHaveScreenshot(`${page.name}.png`, { fullPage: true });
  });
}

test('partner anchor links work', async ({ page }) => {
  await page.goto('/partners.html', { waitUntil: 'networkidle' });
  const anchors = await page.$$eval(
    '.partner-grid a[href^="#"]',
    links => links.map(a => a.getAttribute('href'))
  );
  for (const anchor of anchors) {
    const id = anchor.replace('#', '');
    const target = await page.$(`[id="${id}"]`);
    expect(target, `Anchor ${anchor} has no matching element`).not.toBeNull();
  }
});

test('community partner links resolve', async ({ page }) => {
  await page.goto('/communities.html', { waitUntil: 'networkidle' });
  // Check no "(missing)" text is shown
  const missing = await page.$$('span[style*="color:red"]');
  expect(missing.length, 'Found missing partner references').toBe(0);
});

test('news anchor links work', async ({ page }) => {
  await page.goto('/tools.html', { waitUntil: 'networkidle' });
  const newsLinks = await page.$$eval(
    'a[href^="/news.html#"]',
    links => links.map(a => a.getAttribute('href'))
  );
  if (newsLinks.length > 0) {
    await page.goto('/news.html', { waitUntil: 'networkidle' });
    for (const link of newsLinks) {
      const id = link.replace('/news.html#', '');
      if (id) {
        const target = await page.$(`[id="${id}"]`);
        expect(target, `News anchor ${link} has no matching element`).not.toBeNull();
      }
    }
  }
});
