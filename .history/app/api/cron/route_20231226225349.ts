import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";

export async function GET() {
    try {
        connectToDB();

        const products = await Product.find({}); 

        if(!products) throw new Error("No products found");

        
      const updateProducts = await Promise.all(products.map(async (currentProduct) => {
        const { _id, title, url, image, price, stock } = currentProduct;
        return await Product.findByIdAndUpdate(
            { _id },
            { $set: { stock } },
            { new: true }
        );
      }));

    } catch (error) {
        throw new Error(`Error in GET: ${error}`);
    }
}