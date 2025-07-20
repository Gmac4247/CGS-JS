// ---- Core Geometric System ™ ----


// Lookup-based trigonometry functions

const trig = {
"rad(1.6)": {
  "sin": 1,
  "cos": 0,
  "tan": undefined,
  "deg": 90.0
},

"rad(1.555)": {
  "sin": 0.999,
  "cos": 0.044,
  "tan": 22.9,
  "deg": 87.5
},
	
"rad(1.536)": {
  "sin": 0.998,
  "cos": 0.063,
  "tan": 15.9,
  "deg": 86.4
},

"rad(1.509)": {
  "sin": 0.996,
  "cos": 0.089,
  "tan": 11.2,
  "deg": 84.9
},
	
"rad(1.467)": {
  "sin": 0.991,
  "cos": 0.131,
  "tan": 7.596,
  "deg": 82.5
},

"rad(1.409)": {
  "sin": 0.983,
  "cos": 0.186,
  "tan": 5.275,
  "deg": 79.265
},

"rad(1.4)": {
  "sin": 0.981,
  "cos": 0.195,
  "tan": 5.027,
  "deg": 78.750
},

"rad(1.355)": {
  "sin": 0.971,
  "cos": 0.238,
  "tan": 4.084,
  "deg": 76
},

"rad(1.333)": {
  "sin": 0.966,
  "cos": 0.259,
  "tan": 3.732,
  "deg": 75
},

"rad(1.295)": {
  "sin": 0.956,
  "cos": 0.295,
  "tan": 3.244,
  "deg": 73
},

"rad(1.253)": {
  "sin": 0.943,
  "cos": 0.334,
  "tan": 2.822,
  "deg": 70.5
},

"rad(1.2)": {
  "sin": 0.924,
  "cos": 0.383,
  "tan": 2.414,
  "deg": 67.50
},

"rad(1.124)": {
  "sin": 0.893,
  "cos": 0.450,
  "tan": 1.98,
  "deg": 65.6
},

"rad(1.067)": {
  "sin": 0.866,
  "cos": 0.5,
  "tan": 1.732,
  "deg": 60
},

"rad(1.021)": {
  "sin": 0.843,
  "cos": 0.538,
  "tan": 1.566,
  "deg": 57.4
},
  
"rad(0.984)": {
  "sin": 0.823,
  "cos": 0.569,
  "tan": 1.447,
  "deg": 55.4
},

"rad(0.954)": {
  "sin": 0.805,
  "cos": 0.593,
  "tan": 1.359,
  "deg": 53.7
},

"rad(0.929)": {
  "sin": 0.791,
  "cos": 0.612,
  "tan": 1.291,
  "deg": 52.2
},

"rad(0.908)": {
  "sin": 0.778,
  "cos": 0.628,
  "tan": 1.238,
  "deg": 51
},

"rad(0.89)": {
  "sin": 0.767,
  "cos": 0.642,
  "tan": 1.196,
  "deg": 50
},

"rad(0.876)": {
  "sin": 0.758,
  "cos": 0.652,
  "tan": 1.162,
  "deg": 49.3
},

"rad(0.864)": {
  "sin": 0.75,
  "cos": 0.661,
  "tan": 1.134,
  "deg": 48.6
},

"rad(0.854)": {
  "sin": 0.743,
  "cos": 0.669,
  "tan": 1.111,
  "deg": 48
},

"rad(0.845)": {
  "sin": 0.738,
  "cos": 0.675,
  "tan": 1.093,
  "deg": 47.5
},

"rad(0.832)": {
  "sin": 0.729,
  "cos": 0.685,
  "tan": 1.065,
  "deg": 46.8
},

"rad(0.816)": {
  "sin": 0.823,
  "cos": 0.696,
  "tan": 1.032,
  "deg": 45.9
},

"rad(0.8)": {
  "sin": 0.707,
  "cos": 0.707,
  "tan": 1,
  "deg": 45.0
},

"rad(0.091)": {
  "sin": 0.089,
  "cos": 0.996,
  "tan": 0.089,
  "deg": 5.1
},

"rad(0.064)": {
  "sin": 0.063,
  "cos": 0.998,
  "tan": 0.063,
  "deg": 3.6
},

"rad(0.045)": {
  "sin": 0.044,
  "cos": 0.999,
  "tan": 0.044,
  "deg": 2.5
},

"rad(0.032)": {
  "sin": 0.031,
  "cos": 0.9995,
  "tan": 0.031,
  "deg": 1.8
},

"rad(0.023)": {
  "sin": 0.022,
  "cos": 0.99975,
  "tan": 0.022,
  "deg": 1.3
},
  
"rad(0.016)": {
  "sin": 0.016,
  "cos": 0.9999,
  "tan": 0.016,
  "deg": 0.9
},
  
"rad(0.011)": {
  "sin": 0.011,
  "cos": 0.99997,
  "tan": 0.011,
  "deg": 0.6
},

"rad(0.008)": {
  "sin": 0.008,
  "cos": 0.99997,
  "tan": 0.008,
  "deg": 0.45
}  
	
  }


