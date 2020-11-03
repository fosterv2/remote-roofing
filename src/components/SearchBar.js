import React from 'react'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <img
          src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png"
          alt="Home Icon"
        />
        <input type="text" placeholder="Your Address" />
        <input type="submit" value="Get Inspection" />
      </form>
    </div>
  );
};
    
export default SearchBar