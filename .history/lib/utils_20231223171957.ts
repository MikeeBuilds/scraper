export function extractPrice(...elements: any) {
    for (const element of elements) {
        const priceText = element.text().trim();

        if (priceText) {
            // Use a regular expression to match numerical values with optional decimal parts
            const matches = priceText.match(/\d+(?:\.\d{1,2})?/);

            // If matches are found, return the first match (the numerical value), otherwise an empty string
            return matches ? matches[0] : '';
        }
    }

    // Return an empty string if no valid price is found
    return '';
}



// (/\d+(?:\.\d{1,2})?/)