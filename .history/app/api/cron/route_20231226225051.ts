import { connectToDB } from "@/lib/mongoose";

export async function GET() {
    try {
        connectToDB();
    } catch (error) {
        throw new Error(`Error in GET: ${error}`);
    }
}