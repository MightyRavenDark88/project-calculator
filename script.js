function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}
function subtract(num1, num2){
    return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2){
    return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2){
    return parseFloat(num1) / parseFloat(num2);
}


let input,
    result;

//function that prints entries to screen
function printScreen(input){
    const screenOutput = document.getElementById('screen');
    if(screenOutput.textContent.trim() == 0 && input !== "=" && input !== "C"){
        screenOutput.textContent = input;
    }
    else if(input === "="){
        screenOutput.textContent = result;
    }
    else if(input === "C"){
        screenOutput.textContent = 0;
    }
    else{
        screenOutput.textContent += input;
    }
}

//dom reference call for non-number keys
const buttons = document.querySelectorAll("button"),
    plusButtonId = document.getElementById("plusButton").id,
    minusButtonId = document.getElementById("minusButton").id,
    multiplyButtonId = document.getElementById("multiplyButton").id,
    divideButtonId = document.getElementById("divideButton").id,
    equalButtonId = document.getElementById("equalButton").id,
    cButtonId = document.getElementById("C").id;

let num,
    fullNum1,
    fullNum2,
    operator1,
    operator2;

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        
        id = event.target.id;
        input = event.target.textContent;

        //if number key or . is pressed
        if(id !== equalButtonId && id !== plusButtonId && id !== minusButtonId && id !== multiplyButtonId && id !== divideButtonId && id !== cButtonId){
            //prints button input to screen
            printScreen(input);
            
            //sets current number value
            if(num === undefined){
                num = input;
                console.log("generated original num");
            }
            else{
                num += input;
                console.log("added number to num");
            }
            result = 1;
        }

        //if operator button is pressed
        else{

            //if +, -, *, or / is pressed
            if(id !== equalButtonId && id !== cButtonId){
                input = " " + input + " ";
                printScreen(input);
                if(fullNum2 === undefined){
                    fullNum2 = 0;
                    fullNum1 = num;
                    num = undefined;
                }
                else if(result === 0){
                        fullNum1 = num;
                        num = undefined;
                }
                
                //sets current operator
                switch(id){
                    case plusButtonId:
                        operator1 = "+";
                        console.log("logged add operator")
                        break;
                    case minusButtonId:
                        operator1 = "-";
                        break;
                    case multiplyButtonId:
                        operator1 = "*";
                        break;
                    case divideButtonId:
                        operator1 = "/";
                        break;
                    }
                //sets last operator if undefined
                if(operator2 === undefined){
                    operator2 = operator1;
                }
                //applies operation
                if(result === 0){
                    switch(operator2){
                        case "+":
                            fullNum2 = add(fullNum2, fullNum1);
                            break;
                        case "-":
                            fullNum2 = subtract(fullNum2, fullNum1);
                            break;
                        case "*":
                            fullNum2 = multiply(fullNum2, fullNum1);
                            break;
                        case "/":
                            fullNum2 = divide(fullNum2, fullNum1);
                            break;
                    }
                }
                operator2 = operator1;
                result = 0;
            }

            //if equal button pressed
            else if(id !== cButtonId){
                fullNum1 = num;
                num = undefined;
                switch(operator2){
                    case "+":
                        fullNum2 = add(fullNum2, fullNum1);
                        break;
                    case "-":
                        fullNum2 = subtract(fullNum2, fullNum1);
                        break;
                    case "*":
                        fullNum2 = multiply(fullNum2, fullNum1);
                        break;
                    case "/":
                        fullNum2 = divide(fullNum2, fullNum1);
                        break;
                }
                result = fullNum2;
                printScreen(input);
            }
            else{
                fullNum1 = 0;
                fullNum2 = undefined;
                num = undefined;
                result = 0;
                printScreen(input);
            }
        }
    })
});
