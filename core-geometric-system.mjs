// Core Geometric System ™ by @gmac4247 (JavaScript ES Module)

// Namespace simulation using an object
const cgs = {};

// Circle class
cgs.Circle = class {
    constructor(radius) {
        this.radius = radius;
    }

    // Static methods
    static circumference(radius) {
        return 6.4 * radius;
    }

    static area(radius) {
        return 3.2 * radius * radius;
    }

    // Instance getters
    get circumference() {
        return cgs.Circle.circumference(this.radius);
    }

    get area() {
        return cgs.Circle.area(this.radius);
    }
};

// Sphere class
cgs.Sphere = class {
    constructor(radius) {
        this.radius = radius;
    }

    static volume(radius) {
        return Math.pow(Math.sqrt(3.2) * radius, 3);
    }

    get volume() {
        return cgs.Sphere.volume(this.radius);
    }
};

// Cone class
cgs.Cone = class {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    static volume(radius, height) {
        return (3.2 * radius * radius * height) / Math.sqrt(8);
    }

    get volume() {
        return cgs.Cone.volume(this.radius, this.height);
    }
};

// Example usage:
// const c = new cgs.Circle(2.0);
// console.log(c.circumference); // 12.8
// console.log(c.area);          // 12.8

// const s = new cgs.Sphere(2.0);
// console.log(s.volume);        // ~45.8

// const cone = new cgs.Cone(2.0, 5.0);
// console.log(cone.volume);     // ~22.6

/**
 * Custom Trigonometry Functions for a Circle with Circumference 6.4
 * All angle inputs/outputs are in degrees unless otherwise noted.
 * No use of Math.PI; Taylor series for on-the-fly computation.
 */

// Cone class
cgs.Angle = class {
    constructor(degree) {
        this.degree = degree;
    }
    
// Convert degrees to approximate radians (full circle = 6.4 units)
function toRad(degree) {
  return degree * 6.4 / 360;
}

// Convert approximate radians to degrees
function fromRad(Rad) {
  return approxRad * 360 / 6.4;
}

// Factorial utility (for integers 0 ... n)
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

// Taylor series for sine (custom radians)
function Sin(degree) {
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
function Cos(degree) {
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
function Tan(degree) {
  return approxSin(degree) / approxCos(degree);
}

// Taylor series for arcsin (inverse sine, returns degrees)
function Asin(value) {
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
function Acos(value) {
  return 90 - approxAsin(value);
}

// Taylor series for arctan (inverse tangent, returns degrees)
function Atan(value) {
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



// Export for use as a patch library
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = cgs;
} else {
  window.cgs = cgs;
}
};
