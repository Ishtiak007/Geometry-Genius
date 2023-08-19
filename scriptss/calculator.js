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
