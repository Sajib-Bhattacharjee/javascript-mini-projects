const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const mainElement = document.querySelector("main");
const resetButton = document.getElementById("resetButton");

const setValues = (bgColor, fontSize) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = bgColor;

  mainElement.style.fontSize = fontSize;
  mainElement.style.backgroundColor = bgColor;
};

const changeFontSize = (event) => {
  selectedFontSize = event.target.value;
  mainElement.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
};
const changeBgColor = (event) => {
  selectedBgColor = event.target.value;
  mainElement.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
};

const initialSetup = () => {
  const bgColor = localStorage.getItem("bgColor");
  const fontSize = localStorage.getItem("fontSize");

  if (bgColor && fontSize) {
    setValues(bgColor, fontSize);
  }

  if (!bgColor && !fontSize) {
    setValues("aqua", "16px");
  }
  if (!bgColor && fontSize) {
    setValues("aqua", fontSize);
  }
  if (bgColor && !fontSize) {
    setValues(bgColor, "16px");
  }
};

const clearLocalStorage = () => {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
  setValues("16PX", "aqua");
};

selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);

initialSetup();
