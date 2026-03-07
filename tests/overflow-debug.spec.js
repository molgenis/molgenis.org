const { test } = require('@playwright/test');

test.setTimeout(60000);

test('find elements causing horizontal overflow', async ({ browser }) => {
  // Test home at 320px
  for (const testCase of [
    { name: 'home', path: '/', width: 320 },
    { name: 'about', path: '/about.html', width: 320 },
    { name: 'home', path: '/', width: 768 },
  ]) {
    const context = await browser.newContext({
      viewport: { width: testCase.width, height: 800 },
    });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:4000${testCase.path}`, { waitUntil: 'load', timeout: 15000 });

    const offenders = await page.evaluate((vpWidth) => {
      const results = [];
      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > vpWidth) {
          results.push({
            tag: el.tagName,
            id: el.id,
            class: el.className,
            text: el.textContent?.substring(0, 50),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          });
        }
      });
      return results;
    }, testCase.width);

    console.log(`\n=== ${testCase.name} @ ${testCase.width}px ===`);
    // Dedupe by class/tag
    const seen = new Set();
    for (const o of offenders) {
      const key = `${o.tag}.${o.class}`;
      if (!seen.has(key)) {
        seen.add(key);
        console.log(`  ${o.tag} class="${o.class}" id="${o.id}" right=${o.right}px width=${o.width}px`);
        console.log(`    text: "${o.text?.substring(0, 60)}"`);
      }
    }
    await context.close();
  }
});
