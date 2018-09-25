var today = new Date(),
    months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен"];

console.log(today);
console.log(today.getDate(), months[today.getMonth()], today.getFullYear());