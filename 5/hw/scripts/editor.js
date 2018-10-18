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

$(".color").change(function () {
    decorText("color", ".color")
});

$(".bold").click(setBoldText);

$(".italic").click(function () {
    $(".text").css("font-style","italic")
});

$(".underline").click(function () {
    $(".text").css("text-decoration", "underline");
});
