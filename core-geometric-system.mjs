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

  static segmentArea(radius, height, trig) {
    const baseY = radius - height;

    const acosExpr = `acos(${baseY} / ${radius})`;
    const acosResult = queryAcos(acosExpr, trig);
    const theta = parseFloat(acosResult.match(/rad\(([^)]+)\)/)?.[1]);

    const sinExpr = `sin(${theta})`;
    const sinResult = querySin(sinExpr, trig);
    const sine = parseFloat(sinResult.match(/≈ ([0-9.]+)/)?.[1]);

    return theta * radius ** 2 - sine * baseY * radius;
  }

  get circumference() {
    return CgsCircle.circumference(this.radius);
  }

  get area() {
    return CgsCircle.area(this.radius);
  }

  toString() {
    return `Circle(r=${this.radius}) ≈ Area: ${this.area.toFixed(5)}, Circumference: ${this.circumference.toFixed(5)}`;
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