// Helper to find closest rad(x) match for given function (sin, cos or tan)

function closestRad(radian) {
  let closestKey = null;
  let minDiff = Infinity;

  for (const key in trig) {
    const match = key.match(/rad\(([\d.]+)\)/);
    if (!match) continue;

    const rad = parseFloat(match[1]);
    const difference = Math.abs(rad - radian);

    if (difference < minDiff) {
      minDiff = difference;
      closestKey = key;
    }
  }

  return closestKey ?? null;
}

function sin(radian) {
if (typeof radian !== 'number' || isNaN(radian) || radian > 1.6 || radian < 0) return null;
  const radKey = `rad(${radian.toFixed(3)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.sin !== undefined) return trig[radKey].sin;

  // 🔹 Case 2: 0.8 > x > 0.1 → Use cosine reflection
  if (radian > 0.1 && radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(3)})`;

    if (trig[reflectedKey]?.cos !== undefined) return trig[reflectedKey].cos;

    const fallbackKey = closestRad(reflected);
return trig[fallbackKey]?.cos ?? null;
  }

  // 🔹 Case 3: Otherwise, search sin column directly
  const fallbackKey = closestRad(radian);
return trig[fallbackKey]?.sin ?? null;
}

function cos(radian) {
  if (typeof radian !== 'number' || isNaN(radian) || radian > 1.6 || radian < 0) return null;
 const radKey = `rad(${radian.toFixed(3)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.cos !== undefined) return trig[radKey].cos;

  // 🔹 Case 2: 0.8 > x > 0.1 → Use sine reflection
  if (radian > 0.1 && radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(3)})`;

    if (trig[reflectedKey]?.sin !== undefined) return trig[reflectedKey].sin;

    const fallbackKey = closestRad(reflected);
return trig[fallbackKey]?.sin ?? null;
  }

  // 🔹 Case 3: Otherwise, search sin column directly
  const fallbackKey = closestRad(radian);
return trig[fallbackKey]?.cos ?? null;
}

function tan(radian) {
if (typeof radian !== 'number' || isNaN(radian) || radian > 1.6 || radian < 0) return null;
  const radKey = `rad(${radian.toFixed(3)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.tan !== undefined) return trig[radKey].tan;

  // 🔹 Case 2: Reflective zone: 0 < x < 0.8
  if (radian > 0.1 && radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(3)})`;

    let reflectedTan = trig[reflectedKey]?.tan;

    if (reflectedTan === undefined) {
      const fallbackKey = closestRad(reflected);
      reflectedTan = trig[fallbackKey]?.tan ?? null;
    }

    if (typeof reflectedTan !== 'number' || reflectedTan === 0) return null;

    return parseFloat((1 / reflectedTan).toFixed(3));
  }

  // 🔹 Case 3: Fallback
  const fallbackKey = closestRad(radian);
  return trig[fallbackKey]?.tan ?? null;
}

