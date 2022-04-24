const {sum1, sum2, sumBul, divPar, mulPar, sum3, sum4,
    diffPar, diffPar1, div0, sum5, diffPar2, sumNull, sumUndef,
    age, age1, age2, random, ucFirst, checkSpam, truncate,
    extractCurrencyValue} = require('./feature-lesson03');

test('adds "" + 1 + 0 to equal "10"', () => {
    expect(sum1("", 1, 0)).toBe("10");
}); // qani vor stringeri depqum + aneluc concat a linum vorpes string

test('adds "" - 1 + 0 to equal -1', () => {
    expect(sum2("", 1, 0)).toBe(-1);
}); // skzbum gumarumn a anum, heto string@ konvert a anum number, u hanuma

test('adds true + false to equal 1', () => {
    expect(sumBul(true, false)).toBe(1);
}); // unarni +i depqum boolean@ konvert a anum numberi 1 ev 0

test('divide 6/"3" to equal 2', () => {
    expect(divPar(6, "3")).toBe(2);
}); //string@ konvert kani 3, u kbajani

test('multiply "2"*"3" to equal 6', () => {
    expect(mulPar("2", "3")).toBe(6);
}); //konvert a anum number u bazmapatkuma

test('adds 4 + 5 + "px" to equal "9px"', () => {
    expect(sum3(4, 5, "px")).toBe("9px");
}); // es depqum uxxaki konkat a anum stringi mej

test('adds "$" + 4 + 5 to equal "$45"', () => {
    expect(sum4("$", 4, 5)).toBe("$45");
});

test('diffs "4" - 2 to equal 2', () => {
    expect(diffPar("4", 2)).toBe(2);
});

test('diffs "4px" - 2 to equal NaN', () => {
    expect(diffPar1("4px", 2)).toBe(NaN);
}); // "4px" konvert vorpes tiv kta NaN, dra hamar Nan

test('divide 7/0 to equal Infinity', () => {
    expect(div0(7, 0)).toBe(Infinity);
});

test('adds " -9 " + 5 to equal " -9 5"', () => {
    expect(sum5(" -9 ", 5)).toBe(" -9 5");
});

test('diffs "-9" - 5 to equal -14', () => {
    expect(diffPar2("-9", 5)).toBe(-14);
});

test('adds null + 1 to equal 1', () => {
    expect(sumNull(null, 1)).toBe(1);
}); // Number(null) = 0...

test('adds undefined + 1 to equal NaN', () => {
    expect(sumUndef(undefined, 1)).toBe(NaN);
}); // Number(undefined) = Nan...

let obj = {
    prop1: "",
    prop2: "John"
}
obj.prop1 = obj.prop2
expect(obj.prop1).toBe("John")

let i = 10;
let n = i++ % 5;
expect(n).toBe(0)

let a = 10,
    b = 3;
[a ,b]= [b, a]
expect(a).toBe(3)
expect(b).toBe(10)

let name = "Ilya";
expect(`hello ${1}`).toBe("hello 1");
expect(`hello ${"name"}`).toBe("hello name");
expect(`hello ${name}`).toBe("hello Ilya");

null || 2 || undefined
expect(null || 2 || undefined).toBe(2);

1 && null && 2;
expect(1 && null && 2).toBe(null);

null || 2 && 3 || 4 ;
expect(null || 2 && 3 || 4).toBe(3);

test('age between the 14 & 90', () => {
    expect(age(45)).toBe(true);
});

test('age outside the 14 & 90', () => {
    expect(age1(13)).toBe(true);
});

test('age outside the 14 & 90', () => {
    expect(age2(13)).toBe(true);
});

// test('random(min, max)', () => {
//     expect(random(1, 5)).toBe(random());
// });

test('string First letter to uppercase', () => {
    expect(ucFirst("john")).toBe("John");
});

test('contains the "viagra, XXX"', () => {
    expect(checkSpam("john watching the XXX film")).toBe(true);
});

test('truncate', () => {
    expect(truncate("Sasun Poghosyan is the Best", 12)).toBe("Sasun Pogho...");
});

test('extractCurrencyValue', () => {
    expect(extractCurrencyValue("$12500")).toBe("12500");
});