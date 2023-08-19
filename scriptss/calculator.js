// triangle
function calculateTriangleArea() {
  const triangleBaseField = document.getElementById("triangle-base");
  const triangleBaseFieldValueString = triangleBaseField.value;
  const triangleBaseFieldValue = parseFloat(triangleBaseFieldValueString);

  const triangleHeight = document.getElementById("triangle-height");
  const triangleHeightValueString = triangleHeight.value;
  const triangleHeightValue = parseFloat(triangleHeightValueString);

  const area = 0.5 * triangleBaseFieldValue * triangleHeightValue;
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
}

// rectangle
function calculateRectangleArea() {
  const rectangleWidthField = document.getElementById("rectangle-width");
  const rectangleWidthValueString = rectangleWidthField.value;
  const rectangleWidthValue = parseFloat(rectangleWidthValueString);

  const rectangleLength = document.getElementById("rectangle-length");
  const rectangleLengthValueString = rectangleLength.value;
  const rectangleLengthValue = parseFloat(rectangleLengthValueString);

  const rectangleArea = rectangleWidthValue * rectangleLengthValue;
  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = rectangleArea;
}

// parallelogram
function calculateParallelogramArea() {
  const parallelogramBase = document.getElementById("parallelogram-base");
  const parallelogramBaseValueString = parallelogramBase.value;
  const parallelogramBaseValue = parseFloat(parallelogramBaseValueString);

  const parallelogramHeight = document.getElementById("parallelogram-height");
  const parallelogramHeightValueString = parallelogramHeight.value;
  const parallelogramHeightValue = parseFloat(parallelogramHeightValueString);

  const parallelogramArea = parallelogramBaseValue * parallelogramHeightValue;
  const areaSpan = document.getElementById("parallelogram-area");
  areaSpan.innerText = parallelogramArea;
}

// .......
function calculateEllipseArea() {
  const valueOfA = getInputValue("ellipse-major-radius");
  const valueOfB = getSecondValue("ellipse-minor-radius");
  const area = 3.1416 * valueOfA * valueOfB;
  setValue("ellipse-area", area);
  addToCalculationEntry("Ellipse Area Holo: ", area);
}

function getInputValue(inputValue) {
  const inputField = document.getElementById(inputValue);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}
function getSecondValue(secondValue) {
  const inputField = document.getElementById(secondValue);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}
function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
// add to calculation entry
function addToCalculationEntry(areaType, area) {
  console.log(areaType + " " + area);
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");
  p.innerHTML = `
  ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success">Convert</button>
  `;
  calculationEntry.appendChild(p);
}
