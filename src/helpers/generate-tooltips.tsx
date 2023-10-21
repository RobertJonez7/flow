import React from "react";
import Tooltip from "../components/Tooltip";
import { Intersections } from "../types";
import {
  TOOLTIP_LEFT_DECREMENT_OFFSET,
  TOOLTIP_LEFT_INCREMENT_OFFSET,
  TOOLTIP_TOP_OFFSET,
} from "./constants";

const generateTooltips = (coordinates: Intersections) => {
  if (Object.keys(coordinates).length === 0) return;

  return Object.values(coordinates).map((val: any) => {
    return (
      <div
        style={{
          position: "absolute",
          top: val?.y - TOOLTIP_TOP_OFFSET,
          left:
            val?.x +
            (val?.increment
              ? TOOLTIP_LEFT_INCREMENT_OFFSET
              : TOOLTIP_LEFT_DECREMENT_OFFSET),
        }}
      >
        {React.createElement(Tooltip, {
          text: val?.description,
        })}
      </div>
    );
  });
};

export default generateTooltips;
