import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";
import { scrapeAmazonProduct } from "@/lib/scraper";

export async function GET() {
  try {
    connectToDB();

    const products = await Product.find({});

    if (!products) throw new Error("No products found");

    const updateProducts = await Promise.all(
      products.map(async (currentProduct) => {
        const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);

        if(!scrapedProduct) throw new Error("No scraped product found");

        const updatedPriceHistory = [
            ...existingProduct.priceHistory,
            { price: scrapedProduct.currentPrice }
          ]
    
          product = {
            ...scrapedProduct,
            priceHistory: updatedPriceHistory,
            lowestPrice: getLowestPrice(updatedPriceHistory),
            highestPrice: getHighestPrice(updatedPriceHistory),
            averagePrice: getAveragePrice(updatedPriceHistory),
          }
        }
    
        const newProduct = await Product.findOneAndUpdate(
          { url: scrapedProduct.url },
          product,
          { upsert: true, new: true }
        );
      })
    );
  } catch (error) {
    throw new Error(`Error in GET: ${error}`);
  }
}
