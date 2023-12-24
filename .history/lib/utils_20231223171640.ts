// Extracts and returns the price from a list of possible elements.
export function extractPrice(...elements: any) {
    for (const element of elements) {
      const priceText = element.text().trim();
  
      if(priceText) {
        const cleanPrice = priceText.replace(/[^\d.]/g, '');
  
        let firstPrice; 
  
        if (cleanPrice) {
          firstPrice = cleanPrice.match(/\d+(?:\.\d{1,2})?/);
        } 
  
        return firstPrice || cleanPrice;
      }
    }
  
    return '';
  }


// (/\d+(?:\.\d{1,2})?/)