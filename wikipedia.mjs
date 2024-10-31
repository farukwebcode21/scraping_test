import puppeteer from "puppeteer-core";
import { headersArray } from "puppeteer-core";

(async () => {
  const browsr = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
  });
  const page = await browsr.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Web_scraping");
  //   console.log(await page.title());

  //   let headings = await page.evaluate(() => {
  //      return document.querySelector(".firstHeading").textContent.trim();
  //     heading_element = document.querySelectorAll("h2 .md-headline");
  //     headersArray = Array.from(heading_element);
  //     return headersArray.map((heading) => heading.textContent);
  //   });

  //   console.log(headings);

  const headings = await page.evaluate(() => {
    headings_elements = document.querySelectorAll(".mw-heading h3");
    headings_array = Array.from(headings_elements);
    return headings_array.map((heading) => heading.textContent);
  });
  console.log(headings);
  await browsr.close();
})();