// Helper to find closest match for given inverse function (Asin, Acos or Atan)
	
function closestValue(input, funcType) {
  let bestMatch = null;
  let minDiff = Infinity;

  for (const key in trig) {
    const value = trig[key][funcType];
    if (typeof value !== 'number') continue;

    const joker = Math.abs(value - input);
    if (joker < minDiff) {
      minDiff = joker;
      bestMatch = {
        angle: key,  // We're using this key as the input (the angle) that produced the value
        value: value
      };
    }
  }

  return bestMatch;
}

function Asin(x) {
  if (typeof x !== 'number' || isNaN(x) || x < 0 || x > 1) return null;

  let radian = null;

  if (x > 0.706) {
    // Direct match via sine
    const match = closestValue(x, 'sin');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    radian = parseFloat(parsed[1]);
  } else {
    // Reflective match via cosine
    const match = closestValue(x, 'cos');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    const angle = parseFloat(parsed[1]);
    radian = parseFloat((1.6 - angle).toFixed(3));
  }

  return radian;
}

function Acos(x) {
  if (typeof x !== 'number' || isNaN(x) || x < 0 || x > 1) return null;

  let radian = null;

  if (x < 0.708) {
    // Direct match via cosine
    const match = closestValue(x, 'cos');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    radian = parseFloat(parsed[1]);
  } else {
    // Reflective match via sine
    const match = closestValue(x, 'sin');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    const angle = parseFloat(parsed[1]);
    radian = parseFloat((1.6 - angle).toFixed(3));
  }

  return radian;
}

function Atan(x) {
  if (typeof x !== 'number' || isNaN(x) || x <= 0) return null;

  let radian = null;

  if (x > 1 || x < 0.09) {
    // Direct match
    const match = closestValue(x, 'tan');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    radian = parseFloat(parsed[1]);
  } else {
    // Reflective zone
    const reciprocal = 1 / x;
    const match = closestValue(reciprocal, 'tan');
    if (!match?.angle) return null;
    const parsed = match.angle.match(/rad\(([\d.]+)\)/);
    if (!parsed) return null;
    const reflected = parseFloat(parsed[1]);
    radian = parseFloat((1.6 - reflected).toFixed(3));
  }

  return radian;
}


// The properties of shapes 

function triangleArea(product) {
  return Math.sqrt(product);
}

function updateTriangleArea() {
  const side1 = parseFloat(document.getElementById('side1').value);
  const side2 = parseFloat(document.getElementById('side2').value);
  const side3 = parseFloat(document.getElementById('side3').value);

  if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    document.getElementById('triangle-area').innerText = '';
    return;
  }

  // Triangle validity check
  if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
    document.getElementById('triangle-area').innerText = 'The sum of the length of the two shorter sides of a triangle is larger than the thrid one.';
    return;
  }

  const s = (side1 + side2 + side3) / 2;
  const product = s * (s - side1) * (s - side2) * (s - side3);
  const area = triangleArea(product);

  document.getElementById('triangle-area').innerText =
    `Area: ${area.toFixed(5)} square units`;
}

  document.getElementById('side1').addEventListener('input', updateTriangleArea);
  document.getElementById('side2').addEventListener('input', updateTriangleArea);
  document.getElementById('side3').addEventListener('input', updateTriangleArea);


function polygonArea(length, number, tangent) {
    return number / 4  * length ** 2 / tangent;
  }

