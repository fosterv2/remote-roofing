import React from 'react'
import Phone from "../components/Phone";
import NavBar from "../components/NavBar";
import Headline from "../components/Headline";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <Phone />
      <NavBar />
      <Headline />
      <SearchBar />
    </div>
  );
};
    
export default Home