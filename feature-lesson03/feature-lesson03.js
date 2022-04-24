function sum1(a, b, c) {
    return a + b + c;
}
module.exports = {sum1, sum2, sumBul, divPar,
    mulPar, sum3, sum4, diffPar, diffPar1, div0,
    sum5, diffPar2, sumNull, sumUndef, age, age1,
    age2, random, ucFirst, checkSpam, truncate,
    extractCurrencyValue};

function sum2(a, b, c) {
    return a - b + c;
}

function sumBul(a, b) {
    return a + b;
}

function divPar(a, b) {
    return a/b;
}

function mulPar(a, b) {
    return a*b;
}

function sum3(a, b, c) {
    return a + b + c;
}

function sum4(a, b, c) {
    return a + b + c;
}

function diffPar(a, b) {
    return a - b;
}

function diffPar1(a, b) {
    return a - b;
}

function div0(a, b) {
    return a/b;
}

function sum5(a, b) {
    return a + b;
}

function diffPar2(a, b) {
    return a - b;
}

function sumNull(a, b) {
    return a + b;
}

function sumUndef(a, b) {
    return a + b;
}

// let obj = {
//     prop1: "",
//     prop2: "John"
// }
// obj.prop1 = obj.prop2
// console.log(obj.prop1)

// let i = 10;
// let n = i++ % 5;
// console.log(n)

// let a = 10,
//     b = 3;
// [a ,b]= [b, a]
// console.log(a, b)

// let name = "Ilya";
// console.log(`hello ${1}`);
// console.log(`hello ${"name"}`);
// console.log(`hello ${name}`);

// console.log(null || 2 || undefined);

// console.log(1 && null && 2);

// console.log(null || 2 && 3 || 4);

function age(n) {
    if (n >= 14 && n <= 90) {
        return true;
    } return false;
}

function age1(n) {
    if (!(n >= 14 && n <= 90)) {
        return true;
    } return false;
}

function age2(n) {
    if (n < 14 || n > 90) {
        return true;
    } return false;
}

function random(min, max){
    return min + Math.random() * (max - min);
}

function ucFirst(str) {
    if (str.length === 0) {
        return str
    } return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    if (str.includes("viagra") || str.includes("XXX")) {
        return true;
    }
    return false
}

function truncate(str, maxlength) {
    if(str.length > maxlength) {
        return  (str.slice(0, maxlength-1) + "...")
    } return str
}

function extractCurrencyValue(str) {
    return str.slice(1, str.length);
}