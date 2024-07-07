let operations = [];

$(document).ready(function(){
    let displayCalc = document.querySelector(".display");
    displayCalc.innerHTML = 0;
});

$(document).click(function(){
    let calculatorButtons = document.querySelectorAll(".row > div");
    
    calculatorButtons.forEach(button => {
        button.addEventListener('click', function(){
            let value = button.id.replace("btn-", "");
            btnExec(value);
        });
    });
});

function loadDisplay(value){
    let displayCalculatorElement = document.querySelector("#calculatorDisplay");
    displayCalculatorElement.innerHTML = displayCalc;        
}

function calcExec(value){

}

function clear(){
    return operations.pop();
}

function addOperation(value){
    operations.push(value);    
    console.log(operations);
    loadDisplay(operations);
}

function btnExec(value){
    switch(value){        
        case 'C': 
            clear();
            break;

        case 'percentage':
        case 'divide':
        case 'backspace':
        case 'times':
        case 'minus':
        case 'plus':
        case 'equals':
        case 'dot':
            calcExec(value);
            break;
        
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':  
            addOperation(parseInt(value));
            break;
        
        default:
            setErrorToDisplay();
            break;
    }
}

function setErrorToDisplay(){
    displayCalc = "Error";
}

function calcToDisplay(value){
    return displayCalc = value;
}