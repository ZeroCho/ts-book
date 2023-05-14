import calc from '../calc-js';

const a = calc.plus(1, 2, 3, 4); // 10
const b = calc.minus(a, 4); // 6
calc.divide(b, 3); // 2
calc.multiply(1, 2, 3, 4); // 24
console.log(a, b);
