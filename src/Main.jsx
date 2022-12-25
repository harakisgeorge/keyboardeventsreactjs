import React from "react";
import { Checkbox } from "./Checkbox";
export const Main = () => {
  const groceries = [
    "Baking powder",
    "Baking Soda",
    "Granulated Sugar",
    "Brown Sugar",
    "Flour",
    "Honey",
  ];

  return (
    <div className="grocery-container">
      {groceries.map((grocery) => (
        <Checkbox grocery={grocery} />
      ))}
    </div>
  );
};