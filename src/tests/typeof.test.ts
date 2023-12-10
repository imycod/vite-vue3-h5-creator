import { describe, expect, it } from "vitest";

import {isNull,isString,isNumber,isBoolean} from "@/utils/typeof"

describe("typeof", () => {
  it("should work", () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isString("")).toBe(true);
    expect(isString(1)).toBe(false);
    expect(isNumber(1)).toBe(true);
    expect(isNumber("1")).toBe(false);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(1)).toBe(false);
  });
});
