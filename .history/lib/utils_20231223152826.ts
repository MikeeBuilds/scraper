export function extractPrice(...elements: CheerioElement[]): string {
    for (const element of elements) {
      const wholePart = element.find('.a-price-whole').text().trim();
      const decimalPart = element.find('.a-price-decimal').text().trim();
  
      console.log({ wholePart, decimalPart }); // Add this line for debugging
  
      if (wholePart) {
        const price = decimalPart ? `${wholePart}.${decimalPart}` : wholePart;
        return price.replace(/\D/g, ''); // Remove non-digit characters
      }
    }
  
    return '';
  }
  