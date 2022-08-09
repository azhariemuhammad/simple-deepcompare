"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCompare = void 0;
var deepCompare = function (obj1, obj2) {
    var isEqual = false;
    if (typeof obj1 !== "object" &&
        obj1 !== null &&
        typeof obj2 !== "object" &&
        obj2 !== null) {
        return isEqual;
    }
    var ObjArr = Object.keys(obj1);
    var ObjArr2 = Object.keys(obj2);
    if (ObjArr.length !== ObjArr2.length)
        return isEqual;
    var _loop_1 = function (i) {
        isEqual = false;
        var objValue = Object.prototype.hasOwnProperty.call(obj1, ObjArr[i])
            ? obj1[ObjArr[i]]
            : {};
        var obj2Value = Object.prototype.hasOwnProperty.call(obj2, ObjArr[i])
            ? obj2[ObjArr[i]]
            : {};
        if ((typeof objValue === "object" && objValue !== null) ||
            (typeof obj2Value === "object" && obj2Value !== null)) {
            if ((0, exports.deepCompare)(objValue, obj2Value)) {
                isEqual = true;
            }
        }
        else if (Array.isArray(objValue) || Array.isArray(obj2Value)) {
            var objValueArr = objValue;
            var obj2ValueArr_1 = obj2Value;
            isEqual =
                objValueArr.length == obj2ValueArr_1.length &&
                    objValueArr.every(function (v) { return obj2ValueArr_1.includes(v); });
        }
        else if (objValue === obj2Value) {
            isEqual = true;
        }
    };
    for (var i = 0; i < ObjArr.length; i++) {
        _loop_1(i);
    }
    return isEqual;
};
exports.deepCompare = deepCompare;
