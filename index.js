console.log(sumRange(3));
function sumRange(n, sum = 0) {
    if (n <= 0) {
        return sum;
    }
    return sum + n + sumRange(n - 1);
}

console.log(power(2, 4))
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

console.log(factorial(5))
function factorial(number) {
    if (number == 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

console.log(all([1, 2, 6], function (num) {
    return num < 7;
}))
function all(array, callback) {
    if (array.length == 0) {
        return;
    }

    let valid = true;
    if (callback(array[array.length - 1]) == false) {
        valid = false;
    }
    array.pop();
    all(array, callback);
    return valid;
}

console.log(productOfArray([1,2,3]))
function productOfArray(array, product = 1) {
    if (array.length == 0) {
        return product;
    }
    return product*array.pop()*productOfArray(array, product);
    
}