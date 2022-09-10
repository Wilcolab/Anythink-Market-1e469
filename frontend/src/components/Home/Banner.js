import React from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "./SearchBox";

const Banner = ({ title, setTitle }) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <SearchBox title={title} setTitle={setTitle}></SearchBox>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
