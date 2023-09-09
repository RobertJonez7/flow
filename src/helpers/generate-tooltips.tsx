import React from "react";
import Tooltip from "../components/Tooltips";
import { Intersections } from "../types";

const generateTooltips = (coordinates: Intersections) => {
  if (Object.keys(coordinates).length === 0) return;
  return Object.values(coordinates).map((val: any) => {
    try {
      return (
        <div
          style={{
            position: "absolute",
            top: val?.y - 18,
            left: val?.x + (val?.increment ? -12 : -25),
          }}
        >
          {React.createElement(Tooltip, {
            text: val?.description,
          })}
        </div>
      );
    } catch (e) {
      console.log("Error generating tooltips: ", e);
    }
  });
};

export default generateTooltips;
