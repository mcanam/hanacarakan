'use strict';

function generateKeys() {

  const keyMap = {
    carakan: {
      ha: "a",
      na: "n",
      ca: "c",
      ra: "r",
      ka: "k",
      da: "f",
      ta: "t",
      sa: "s",
      wa: "w",
      la: "l",
      pa: "p",
      dha: "d",
      ja: "j",
      ya: "y",
      nya: "v",
      ma: "m",
      ga: "g",
      ba: "b",
      tha: "q",
      nga: "z",
    },
    sandangan: {
      wulu: "i",
      suku: "u",
      taling: "[",
      pepet: "e",
      tarung: "o",
      layar: "/",
      wignyan: "h",
      cecek: "=",
      pangkon: "\\",
      pengkal: "-",
      cakra: "]",
      "cakra + u": "(",
      "cakra keret": "}",
      "pa cerek": "x",
      "nga lelet": "X",
      "pada pangkat": ";",
      "pada lungsi": ".",
      "pada lingsa": ",",
      "adeg - adeg": "?",
    },
    murda: {
      na: "!",
      ka: "@",
      ta: "#",
      sa: "$",
      pa: "%",
      nya: "^",
      ga: "&",
      ba: "*",
    },
    rekan: {
      kha: "k+",
      "fa/va": "p+",
      dza: "f+",
      gha: "g+",
      za: "j+",
    },
    pas_carakan: {
      ha: "H",
      na: "N",
      ca: "C",
      ra: "R",
      ka: "K",
      da: "F",
      ta: "T",
      sa: "S",
      wa: "W",
      la: "L",
      pa: "P",
      dha: "D",
      ja: "J",
      ya: "Y",
      nya: "V",
      ma: "M",
      ga: "G",
      ba: "B",
      tha: "Q",
      nga: "Z",
    },
    pas_murda: {
      na: "®",
      ka: "¯",
      ta: "±",
      sa: "°",
      pa: "²",
      nya: "³",
      ga: "´",
      ba: "µ",
    },
    pas_rekan: {
      kha: "K+",
      "fa/va": "P+",
      dza: "F+",
      gha: "G+",
      za: "J+",
    },
    swara: {
      a: "A",
      i: "I",
      u: "U",
      e: "E",
      o: "O",
    },
    wilangan: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      0: "0",
    },
  };

  const fragment = document.createDocumentFragment();
  const wrapperCarakan = createWrapper();
  const wrapperSandangan = createWrapper();
  const wrapperMurda = createWrapper();
  const wrapperRekan = createWrapper();
  const wrapperPasCarakan = createWrapper();
  const wrapperPasMurda = createWrapper();
  const wrapperPasRekan = createWrapper();
  const wrapperSwara = createWrapper();
  const wrapperWilangan = createWrapper();
  const keypadWrapper = document.querySelector(".keypad");

  for (let key in keyMap.carakan) {
    const button = createButton(key, keyMap.carakan[key]);
    wrapperCarakan.appendChild(button);
  }

  for (let key in keyMap.sandangan) {
    const button = createButton(key, keyMap.sandangan[key]);
    wrapperSandangan.appendChild(button);
  }

  for (let key in keyMap.murda) {
    const button = createButton(key, keyMap.murda[key]);
    wrapperMurda.appendChild(button);
  }

  for (let key in keyMap.rekan) {
    const button = createButton(key, keyMap.rekan[key]);
    wrapperRekan.appendChild(button);
  }

  for (let key in keyMap.pas_carakan) {
    const button = createButton(key, keyMap.pas_carakan[key]);
    wrapperPasCarakan.appendChild(button);
  }

  for (let key in keyMap.pas_murda) {
    const button = createButton(key, keyMap.pas_murda[key]);
    wrapperPasMurda.appendChild(button);
  }

  for (let key in keyMap.pas_rekan) {
    const button = createButton(key, keyMap.pas_rekan[key]);
    wrapperPasRekan.appendChild(button);
  }

  for (let key in keyMap.swara) {
    const button = createButton(key, keyMap.swara[key]);
    wrapperSwara.appendChild(button);
  }

  for (let key in keyMap.wilangan) {
    const button = createButton(key, keyMap.wilangan[key]);
    wrapperWilangan.appendChild(button);
  }

  function createWrapper() {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "keypad_wrapper");
    return wrapper;
  }

  function createTitle(name) {
    const title = document.createElement("span");
    title.setAttribute("class", "keypad_title");
    title.innerText = name;
    return title;
  }

  function createButton(key, label) {
    const button = document.createElement("button");
    const button_key = document.createElement("span");
    const button_label = document.createElement("span");
    button.setAttribute("class", "keypad_button");
    button.setAttribute("data-key", label);
    button_key.innerText = label;
    button_label.innerText = key;
    button.appendChild(button_key);
    button.appendChild(button_label);
    return button;
  }

  fragment.appendChild(createTitle("Carakan"));
  fragment.appendChild(wrapperCarakan);
  fragment.appendChild(createTitle("Sandangan"));
  fragment.appendChild(wrapperSandangan);
  fragment.appendChild(createTitle("Murda"));
  fragment.appendChild(wrapperMurda);
  fragment.appendChild(createTitle("Rekan"));
  fragment.appendChild(wrapperRekan);
  fragment.appendChild(createTitle("Pasangan Carakan"));
  fragment.appendChild(wrapperPasCarakan);
  fragment.appendChild(createTitle("Pasangan Murda"));
  fragment.appendChild(wrapperPasMurda);
  fragment.appendChild(createTitle("Pasangan Rekan"));
  fragment.appendChild(wrapperPasRekan);
  fragment.appendChild(createTitle("Swara"));
  fragment.appendChild(wrapperSwara);
  fragment.appendChild(createTitle("Wilangan"));
  fragment.appendChild(wrapperWilangan);
  keypadWrapper.appendChild(fragment);
}

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

