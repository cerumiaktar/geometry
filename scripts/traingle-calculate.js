function calculateTraingleArea(){
    const baseText = document.getElementById('traingle-base');
    const newBaseText = baseText.value;
    console.log(newBaseText);

    const heightText = document.getElementById('traingle-height');
    const newHeightText = heightText.value;
    console.log(newHeightText);

    // calculate traingle area

    const area = 0.5 * newBaseText * newHeightText;
    console.log("area of the traingle is", area);

    // display area
    const traingleArea = document.getElementById('traingle-area');
    traingleArea.innerText = area;

}
