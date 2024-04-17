import { Puppeteer } from "puppeteer";

const getCosto = async () => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will be in full width and height)
  const browser = await Puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://www.costco.com/CatalogSearch?dept=All&keyword=faofaofh", {
    waitUntil: "domcontentloaded",
  });

  // Get page data
  const items = await page.evaluate(() => {
    // Fetch the first element with class "quote"
    // Get the displayed text and returns it
    const quoteList = document.querySelectorAll(".quote");

    // Convert the quoteList to an iterable array
    // For each quote fetch the text and author
    return Array.from(quoteList).map((quote) => {
      // Fetch the sub-elements from the previously fetched quote element
      // Get the displayed text and return it (`.innerText`)
      const price = quote.querySelector(".price").innerText;

      return { price };
    });
  });

  // Display the quotes
  console.log(items);

  // Close the browser
  await browser.close();
};

export default getCosto