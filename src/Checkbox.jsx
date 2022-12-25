import React, { useState } from "react";

export const Checkbox = ({ grocery }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isCrossed, setIsCrossed] = useState(false);

  function handleChange(event) {
    setIsChecked(event.target.checked);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.checked) {
      setIsCrossed((isCrossed) => !isCrossed);
    }

    if (event.key === "Escape" && event.target.checked) {
      setIsVisible(false);
    }
  };
  if (isVisible)
    return (
      <div className={`item ${isCrossed ? "input-checked" : ""}`}>
        <div className="input-container">
          <input
            tabIndex="-1"
            type="checkbox"
            checked={isChecked}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
        </div>
        <p>{grocery}</p>
      </div>
    );
};