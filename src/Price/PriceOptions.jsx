import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PriceOption from "./PriceOption";
const PriceOptions = () => {
  const [gymData, setGymData] = useState([]);
  useEffect(() => {
    fetch("https://millatsakib.github.io/img-src/priceOption.json")
      .then((res) => res.json())
      .then((data) => setGymData(data));
  }, []);
  return (
    <div>
      <h3 className="text-center my-4 font-bold text-2xl md:text-5xl md:my-7">
        All Price list and facility are given bellow.
      </h3>
      <div className="grid container grid-cols-3 gap-4 items-center mx-auto w-full">
        {gymData.map((cardData) => (
          <PriceOption key={cardData.id} cardData={cardData}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
