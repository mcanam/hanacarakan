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

  replaced = replaced.split(" ");
  for (let i = 0; i < replaced.length; i++) {
      if (replaced[i].startsWith("i")) {
          replaced[i] = replaced[i].replace(/^i/, "ai");
      } else if (replaced[i].startsWith("u")) {
          replaced[i] = replaced[i].replace(/^u/, "au");
      } else if (replaced[i].startsWith("[")) {
          replaced[i] = replaced[i].replace(/^\[/, "[a");
      } else if (replaced[i].startsWith("e")) {
          replaced[i] = replaced[i].replace(/^e/, "ae");
      } else if (replaced[i].startsWith("o")) {
          replaced[i] = replaced[i].replace(/^o/, "[ao");
      } else if (replaced[i].startsWith("ai")) {
          replaced[i] = replaced[i].replace(/^ai/, "aai");
      } else if (replaced[i].startsWith("au")) {
          replaced[i] = replaced[i].replace(/^au/, "aau");
      } else if (replaced[i].startsWith("a[")) {
          replaced[i] = replaced[i].replace(/^\[/, "a[a");
      } else if (replaced[i].startsWith("ae")) {
          replaced[i] = replaced[i].replace(/^ae/, "aae");
      } else if (replaced[i].startsWith("ao")) {
          replaced[i] = replaced[i].replace(/^ao/, "a[ao");
      }
  }

  return replaced.join(" ");
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
