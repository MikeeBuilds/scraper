import axios from "axios";
import * as cheerio from "cheerio";
import { extractPrice } from "../utils";

export async function scrapeAmazonProduct(url: string) {
    if(!url) return;

    

    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 2225;
    const session_id = (1000000 * Math.random()) | 0;

    const options = {
        auth: {
            username: `${username}-session${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }

    try {
        // Fetch product page
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        // Get product title
        const title = $('#productTitle').text().trim();
        const currentPrice = extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base'),
        );

        const originalPrice = extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.atext-price span.a-offscreen'),
            $('#listPrice'),
            $('#priceblock_dealprice'),
            $('.a-size-base.a-color-price'),
        );

        const outOfStock = $('#availability span').text().trim().toLowerCase() === 'Curently unavailable';

        const image = $('#imgBlk').find('img').attr('data-a-dynamic-image');
        

        console.log({title, currentPrice, originalPrice, outOfStock});
    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`);
    }
}