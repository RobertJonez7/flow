import { GridData, GridElement } from "../types";

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "brown",
  "teal",
  "purple",
  "pink",
  "black",
];

export const createColorPallete = (data: GridData): Record<string, string> => {
  const keys: string[] = [
    ...new Set(Object.values(data).map((d: GridElement) => d?.elder_id)),
  ];
  return keys.reduce((obj, val, i) => {
    if (!obj[val]) obj[val] = colors[i];
    return obj;
  }, {} as Record<string, string>);
};
