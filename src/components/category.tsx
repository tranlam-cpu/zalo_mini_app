import React from "react";
import Toy from "../static/images/toy1.png";
import { useNavigate } from "zmp-ui";

const Categories = ({ category }) => {
  const navigate = useNavigate();

  const urlPath = category.url;

  return (
    <div className="p-2 break-words" onClick={() => navigate(urlPath)}>
      <div className="w-20 h-14 mb-1">
        <img src={category.src} className="w-full h-full" alt="sd" />
      </div>
      <p className="text-center font-semibold ps-2">{category.name}</p>
    </div>
  );
};

export default Categories;
