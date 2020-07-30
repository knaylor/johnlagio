/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import "../styles/johnllagio-tailwind.css";
import home01 from "../images/decorations_01.jpeg";
import HorizontalCard from "./horizontalCard";

const Home = () => {
  return (
    <HorizontalCard
      detailText="We know you'll love your time here.  From splashing and sunning in the world class pool, to finding relief from the sun under the numerous umbrellas, you'll love wasting away your COVID-19 Summer of 2020 here."
      image={home01}
      text="Welcome to Johnlagio!"
      title="Home"
    />
  );
};

export default Home;