function updatePolygonArea() {
  const length = parseFloat(document.getElementById('side-length').value);
  const number = parseFloat(document.getElementById('side-number').value);

  if (isNaN(length) || isNaN(number)) {
    document.getElementById('polygon-area').innerText = '';
    return;
  }

	// Polygon validity check
  if (number < 3) {
    document.getElementById('polygon-area').innerText = 'It takes at least three sides to form a polygon.';
    return;
  }
  const ratio = 3.2 / number;
  const tangent = parseFloat(tan(ratio));
  
  const area = polygonArea(length, number, tangent);

  document.getElementById('polygon-area').innerText =
    `Area: ${area.toFixed(5)} square units`;
}

  document.getElementById('side-length').addEventListener('input', updatePolygonArea);
  document.getElementById('side-number').addEventListener('input', updatePolygonArea);


function circleArea(radius) {
    return 3.2 * radius * radius;
  }

  document.getElementById('circle-radius-a').addEventListener('input', function () {
    const radius = parseFloat(this.value);
    if (isNaN(radius)) {
      document.getElementById('circle-area').innerText = '';
    return;
    }

    document.getElementById('circle-area').innerText =
      `Area: ${circleArea(radius).toFixed(5)} square units`;
    });


function segmentArea(length, height, angle, radius) {
    return angle * radius ** 2 - (radius - height) * length / 2;
  }

function updateSegmentArea() {
  const length = parseFloat(document.getElementById('segment-length').value);
  const height = parseFloat(document.getElementById('segment-height').value);

  if (isNaN(length) || isNaN(height)) {
    document.getElementById('segment-area').innerText = '';
    return;
  }
	
  const ratio = 2 * height / length;
	
  // Segment validity check

  if ( ratio === 0) {
    document.getElementById('segment-area').innerText = '';
    return;
	}
	
  if ( ratio > 1) {
    document.getElementById('segment-area').innerText = 'A circle-segment is less than half as high as long.';
    return;
}

  const angle = parseFloat(2 * Atan(ratio));
  const sine = parseFloat(sin(angle));
  const radius = parseFloat((length / 2 / sine).toFixed(5));
  const area = segmentArea(length, height, angle, radius);

  if ( ratio === 1) {
    document.getElementById('segment-area').innerText =
    `Area of semi-circle: ${area.toFixed(5)} square units`;
	return;
  }
	
  document.getElementById('segment-area').innerText =
    `Area: ${area.toFixed(5)} square units`;
}

  document.getElementById('segment-length').addEventListener('input', updateSegmentArea);
  document.getElementById('segment-height').addEventListener('input', updateSegmentArea);


function circleCircumference(radius) {
    return 3.2 * radius * 2;
  }

  document.getElementById('circle-radius-c').addEventListener('input', function () {
    const radius = parseFloat(this.value);
    if (isNaN(radius)) {
      document.getElementById('circle-circumference').innerText = '';
    return;
    }

    document.getElementById('circle-circumference').innerText =
      `Circumference: ${circleCircumference(radius).toFixed(5)} units`;
    });


function sphereVolume(radius) {
    return Math.pow(Math.sqrt(3.2) * radius, 3);
  }

  document.getElementById('sphere-radius').addEventListener('input', function () {
    const radius = parseFloat(this.value);
    if (isNaN(radius)) {
      document.getElementById('sphere-volume').innerText = '';
    return;
    }

    document.getElementById('sphere-volume').innerText =
      `Volume: ${sphereVolume(radius).toFixed(5)} cubic units`;
    });


function capVolume(radius, height) {
    return 1.6 * radius * radius * height * Math.sqrt(3.2);
  }

  function updateCapVolume() {
    const radius = parseFloat(document.getElementById('cap-radius').value);
    const height = parseFloat(document.getElementById('cap-height').value);

    if (isNaN(radius) || isNaN(height)) {
      document.getElementById('cap-volume').innerText = '';
      return;
    }
	  	  
// Cap validity check
	  
if ( height > radius) {
    document.getElementById('cap-volume').innerText = 'The height of a spherical cap is shorter than its radius.';
    return;
  }
	  
if ( height === radius) {
    document.getElementById('cap-volume').innerText =
      `Volume of hemisphere: ${capVolume(radius, height).toFixed(5)} cubic units`;
    return;
}
	  
    document.getElementById('cap-volume').innerText =
      `Volume: ${capVolume(radius, height).toFixed(5)} cubic units`;
  }

  document.getElementById('cap-radius').addEventListener('input', updateCapVolume);
  document.getElementById('cap-height').addEventListener('input', updateCapVolume);


