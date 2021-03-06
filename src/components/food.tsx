/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react"
import "../styles/johnllagio-tailwind.css"
import garden from "../images/garden.jpeg"
import grill from "../images/grill.jpeg"
import corn from "../images/food_01.jpeg"
import StackedCard from "./stackedCard"

const Food = () => {
  return (
    <div className="flex flex-col pb-8 lg:flex-row lg:justify-between lg:w-full xl:flex-row xl:justify-between xl:w-full">
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
