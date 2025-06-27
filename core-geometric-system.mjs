// core-geometric-system.mjs - Core Geometric System (Patch Library) 


// ---- Area and circumference of a Circle ----

export class CgsCircle {
    constructor(radius) {
        this.radius = radius;
    }
    static circumference(radius) {
        return 6.4 * radius;
    }
    static area(radius) {
        return 3.2 * radius * radius;
    }
    get circumference() {
        return CgsCircle.circumference(this.radius);
    }
    get area() {
        return CgsCircle.area(this.radius);
    }

    toString() {
    return `Circle(r=${this.radius}) ≈ Area: ${this.volume.toFixed(5)}, Circumference: ${this.circumference.toFixed(5)}`;
    }
}


// ---- Area of a Circle Segment ----

export class CgsCircleSegment {
  constructor(radius, segmentHeight, trig) {
    this.r = radius;           // Radius of the full circle
    this.n = segmentHeight;    // Distance from arc to chord (height offset)
    this.trig = trig;          // Your trig lookup table
  }

  get ratio() {
    return (this.r - this.n) / this.r;
  }

  get angle() {
    const acosExpr = `acos(${this.ratio})`;
    const result = queryAcos(acosExpr, this.trig);
    const match = result?.match(/rad\\(([^)]+)\\)/);
    return match ? parseFloat(match[1]) : null;
  }

  get sine() {
    if (this.angle === null) return null;
    const result = querySin(`sin(${this.angle})`, this.trig);
    const match = result?.match(/≈ ([0-9.]+)/);
    return match ? parseFloat(match[1]) : null;
  }

  get area() {
    if (this.angle === null || this.sine === null) return null;
    // A = acos(ratio) * r² - sin(acos(ratio)) * (r - n) * r
    return CgsCircleSegment.area(this.angle * this.r ** 2 - this.sine * (this.r - this.n) * this.r);
  }

  toString() {
    return `Area(r=${this.r}, n=${this.n}) ≈ Area: ${this.area?.toFixed(5)}`;
  }
}

    
// ---- Volume of a cylinder ----

export class CgsCylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    static volume(radius, height) {
        return 3.2 * Math.pow(radius, 2) * height;
    }
    get volume() {
        return CgsCylinder.volume(this.radius, this.height);
    }

    toString() {
    return `Cylinder(r=${this.radius}, h=${this.height}) ≈ Volume: ${this.volume.toFixed(5)}`;
    }
}


// ---- Volume of a Sphere or a Spherical Cap----


export class CgsSphere {
  constructor(radius = null, trig = null) {
    this.radius = radius; // May be inferred from cap later
    this.trig = trig;     // The CGS trig engine
    this.cap = null;      // Will store cap-related data
  }

  static volume(radius) {
    return Math.pow(Math.sqrt(3.2) * radius, 3);
  }

  get volume() {
    return CgsSphere.volume(this.radius);
  }

  toString() {
    return `Sphere(r=${this.radius}) ≈ Volume: ${this.volume.toFixed(5)}`;
  }

  // Get the radius of the sphere from the cap radius and height
  static rSphere(rCap, h, trig) {
    const halfOfAngleByCapRadiusAndHeight = parseFloat(
      queryAtan(`atan(${h} / ${rCap})`, trig).match(/rad\(([^)]+)\)/)?.[1]
    );

    const angleByCapRadiusAndHeight = 2 * halfOfAngleByCapRadiusAndHeight;

    const sinAngleByCapRadiusAndHeight = parseFloat(
      querySin(`sin(${angleByCapRadiusAndHeight})`, trig).match(/≈ ([0-9.]+)/)?.[1]
    );

