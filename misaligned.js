const { expect } = require("chai");

function ColorMap(colorCode, majorColor, minorColor) {
  this.colorCode = colorCode;
  this.majorColor = majorColor;
  this.minorColor = minorColor;
}

function get_color_map() {
  const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
  const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
  let colorMaps = [];
  for (let i = 0; i < majorColors.length; i++) {
    for (let j = 0; j < minorColors.length; j++) {
      colorMaps.push(new ColorMap(i * 5 + j + 1, majorColors[i], minorColors[j]));
    }
  }
  return colorMaps;
}

function format_color_map(colorMap) {
  return `${colorMap.colorCode.toString().padEnd(2,' ')} | ${colorMap.majorColor.padEnd(6,' ')} | ${colorMap.minorColor}`;
}

function print_color_map(colorMaps) {
  colorMaps.forEach((colorMap) => {
    console.log(format_color_map(colorMap));
  });
}

const result = get_color_map();
print_color_map(result);

expect(result.length).equals(25, "Color map length should be 25");
expect(result[0].colorCode).equals(1, "Color code should start from 1");
expect(format_color_map(result[0])).equals(
  "1  | White  | Blue",
  "First color map should be 1 | White | Blue"
);
expect(format_color_map(result[5])).equals(
  "6  | Red    | Blue"
);
expect(format_color_map(result[5]).charAt(3)).equals("|");
expect(format_color_map(result[5]).charAt(12)).equals("|");
console.log("All is well (maybe!)");
