// ---- Core Geometric System ™ ----


// Lookup-based approximate trigonometric values

const trig = {

"rad(1.59680)": {
  "sin": 0.9999948,
  "cos": 0.00319999,
  "tan": 312.5,
  "deg": 89.820
},

"rad(1.5840)": {
  "sin": 0.99987,
  "cos": 0.0159998,
  "tan": 62.5,
  "deg": 89.10
},

"rad(1.58333333)": {
  "sin": 0.99986,
  "cos": 0.0166664,
  "tan": 60,
  "deg": 89.06250
},

"rad(1.580)": {
  "sin": 0.9998,
  "cos": 0.0199996,
  "tan": 50,
  "deg": 88.8750
},

"rad(1.5750)": {
  "sin": 0.999687,
  "cos": 0.0249995,
  "tan": 40,
  "deg": 88.593750
},
	
"rad(1.5680)": {
  "sin": 0.999488,
  "cos": 0.0319994,
  "tan": 31.2346,
  "deg": 88.20
},

"rad(1.56666667)": {
  "sin": 0.9994646,
  "cos": 0.03272,
  "tan": 30.546,
  "deg": 88.1250
},

"rad(1.560)": {
  "sin": 0.9992,
  "cos": 0.0399992,
  "tan": 25,
  "deg": 87.750
},
	
"rad(1.5520)": {
  "sin": 0.998847,
  "cos": 0.0479991,
  "tan": 20.8,
  "deg": 87.30
},

"rad(1.550)": {
  "sin": 0.99875,
  "cos": 0.049999,
  "tan": 20,
  "deg": 87.18750
},
	
"rad(1.5360)": {
  "sin": 0.99795,
  "cos": 0.0639989,
  "tan": 15.6,
  "deg": 86.40
},
	
"rad(1.53333333)": {
  "sin": 0.9977859,
  "cos": 0.0654,
  "tan": 15.257,
  "deg": 86.250
},
	
"rad(1.5250)": {
  "sin": 0.99718,
  "cos": 0.0749987,
  "tan": 13.3,
  "deg": 85.781250
},

"rad(1.520)": {
  "sin": 0.9968,
  "cos": 0.0799986,
  "tan": 12.46,
  "deg": 85.50
},
	
"rad(1.51666667)": {
  "sin": 0.99652,
  "cos": 0.0833318,
  "tan": 12,
  "deg": 85.31250
},
	
"rad(1.5040)": {
  "sin": 0.99538,
  "cos": 0.0959984,
  "tan": 10.37,
  "deg": 84.60
},
	
"rad(1.50)": {
  "sin": 0.995,
  "cos": 0.0999983,
  "tan": 10,
  "deg": 84.3750
},
		
"rad(1.4880)": {
  "sin": 0.9937,
  "cos": 0.1119982,
  "tan": 9,
  "deg": 83.70
},
		
"rad(1.48333333)": {
  "sin": 0.993167,
  "cos": 0.1166648,
  "tan": 8.5,
  "deg": 83.43750
},

"rad(1.4750)": {
  "sin": 0.992157,
  "cos": 0.124998,
  "tan": 8,
  "deg": 82.968750
},

"rad(1.46666667)": {
  "sin": 0.991445,
  "cos": 0.1305,
  "tan": 7.6,
  "deg": 82.50
},
	
"rad(1.4560)": {
  "sin": 0.99,
  "cos": 0.1439977,
  "tan": 6.8672,
  "deg": 81.90
},
	
"rad(1.450)": {
  "sin": 0.9887,
  "cos": 0.1499976,
  "tan": 6.6,
  "deg": 81.56250
},
	
"rad(1.440)": {
  "sin": 0.987,
  "cos": 0.1599975,
  "tan": 6.17,
  "deg": 81.0
},
	
"rad(1.4320)": {
  "sin": 0.9858,
  "cos": 0.1679974,
  "tan": 5.868,
  "deg": 80.550
},
	
"rad(1.4240)": {
  "sin": 0.9844,
  "cos": 0.175997,
  "tan": 5.6,
  "deg": 80.10
},

"rad(1.4160)": {
  "sin": 0.9844,
  "cos": 0.182,
  "tan": 5.6,
  "deg": 79.650
},
	
"rad(1.4090)": {
  "sin": 0.9833,
  "cos": 0.188,
  "tan": 5.4,
  "deg": 79.2650
},

"rad(1.40)": {
  "sin": 0.98,
  "cos": 0.197,
  "tan": 5,
  "deg": 78.750
},

"rad(1.392)": {
  "sin": 0.97855,
  "cos": 0.206,
  "tan": 4.75,
  "deg": 78.30
},
	
"rad(1.3840)": {
  "sin": 0.977,
  "cos": 0.212,
  "tan": 4.61,
  "deg": 77.850
},
	
"rad(1.3760)": {
  "sin": 0.9755,
  "cos": 0.22,
  "tan": 4.434,
  "deg": 77.40
},

"rad(1.3640)": {
  "sin": 0.9732,
  "cos": 0.23,
  "tan": 4.23,
  "deg": 76.7250
},

"rad(1.360)": {
  "sin": 0.972,
  "cos": 0.235,
  "tan": 4.13,
  "deg": 76.50
},
	
"rad(1.350)": {
  "sin": 0.9695,
  "cos": 0.245,
  "tan": 3.957,
  "deg": 75.93750
},

"rad(1.33333333)": {
  "sin": 0.966,
  "cos": 0.2588,
  "tan": 3.732,
  "deg": 75.0
},

"rad(1.3250)": {
  "sin": 0.9634,
  "cos": 0.268,
  "tan": 3.6,
  "deg": 74.531250
},

"rad(1.31666667)": {
  "sin": 0.961,
  "cos": 0.276,
  "tan": 3.5,
  "deg": 74.06250
},
	
"rad(1.3120)": {
  "sin": 0.96,
  "cos": 0.28,
  "tan": 3.43,
  "deg": 73.80
},
	
"rad(1.2960)": {
  "sin": 0.9555,
  "cos": 0.295,
  "tan": 3.24,
  "deg": 72.90
},

"rad(1.280)": {
  "sin": 0.9507,
  "cos": 0.31,
  "tan": 3.067,
  "deg": 72.0
},
	
"rad(1.2640)": {
  "sin": 0.946,
  "cos": 0.324,
  "tan": 2.92,
  "deg": 71.10
},
	
"rad(1.250)": {
  "sin": 0.9415,
  "cos": 0.337,
  "tan": 2.8,
  "deg": 70.31250
},
	
"rad(1.23333333)": {
  "sin": 0.93675,
  "cos": 0.35,
  "tan": 2.6764,
  "deg": 69.3750
},
	
"rad(1.2250)": {
  "sin": 0.9341,
  "cos": 0.357,
  "tan": 2.6,
  "deg": 68.96250
},
	
"rad(1.21666667)": {
  "sin": 0.93,
  "cos": 0.366,
  "tan": 2.54,
  "deg": 68.43750
},

"rad(1.20)": {
  "sin": 0.925,
  "cos": 0.38,
  "tan": 2.434,
  "deg": 67.50
},

"rad(1.18333333)": {
  "sin": 0.92,
  "cos": 0.393,
  "tan": 2.34,
  "deg": 66.56250
},

"rad(1.1750)": {
  "sin": 0.9165,
  "cos": 0.4,
  "tan": 2.29,
  "deg": 66.093750
},
	
"rad(1.16666667)": {
  "sin": 0.91,
  "cos": 0.416,
  "tan": 2.186,
  "deg": 65.6250
},

"rad(1.150)": {
  "sin": 0.903,
  "cos": 0.43,
  "tan": 2.1,
  "deg": 64.68750
},

"rad(1.1360)": {
  "sin": 0.8975,
  "cos": 0.441,
  "tan": 2.035,
  "deg": 63.90
},
	
"rad(1.120)": {
  "sin": 0.89,
  "cos": 0.456,
  "tan": 1.9517,
  "deg": 63.0
},

"rad(1.116)": {
  "sin": 0.887,
  "cos": 0.462,
  "tan": 1.92,
  "deg": 62.550
},
	
"rad(1.10)": {
  "sin": 0.882,
  "cos": 0.4714,
  "tan": 1.87087,
  "deg": 61.8750
},
	
"rad(1.088)": {
  "sin": 0.876,
  "cos": 0.4821,
  "tan": 1.8173,
  "deg": 61.20
},
	
"rad(1.08333333)": {
  "sin": 0.874,
  "cos": 0.4857634,
  "tan": 1.8,
  "deg": 60.93750
},
	
"rad(1.0750)": {
  "sin": 0.87,
  "cos": 0.4929,
  "tan": 1.765247,
  "deg": 60.468750
},
	
"rad(1.06666667)": {
  "sin": 0.866,
  "cos": 0.5,
  "tan": 1.732,
  "deg": 60.0
},
	
"rad(1.05)": {
  "sin": 0.8577286,
  "cos": 0.5141,
  "tan": 1.6684,
  "deg": 59.06250
},

"rad(1.040)": {
  "sin": 0.853,
  "cos": 0.523,
  "tan": 1.632,
  "deg": 58.50
},

"rad(1.0240)": {
  "sin": 0.844,
  "cos": 0.536,
  "tan": 1.576,
  "deg": 57.60
},
	
"rad(1.016)": {
  "sin": 0.84,
  "cos": 0.543,
  "tan": 1.546,
  "deg": 57.150
},
	
"rad(1.008)": {
  "sin": 0.835,
  "cos": 0.55,
  "tan": 1.52,
  "deg": 56.70
},
	
"rad(1.0)": {
  "sin": 0.83147,
  "cos": 0.55557,
  "tan": 1.4966,
  "deg": 56.250
},
	
"rad(0.9920)": {
  "sin": 0.827,
  "cos": 0.562,
  "tan": 1.472,
  "deg": 55.80
},
  
"rad(0.976)": {
  "sin": 0.818,
  "cos": 0.575,
  "tan": 1.423,
  "deg": 54.90
},

"rad(0.960)": {
  "sin": 0.81,
  "cos": 0.588,
  "tan": 1.376,
  "deg": 54.0
},

"rad(0.9440)": {
  "sin": 0.8,
  "cos": 0.6,
  "tan": 1.332,
  "deg": 53.10
},

"rad(0.93333333)": {
  "sin": 0.79335334,
  "cos": 0.60876143,
  "tan": 1.3032254,
  "deg": 52.50
},
	
"rad(0.9280)": {
  "sin": 0.79,
  "cos": 0.613,
  "tan": 1.29,
  "deg": 52.20
},

"rad(0.912)": {
  "sin": 0.78,
  "cos": 0.625,
  "tan": 1.248,
  "deg": 51.30
},

"rad(0.90)": {
  "sin": 0.773,
  "cos": 0.6344,
  "tan": 1.2185,
  "deg": 50.6250
},

"rad(0.880)": {
  "sin": 0.76,
  "cos": 0.65,
  "tan": 1.17,
  "deg": 49.50
},

"rad(0.86666667)": {
  "sin": 0.75184,
  "cos": 0.659346,
  "tan": 1.14028,
  "deg": 48.750
},

"rad(0.8480)": {
  "sin": 0.74,
  "cos": 0.673,
  "tan": 1.09,
  "deg": 47.70
},

"rad(0.8320)": {
  "sin": 0.729,
  "cos": 0.684547,
  "tan": 1.0649,
  "deg": 46.80
},

"rad(0.8160)": {
  "sin": 0.7181263,
  "cos": 0.696,
  "tan": 1.032,
  "deg": 45.90
},

"rad(0.80)": {
  "sin": 0.7071068,
  "cos": 0.7071068,
  "tan": 1,
  "deg": 45.0
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
  const radKey = `rad(${radian.toFixed(8)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.sin !== undefined) return trig[radKey].sin;

  // 🔹 Case 2: 0.8 > x → Use cosine reflection
  if (radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(8)})`;

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
 const radKey = `rad(${radian.toFixed(8)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.cos !== undefined) return trig[radKey].cos;

  // 🔹 Case 2: 0.8 > x → Use sine reflection
  if (radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(8)})`;

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
  const radKey = `rad(${radian.toFixed(8)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.tan !== undefined) return trig[radKey].tan;

  // 🔹 Case 2: Reflective zone: 0 < x < 0.8
  if (radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(8)})`;

    let reflectedTan = trig[reflectedKey]?.tan;

    if (reflectedTan === undefined) {
      const fallbackKey = closestRad(reflected);
      reflectedTan = trig[fallbackKey]?.tan ?? null;
    }

    if (typeof reflectedTan !== 'number' || reflectedTan === 0) return null;

    return parseFloat((1 / reflectedTan).toFixed(8));
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

    const difference = Math.abs(value - input);
    if (difference < minDiff) {
      minDiff = difference;
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

  if (x >= 0.7071) {
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
    radian = parseFloat((1.6 - angle).toFixed(8));
  }

  return radian;
}

function Acos(x) {
  if (typeof x !== 'number' || isNaN(x) || x < 0 || x > 1) return null;

  let radian = null;

  if (x <= 0.7071) {
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
    radian = parseFloat((1.6 - angle).toFixed(8));
  }

  return radian;
}

function Atan(x) {
  if (typeof x !== 'number' || isNaN(x) || x <= 0) return null;

  let radian = null;

  if (x > 1) {
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
    radian = parseFloat((1.6 - reflected).toFixed(8));
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
    document.getElementById('triangle-area').innerText = 'The sum of the length of the two shorter sides of a triangle has to be larger than the third one.';
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



let autoFilledField = null;
let userEntered = { h: false, l: false, r: false };

function segmentArea() {
  const height = document.getElementById('segment-height');
  const chordLength = document.getElementById('chord-length');
  const radius = document.getElementById('parent-radius');
  const output = document.getElementById('segment-area');

  const activeElement = document.activeElement;
  if (activeElement.id === "segment-height") userEntered.h = true;
  if (activeElement.id === "chord-length") userEntered.l = true;
  if (activeElement.id === "parent-radius") userEntered.r = true;

  let h = parseFloat(height.value);
  let l = parseFloat(chordLength.value);
  let r = parseFloat(radius.value);

  // Reset if user edits the auto-filled field
  if (autoFilledField && activeElement.id === autoFilledField) {
    height.value = "";
    chordLength.value = "";
    radius.value = "";
    output.innerText = "";
    autoFilledField = null;
    userEntered = { h: false, l: false, r: false };
    return;
  }

  // If height and radius is known → derive length
  if (userEntered.h && userEntered.r && !userEntered.l && !isNaN(h) && !isNaN(r)) {
    let angle = Acos((r - h) / r);
    l = 2 * r * sin(angle);
    chordLength.value = l.toFixed(5);
    autoFilledField = "chord-length";
  }

  // If height and length is known → derive radius
  if (userEntered.h && userEntered.l && !userEntered.r && !isNaN(h) && !isNaN(l)) {
    r = (l ** 2 + 4 * h ** 2) / (8 * h);
    radius.value = r.toFixed(5);
    autoFilledField = "parent-radius";
  }

  // If length and radius is known → derive height
  if (userEntered.l && userEntered.r && !userEntered.h && !isNaN(l) && !isNaN(r)) {
    h = r - Math.sqrt(r ** 2 - (l / 2) ** 2);
    height.value = h.toFixed(5);
    autoFilledField = "segment-height";
  }

  // Proportion checks
  if (l < 2 * h) {
    output.innerText = "The chord length must be at least twice the height.";
    return;
  }
  if (l / h > 11) {
    output.innerText = "Out of range: chord-to-height ratio exceeds 11.";
    return;
  }

  // Area calculation
  let angle = Acos((r - h) / r);
  let area = angle * r ** 2 - (r - h) * (l / 2);

  if (isNaN(area)){
	  output.innerText = "";
	  return;
	}
	
	if (h === r || h === l / 2 || l === 2 * r) {
    output.innerText = `Semicircle area = ${area.toFixed(5)} square units`;
  } else {
    output.innerText = `Area = ${area.toFixed(5)} square units`;
  }
}

// Attach listeners
document.getElementById('segment-height').addEventListener('input', segmentArea);
document.getElementById('chord-length').addEventListener('input', segmentArea);
document.getElementById('parent-radius').addEventListener('input', segmentArea);


function circumference(radius) {
    return 3.2 * radius * 2;
  }

  document.getElementById('circle-radius-c').addEventListener('input', function () {
    const radius = parseFloat(this.value);
    if (isNaN(radius)) {
      document.getElementById('circumference').innerText = '';
    return;
    }

    document.getElementById('circumference').innerText =
      `Circumference: ${circumference(radius).toFixed(5)} units`;
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
  const baseLength = parseFloat(document.getElementById('pyramid-base-edge-length').value);
  const height = parseFloat(document.getElementById('pyramid-height').value);

  if (isNaN(number) || isNaN(baseLength) || isNaN(height)) {
    document.getElementById('pyramid-volume').innerText = '';
    return;
  }

if ( number < 3) {
    document.getElementById('pyramid-volume').innerText = 'It takes at least three sides to form a pyramid.';
    return;
}
	
  const ratio = 3.2 / number;
  const tangent = tan(ratio);
  const baseArea = (number / 4) * (baseLength ** 2) / tangent;
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

