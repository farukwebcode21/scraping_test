import puppeteer from "puppeteer-core";
const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "/usr/bin/google-chrome",
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  const url = "https://oxylab.io/";
  await page.goto(url);
  await page.screenshot({ path: "oxylabs__1080.png" });
  await page.pdf({ path: "screen.pdf", format: "A4" });

  await browser.close();
};
main();
