import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";

export async function GET() {
    try {
        connectToDB();

        const products = await Product.find({}); 
    } catch (error) {
        throw new Error(`Error in GET: ${error}`);
    }
}