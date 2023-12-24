"use client"

import { FormEvent, useState } from "react"


const Searchbar = () => {
   const [searchPrompt, setSearchPrompt] = useState('')

    const handleSubmit = (event: FormEvent<HTMLForm) => {}


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