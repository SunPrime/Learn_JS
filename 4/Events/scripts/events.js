function showMessage() {
    alert('My message');
}

//объект кнопка
var btn1 = document.getElementById("btn1");
console.log("button:", btn1);
//выводим на консоль некоторые свойства
console.log("button properties:", btn1.id, btn1.type, btn1.tagName, btn1.textContent);

//назначаем на событие клик по кнопке функцию showMessage
btn1.onclick = showMessage;