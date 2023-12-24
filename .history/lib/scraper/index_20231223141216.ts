export async function scrapeAmazonProduct(url: string) {
    if(!url) return;

    // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_7f299595-zone-pricehoot:0g0eyx7ju3nu -k https://lumtest.com/myip.json

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
        rejec
    }
}