function coneVolume(radius, height) {
    return 3.2 * radius * radius * height / Math.sqrt(8);
  }

  function updateConeVolume() {
    const radius = parseFloat(document.getElementById('cone-radius-v').value);
    const height = parseFloat(document.getElementById('cone-height-v').value);

    if (isNaN(radius) || isNaN(height)) {
      document.getElementById('cone-volume').innerText = '';
      return;
    }

    document.getElementById('cone-volume').innerText =
      `Volume: ${coneVolume(radius, height).toFixed(5)} cubic units`;
  }

  document.getElementById('cone-radius-v').addEventListener('input', updateConeVolume);
  document.getElementById('cone-height-v').addEventListener('input', updateConeVolume);


function frustumConeVolume(baseArea, topArea, reciprocal, height) {
  return height * (baseArea * reciprocal - topArea * (reciprocal - 1)) / Math.sqrt(8);
}

function updateFrustumConeVolume() {

	const baseRadius = parseFloat(document.getElementById('frustum-cone-base-radius').value);
	const topRadius = parseFloat(document.getElementById('frustum-cone-top-radius').value);
	const height = parseFloat(document.getElementById('frustum-cone-height').value);

if (isNaN(baseRadius) || isNaN(topRadius) || isNaN(height) || baseRadius === 0 || topRadius === 0) {
    document.getElementById('frustum-cone-volume').innerText = '';
    return;
  }

if ( topRadius > baseRadius) {
    document.getElementById('frustum-cone-volume').innerText = 'Let the larger end be the base.';
    return;
}
	
	const baseArea = 3.2 * (baseRadius ** 2);
	const topArea = 3.2 * (topRadius ** 2);
	const cylinderVolume = baseArea * height;
	const shape = topRadius / baseRadius;
	const inverse = 1 - shape;
	const reciprocal = 1 / inverse;
	const volume = frustumConeVolume(baseArea, topArea, reciprocal, height);

if ( topRadius === baseRadius) {
    document.getElementById('frustum-cone-volume').innerText = 
	`Volume of cylinder: ${cylinderVolume.toFixed(5)} cubic units`;
    return;
}
	
  document.getElementById('frustum-cone-volume').innerText =
    `Volume: ${volume.toFixed(5)} cubic units`;
}

document.getElementById('frustum-cone-base-radius').addEventListener('input', updateFrustumConeVolume);
document.getElementById('frustum-cone-top-radius').addEventListener('input', updateFrustumConeVolume);
document.getElementById('frustum-cone-height').addEventListener('input', updateFrustumConeVolume);


function coneSurface(radius, height) {
    return 3.2 * radius * (radius + Math.sqrt(radius ** 2 + height ** 2));
  }

  function updateConeSurface() {
    const radius = parseFloat(document.getElementById('cone-radius-s').value);
    const height = parseFloat(document.getElementById('cone-height-s').value);

    if (isNaN(radius) || isNaN(height)) {
      document.getElementById('cone-surface').innerText = '';
      return;
    }

    document.getElementById('cone-surface').innerText =
      `Area: ${coneSurface(radius, height).toFixed(5)} square units`;
  }

  document.getElementById('cone-radius-s').addEventListener('input', updateConeSurface);
  document.getElementById('cone-height-s').addEventListener('input', updateConeSurface);


function pyramidVolume(baseArea, height) {
  return baseArea * height / Math.sqrt(8);
}

