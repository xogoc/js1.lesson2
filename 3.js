function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var a = getRandomInt(-10, 10);
var b = getRandomInt(-10, 10);
var vals="a = " + a + "\nb = " + b + "\n";
var result;
if (a >= 0 && b >= 0) {
    result = a - b;
    alert(vals + "a - b = " + result);
}
else if (a < 0 && b < 0) {
    result = a * b;
    alert(vals + "a * b = " + result);
}
else {
    result = a + b;
    alert(vals + "a + b = " + result);
}