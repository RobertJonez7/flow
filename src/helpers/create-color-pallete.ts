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

export const createColorPallete = (data: any) => {
  const keys = [...new Set(Object.values(data).map((d: any) => d?.elder_id))];
  return keys.reduce((obj, val, i) => {
    if (!obj[val]) obj[val] = colors[i];
    return obj;
  }, {});
};
