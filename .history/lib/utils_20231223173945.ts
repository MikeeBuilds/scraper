export function extractPrice(...elements: any) {
  for (const element of elements) {
    const priceText = element.text().trim();

    if (priceText) {
      const matches = priceText.match(/\d+\.\d{2}/);

      if (matches) {
        return matches[0];
      } else {
        const cleanedPrice = priceText.replace(/[^\d.]/g, '');
        const decimalMatches = cleanedPrice.match(/\d+\.\d{2}/);

        if (decimalMatches) {
          return decimalMatches[0];
        } else {
          const integerMatches = cleanedPrice.match(/\d+/);
          return integerMatches ? `${integerMatches[0]}.00` : '';
        }
      }
    }
  }

  return '';
}
