/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import "../styles/johnllagio-tailwind.css";
import mgmt from "../images/management.jpeg";
import HorizontalCard from "./horizontalCard";

const Management = () => {
  return (
    <HorizontalCard
      detailText="This guy! He's not only the proprieter, owner and 'Hostess with the Mostess', but he's a part time chef, firestarter, gardner, bartender and all around great guy."
      image = {mgmt}
      text="Who is the mastermind behind Johnlagio?"
      title="Management"
    />
  )
};

export default Management;
