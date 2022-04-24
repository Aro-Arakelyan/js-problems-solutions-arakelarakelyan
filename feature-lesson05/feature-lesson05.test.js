const {obj, getHead, getTail, obj1, obj2} = require('./feature-lesson05');

test('object will be', () => {
    expect(obj).toStrictEqual({ a: 1, b: 2 })
});

test('getHead will be', () => {
    expect(getHead).toStrictEqual([1])
});

test('getTail will be', () => {
    expect(getTail).toStrictEqual([2, 3])
});

test('groupBy obj1', () => {
    expect(obj1).toStrictEqual({ '4': [ 4.2 ], '6': [ 6.1, 6.3 ] })
});

test('groupBy obj2', () => {
    expect(obj2).toStrictEqual({ '3': [ 'one', 'two' ], '5': [ 'three' ] })
});