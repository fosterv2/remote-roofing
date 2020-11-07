import React from 'react'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <div className="form">
          <img
            src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png"
            alt="Home Icon"
            style={{ height: "35px", marginLeft: "15px" }}
          />
          <input id="input" type="text" placeholder="Your Address" />
          <input id="button" type="submit" value="Get Inspection" />
        </div>
      </form>
    </div>
  );
};
    
export default SearchBar