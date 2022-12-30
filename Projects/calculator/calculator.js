let one =  document.getElementById("1");
let two =  document.getElementById("2");
let three =  document.getElementById("3");
let four =  document.getElementById("4");
let five =  document.getElementById("5");
let six =  document.getElementById("6");
let seven =  document.getElementById("7");
let eight =  document.getElementById("8");
let nine =  document.getElementById("9");
let zero =  document.getElementById("0");
let plus =  document.getElementById("+");
let minus =  document.getElementById("-");
let multiply =  document.getElementById("*");
let divide =  document.getElementById("/");
let equals =  document.getElementById("=");
let clear =  document.getElementById("clear");
let output = document.getElementById("output");

let num1 = 0;
let num2 = 0;
let operator = "";
let operatorClicked = false;
let resultDisplayed = false;

one.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10 + 1;
        document.getElementById("output").innerHTML = num1;
    } else {
        num2 = num2 * 10 + 1;
        document.getElementById("output").innerHTML = num1+operator+num2;
    }
    }
);

two.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10 + 2;
        document.getElementById("output").innerHTML = num1;
    } else {
        num2 = num2 * 10 + 2;
        document.getElementById("output").innerHTML = num1+operator+num2;
    }
    }
);

three.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10 + 3;
        document.getElementById("output").innerHTML = num1;
    } else {
        num2 = num2 * 10 + 3;
        document.getElementById("output").innerHTML = num1+operator+num2;
    }
    }
);

four.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10 + 4;
        document.getElementById("output").innerHTML = num1;
    } else {
        num2 = num2 * 10 + 4;
        document.getElementById("output").innerHTML = num1+operator+num2;
    }
    }
);

five.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10 + 5;
        document.getElementById("output").innerHTML = num1;
    } else {
        num2 = num2 * 10 + 5;
        document.getElementById("output").innerHTML = num1+operator+num2;
    }
    }
);

six.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10 + 6;
        document.getElementById("output").innerHTML = num1;
    } else {
        num2 = num2 * 10 + 6;
        document.getElementById("output").innerHTML = num1+operator+num2;
    }
    }
);

seven.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10 + 7;
        document.getElementById("output").innerHTML = num1;
    } else {
        num2 = num2 * 10 + 7;
        document.getElementById("output").innerHTML = num1+operator+num2;
    }
    }
);

eight.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10 + 8;
        document.getElementById("output").innerHTML = num1;
    } else {
        num2 = num2 * 10 + 8;
        document.getElementById("output").innerHTML = num1+operator+num2;
    }
    }
);

nine.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10 + 9;
        output.innerText = num1;
    } else {
        num2 = num2 * 10 + 9;
        document.getElementById("output").innerText = num1+operator+num2;
    }
    }
);

zero.addEventListener("click", function() {
    if (operatorClicked == false) {
        num1 = num1 * 10;
        document.getElementById("output").innerHTML = num1;
    } else {
        num2 = num2 * 10;
        document.getElementById("output").innerHTML = num1+operator+num2;
    }
    }
);

plus.addEventListener("click", function() {
    if(operatorClicked == true) {
        alert("You can only use one operator at a time");
    }
    else{
    operator = "+";
    operatorClicked = true;
    document.getElementById("output").innerHTML = num1+operator;
    }
    }
);

minus.addEventListener("click", function() {
    if(operatorClicked == true) {
        alert("You can only use one operator at a time");
    }
    else{
    operator = "-";
    operatorClicked = true;
    document.getElementById("output").innerHTML = num1+operator;
    }
    }
);

multiply.addEventListener("click", function() {
    if(operatorClicked == true) {
        alert("You can only use one operator at a time");
    }
    else{
    operator = "*";
    operatorClicked = true;
    document.getElementById("output").innerHTML = num1+operator;
    }
    }
);

divide.addEventListener("click", function() {
    if(operatorClicked == true) {
        alert("You can only use one operator at a time");
    }
    else{
    operator = "/";
    operatorClicked = true;
    document.getElementById("output").innerHTML = num1+operator;
    }
    }
);

equals.addEventListener("click", function() {
    if (operator == "+") {
        num1 = num1 + num2;
        num2 = 0;
    } else if (operator == "-") {
        num1 = num1 - num2;
        num2 = 0;
    } else if (operator == "*") {
        num1 = num1 * num2;
        num2 = 0;
    } else if (operator == "/") {
        num1 = num1 / num2;
        num2 = 0;
    }
    document.getElementById("output").innerHTML = num1;
    resultDisplayed = true;
    operatorClicked = false;
    }
);

clear.addEventListener("click", function() {
    num1 = 0;
    num1 = 0;
    operator = "";
    operatorClicked = false;
    resultDisplayed = false;
    document.getElementById("output").innerHTML = "";
    }
);
