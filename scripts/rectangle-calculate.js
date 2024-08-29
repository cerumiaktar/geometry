function calculateRectangleArea(){
    const widthInput = document.getElementById("rectangle-width");
    const newWidthInput = widthInput.value;
    const width = parseFloat(newWidthInput);
    console.log(width);
   
    // length calculate
    const lengthCalculate = document.getElementById("rectangle-length");
    const newLengthInput = lengthCalculate.value;
    const length = parseFloat(newLengthInput);
    console.log(length);

    const area = width * length;
    console.log(area);

}