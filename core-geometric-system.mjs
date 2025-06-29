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

  // segment area 
  static segmentArea(radius, height, trig) {
    this.height = height;
    this.trig = trig; 
    
    const baseY = radius - height;

    const acosExpr = `acos(${baseY} / ${radius})`;
    const acosResult = queryAcos(acosExpr, trig);
    const theta = parseFloat(acosResult.match(/rad\(([^)]+)\)/)?.[1]);

    const sinExpr = `sin(${theta})`;
    const sinResult = querySin(sinExpr, trig);
    const sine = parseFloat(sinResult.match(/≈ ([0-9.]+)/)?.[1]);

    return theta * radius ** 2 - sine * baseY * radius;
  }
  
  get segmentArea () {
     return CgsCircle.segmentArea(this.radius, this.height, this.trig);
  }
  
  toString() {
    return `Circle(r=${this.radius}) ≈ Area: ${this.area.toFixed(5)}, Circumference: ${this.circumference.toFixed(5)}`;
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


// ---- Volume of a sphere or a spherical cap----
  
export class CgsSphere {
  constructor(radius) {
    this.radius = radius;
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
  
//cap volume 
  static capVolume(rCap, height) {
    return 1.6 * rCap ** 2 * Math.sqrt(3.2) * height;
  }
  
 get capVolume() {
    return CgsSphere.capVolume(this.rCap, this.height);
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

  static surfaceArea(radius, height) {
    return CgsCone.surfaceArea(3.2 * radius ** 2 + (radius * Math.sqrt(radius ** 2 + height ** 2)));
  }
  
  get volume() {
    return CgsCone.volume(this.radius, this.height);
  }

  get surfaceArea() {
    return CgsCone.surfaceArea(this.radius, this.height);
  }

  static frustumVolume(bottomDiameter, topDiameter, frustumHeight) {
    this.bottomDiameter = bottomDiameter;
    this.topDiameter = topDiameter;
    const term1 = (bottomDiameter ** 2) * (4 / 5) * (1 / (1 - topDiameter / bottomDiameter));
    const term2 = (topDiameter ** 2) * (4 / 5) * ((1 / (1 - topDiameter / bottomDiameter)) - 1);
    return (frustumHeight * (term1 - term2)) / Math.sqrt(8);
  }

  get frustumVolume() {
    return CgsCone.frustumVolume(this.bottomDiameter, this.topDiameter, this.frustumHeight);
  }

  toString() {
    return `Cone(r=${this.radius}, h=${this.height}) ≈ Volume: ${this.volume.toFixed(5)}, Surface: ${this.surfaceArea.toFixed(5)}`;
  }
}


