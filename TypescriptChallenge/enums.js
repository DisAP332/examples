var numeric;
(function (numeric) {
    numeric[numeric["first"] = 0] = "first";
    numeric[numeric["second"] = 1] = "second";
    numeric[numeric["third"] = 2] = "third";
    numeric[numeric["fourth"] = 3] = "fourth";
})(numeric || (numeric = {}));
console.log(numeric);
var strings;
(function (strings) {
    strings["Up"] = "UP";
    strings["Down"] = "DOWN";
})(strings || (strings = {}));
console.log(strings);
