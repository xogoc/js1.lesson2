function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var a = getRandomInt(0,15);
var val = "a = "+a+"\n";
var result = "";
switch(a) {
    case 0:
        result = "0 ";
    case 1:
        result += "1 ";
    case 2:
        result += "2 ";
    case 3:
        result += "3 ";
    case 4:
        result += "4 ";
    case 5:
        result += "5 ";
    case 6:
        result += "6 ";
    case 7:
        result += "7 ";
    case 8:
        result += "8 ";
    case 9:
        result += "9 ";
    case 10:
        result += "10 ";
    case 11:
        result += "11 ";
    case 12:
        result += "12 ";
    case 13:
        result += "13 ";
    case 14:
        result += "14 ";
    case 15:
        result += "15 ";
    default:
        alert(val + result);
}