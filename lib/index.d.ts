import { TObj } from "./types";
export declare const deepCompare: <T extends object>(obj1: TObj<T extends object ? object : never>, obj2: TObj<T extends object ? object : never>) => boolean;
