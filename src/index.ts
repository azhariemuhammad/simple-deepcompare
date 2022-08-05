import { TObj } from "./types";

export const deepCompare = <ObjA, ObjB>(
  obj1: TObj<ObjA extends object ? ObjA : ObjA>,
  obj2: TObj<ObjB extends object ? ObjB : ObjB>
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
    const obj1Item = Object.prototype.hasOwnProperty.call(obj1, ObjArr[i])
      ? obj1[ObjArr[i] as keyof TObj<ObjA extends object ? ObjA : ObjA>]
      : {};
    const obj2Item = Object.prototype.hasOwnProperty.call(obj2, ObjArr[i])
      ? obj2[ObjArr[i] as keyof TObj<ObjB extends object ? ObjB : ObjB>]
      : {};

    if (
      (typeof obj1Item === "object" && obj1Item !== null) ||
      (typeof obj2Item === "object" && obj2Item !== null)
    ) {
      if (
        deepCompare(
          obj1Item as TObj<ObjA extends object ? ObjA : ObjA>,
          obj2Item as TObj<ObjB extends object ? ObjB : ObjB>
        )
      ) {
        isEqual = true;
      }
    } else if (Array.isArray(obj1Item) || Array.isArray(obj2Item)) {
      const obj1ItemArr = obj1Item as Array<unknown>;
      const obj2ItemArr = obj2Item as Array<unknown>;

      isEqual =
        obj1ItemArr.length == obj2ItemArr.length &&
        obj1ItemArr.every((v) => obj2ItemArr.includes(v));
    } else if (obj1Item === obj2Item) {
      isEqual = true;
    }
  }
  return isEqual;
};
