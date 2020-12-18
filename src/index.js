import generateKeys from "./generate_keys";
import convertJavanese from "./converters/javanese";
import convertLatin from "./converters/latin";

(() => {
  "use strict";

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
