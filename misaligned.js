const { expect } = require("chai");

function get_color_map() {
  const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
  const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
  let colorMap = [];
  for (let i = 0; i < majorColors.length; i++) {
    for (let j = 0; j < minorColors.length; j++) {
      colorMap.push({
        code: i * 5 + j,
        majorColor: majorColors[i],
        minorColor: minorColors[j],
      });
    }
  }
  return colorMap;
}

function format_color_map(colorMap) {
  return `${colorMap.code} | ${colorMap.majorColor} | ${colorMap.minorColor}`;
}

function print_color_map(colorMaps) {
  colorMaps.forEach((colorMap) => {
    console.log(format_color_map(colorMap));
  });
}

const result = get_color_map();
print_color_map(result);

expect(result.length).equals(25, "Color map length should be 25");
expect(result[0].code).equals(1, "Color code should start from 1");
expect(format_color_map(result[0])).equals(
  "1 | White | Blue",
  "First color map should be 1 | White | Blue"
);
console.log("All is well (maybe!)");
