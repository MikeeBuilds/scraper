export function extractPrice(...elements: any) {
    for (const element of elements) {
      const priceText = element.text().trim();
  
      if (priceText) {
        const matches = priceText.match(/\d+(?:\.\d{1,2})?/g);
  
        if (matches) {
          // Filter out any invalid prices
          const validPrices = matches.filter(price => !isNaN(parseFloat(price)));
  
          if (validPrices.length > 0) {
            // Sort prices and return the first one
            const sortedPrices = validPrices.map(price => parseFloat(price)).sort((a, b) => a - b);
            const cleanedPrice = sortedPrices[0].toFixed(2);
  
            return cleanedPrice;
          }
        }
      }
    }
  
    return '';
  }
  