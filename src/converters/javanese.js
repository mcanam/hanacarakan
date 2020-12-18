import convertKonsonan from "./javanese_partials/convert_konsonan.js";
import {
  replaceInput,
  replaceOutput,
} from "./javanese_partials/replace_aksara.js";

function convertJavanese(inputString) {
  "use strict";

  if (inputString == "") return "";

  const input = inputString;

  let output = replaceInput(input);
  output = output.split("");

  for (let i = 0; i < output.length; i++) {
    if (output[i] == "h") {
      convertKonsonan(output, i);
    } else if (output[i] == "n") {
      convertKonsonan(output, i);
    } else if (output[i] == "c") {
      convertKonsonan(output, i);
    } else if (output[i] == "r") {
      convertKonsonan(output, i);
    } else if (output[i] == "k") {
      convertKonsonan(output, i);
    } else if (output[i] == "f") {
      convertKonsonan(output, i);
    } else if (output[i] == "t") {
      convertKonsonan(output, i);
    } else if (output[i] == "s") {
      convertKonsonan(output, i);
    } else if (output[i] == "w") {
      convertKonsonan(output, i);
    } else if (output[i] == "l") {
      convertKonsonan(output, i);
    } else if (output[i] == "p") {
      convertKonsonan(output, i);
    } else if (output[i] == "d") {
      convertKonsonan(output, i);
    } else if (output[i] == "j") {
      convertKonsonan(output, i);
    } else if (output[i] == "y") {
      convertKonsonan(output, i);
    } else if (output[i] == "v") {
      convertKonsonan(output, i);
    } else if (output[i] == "m") {
      convertKonsonan(output, i);
    } else if (output[i] == "g") {
      convertKonsonan(output, i);
    } else if (output[i] == "b") {
      convertKonsonan(output, i);
    } else if (output[i] == "q") {
      convertKonsonan(output, i);
    } else if (output[i] == "z") {
      convertKonsonan(output, i);
    } else if (output[i] == "!") {
      convertKonsonan(output, i);
    } else if (output[i] == "@") {
      convertKonsonan(output, i);
    } else if (output[i] == "#") {
      convertKonsonan(output, i);
    } else if (output[i] == "$") {
      convertKonsonan(output, i);
    } else if (output[i] == "^") {
      convertKonsonan(output, i);
    } else if (output[i] == "%") {
      convertKonsonan(output, i);
    } else if (output[i] == "&") {
      convertKonsonan(output, i);
    } else if (output[i] == "*") {
      convertKonsonan(output, i);
    }
  }

  output = output.join("");
  output = replaceOutput(output);

  return output;
}

export default convertJavanese;
