"use server";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        
    } catch (error) {
        throw new Error("Error scraping product");
    }
}