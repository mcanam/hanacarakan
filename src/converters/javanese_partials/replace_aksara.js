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

export { replaceInput, replaceOutput };
