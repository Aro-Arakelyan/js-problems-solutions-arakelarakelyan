function createSpiral(N) {
    let createSpiral = Array(N).fill().map(() => Array(N).fill());
    let counter = 1;
    let col0 = 0;
    let coln = N-1;
    let row0 = 0;
    let rown = N-1;
    while (col0 <= coln && row0 <= rown) {
        for (let i = col0; i <= coln; i++){
            createSpiral[row0][i] = counter;
            counter++;
        }
        row0++;
        for (let j = row0; j <= rown; j++){
            createSpiral[j][coln] = counter;
            counter++;
        }
        coln--;
        for (let k = coln; k >= col0; k--){
            createSpiral[rown][k] = counter;
            counter++;
        }
        rown--;
        for (let m = rown; m >= row0; m--){
            createSpiral[m][col0] = counter;
            counter++;
        }
        col0++;
    }
    return createSpiral;
}
// console.log(createSpiral(3));
// console.log(createSpiral(4));
// console.log(createSpiral(5));

module.exports = {createSpiral, insertionSort};

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
// console.log(insertionSort([7, 5, 3, 4, 2, 8, 9, 1]));