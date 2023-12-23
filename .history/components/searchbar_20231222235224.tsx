"use client";

const SearchBar = () => {
    const handleSubmit = () => {};

    return (
        <form 
          className="flex flex-wrap gap-4 mt-12"
          onSubmit={handleSubmit}
          >

         <input 
           className="input"
           type="text"
           placeholder="Search for products"
           />
        </form>
    )
};

export default SearchBar;