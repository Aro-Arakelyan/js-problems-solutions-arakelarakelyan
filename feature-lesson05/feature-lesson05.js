let fromPairs = ([
    ["a", 1],
    ["b", 2],
]);
let obj = Object.fromEntries(fromPairs);
// console.log(obj);


let array = [1, 2, 3];
let getHead = [array.shift()]
let getTail = array;
// console.log(getHead);
// console.log(getTail);

function groupBy(arr, floor) {
    return arr.reduce((obj, value) => {
        let key = floor(value);
        obj[key] = obj[key] || [];
        obj[key].push(value)
        return obj;
    }, {})
}

let obj1 = groupBy([6.1, 4.2, 6.3], value => Math.floor(value));
let obj2 = groupBy(['one', 'two', 'three'], value => value.length );

// console.log(obj1);
// console.log(obj2);

module.exports = {obj, getHead, getTail, obj1, obj2};