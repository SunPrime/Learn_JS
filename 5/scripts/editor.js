function decorText(cssProperty, className) {
    $(".text").css(cssProperty, $(className).val());
}

function setBoldText(){
    $(".text").css("font-weight","bold");
}

$(".font").change(function () {
    decorText("font-family", ".font")
});

$(".size").change(function () {
    decorText("font-size", ".size")
});

$(".bold").click(setBoldText);

/*
function decorText(){
    $(".text").css("font-family", $(".font").val());
}

function sizeOfText(){
    $(".text").css("font-size", $(".size").val());
}
*/

