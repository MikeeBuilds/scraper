export function extractPrice(...elements: any) {
    for (const element of elements) {
      const priceText = element.text().trim();
  
      if (priceText) {
        const matches = priceText.match(/\d+\.\d{2}/);
  
        if (matches) {
          return matches[0];
        } else if (priceText.includes('$')) {
          // Handle list price format with currency symbol
          const listPriceMatches = priceText.match(/\d+\.\d{2}/);
          return listPriceMatches ? listPriceMatches[0] : '';
        } else {
          // Handle integer prices without a decimal point
          const cleanedPrice = priceText.replace(/[^\d.]/g, '');
  
          if (cleanedPrice.includes('.')) {
            // If the price contains a decimal point, consider it as is
            return cleanedPrice;
          } else {
            // If the price is an integer, append ".00"
            return `${cleanedPrice}.00`;
          }
        }
      }
    }
  
    return '';
  }
  

  export function extractCurrency(element: any) {
    const currencyText = element.text().trim().slice;
  
    if (currencyText) {
      const matches = currencyText.match(/[^\d.]/g);
  
      if (matches) {
        return matches[0];
      }
    }
  
    return '';
  }