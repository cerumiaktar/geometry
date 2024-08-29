function parallelogramCalculate(){
    // const parallelogramInput = document.getElementById("parallelogram-base");
    // const parallelogram = parallelogramInput.value;
    // console.log(parallelogram);

    // const heightInput = document.getElementById("parallelogram-height");
    // const newHeightInput = heightInput.value;
    // console.log(newHeightInput);

    const base = getInputValueById("parallelogram-base");
    console.log(base);

}

// function getParallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     console.log(base);
// }

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return (inputValue);
}