import colors from "./colors";
import { GridData, GridElement } from "../types";

export const createColorPallete = (data: GridData): Record<string, string> => {
  if (data == null) return {};
  const keys: string[] = [
    ...new Set(Object.values(data).map((d: GridElement) => d?.elder_id)),
  ];
  return keys.reduce((obj, val, i) => {
    if (!obj[val]) obj[val] = colors[i];
    return obj;
  }, {} as Record<string, string>);
};
