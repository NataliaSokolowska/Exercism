//import { map } from "core-js/fn/array";
const colorsArr =["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Grey", "White"];
const lowerCaseColor = colorsArr.map(name => name.toLowerCase());

export const colorCode = colorVal => {

  return COLORS.indexOf(colorVal);
  
};

export const COLORS = lowerCaseColor;
