function calculateTrinangleArea() {

    // get tringle base value

    const tringleBaseField = document.getElementById('tringleBase-field');
    const tringleBaseFieldString = tringleBaseField.value;
    const tringleBase = parseFloat(tringleBaseFieldString);


    // get tringle height value

    const tringleHeightField = document.getElementById('tringleHeight-field');
    const tringleHeightFieldString = tringleHeightField.value;
    const tringleHeight = parseFloat(tringleHeightFieldString);

    // calculet
    const area = 0.5 * tringleBase * tringleHeight;

    // set span-area
    const spanArea = document.getElementById('span-area');
    spanArea.innerText = area;



}
function calculateRectangleArea() {
    // rectangle width
    const rectangleWidthField = document.getElementById('rectangleWidth-field');
    const rectangleWidthFieldString = rectangleWidthField.value;
    const rectangleWidth = parseFloat(rectangleWidthFieldString);
    console.log(rectangleWidth)

    //rerectangle Length
    const rerectangleLengthField = document.getElementById('rectangleLength-field');
    const rerectangleLengthFieldString = rerectangleLengthField.value;
    const rectangleLength = parseFloat(rerectangleLengthFieldString);
    console.log(rectangleLength);

    // calculet
    const area = rectangleWidth * rectangleLength;
    // set span-area
    const rectangleSpanArea = document.getElementById('rectangleSpan-area');
    rectangleSpanArea.innerText = area;

}
// reusable function ----> reduce duplicate code 
function calculateParallelogramleArea(){
  const parallelogramBaseField = getInputValue('parallelogramBase-field');
 
  const  parallelogramHeightField = getInputValue('parallelogramHeight-field');
  
  const area = parallelogramBaseField*parallelogramHeightField
  setElementInnerText('parallelogramSpan-area', area);


}


// reusable get input value field in number
function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}
// set  div  spne p etc text 
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}