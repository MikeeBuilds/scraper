export async function scrapeAmazonProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        const scrapedProduct = await scrapeProduct(productUrl);
        return scrapedProduct;
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`);
    }
}