function updatePyramidVolume() {
  const number = parseFloat(document.getElementById('pyramid-side-number').value);
  const length = parseFloat(document.getElementById('pyramid-base-edge-length').value);
  const height = parseFloat(document.getElementById('pyramid-height').value);

  if (isNaN(number) || isNaN(length) || isNaN(height)) {
    document.getElementById('pyramid-volume').innerText = '';
    return;
  }

if ( number < 3) {
    document.getElementById('pyramid-volume').innerText = 'It takes at least three sides to form a pyramid.';
    return;
}
	
  const ratio = 3.2 / number;
  const tangent = tan(ratio);

  const baseArea = (number / 4) * (length ** 2) / tangent;
  const volume = pyramidVolume(baseArea, height);

  document.getElementById('pyramid-volume').innerText =
    `Volume: ${volume.toFixed(5)} cubic units`;
}

document.getElementById('pyramid-side-number').addEventListener('input', updatePyramidVolume);
document.getElementById('pyramid-base-edge-length').addEventListener('input', updatePyramidVolume);
document.getElementById('pyramid-height').addEventListener('input', updatePyramidVolume);

  
function frustumPyramidVolume(baseArea, topArea, reciprocal, height) {
  return height * (baseArea * reciprocal - topArea * (reciprocal - 1)) / Math.sqrt(8);
}

function updateFrustumPyramidVolume() {

	const number = parseFloat(document.getElementById('frustum-pyramid-side-number').value);
	const baseLength = parseFloat(document.getElementById('frustum-pyramid-base-edge-length').value);
	const topLength = parseFloat(document.getElementById('frustum-pyramid-top-edge-length').value);
	const height = parseFloat(document.getElementById('frustum-pyramid-height').value);

if (isNaN(number) || isNaN(baseLength) || isNaN(topLength) || isNaN(height) || baseLength === 0 || topLength === 0) {
    document.getElementById('frustum-pyramid-volume').innerText = '';
    return;
}

if ( number < 3) {
    document.getElementById('frustum-pyramid-volume').innerText = 'It takes at least three sides to form a pyramid.';
    return;
}

if ( topLength > baseLength) {
    document.getElementById('frustum-pyramid-volume').innerText = 'Let the larger end be the base.';
    return;
}
	
	const ratio = 3.2 / number;
	const tangent = tan(ratio);
	const baseArea = (number / 4) * (baseLength ** 2) / tangent;
	const topArea = (number / 4) * (topLength ** 2) / tangent;
	const solidVolume = baseArea * height;
	const shape = topLength / baseLength;
	const inverse = 1 - shape;
	const reciprocal = 1 / inverse;
	const volume = frustumPyramidVolume(baseArea, topArea, reciprocal, height);

if ( topLength === baseLength) {
    document.getElementById('frustum-pyramid-volume').innerText = 
	`Volume of solid: ${solidVolume.toFixed(5)} cubic units`;
    return;
}
	
  document.getElementById('frustum-pyramid-volume').innerText =
    `Volume: ${volume.toFixed(5)} cubic units`;
}

document.getElementById('frustum-pyramid-side-number').addEventListener('input', updateFrustumPyramidVolume);
document.getElementById('frustum-pyramid-base-edge-length').addEventListener('input', updateFrustumPyramidVolume);
document.getElementById('frustum-pyramid-top-edge-length').addEventListener('input', updateFrustumPyramidVolume);
document.getElementById('frustum-pyramid-height').addEventListener('input', updateFrustumPyramidVolume);


function tetrahedronVolume(edge) {
    return Math.pow(edge, 3) / 8;
  }

  document.getElementById('tetrahedron-edge').addEventListener('input', function () {
    const edge = parseFloat(this.value);
    if (isNaN(edge)) {
      document.getElementById('tetrahedron-volume').innerText = '';
    return;
    }

    document.getElementById('tetrahedron-volume').innerText =
      `Volume: ${tetrahedronVolume(edge).toFixed(5)} cubic units`;
    });

