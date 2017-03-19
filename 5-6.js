function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function mathOperation(arg1, arg2, operation) {
    var result;
    switch(operation) {
        case "multiply":
            result = multiply(arg1, arg2);
            break;
        case "divide":
            result = divide(arg1, arg2);
            break;
        case "add":
            result = add(arg1, arg2);
            break;
        case "subtract":
            result = subtract(arg1, arg2);
            break;
        default:
            result =  false;
    }
    return result;
}