# ${pkg.banner}

[![npm version](https://img.shields.io/npm/v/${pkg.name}.svg)](https://www.npmjs.com/package/${pkg.name})
![npm downloads](https://img.shields.io/npm/dm/${pkg.name}.svg)
[![Twitter Follow](https://img.shields.io/twitter/follow/thing_umbrella.svg?style=flat-square&label=twitter)](https://twitter.com/thing_umbrella)

This project is part of the
[@thi.ng/umbrella](https://github.com/thi-ng/umbrella/) monorepo.

<!-- TOC -->

## About

${pkg.description}

- [Wikipedia: Dual numbers](https://en.wikipedia.org/wiki/Dual_number)
- [Wikipedia: Automatic_differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation#Automatic_differentiation_using_dual_numbers)

Dual numbers are an elegant solution to compute **precise**<sup>(1)</sup> derivatives of
functions which otherwise require complex & brittle numerical solutions.
Furthermore, multivariate dual numbers can be used to obtain (in parallel)
derivatives of multiple variables within a single function execution.

In this package, dual numbers are encoded as vanilla JS arrays with the internal
structure: `[real, d1 .. dn]`, where `real` is the real-valued part of the
number and `d1`..`dn` multivariate derivatives. At minimum, at least `d1`
exists, but the number (of derivatives) depends on usage and the number of
variables in a function one wishes to compute derivatives for.

<small><sup>(1)</sup> Here *"precise"* within the realm of IEEE-754</small>

Some examples (see further below for code example):

```ts
[Math.PI, 0] // the scalar π as 1-dual number
[Math.PI, 1] // π as the current value of a 1-dual variable

[5, 1, 0] // 5 as first variable in 2-variable function
[3, 0, 1] // 3 as second variable in a 2-var function

[5, 1, 0, 0] // 1st var in 3-var fn
[3, 0, 1, 0] // 2nd var in 3-var fn
[2, 0, 0, 1] // 3rd var in 3-var fn
```

Alternatively, use convenience fns to create dual numbers:

```ts
$(5)     // [5, 0]
$(5, 1)  // [5, 1]

$2(5)    // [5, 0, 0]
$2(5, 2) // [5, 0, 1]

$3(5)    // [5, 0, 0, 0]
$3(5, 2) // [5, 0, 1, 0]

dual(5, 6)    // [5, 0, 0, 0, 0, 0, 0]
dual(5, 6, 4) // [5, 0, 0, 0, 1, 0, 0]
```

The following operations are available so far. Each operation takes one or more
multivariate dual number(s) and computes the actual real-valued results as well
as the 1st derivatives. Each op has an optimized/loop-free impl for 1-dual
numbers.

- `add(a, b)`
- `sub(a, b)`
- `mul(a, b)`
- `div(a, b)`
- `neg(a)`
- `abs(a)`

Exponentials:

- `pow(a, k)` (k = scalar)
- `sqrt(a)`
- `exp(a)`
- `log(a)`

Trigonometry:

- `sin(a)`
- `cos(a)`
- `tan(a)`
- `atan(a)`

${status}

${supportPackages}

${relatedPackages}

${blogPosts}

## Installation

${pkg.install}

${pkg.size}

## Dependencies

${pkg.deps}

${examples}

## API

${docLink}

```ts
import { $2, add, mul, neg, sin, evalFn2 } from "@thi.ng/dual-algebra";

// compute the actual result and derivatives of X & Y
// of this function with 2 variables:
// z = -x^2 + 3 * sin(y)

const f = (x: number, y: number) => {
    // convert to multivariate dual numbers
    const xx = $2(x, 1);
    const yy = $2(y, 2);
    // compute...
    return add(neg(mul(xx, xx)), mul($2(3), sin(yy)));
}

// `evalFn2()` is higher order fn syntax sugar to simplify
// dealing w/ scalars, here same with that wrapper:
const g = evalFn2(
    (x, y) => add(neg(mul(x, x)), mul($2(3), sin(y)))
);

f(0, 0);
// [0, 0, 3] => [f(x,y), dFdx(f(x,y)), dFdy(f(x,y))]

f(1, Math.PI);
// [-0.9999999999999997, -2, -3]
```

## Authors

${authors}

## License

&copy; ${copyright} // ${license}