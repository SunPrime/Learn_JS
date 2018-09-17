var nums = [2, -9, 4, 3, -7, 6];

console.log("Массив: ", nums);

console.log("unshift возвращает: ", nums.unshift(5)); // показывает длину массива
console.log("Массив после unshift: ", nums);

console.log("shift возвращает: ", nums.shift()); // возвращает сам элемент
console.log("Массив после shift: ", nums);

console.log("push возвращает: ", nums.push(10));
console.log("Массив после push: ", nums);

console.log("pop возвращает: ", nums.pop()); // возвращает сам элемент
console.log("Массив после pop: ", nums);

// 2 - позиция, 1 - значение элемента, который добавляем
nums.splice(2, 0, 1);
console.log("Добавление в массив splice: ", nums);

// 3 - позиция, 1 - колчество элементов, которые удаляем
nums.splice(3, 1);
console.log("Удаление из массива splice: ", nums);

nums.splice(2, 3, 8); // удалили со второй позиции 3 элемента и добавили 8
console.log("Замещение в массиве splice: ", nums);

nums.splice(2, 3, 8, 9); // удалили со второй позиции 3 элемента и добавили все что после "3"
console.log("Замещение в массиве splice: ", nums);

var numsString = nums.join("/"); //получили строку, массив не изменился, join не меняет массив
console.log(numsString);