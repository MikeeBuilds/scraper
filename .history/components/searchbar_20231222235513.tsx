"use client";

const Searchbar = () => {
    const handleSubmit = () => {};

    return (
        <form 
          className="flex flex-wrap gap-4 mt-12"
          onSubmit={handleSubmit}
          >

         <input 
           type="text"
           placeholder="Search for products"
           className="searchba"
           />
        </form>
    )
};

export default Searchbar;