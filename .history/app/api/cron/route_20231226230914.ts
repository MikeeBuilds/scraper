import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";
import { generateEmailBody } from "@/lib/nodemailer";
import { scrapeAmazonProduct } from "@/lib/scraper";
import { getAveragePrice, getEmailNotifType, getHighestPrice, getLowestPrice } from "@/lib/utils";

export async function GET() {
  try {
    connectToDB();

    const products = await Product.find({});

    if (!products) throw new Error("No products found");

    const updateProducts = await Promise.all(
      products.map(async (currentProduct) => {
        const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);

        if (!scrapedProduct) throw new Error("No scraped product found");

        const updatedPriceHistory = [
          ...currentProduct.priceHistory,
          { price: scrapedProduct.currentPrice },
        ];

        const product = {
          ...scrapedProduct,
          priceHistory: updatedPriceHistory,
          lowestPrice: getLowestPrice(updatedPriceHistory),
          highestPrice: getHighestPrice(updatedPriceHistory),
          averagePrice: getAveragePrice(updatedPriceHistory),
        };

        const updatedProduct = await Product.findOneAndUpdate(
          { url: scrapedProduct.url },
          product,
        );

        const emailNotifType = getEmailNotifType(scrapedProduct, currentProduct);

        if (emailNotifType && updatedProduct.users.length > 0) {
            const productInfo = {
                title: updatedProduct.title,
                url: updatedProduct.url,
            }

            const emailContent = generateEmailBody
        }



      })
    );
  } catch (error) {
    throw new Error(`Error in GET: ${error}`);
  }
}
