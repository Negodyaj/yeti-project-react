import React from "react";
import { CustomSelect } from "../../shared/CustomSelect/CustomSelect";

export const CartPage = () => {
  const options = [
    { value: 1, label: "Via post" },
  ];

  return (
    <>
      <h1>CartPage</h1>
      <div>Please select the delivery type:</div>
      <CustomSelect options={options} />
    </>
  );
};
