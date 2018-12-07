//1. menu.js
// считать все li
// пройтись циклом и вывести тексты
$('.b-menu > li').each(function (index) {
    let value = $(this).text();
    console.log(
        `li${index}: ${value}`
    )
});