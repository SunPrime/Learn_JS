function calculate() {
    var num1 = document.getElementById("num1"),
        num2 = document.getElementById("num2"),
        operators = document.getElementById("operators"),
        result = document.getElementById("result");

    num2.style.boxShadow = "none";

    if (operators.value === "+"){
        result.value = (+ num1.value) + (+ num2.value);
    } else if(operators.value === "-"){
        result.value = (+ num1.value) - (+ num2.value);
    } else if(operators.value === "*"){
        result.value = (+ num1.value) * (+ num2.value);
    } else if(operators.value === "/"){
        if (+ num2.value){
            result.value = (+ num1.value) / (+ num2.value);
        } else {
            num2.style.boxShadow = "0 0 3px #ff0000";
            num2.value = "";
            result.value = "";
            //alert("Делить на 0 нельзя!");
        }
    } else if(operators.value === "^") {
        result.value = Math.pow((+ num1.value),(+ num2.value));
    } else if(operators.value === "%") {
        result.value = (+ num1.value) % (+ num2.value);
    }
}

var calcBth = document.getElementById("calc_btn");
calcBth.onclick = calculate;