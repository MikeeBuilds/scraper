"use client"

import { FormEvent, useState } from "react";

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    
    if(hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith) {
  } catch (error) {
    
  }
}


const Searchbar = () => {
   const [searchPrompt, setSearchPrompt] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValdLink = isValidAmazonProductUrl(searchPrompt);
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

        <button type="submit" className="searchbar-btn">
          Search
        </button>
    </form>
  )
}

export default Searchbar