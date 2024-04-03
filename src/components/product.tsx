import React from "react";

const Product = () => {
  return (
    <div className="w-full">
      <div className="w-full h-36">
        <img
          className="w-full h-full rounded-xl border shadow-inner"
          src="https://product.hstatic.net/1000300281/product/bb2c_a0c45b56b75e47b3a8f594ab768041ad_ba083c228a5b4dd2a11e4fc012fc07bb_f3e7d474d1b24d2f98d862d9c8c8c712_1024x1024.jpg"
        />
      </div>
      <div>
        <p className="font-semibold">Thú bập bênh</p>
        <p>5000 đ</p>
      </div>
    </div>
  );
};

export default Product;
