const toLower = <T extends string>(value: T) => value.toLowerCase() as Lowercase<T>;
const toUpper = <T extends string>(value: T) => value.toUpperCase() as Uppercase<T>;

export { toLower, toUpper };
