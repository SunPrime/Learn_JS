function calculate(){
    var num1 = $(".num1"),
        num2 = $(".num2"),
        operators = $(".operators");
        result = $(".result");

    num2.css("boxShadow", "none");

    if (operators.val() == '+'){
        result.val((+num1.val()) + (+num2.val()));
    } else if (operators.val() == '-'){
        result.val((+num1.val()) - (+num2.val()));
    } else if (operators.val() == '*'){
        result.val((+num1.val()) * (+num2.val()));
    } else if (operators.val() == '/'){
        if (+num2.val()) {
            result.val((+num1.val()) / (+num2.val()));
        } else {
            num2.css("boxShadow", "0 0 3px #ff0000");
            num2.val("");
            result.val("");
        }
    } else if (operators.val() == '^'){
        result.val(Math.pow((+num1.val()), (+num2.val())));
    } else if (operators.val() == '%'){
        result.val((+num1.val()) % (+num2.val()));
    }
}

$(".calc_btn").click(calculate);
