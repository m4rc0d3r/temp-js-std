import { SPACE } from "./consts";

const toLower = <T extends string>(value: T) => value.toLowerCase() as Lowercase<T>;
const toUpper = <T extends string>(value: T) => value.toUpperCase() as Uppercase<T>;
const capitalize = (value: string) => [value[0]?.toUpperCase(), value].join(SPACE);

export { capitalize, toLower, toUpper };
