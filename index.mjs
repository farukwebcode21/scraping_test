import puppeteer from "puppeteer-core";

const scrapWebData = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "/usr/bin/google-chrome",
  });
  const page = await browser.newPage();
  const url = "https://example.com";
  await page.goto(url);
  const body = await page.evaluateHandle(() => {
    return document.body;
  });

  await browser.close();
};
scrapWebData();
