function generateKeys() {
  "use strict";

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

export default generateKeys;
