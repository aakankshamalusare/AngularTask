var stringArray = [];
stringArray.push("AK", "BK", "CK");
stringArray.forEach(function (val, index, array) {
    console.log("Value:".concat(val, " Index: ").concat(index));
});
stringArray.pop();
for (var index = 0; index < stringArray.length; index++) {
    console.log(stringArray[index]);
}
stringArray.splice(1, 0, "DK");
console.log(stringArray);
stringArray.splice(10, 1, "Aakanksha");
console.log(stringArray);
function display(a) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(item);
}
display(10, "N", "M");
