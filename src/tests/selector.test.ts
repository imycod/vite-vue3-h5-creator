import { getCascaderOptions } from "@/utils/selector.ts";

import { describe, it, expect } from "vitest";

describe("getCascaderOptions", () => {
  it("返回数组的最后一项", () => {
    const value = ["1", "2", "3"];
    const expected = "3";
    const actual = getCascaderOptions(value);
    expect(actual).toEqual(expected);
  });
  it("如果是字符串，返回它本身", () => {
    const value = "3";
    const expected = "3";
    const actual = getCascaderOptions(value);
    expect(actual).toEqual(expected);
  });
  it("如果不是字符串也不是数组也不是null就抛错", () => {
    const value = {};
    expect(() => getCascaderOptions(value)).toThrow(
      new Error(`Invalid value type: ${typeof value}`)
    );
  });
  it("如果是null返回null", () => {
    const value = null;
    const actual = getCascaderOptions(value);
    expect(actual).toEqual(value);
  });
});

