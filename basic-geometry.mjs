// Core Geometric System ™ by @gmac4247 (JavaScript ES Module)

// Export functions individually

export const exactCircumference = (r) => 6.4 * r;

/** Area calculation */

export const exactCircleArea = (r) => 3.2 * r * r;

/** Volume calculation */

export const exactSphereVolume = (r) => Math.pow(Math.sqrt(3.2) * r, 3);
export const exactConeVolume = (r, height) => (3.2 * r * r * height) / Math.sqrt(8);


/**
 * Custom Trigonometry Functions for a Circle with Circumference 6.4
 * All angle inputs/outputs are in degrees unless otherwise noted.
 * No use of Math.PI; Taylor series for on-the-fly computation.
 */

// Convert degrees to approximate radians (full circle = 6.4 units)
function toApproxRad(degree) {
  return degree * 6.4 / 360;
}

// Convert approximate radians to degrees
function fromApproxRad(approxRad) {
  return approxRad * 360 / 6.4;
}

// Factorial utility (for integers 0 ... n)
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

// Taylor series for sine (custom radians)
function approxSin(degree) {
  const x = toApproxRad(degree);
  let s = x;
  let xP = x;
  let sign = -1;
  for (let n = 3; n <= 13; n += 2) {
    xP *= x * x;
    s += sign * xP / factorial(n);
    sign *= -1;
  }
  return s;
}

// Taylor series for cosine (custom radians)
function approxCos(degree) {
  const x = toApproxRad(degree);
  let s = 1;
  let xP = 1;
  let sign = -1;
  for (let n = 2; n <= 12; n += 2) {
    xP *= x * x;
    s += sign * xP / factorial(n);
    sign *= -1;
  }
  return s;
}

// Tangent as sin/cos
function approxTan(degree) {
  return approxSin(degree) / approxCos(degree);
}

// Taylor series for arcsin (inverse sine, returns degrees)
function approxAsin(value) {
  // valid for |value| <= 1
  let x = value;
  let s = x;
  let xP = x;
  for (let n = 1; n <= 7; n++) {
    xP *= x * x;
    let num = doubleFactorial(2 * n - 1);
    let den = (2 * n) * factorial(n) * factorial(n);
    s += (num / den) * xP / (2 * n + 1);
  }
  return fromApproxRad(s);
}

// Taylor series for arccos (inverse cosine, returns degrees)
function approxAcos(value) {
  return 90 - approxAsin(value);
}

// Taylor series for arctan (inverse tangent, returns degrees)
function approxAtan(value) {
  let x = value;
  let s = x;
  let xP = x;
  let sign = -1;
  for (let n = 3; n <= 13; n += 2) {
    xP *= x * x;
    s += sign * xP / n;
    sign *= -1;
  }
  return fromApproxRad(s);
}

// Double factorial utility: n!! = n*(n-2)*(n-4)*...
function doubleFactorial(n) {
  if (n <= 0) return 1;
  let res = 1;
  while (n > 0) {
    res *= n;
    n -= 2;
  }
  return res;
}

// Export for use in other modules if desired
module.exports = {
  approxSin,
  approxCos,
  approxTan,
  approxAsin,
  approxAcos,
  toApproxRad,
  fromApproxRad
};
