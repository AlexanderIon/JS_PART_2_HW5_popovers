import puppeteer from 'puppeteer';

jest.setTimeout(13000);

describe('test  My  Popover create', () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  test('Check creation popover', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('body');
    const btn = await page.$('.testbtn');
    await btn.click();
    await page.waitForSelector('.myPopover');
  });
  afterAll(async () => {
    await browser.close();
  });
});
