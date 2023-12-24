export function extractPrice(...elements: any) {
    for (const element of elements) {
        const priceText = element.text().trim();

        if (priceText) {
            const matches = priceText.match(/\d+(?:\.\d{1,2})?/);
            return matches ? matches[0] : '';
        }
    }

    return '';
}


// (/\d+(?:\.\d{1,2})?/)