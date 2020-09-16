import React from "react";

const Product = ({ name, price }) => {
  return (
    <div>
      {name}: {price.formatted_with_symbol}
    </div>
  );
};

export default Product;
