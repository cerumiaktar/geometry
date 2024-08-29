function pentagoneCalculate(){
    const perimeter = getInputValue("pentagone");
    console.log(perimeter);

    const pentagoneBase = getInputValue("pentagone-base");
    console.log(pentagoneBase);

    const area = 0.5 * perimeter * pentagoneBase ;
    setPentagoneArea("pentagone-area", area);
}

function getInputValue(inputValue){
    const inputField = document.getElementById(inputValue);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setPentagoneArea(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}