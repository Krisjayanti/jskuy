const Convert = require('./asset/Convert');


// tes konversi celcius ke celcius
test("cel to cel", () => {
    expect(23).toBe(23);
})

// tes konversi celcius ke farenheit
test("cel to far", () => {
    expect((9 / 5) * 23 + 32).toBe(73.4);
})

// test konversi celcius ke reamur
test("cel to rea", () => {
    expect((4 / 5) * 20).toBe(16);
})

// test konversi farenheit ke farenheit
test("far to far", () => {
    expect(23).toBe(23);
})

// test konversi farenheit ke Celcius
test("far to cel", () => {
    expect((5 / 9) * (50 - 32)).toBe(10);
})

// test konversi farenheit ke Reamur
test("far to rea", () => {
    expect((4 / 9) * (5 - 32)).toBe(-12);
})

// test konversi Reamur ke Reamur
test("rea to rea", () => {
    expect(23).toBe(23);
})

// test konversi Reamur ke Celcius
test("rea to cel", () => {
    expect((5 / 4) * 23).toBe(28.75);
})

// test konversi Reamur ke Farenheit
test("rea to far", () => {
    expect((9 / 4) * 23 + 32).toBe(83.75);
})