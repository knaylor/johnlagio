/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import "../styles/johnllagio-tailwind.css";
import pool01 from "../images/pool_01.jpeg";
import hammock from '../images/hammock.jpeg';
import firepit from '../images/firepit-dusk.jpeg';
import StackedCard from "./stackedCard";

const Ammenities = () => {
  return (
    <div className="container mx-auto flex justify-around pb-8">
      <StackedCard
        detailText="chilltime"
        image={pool01}
        text="Beat the heat at the Johnlagio pool"
        title="Pool"
      />
      <StackedCard
        detailText="loungetime"
        image={hammock}
        text="Relax in style on the hammock"
        title="Hammock"
      />
      <StackedCard
        detailText="smorestime"
        image={firepit}
        text="Share stories (or drinks) around the firepit"
        title="Firepit"
      />
    </div>
  );
};

export default Ammenities;
