export function extractPrice(...elements: Cheerio[]) {
    for (const element of elements) {
        const priceText = element.text().trim().replace(/[^\d.,]/g, '');

        if (priceText) return priceText;
    }

    return '';
}
