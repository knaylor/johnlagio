import React from 'react';

const StackedCard = (props: any) => {
  const { detailText, image, text, title } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg sm:mb-4 md:mb-4">
      <img className="w-full h-auto" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{`#${detailText}`}</span>
      </div>
    </div>
  );
} 

export default StackedCard;