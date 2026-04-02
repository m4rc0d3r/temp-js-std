import type { Entries } from "type-fest";

import { EMPTY } from "./str";

type Falsy = false | 0 | 0n | "" | null | undefined;
type Truthy<T> = Exclude<T, Falsy>;

function isFalsy(value: unknown): value is Falsy {
  return (
    value === 0 ||
    value === EMPTY ||
    value === false ||
    value === 0n ||
    (typeof value === "number" && isNaN(value)) ||
    value === null ||
    value === undefined
  );
}

function isTruthy<T>(value: T): value is Truthy<T> {
  return !isFalsy(value);
}

function isTrue(value: unknown) {
  return value === true;
}

type ObjEntries<T> = Entries<T>;

export { isFalsy, isTrue, isTruthy };
export type { Falsy, ObjEntries, Truthy };
