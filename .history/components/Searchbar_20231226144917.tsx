"use client"

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    
    if(
      hostname.includes('amazon.com') || 
      hostname.includes('amazon.') || 
      hostname.endsWith('amazon')
      ) {
        return true;
      } 
  } catch (error) {
    return false;
  }

  return false;
}

const Searchbar = () => {
   const [searchPrompt, setSearchPrompt] = useState('');
   const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValdLink = isValidAmazonProductUrl(searchPrompt);

      alert(isValdLink ? 'Valid Link' : 'Invalid Link');

      if(!isValdLink) return alert('Please provide a valid Amazon product link');

      try {
        setIsLoading(true);

        
        const product = await scrapeAndStoreProduct(searchPrompt);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }

      
    }


  return (
    <form
      className="flex flex-wrap gap-4 mt-12"
      onSubmit={handleSubmit}
    >
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Search for products"
          className="searchbar-input"
        />   

        <button 
          type="submit" 
          className="searcring ring-[#44BCFF] ring-opacity-50 ring-offset-2 ring-offset-gray-900"
          disabled={searchPrompt === ''}
        >
          {isLoading? 'Searching...' : 'Search'}
        </button>
    </form>
  )
}

export default Searchbar