const isEven = (value: number) => value % 2 === 0;
const isOdd = (value: number) => !isEven(value);
const toInt = (value: number) => Math.floor(value);
const isInt = (value: number) => Number.isInteger(value);

export { isEven, isInt, isOdd, toInt };