    return rCap / sinAngleByCapRadiusAndHeight;
  }

  addCap({ height, baseRadius }) {
    const h = height;
    const rCap = baseRadius;

    if (!this.radius) {
      this.radius = CgsSphere.rSphere(rCap, h, this.trig);
    }


    const capVolume = 1.6 * rCap ** 2 * Math.sqrt(3.2) * h;

    this.cap = {
      h,
      rCap,
      capVolume,
      toString() {
        return `SphericalCap(radius=${rCap}, height=${h}) ≈ Volume: ${capVolume.toFixed(5)}`;
      }
    };
  }
    get capVolume() {
  return this.cap?.capVolume ?? null;
    }
}


// ---- Volume and Surface area of a Cone ----

export class CgsCone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  static volume(radius, height) {
    return (3.2 * radius ** 2 * height) / Math.sqrt(8);
  }

  get volume() {
    return CgsCone.volume(this.radius, this.height);
  }

  get surfaceArea() {
    const { radius: r, height: h } = this;
    const term = r ** 2 + (r * Math.sqrt(r ** 2 + h ** 2));
    return CgsCone.surfaceArea(3.2 * term);
  }

  toString() {
    return `Cone(r=${this.radius}, h=${this.height}) ≈ Volume: ${this.volume.toFixed(5)}, Surface: ${this.surfaceArea.toFixed(5)}`;
  }
}


export class CgsFrustumCone {
  constructor(bottomDiameter, topDiameter, height) {
    this.b = bottomDiameter; // base (bottom) diameter
    this.t = topDiameter;    // top (truncated) diameter
    this.H = height;         // height of frustum
  }

  get volume() {
    const { b, t, H } = this;
    const term1 = (b ** 2) * (4 / 5) * (1 / (1 - t / b));
    const term2 = (t ** 2) * (4 / 5) * ((1 / (1 - t / b)) - 1);
    return CgsFrustumCone.volume(H * (term1 - term2)) / Math.sqrt(8);
  }

  toString() {
    return `frustumCone(b=${this.b}, t=${this.t}, h=${this.H}) ≈ Volume: ${this.volume.toFixed(5)}`;
  }
}


// ---- Trigonometry ----
// A lightweight approximation-based lookup function

fetch('trig.json')
  .then(response => response.json())
  .then(data => {
    const trig = data;

  });


// Helper: Finds closest rad(x) match for given function (sin or cos)
export function findClosestRad(value, trig, funcType) {
  let closestKey = null;
  let minDiff = Infinity;

  for (const key in trig) {
    if (!trig[key][funcType]) continue;
    const keyMatch = key.match(/rad\(([\d.]+)\)/);
    if (!keyMatch) continue;

    const radVal = parseFloat(keyMatch[1]);
    const diff = Math.abs(radVal - value);

    if (diff < minDiff) {
      minDiff = diff;
      closestKey = key;
    }
  }

  if (closestKey) {
    const approxVal = trig[closestKey][funcType].value?.approx ?? trig[closestKey][funcType].value;
    return `${funcType}(${closestKey}) ≈ ${approxVal}`;
  }

  return "Approximately";
}

export function querySin(input, trig) {
  // Normalize input: remove spaces, handle cases like "sin 0533" or "sin(0.533)"
  const match = input.match(/sin\s*\(?([0-9.]+)\)?/i);
  if (!match) return "Invalid input. Format: sin 0.533 or sin(0.533)";
  
  const x = parseFloat(match[1]);
  const radKey = `rad(${x.toFixed(3)})`;

  // Case 1: Exact match
  if (trig[radKey] && trig[radKey].sin) {
    return `sin(${x}) ≈ ${trig[radKey].sin.value?.approx ?? trig[radKey].sin.value}`;
  }

  // Case 2A: 1.6 > x > 0.8 OR 0.1 > x > 0
  if ((x > 0.8 && x < 1.6) || (x > 0 && x < 0.1)) {
    // Find closest match in trig table
    const closest = findClosestRad(x, trig, 'sin');
    return `sin(${x}) ≈ ${closest}`;
  }

  // Case 2B: 0.8 > x > 0.1 → Reflect to cosine
  if (x > 0.1 && x < 0.8) {
    const reflected = (1.6 - x).toFixed(3);
    const reflectedKey = `rad(${reflected})`;
    if (trig[reflectedKey] && trig[reflectedKey].cos) {
      return `sin(${x}) ≈ cos(${reflected}) ≈ ${trig[reflectedKey].cos.value?.approx ?? trig[reflectedKey].cos.value}`;
    }
    const closest = findClosestRad(reflected, trig, 'cos');
    return `sin(${x}) ≈ cos(${reflected}) ≈ ${closest}`;
  }

}

