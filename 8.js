function power(val, pow) {
    var result;
    if(pow == 1) {
        result = val;
    }
    else if(pow == 0) {
        result = 1;
    }
    else if(pow<0) {
        result = 1 / power(val, -pow);
    }
    else if(pow > 1 && ((pow % 1) == 0)) {
        result = val * power(val, --pow);
    }
    else {
        result = false; // на этом мои полномочия все
    }
    return result;
}