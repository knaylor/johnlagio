import React from "react";
import "../styles/johnllagio-tailwind.css";
import logo from '../images/johnlagio.jpeg';

const Banner = (props: any) => {
  return (
    <div className="flex flex-col items-center justify-center h-1 Banner my-4 pt-24 mb-12">
      <img src={logo} width="300" height="190" alt="Johnllagio logo" />
    </div>
  );
};

export default Banner;
