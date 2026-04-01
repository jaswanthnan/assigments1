import React from "react";

const CounterDisplay = ({ count }) => {
  let color = "gray";

  if (count > 0) color = "green";
  else if (count < 0) color = "red";

  return (
    <h1 style={{ color }} className="counter">
      {count}
    </h1>
  );
};

export default CounterDisplay;