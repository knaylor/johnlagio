/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/johnllagio-tailwind.css";

const selected =
  "inline-block border border-bellagio-green rounded py-2 px-4 bg-bellagio-green hover:bg-bellagio-green text-white";
const notSelected =
  "inline-block border border-white rounded hover:border-gray-200 text-bellagio-green hover:bg-gray-200 py-2 px-4";

const Navigation = (props: any) => {
  const { page, updatePage } = props;
  return (
    <ul className="flex justify-between p-3 my-6 mx-auto">
      <li className="mr-3">
        <a
          className={page === "home" ? selected : notSelected}
          href="#"
          onClick={() => updatePage("home")}
        >
          Home
        </a>
      </li>
      <li className="mr-3">
        <a
          className={page === "amenities" ? selected : notSelected}
          href="#"
          onClick={() => updatePage("amenities")}
        >
          Amenities
        </a>
      </li>
      <li className="mr-3">
        <a
          className={page === "food" ? selected : notSelected}
          href="#"
          onClick={() => updatePage("food")}
        >
          Food
        </a>
      </li>
      <li className="mr-3">
        <a
          className={page === "management" ? selected : notSelected}
          href="#"
          onClick={() => updatePage("management")}
        >
          Management
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
