const {createSpiral, insertionSort} = require('./feature-lesson04');

test('2D array with Spiral is', () => {
    expect(createSpiral(5)).toStrictEqual([
        [ 1, 2, 3, 4, 5 ],
        [ 16, 17, 18, 19, 6 ],
        [ 15, 24, 25, 20, 7 ],
        [ 14, 23, 22, 21, 8 ],
        [ 13, 12, 11, 10, 9 ]
    ]);
});

test('2D array with Spiral is', () => {
    expect(createSpiral(4)).toStrictEqual([
        [ 1, 2, 3, 4 ],
        [ 12, 13, 14, 5 ],
        [ 11, 16, 15, 6 ],
        [ 10, 9, 8, 7 ]
    ]);
});

test('2D array with Spiral is', () => {
    expect(createSpiral(3)).toStrictEqual([ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]);
});

test('array insertion sort', () => {
    expect(insertionSort([7, 5, 3, 4, 2, 8, 9, 1])).toStrictEqual([1, 2, 3, 4, 5, 7, 8, 9]);
});