import { launch } from 'https://cdn.jsdelivr.net/npm/puppeteer-core@10.5.0/lib/cjs/puppeteer/core/node/Browser.js';
import cheerio from "https://cdn.jsdelivr.net/npm/cheerio@1.0.0/lib/cheerio.js";
 
const PAGE_URL = 'https://www.amazon.com/s?k=macbook+pro&i=computers&sprefix=macbo%2Ccomputers%2C245&ref=nb_sb_ss_ts-doa-p_2_5'; //this should be replaced with whatever item we are looking for
 
const main = async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
 
    await page.goto(PAGE_URL);
 
    const html = await page.content();
    await browser.close();
 
    const $ = cheerio.load(html);
    const products = [];
 
    $('.s-widget-container').each((i, element) => {
        const titleElement = $(element).find('.s-title-instructions-style');
        const priceElement = $(element).find('.a-price > span').first();
 
        const title = titleElement.text();
        const price = parseInt(priceElement.text().replace(/[$,]/g, ""), 10);
 
        if (!title || isNaN(price)) {
            return;
        }
 
        products.push({
            title,
            price,
            priceInDollarFormat:  priceElement.text(),
        })
    });
 
    const sortedProducts = products.slice().sort((p1, p2) => p2.price - p1.price);
 
    console.log(sortedProducts);
}
 
main();