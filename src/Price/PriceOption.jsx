import React from "react";
import Feature from "./Feature";

const PriceOption = ({ cardData }) => {
  return (
    <div className="bg-blue-500 rounded-md text-white my-4 p-4 flex flex-col flex-grow h-full">
      <h2 className="text-center">
        <span className="text-4xl font-bold">{cardData.price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{cardData.name}</h4>
      <ul className="pl-6">
        {cardData.features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </ul>
      <button
        type="btn"
        className="mt-auto bg-green-500 w-full py-2 font-bold rounded-lg"
      >
        Join Now
      </button>
    </div>
  );
};

export default PriceOption;
