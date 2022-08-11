# Simple Deep Compare Object

This package help you to compare two objects. Built in typescript.
Zero depedencies

```js
console.log(deepCompare({ foo: "bar" }, { foo: "bar" })); // true
console.log(deepCompare({ foo: "bar" }, { foo: 2 })); // false
```

## Installation

Using npm:

```
$ npm install simple-deepcompare
```

Using pnpm:

```
$ pnpm install simple-deepcompare
```

## Usage

in Node JS:

```js
const deepCompare = require("simple-deepcompare").deepCompare;

console.log(deepCompare({ foo: "bar" }, { foo: "bar" })); // true
```

in Browser:

```js
import { deepCompare } from "simple-deepcompare";

console.log(deepCompare({ foo: "bar" }, { foo: "bar" })); // true
```

## License

MIT © Azharie Muhammad
