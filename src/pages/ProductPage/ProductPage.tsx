import React from "react";
import productImage from "./assets/helmet.png";
import { CustomSelect } from "../../shared/CustomSelect/CustomSelect";

export const ProductPage = () => {
  const options = [
    { value: 1, label: "XS" },
    { value: 2, label: "S" },
    { value: 3, label: "M" },
    { value: 4, label: "L" },
    { value: 5, label: "XL" },
  ];

  return (
    <div className="container">
      <h1>ProductPage</h1>
      <img src={productImage} alt="" width={300} />
      <div>
        <div>Color: black</div>
        <div style={{ width: "300px" }}>
          Please choose the size:
          <br />
          <CustomSelect options={options} />
        </div>
      </div>
    </div>
  );
};
