/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react"
import "../styles/johnllagio-tailwind.css"
import garden from "../images/garden.jpeg"
import grill from "../images/grill.jpeg"
import corn from "../images/food_01.jpeg"
import StackedCard from "./stackedCard"

const Food = () => {
  return (
    <div className="container mx-auto flex justify-around pb-8 sm:flex-col md:flex-col lg:flex-row xl:flex-row">
      <StackedCard
        detailText="freshveg"
        image={garden}
        text="Enjoy fresh vegetables from Johnlagio's garden"
        title="Garden"
      />
      <StackedCard
        detailText="grillnchill"
        image={grill}
        text="At Johnlagio, you can eat whatever you want! Just bring it and grill it."
        title="Grill"
      />
      <StackedCard
        detailText="summerfresh"
        image={corn}
        text="One time we had fresh sweet corn"
        title="Corn"
      />
    </div>
  );
};

export default Food;
