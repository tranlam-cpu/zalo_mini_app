import React from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  price: number;
  image: string;
  price_sale: number;
  quantity: number;
}

interface productProps {
  products: Product;
}

const Product: React.FunctionComponent<productProps> = ({ products }) => {
  return (
    <div className="w-full">
      <div className="w-full h-36">
        <img
          className="w-full h-full rounded-xl border shadow-inner"
          src={products?.image}
        />
      </div>
      <div className="flex justify-around">
        <p className="">{products?.name}</p>
        <p className="">{products?.price}</p>
      </div>
    </div>
  );
};

export default Product;