export function queryCos(input, trig) {
  // Normalize and extract the value from input like "cos 0.533" or "cos(0.533)"
  const match = input.match(/cos\s*\(?([0-9.]+)\)?/i);
  if (!match) return; // Invalid input format

  const x = parseFloat(match[1]);
  const radKey = `rad(${x.toFixed(3)})`;

  // Case 1: Exact match
  if (trig[radKey] && trig[radKey].cos) {
    return `cos(${x}) ≈ ${trig[radKey].cos.value?.approx ?? trig[radKey].cos.value}`;
  }

  // Case 2A: 1.6 > x > 0.8 OR 0.1 > x > 0
  if ((x > 0.8 && x < 1.6) || (x > 0 && x < 0.1)) {
    const closest = findClosestRad(x, trig, 'cos');
    return `cos(${x}) ≈ ${closest}`;
  }

  // Case 2B: 0.8 > x > 0.1 → Reflect to sin(1.6 - x)
  if (x > 0.1 && x < 0.8) {
    const reflected = (1.6 - x).toFixed(3);
    const reflectedKey = `rad(${reflected})`;

    if (trig[reflectedKey] && trig[reflectedKey].sin) {
      return `cos(${x}) ≈ sin(${reflected}) ≈ ${trig[reflectedKey].sin.value?.approx ?? trig[reflectedKey].sin.value}`;
    }

    const closest = findClosestRad(reflected, trig, 'sin');
    return `cos(${x}) ≈ sin(${reflected}) ≈ ${closest}`;
  }
}

export function queryTan(input, trig) {
  // Normalize and extract the value from input like "tan 0.533" or "tan(0.533)"
  const match = input.match(/tan\s*\(?([0-9.]+)\)?/i);
  if (!match) return; // Invalid input format

  const x = parseFloat(match[1]);
  const radKey = `rad(${x.toFixed(3)})`;

  // Case 1: Exact match
  if (trig[radKey] && trig[radKey].tan) {
    return `tan(${x}) ≈ ${trig[radKey].tan.value?.approx ?? trig[radKey].tan.value}`;
  }

  // Case 2A: 1.6 > x > 0.8 OR 0.1 > x > 0
  if ((x > 0.8 && x < 1.6) || (x > 0 && x < 0.1)) {
    const closest = findClosestRad(x, trig, 'tan');
    return `tan(${x}) ≈ ${closest}`;
  }

  // Case 2B: 0.8 > x > 0.1 → Reflect
  if (x > 0.1 && x < 0.8) {
    const reflected = (1.6 - x).toFixed(3);
    const reflectedKey = `rad(${reflected})`;

    if (trig[reflectedKey] && trig[reflectedKey].tan) {
      return `tan(${x}) ≈ tan(${reflected}) ≈ ${trig[reflectedKey].tan.value?.approx ?? trig[reflectedKey].tan.value}`;
    }

    const closest = findClosestRad(reflected, trig, 'tan');
    return `tan(${x}) ≈ tan(${reflected}) ≈ ${closest}`;
  }
}

export function findClosestValueMatch(value, trig, funcType) {
  let bestMatch = null;
  let minDiff = Infinity;

  for (const key in trig) {
    const approx = trig[key][funcType]?.value?.approx ?? trig[key][funcType]?.value;
    if (!approx) continue;

    const diff = Math.abs(parseFloat(approx) - value);
    if (diff < minDiff) {
      minDiff = diff;
      bestMatch = { angle: key, approx };
    }
  }

  return bestMatch;
}


