const playwright = require('playwright');

module.exports = async (req, res) => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://google.com');
  const html = await page.content();
  await browser.close();
  res.send(html);
}
