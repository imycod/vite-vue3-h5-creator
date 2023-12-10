import { isArray,isNull } from "./typeof";
/**
 * 单选情况
 * @param value [1,2,3]
 * @returns
 */
export function getCascaderOptions(
  value: number | string | Array<any>,
): string | number | null {
  // 判断value类型
  if (isArray(value)) {
    // 数组类型，取最后一项
    return value[value.length - 1];
  } else if (typeof value === "string" || typeof value === "number") {
    // string类型，直接返回
    return value;
  } else if (isNull(value)) {
    return null;
  } else {
    // 其他类型，抛出异常
    throw new Error("Invalid value type: " + typeof value);
  }
}
