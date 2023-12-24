export function extractPrice(...elements: any) {
    for (const element of elements) {
      const priceText = element.text().trim();
  
      if (priceText) {
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
  
    return '';
  }
  
  
    return '';
  }
  




// (/\d+(?:\.\d{1,2})?/)