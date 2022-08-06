import { TObj } from "./types";

export const deepCompare = <T extends object>(
  obj1: TObj<T extends object ? object : never>,
  obj2: TObj<T extends object ? object : never>
): boolean => {
  let isEqual = false;

  if (
    typeof obj1 !== "object" &&
    obj1 !== null &&
    typeof obj2 !== "object" &&
    obj2 !== null
  ) {
    return isEqual;
  }
  const ObjArr = Object.keys(obj1);
  const ObjArr2 = Object.keys(obj2);

  if (ObjArr.length !== ObjArr2.length) return isEqual;
  for (let i = 0; i < ObjArr.length; i++) {
    isEqual = false;
    const objValue = Object.prototype.hasOwnProperty.call(obj1, ObjArr[i])
      ? obj1[ObjArr[i] as keyof TObj<T extends object ? object : never>]
      : {};
    const obj2Value = Object.prototype.hasOwnProperty.call(obj2, ObjArr[i])
      ? obj2[ObjArr[i] as keyof TObj<T extends object ? object : never>]
      : {};

    if (
      (typeof objValue === "object" && objValue !== null) ||
      (typeof obj2Value === "object" && obj2Value !== null)
    ) {
      if (
        deepCompare(
          objValue as TObj<T extends object ? object : never>,
          obj2Value as TObj<T extends object ? object : never>
        )
      ) {
        isEqual = true;
      }
    } else if (Array.isArray(objValue) || Array.isArray(obj2Value)) {
      const objValueArr = objValue as Array<unknown>;
      const obj2ValueArr = obj2Value as Array<unknown>;

      isEqual =
        objValueArr.length == obj2ValueArr.length &&
        objValueArr.every((v) => obj2ValueArr.includes(v));
    } else if (objValue === obj2Value) {
      isEqual = true;
    }
  }
  return isEqual;
};