export function queryAsin(input, trig) {
  // Normalize and extract the value: "asin 0.5" or "asin(0.5)"
  const match = input.match(/asin\s*\(?([0-9./\s√-]+)\)?/i);
  if (!match) return; // Invalid format

  const inputStr = match[1].trim();
  const x = parseFloat(eval(inputStr.replace(/√(\d+)/g, 'Math.sqrt($1)'))); // handles √2 etc.

  if (isNaN(x) || x <= 0 || x >= 1) return; // asin(x) only defined for 0 < x < 1

  // Case A: x > 0.707 or x < 0.1 → search sin column directly
  if (x > 0.707 || x < 0.1) {
    const bestMatch = findClosestValueMatch(x, trig, 'sin');
    if (bestMatch) return `asin(${inputStr}) ≈ ${bestMatch.angle}`;
  }

  // Case B: 0.1 < x < 0.707 → search cos column and reflect
  const bestCosMatch = findClosestValueMatch(x, trig, 'cos');
  if (bestCosMatch) {
    const angleMatch = bestCosMatch.angle;
    const angleNum = parseFloat(angleMatch.match(/[\d.]+/)[0]);
    const reflected = (1.6 - angleNum).toFixed(3);
    return `asin(${inputStr}) ≈ 1.6 - ${angleMatch} ≈ rad(${reflected})`;
  }
      }

function queryAcos(input, trig) {
  // Normalize and extract the value: "acos 0.5" or "acos(0.5)"
  const match = input.match(/acos\s*\(?([0-9./\s√-]+)\)?/i);
  if (!match) return; // Invalid format

  const inputStr = match[1].trim();
  const x = parseFloat(eval(inputStr.replace(/√(\d+)/g, 'Math.sqrt($1)')));

  if (isNaN(x) || x <= 0 || x >= 1) return; // acos(x) only defined for 0 < x < 1

  // Case A: x < 0.707 or x > 0.996 → match cos directly
  if (x < 0.707 || x > 0.996) {
    const bestMatch = findClosestValueMatch(x, trig, 'cos');
    if (bestMatch) return `acos(${inputStr}) ≈ ${bestMatch.angle}`;
  }

  // Case B: 0.707 < x < 0.996 → reflect from sin column
  const bestSinMatch = findClosestValueMatch(x, trig, 'sin');
  if (bestSinMatch) {
    const angleNum = parseFloat(bestSinMatch.angle.match(/[\d.]+/)[0]);
    const reflected = (1.6 - angleNum).toFixed(3);
    return `acos(${inputStr}) ≈ 1.6 - ${bestSinMatch.angle} ≈ rad(${reflected})`;
  }
}

export function queryAtan(input, trig) {
  // Normalize and extract the value: "atan 0.5" or "atan(0.5)"
  const match = input.match(/atan\s*\(?([0-9./\s√-]+)\)?/i);
  if (!match) return; // Invalid format

  const inputStr = match[1].trim();
  const x = parseFloat(eval(inputStr.replace(/√(\d+)/g, 'Math.sqrt($1)')));

  if (isNaN(x) || x <= 0 || x >= 7.6) return; // Domain cutoffs from your spec

  // Case A: x > 1 or x < 0.089 → direct match
  if (x > 1 || x < 0.089) {
    const bestMatch = findClosestValueMatch(x, trig, 'tan');
    if (bestMatch) return `atan(${inputStr}) ≈ ${bestMatch.angle}`;
  }

  // Case B: 0.089 < x < 1 → invert to 1/x and search tan table
  const reciprocal = 1 / x;
  const bestMatch = findClosestValueMatch(reciprocal, trig, 'tan');
  if (bestMatch) return `atan(${inputStr}) ≈ ${bestMatch.angle}`;
}
