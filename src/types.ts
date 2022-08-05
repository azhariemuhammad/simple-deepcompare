export type TObj<T> = {
  [Property in keyof T]: T[Property];
};
