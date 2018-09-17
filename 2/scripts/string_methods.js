var myStr = "I love javaScript!";
console.log(myStr);
console.log(myStr[0], myStr.charAt(0));
console.log(myStr.substr(2, 4)); // 2 - позиция, 4 количество

var letters = "AZ",
    firstLetterNum = letters.charCodeAt(0),
    lastLetterNum = letters.charCodeAt(1),
    alphabet = "";
console.log(letters, firstLetterNum, lastLetterNum);

for (var i = firstLetterNum; i <= lastLetterNum; i++) {
    alphabet += "<a href=\"\">" + String.fromCharCode(i) + "</a>\n";
}
console.log(alphabet);

var sDate = "15-09-2018",
    aDate = sDate.split("-"),
    months = {
    "09": "сентября",
    "10": "октября"
    };
console.log(aDate);

console.log(aDate[0], months[aDate[1]], aDate[2]);
