import { expect, test } from "vitest";
import { isZero } from "./is-zero";

test("0の場合はtrueを返すことを確認", () => {
  expect(isZero(0)).toBe(true); // .toBe(期待される値)
});

test("0以外の場合はfalseを返すことを確認", () => {
  expect(isZero(1)).toBe(false);
  expect(isZero(-1)).toBe(false);
  expect(isZero(0.0001)).toBe(false);
});