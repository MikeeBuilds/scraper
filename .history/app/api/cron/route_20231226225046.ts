export async function GET() {
    try {
        connect
    } catch (error) {
        throw new Error(`Error in GET: ${error}`);
    }
}