function replaceInput(inputLatin) {
  const replaceMap = {
    rekan: {
      kh: "k+",
      f: "p+",
      v: "p+",
      dz: "f+",
      gh: "g+",
      z: "j+",
    },
    murda: {
      Ny: "^",
      N: "!",
      K: "@",
      T: "#",
      S: "$",
      P: "%",
      G: "&",
      B: "*",
    },
    carakan: {
      dh: "d",
      d: "f",
      th: "q",
      ny: "v",
      ng: "z",
    },
  };

  let replaced = inputLatin
    .replace(/[^a-zA-Z|0-9|.|,|`|è|N|K|T|S|P|Ny|G|B|\s]/g, "")
    .replace(/kh|f|v|dz|gh|z/g, function (match) {
      return replaceMap.rekan[match];
    })
    .replace(/Ny|N|K|T|S|P|G|B/g, function (match) {
      return replaceMap.murda[match];
    })
    .replace(/dh|d|th|ny|ng/g, function (match) {
      return replaceMap.carakan[match];
    })
    .replace(/e`|è/g, "[")
    .replace(/(\d{1,})/g, ";$1;")
    .replace(/\s{1,}/g, " ")
    .trim();

  if (replaced.search(/[a|i|u|[|e|o|r|h|z|;|A|I|U|E|O]$/) === -1) {
    replaced += "\\";
  }

  return replaced;
}

function replaceOutput(outputAksara) {
  let replaced = outputAksara
    .replace(/\s/g, "")
    .replace(/\+i/g, "Æ")
    .replace(/\+i=/g, "È")
    .replace(/\+i\//g, "É")
    .replace(/\+i\//g, "É")
    .replace(/\+=/g, "Ê")
    .replace(/\+=\//g, "Ç")
    .replace(/o=/g, "=o")
    .replace(/e=/g, "_");

  return replaced;
}

function convertJavanese(inputString) {

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

function convertLatin(aksaraText) {

  const input = aksaraText;

  let output = input
    .replace(/h/g, '~h')
    .replace(/a/g, 'ha')
    .replace(/n/g, 'na')
    .replace(/c/g, 'ca')
    .replace(/r/g, 'ra')
    .replace(/k/g, 'ka')
    .replace(/d/g, 'dha')
    .replace(/f/g, 'da')
    .replace(/t/g, 'ta')
    .replace(/s/g, 'sa')
    .replace(/w/g, 'wa')
    .replace(/l/g, 'la')
    .replace(/p/g, 'pa')
    .replace(/j/g, 'ja')
    .replace(/y/g, 'ya')
    .replace(/v/g, 'nya')
    .replace(/m/g, 'ma')
    .replace(/g/g, 'ga')
    .replace(/b/g, 'ba')
    .replace(/q/g, 'tha')
    .replace(/z/g, 'nga')
    .replace(/!/g, 'na')
    .replace(/@/g, 'ka')
    .replace(/#/g, 'ta')
    .replace(/\$/g, 'sa')
    .replace(/%/g, 'pa')
    .replace(/\^/g, 'nya')
    .replace(/&/g, 'ga')
    .replace(/\*/g, 'ba')
    .replace(/ka\+/g, 'kha')
    .replace(/pa\+/g, 'fa')
    .replace(/da\+/g, 'dza')
    .replace(/ga\+/g, 'gha')
    .replace(/ja\+/g, 'za')
    .replace(/®/g, '#na')
    .replace(/¯/g, '#ka')
    .replace(/±/g, '#ta')
    .replace(/°/g, '#sa')
    .replace(/²/g, '#pa')
    .replace(/³/g, '#nya')
    .replace(/´/g, '#ga')
    .replace(/µ/g, '#ba')
    .replace(/H/g, '#ha')
    .replace(/N/g, '#na')
    .replace(/C/g, '#ca')
    .replace(/R/g, '#ra')
    .replace(/K/g, '#ka')
    .replace(/F/g, '#da')
    .replace(/T/g, '#ta')
    .replace(/S/g, '#sa')
    .replace(/W/g, '#wa')
    .replace(/L/g, '#la')
    .replace(/P/g, '#pa')
    .replace(/D/g, '#dha')
    .replace(/J/g, '#ja')
    .replace(/Y/g, '#ya')
    .replace(/V/g, '#nya')
    .replace(/M/g, '#ma')
    .replace(/G/g, '#ga')
    .replace(/B/g, '#ba')
    .replace(/Q/g, '#tha')
    .replace(/Z/g, '#nga')
    .replace(/#ka\+/g, '#kha')
    .replace(/#pa\+/g, '#fa')
    .replace(/#da\+/g, '#dza')
    .replace(/#ga\+/g, '#gha')
    .replace(/#ja\+/g, '#za')
    .replace(/i/g, '~i')
    .replace(/a~i/g, 'i')
    .replace(/u/g, '~u')
    .replace(/a~u/g, 'u')
    .replace(/e/g, '~e')
    .replace(/a~e/g, 'e')
    .replace(/\[/g, '~è')
    .replace(/~è(\w)a/g, '$1è')
    .replace(/~è(\w)(h|y|g)a/g, '$1$2è')
    .replace(/o/g, '~o')
    .replace(/(\w)è~o/g, '$1o')
    .replace(/\//g, '~r')
    .replace(/(\w+)(a|i|u|e|è|o)~r/g, '$1$2r')
    .replace(/(\w+)(a|i|u|e|è|o)~h/g, '$1$2h')
    .replace(/=/g, '~ng')
    .replace(/(\w+)(a|i|u|e|è|o)~ng/g, '$1$2ng')
    .replace(/\\/g, '~a')
    .replace(/(\w+)(a|i|u|e|è|o)~a/g, '$1')
    .replace(/-/g, '~ya')
    .replace(/(\w+)a~ya/g, '$1ya')
    .replace(/]/g, '~ra')
    .replace(/(\w+)a~ra/g, '$1ra')
    .replace(/\(/g, '~ru')
    .replace(/(\w+)a~ru/g, '$1ru')
    .replace(/\}/g, '~re')
    .replace(/(\w+)a~re/g, '$1re')
    .replace(/x/g, 're')
    .replace(/X/g, 'le')
    .replace(/;/g, '~b')
    .replace(/\?/g, '~c')
    .replace(/a#/g, '')
    .replace(/#(\w+)a\|/g, '$1u')
    .replace(/[~]\w+/g, '')
    .replace(/[~]è/g, '')
    .replace(/[#]\w+/g, '');

  return output;
}

(() => {

  function javanese() {
    const javaneseInput = document.getElementById("javanese_input");
    const javaneseOutput = document.getElementById("javanese_output");
    const javaneseReset = document.getElementById("javanese_reset");
    const spinner = document.querySelector(".spinner");
    let timeout;

    javaneseInput.addEventListener("input", (event) => {
      if (event.target.value.length > 0) {
        clearTimeout(timeout);
        spinner.classList.remove("spinner_hide");
        javaneseOutput.classList.add("output_hide");
        timeout = setTimeout(() => {
          spinner.classList.add("spinner_hide");
          javaneseOutput.classList.remove("output_hide");
          javaneseOutput.children[0].innerText = convertJavanese(
            event.target.value
          );
        }, 1000);
      }
    });

    javaneseReset.addEventListener("click", () => {
      javaneseInput.value = "";
      javaneseOutput.children[0].innerText = "";
    });
  }

  function latin() {
    const keypads = document.querySelectorAll(".keypad_button");
    const latinOutputAksara = document.getElementById("latin_output-aksara");
    const latinOutputLatin = document.getElementById("latin_output-latin");
    const latinReset = document.getElementById("latin_reset");
    const latinDelete = document.getElementById("latin_delete");
    let temp = "";

    keypads.forEach(keypad => {
      keypad.addEventListener("click", event => {
        temp += event.currentTarget.getAttribute("data-key");
        convert();
      });
    });

    latinReset.addEventListener("click", () => {
      temp = "";
      latinOutputLatin.innerText = "";
      latinOutputAksara.innerText = "";
    });

    latinDelete.addEventListener("click", () => {
      temp = temp.substr(0, temp.length - 1);
      convert();
    });

    function convert() {
      temp = temp.replace(/([N|C|R|K|F|T|W|L|D|J|Y|M|G|B|Q|Z])u/g, "$1|");
      latinOutputLatin.innerText = convertLatin(temp);
      latinOutputAksara.innerText = temp;
    }
  }

  function tab() {
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const tab_btn1 = document.getElementById("tab_btn1");
    const tab_btn2 = document.getElementById("tab_btn2");

    tab_btn1.addEventListener("click", () => {
      tab1.classList.add("tab_active");
      tab2.classList.remove("tab_active");
      tab_btn1.classList.add("tab_nav-button-active");
      tab_btn2.classList.remove("tab_nav-button-active");
    });

    tab_btn2.addEventListener("click", () => {
      tab1.classList.remove("tab_active");
      tab2.classList.add("tab_active");
      tab_btn1.classList.remove("tab_nav-button-active");
      tab_btn2.classList.add("tab_nav-button-active");
    });
  }

  function init() {
    generateKeys();
    javanese();
    latin();
    tab();
  }

  init();
})();
