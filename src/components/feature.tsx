import React, { useEffect } from "react";
import price from "../static/images/price.png";

interface Feature {
  id: string;
  name: string;
  src: string;
  color: string;
}

interface featureProps {
  feats: Feature;
}

const Feature: React.FunctionComponent<featureProps> = ({ feats }) => {
  return (
    <div
      style={{ backgroundColor: feats.color }}
      className={`relative flex-shrink-0 rounded-xl shadow-lg h-16 w-24 p-2 bg-${feats.color}`}
    >
      <img
        className="absolute bottom-1 right-1 z-[0] object-cover"
        width="45px"
        src={feats.src}
      />
      <p className="absolute z-10 font-bold ">{feats.name}</p>
    </div>
  );
};

export default Feature;
