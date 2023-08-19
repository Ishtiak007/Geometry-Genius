function calculateTriangleArea() {
  const triangleBaseField = document.getElementById("triangle-base");
  const triangleBaseFieldValueString = triangleBaseField.value;
  const triangleBaseFieldValue = parseFloat(triangleBaseFieldValueString);

  const triangleHeight = document.getElementById("triangle-height");
  const triangleHeightValueString = triangleHeight.value;
  const triangleHeightValue = parseFloat(triangleHeightValueString);

  const area = 0.5 * triangleBaseFieldValue * triangleHeightValue;
  //   console.log(area);
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
