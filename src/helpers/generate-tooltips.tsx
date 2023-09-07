import React from "react";
import Tooltip from "../components/tooltip";
import { Intersections } from "../types";

const generateTooltips = (coordinates: Intersections) => {
  if (Object.keys(coordinates).length === 0) return;
  return Object.values(coordinates).map((val: any) => {
    try {
      return (
        <div
          style={{ position: "absolute", top: val?.y - 15, left: val?.x - 20 }}
        >
          {React.createElement(Tooltip, {
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
          corporis animi. Architecto doloremque distinctio totam sit debitis
          quia vero dolor, earum quas quo est voluptatum, asperiores natus
          incidunt amet atque!`,
          })}
        </div>
      );
    } catch (e) {
      console.log("Error generating tooltips: ", e);
    }
  });
};

export default generateTooltips;
