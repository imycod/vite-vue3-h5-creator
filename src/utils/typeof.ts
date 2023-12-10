export function isNull(value: any): value is null {
  return value === null;
}
export function isString(value: string) {
  return typeof value === "string";
}

export function isNumber(value: number) {
  return typeof value === "number";
}

export function isBoolean(value: boolean) {
  return typeof value === "boolean";
}

export function isUndefined(value: any): value is undefined {
  return value === undefined;
}

export function isObject(value: any): value is Object {
  return value !== null && typeof value === "object";
}

export function isArray(value: any): value is Array<any> {
  return Array.isArray(value);
}

export function isFunction(value: any): value is Function {
  return typeof value === "function";
}

export function isDate(value: any): value is Date {
  return value instanceof Date;
}

export function isRegExp(value: any): value is RegExp {
  return value instanceof RegExp;
}

export function isError(value: any): value is Error {
  return value instanceof Error;
}

export function isSymbol(value: any): value is symbol {
  return typeof value === "symbol";
}

export function isPromise(value: any): value is Promise<any> {
  return value instanceof Promise;
}

export function isMap(value: any): value is Map<any, any> {
  return value instanceof Map;
}

export function isSet(value: any): value is Set<any> {
  return value instanceof Set;
}

export function isWeakMap(value: any): value is WeakMap<any, any> {
  return value instanceof WeakMap;
}

export function isWeakSet(value: any): value is WeakSet<any> {
  return value instanceof WeakSet;
}

