const COLORS = require('../Scripts/colors.js');
const FUNCTIONS = require('../Scripts/functions.js');
const CONSTANTS = require('../Scripts/constants.js');

/*        FONT FAMILY CLASSES        */


let fontFamily = [
  {
    label:"font-sans",
    detail:"font-family: font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";",
    documentation:"Apply a sans-serif font family."
  },
  {
    label:"font-serif",
    detail:"font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;",
    documentation:"Apply a serif font family."
  },
  {
    label:"font-mono",
    detail:"font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;",
    documentation:"Apply a monospaced font family."
  }
];

/*        FONT SIZE CLASSES        */

let fontSize = [];

for(i = 0; i < CONSTANTS.FONT_SIZES.length; i++) {  
  fontSize.push(
    {
      label:"text-" + CONSTANTS.FONT_SIZES[i].name,
      detail:"font-size: " + CONSTANTS.FONT_SIZES[i].value + "rem;",
      documentation:"Set the text color of an element to #" + CONSTANTS.FONT_SIZES[i].value + "."
    }
  );
}

/*        TEXT COLOR CLASSES        */

let textColor = [];

textColor.push(
  {
    label:"text-transparent",
    color: new Color("rgb", [0, 0, 0, 0]),
    detail:"color: transparent;",
    documentation:"Set the text color of an element to transparent."
  },
  {
    label:"text-current",
    detail:"color: currentColor;",
    documentation:"Set the text color of an element to the currentColor."
  }
);

for(i = 0; i < COLORS.COLORS.length; i++) {  
  textColor.push(
    {
      label:"text-" + COLORS.COLORS[i].class,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:"color: #" + COLORS.COLORS[i].value + ";",
      documentation:"Set the text color of an element to #" + COLORS.COLORS[i].value + "."
    }
  );
}

let classes = [];

classes = classes.concat(
  textColor,
  fontFamily,
  fontSize
);

exports.classes = classes;