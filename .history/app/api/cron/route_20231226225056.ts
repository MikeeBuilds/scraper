import { connectToDB } from "@/lib/mongoose";

export async function GET() {
    try {
        connectToDB();

        const products = await Product.find({}).exec();
    } catch (error) {
        throw new Error(`Error in GET: ${error}`);
    }
}