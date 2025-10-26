const isEven = (value: number) => value % 2 === 0;
const isOdd = (value: number) => !isEven(value);

export { isEven, isOdd };
