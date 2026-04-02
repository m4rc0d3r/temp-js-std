import type { JsonValue } from "type-fest";

const isEven = (value: number) => value % 2 === 0;
const isOdd = (value: number) => !isEven(value);
const toInt = (value: number) => Math.floor(value);
const isInt = (value: number) => Number.isInteger(value);

function parseJson(value: string) {
  return JSON.parse(value) as unknown;
}

function toJson(value: JsonValue) {
  JSON.stringify(value);
}

export { isEven, isInt, isOdd, parseJson, toInt, toJson };
