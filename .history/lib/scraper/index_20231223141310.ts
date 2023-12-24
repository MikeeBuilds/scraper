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
        
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`);
    }
}