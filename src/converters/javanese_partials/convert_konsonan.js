import convertPasangan from "./convert_pasangan.js";

function convertKonsonan(arr, n) {
  if (typeof arr[n + 1] !== "undefined") {
    if (arr[n + 1] == "+") {
      arr[n] = arr[n] + "+";
      arr.splice(n + 1, 1);
    }

    if (
      arr[n + 1] == "a" ||
      arr[n + 1] == "i" ||
      arr[n + 1] == "u" ||
      arr[n + 1] == "[" ||
      arr[n + 1] == "e" ||
      arr[n + 1] == "o"
    ) {
      if (arr[n] == "h") {
        arr[n] = "a";
      }

      if (arr[n + 1] == "a") {
        arr.splice(n + 1, 1);
      } else if (arr[n + 1] == "[") {
        arr[n] = "[" + arr[n];
        arr.splice(n + 1, 1);
      } else if (arr[n + 1] == "e") {
        if (arr[n] == "r") {
          arr[n] = "x";
          arr.splice(n + 1, 1);
        } else if (arr[n] == "l") {
          arr[n] = "X";
          arr.splice(n + 1, 1);
        } else {
          return;
        }
      } else if (arr[n + 1] == "o") {
        arr[n] = "[" + arr[n];
      } else {
        return;
      }
    } else if (arr[n + 1] == "r" || arr[n + 1] == "y") {
      if (arr[n + 1] == "r") {
        if (typeof arr[n + 2] !== "undefined") {
          if (
            arr[n + 2] == "a" ||
            arr[n + 2] == "i" ||
            arr[n + 2] == "u" ||
            arr[n + 2] == "[" ||
            arr[n + 2] == "e" ||
            arr[n + 2] == "o"
          ) {
            arr[n + 1] = "]";
            if (arr[n + 2] == "a") {
              arr.splice(n + 2, 1);
            } else if (arr[n + 2] == "u") {
              arr[n + 1] = "(";
              arr.splice(n + 2, 1);
            } else if (arr[n + 2] == "[") {
              arr[n] = "[" + arr[n];
              arr.splice(n + 2, 1);
            } else if (arr[n + 2] == "e") {
              arr[n + 1] = "}";
              arr.splice(n + 2, 1);
            } else if (arr[n + 2] == "o") {
              arr[n] = "[" + arr[n];
            } else {
              return;
            }
          }
        }
      } else if (arr[n + 1] == "y") {
        if (typeof arr[n + 2] !== "undefined") {
          if (
            arr[n + 2] == "a" ||
            arr[n + 2] == "i" ||
            arr[n + 2] == "u" ||
            arr[n + 2] == "[" ||
            arr[n + 2] == "e" ||
            arr[n + 2] == "o"
          ) {
            arr[n + 1] = "-";
            if (arr[n + 2] == "a") {
              arr.splice(n + 2, 1);
            } else if (arr[n + 2] == "[") {
              arr[n] = "[" + arr[n];
              arr.splice(n + 2, 1);
            } else if (arr[n + 2] == "o") {
              arr[n] = "[" + arr[n];
            } else {
              return;
            }
          }
        }
      }
    } else {
      if (arr[n] == "r") {
        arr[n] = "/";
      } else if (arr[n] == "z") {
        arr[n] = "=";
      } else if (arr[n] == "h") {
        return;
      } else {
        if (arr[n + 1] == " ") {
          if (typeof arr[n + 2] !== "undefined") {
            if (arr[n + 2] != "a") {
              if (
                arr[n + 2] != "A" &&
                arr[n + 2] != "I" &&
                arr[n + 2] != "U" &&
                arr[n + 2] != "E" &&
                arr[n + 2] != "O"
              ) {
                if (typeof arr[n + 3] !== "undefined") {
                  if (
                    arr[n + 3] != "a" &&
                    arr[n + 3] != "i" &&
                    arr[n + 3] != "u" &&
                    arr[n + 3] != "[" &&
                    arr[n + 3] != "e" &&
                    arr[n + 3] != "o"
                  ) {
                    arr[n + 1] = "\\";
                    convertPasangan(arr, n + 3);
                  } else {
                    convertPasangan(arr, n + 2);
                  }
                }
              } else {
                arr[n + 1] = "\\";
              }
            } else {
              arr[n + 2] = "H";
            }
          }
        } else {
          convertPasangan(arr, n + 1);
        }
      }
    }
  } else {
    if (arr[n] == "r") {
      arr[n] = "/";
    } else if (arr[n] == "z") {
      arr[n] = "=";
    } else if (arr[n] == "h") {
      return;
    }
  }
}

export default convertKonsonan;
