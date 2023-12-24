export function extractPrice(...elements) {

    for (const element of elements) {
  
      if (element.classList.contains('a-text-strike')) {
          
        // Found original price element
        const originalPriceText = element.innerText;
        const originalPrice = getPriceFromText(originalPriceText);
        return originalPrice;
  
      } else {
  
        // Normal price element
        const priceText = element.textContent.trim();
  
        // Existing logic to extract normal price
        const price = getPriceFromText(priceText);
        return price;
  
      }
  
    }
  
    return '';
  
  }
  
  function getPriceFromText(text) {
  
    const matches = text.match(/\d+\.\d{2}/);
  
    if (matches) {
      return matches[0];
    } else if (text.includes('$')) {
      // Handle currency symbol
      const currencyPriceMatches = text.match(/\d+\.\d{2}/);
      return currencyPriceMatches ? currencyPriceMatches[0] : '';
    } else {
      // Handle integer prices
      const cleanedPrice = text.replace(/[^\d.]/g, '');
  
      if (cleanedPrice.includes('.')) {
        return cleanedPrice; 
      } else {
        return `${cleanedPrice}.00`;
      }
    }
  
  }
  