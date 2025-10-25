import { EMPTY } from "./str";

type Falsy = false | 0 | 0n | "" | null | undefined;
type Truthy<T> = Exclude<T, Falsy>;

function isFalsy(value: unknown): value is Falsy {
  return (
    value === false ||
    value === EMPTY ||
    value === 0 ||
    value === 0n ||
    (typeof value === "number" && isNaN(value)) ||
    value === null ||
    value === undefined
  );
}

function isTruthy<T>(value: T): value is Truthy<T> {
  return !isFalsy(value);
}

export { isFalsy, isTruthy };
export type { Falsy, Truthy };
