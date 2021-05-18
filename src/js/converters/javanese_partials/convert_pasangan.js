function convertPasangan(arr, n) {
  if (arr[n] == "!") {
    arr[n] = "®";
  } else if (arr[n] == "@") {
    arr[n] = "¯";
  } else if (arr[n] == "#") {
    arr[n] = "±";
  } else if (arr[n] == "$") {
    arr[n] = "°";
  } else if (arr[n] == "%") {
    arr[n] = "²";
  } else if (arr[n] == "^") {
    arr[n] = "³";
  } else if (arr[n] == "&") {
    arr[n] = "´";
  } else if (arr[n] == "*") {
    arr[n] = "µ";
  } else {
    arr[n] = arr[n].toUpperCase();
  }

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
      if (arr[n + 1] == "a") {
        arr.splice(n + 1, 1);
      } else if (arr[n + 1] == "u") {
        if (arr[n] == "S" || arr[n] == "P" || arr[n] == "V") {
          return;
        } else {
          arr[n + 1] = "|";
          if (arr[n] == "N") {
            arr[n] = "Ø";
          } else if (arr[n] == "K") {
            arr[n] = "Ñ";
          } else if (arr[n] == "K+") {
            arr[n] = "Ñ+";
          } else if (arr[n] == "T") {
            arr[n] = "Ò";
          } else if (arr[n] == "L") {
            arr[n] = "Ó";
          } else if (arr[n] == "D") {
            arr[n] = "Ô";
          } else if (arr[n] == "Q") {
            arr[n] = "Õ";
          }
        }
      } else if (arr[n + 1] == "[") {
        arr[n - 1] = "[" + arr[n - 1];
        arr.splice(n + 1, 1);
      } else if (arr[n + 1] == "o") {
        if (arr[n - 1] == " ") {
          arr[n - 2] = "[" + arr[n - 2];
        } else {
          arr[n - 1] = "[" + arr[n - 1];
        }
      }
    } else if (arr[n + 1] == "r" || arr[n + 1] == "y") {
      if (arr[n] == "N") {
        arr[n] = "Ø";
      } else if (arr[n] == "K") {
        arr[n] = "Ñ";
      } else if (arr[n] == "K+") {
        arr[n] = "Ñ+";
      } else if (arr[n] == "T") {
        arr[n] = "Ò";
      } else if (arr[n] == "L") {
        arr[n] = "Ó";
      } else if (arr[n] == "D") {
        arr[n] = "Ô";
      } else if (arr[n] == "Q") {
        arr[n] = "Õ";
      }

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
            if (arr[n] == "S" || arr[n] == "P" || arr[n] == "V") {
              arr[n + 1] = "]";
            } else {
              arr[n + 1] = "`";
            }

            if (arr[n + 2] == "a") {
              arr.splice(n + 2, 1);
              if (arr[n] == "Ø") {
                arr.splice(n + 1, 1);
              }
            } else if (arr[n + 2] == "i") {
              if (arr[n] == "Ø") {
                arr.splice(n + 1, 1);
              }
            } else if (arr[n + 2] == "u") {
              if (arr[n] == "S" || arr[n] == "P" || arr[n] == "V") {
                arr[n + 1] = "(";
                arr.splice(n + 2, 1);
              } else if (arr[n] == "Ø") {
                arr[n] = "N";
                arr[n + 1] = ")";
                arr.splice(n + 2, 1);
              } else {
                arr[n + 1] = ")";
                arr.splice(n + 2, 1);
              }
            } else if (arr[n + 2] == "[") {
              if (arr[n] == "Ø") {
                arr[n - 1] = "[" + arr[n - 1];
                arr[n] = "N";
                arr.splice(n + 2, 1);
              } else {
                arr[n - 1] = "[" + arr[n - 1];
                arr.splice(n + 2, 1);
              }
            } else if (arr[n + 2] == "e") {
              if (arr[n] == "S" || arr[n] == "P" || arr[n] == "V") {
                arr[n + 1] = "}";
                arr.splice(n + 2, 1);
              } else if (arr[n] == "Ø") {
                arr[n] = "Ù";
                arr.splice(n + 1, 1);
                arr.splice(n + 1, 1);
              } else {
                arr[n + 1] = "~";
                arr.splice(n + 2, 1);
              }
            } else if (arr[n + 2] == "o") {
              if (arr[n] == "Ø") {
                arr[n] = "N";
                if (arr[n - 1] == " ") {
                  arr[n - 2] = "[" + arr[n - 2];
                } else {
                  arr[n - 1] = "[" + arr[n - 1];
                }
              } else {
                if (arr[n - 1] == " ") {
                  arr[n - 2] = "[" + arr[n - 2];
                } else {
                  arr[n - 1] = "[" + arr[n - 1];
                }
              }
            }
          }
        }
      }

      if (arr[n + 1] == "y") {
        if (typeof arr[n + 2] !== "undefined") {
          if (
            arr[n + 2] == "a" ||
            arr[n + 2] == "i" ||
            arr[n + 2] == "u" ||
            arr[n + 2] == "[" ||
            arr[n + 2] == "e" ||
            arr[n + 2] == "o"
          ) {
            if (arr[n] == "S" || arr[n] == "P" || arr[n] == "V") {
              arr[n + 1] = "-";
            } else {
              arr[n + 1] = "Â";
            }

            if (arr[n + 2] == "a") {
              arr.splice(n + 2, 1);
            } else if (arr[n + 2] == "u") {
              if (arr[n] == "S" || arr[n] == "P" || arr[n] == "V") {
                return;
              } else {
                arr[n + 2] = "|";
              }
            } else if (arr[n + 2] == "[") {
              if (arr[n - 1] == " ") {
                arr[n - 2] = "[" + arr[n - 2];
              } else {
                arr[n - 1] = "[" + arr[n - 1];
              }
              arr.splice(n + 2, 1);
            } else if (arr[n + 2] == "o") {
              if (arr[n - 1] == " ") {
                arr[n - 2] = "[" + arr[n - 2];
              } else {
                arr[n - 1] = "[" + arr[n - 1];
              }
            }
          }
        }
      }
    } else {
      return;
    }
  }
}

export default convertPasangan;
