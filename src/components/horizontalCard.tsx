import React from "react";
import "../styles/johnllagio-tailwind.css";

const HorizontalCard = (props: any) => {
  const { detailText, image, text, title } = props;
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex m-3 justify-center">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
        title="Management"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">{ title }</p>
          <div className="text-gray-900 font-bold text-xl mb-2">{ text }</div>
          <p className="text-gray-700 text-base">{ detailText }</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
