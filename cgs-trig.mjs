// ---- Trigonometry ----
// A lightweight approximation-based lookup function

export const trig = {
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
  "tan": 2.414,
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

// Helper: Finds closest rad(x) match for given function (sin or cos)

function closestRad(value) {
  let closestKey = null;
  let minDiff = Infinity;

  for (const key in trig) {
    const match = key.match(/rad\(([\d.]+)\)/);
    if (!match) continue;

    const rad = parseFloat(match[1]);
    const difference = Math.abs(rad - value);

    if (difference < minDiff) {
      minDiff = difference;
      closestKey = key;
    }
  }

  return closestKey ?? null;
}

function sin(radian) {
  const radKey = `rad(${radian.toFixed(3)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.sin !== undefined) return trig[radKey].sin;

  // 🔹 Case 2: 0.8 > x > 0.1 → Use cosine reflection
  if (radian > 0.1 && radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(3)})`;

    if (trig[reflectedKey]?.cos !== undefined) return trig[reflectedKey].cos;

    const fallback = closestRad(reflected, "cos");
    return fallback?.value ?? null;
  }

  // 🔹 Case 3: Otherwise, search sin column directly
  const fallback = closestRad(radian, "sin");
  return fallback?.value ?? null;
}

function cos(radian) {
  const radKey = `rad(${radian.toFixed(3)})`;

  // 🔹 Case 1: Exact match
  if (trig[radKey]?.cos !== undefined) return trig[radKey].cos;

  // 🔹 Case 2: 0.8 > x > 0.1 → Use sine reflection
  if (radian > 0.1 && radian < 0.8) {
    const reflected = 1.6 - radian;
    const reflectedKey = `rad(${reflected.toFixed(3)})`;

    if (trig[reflectedKey]?.sin !== undefined) return trig[reflectedKey].sin;

    const fallback = closestRad(reflected, "sin");
    return fallback?.value ?? null;
  }

  // 🔹 Case 3: Otherwise, search sin column directly
  const fallback = closestRad(radian, "cos");
  return fallback?.value ?? null;
}


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


 function Atan(input) {
  // Normalize and extract the value: "atan 0.5" or "atan(0.5)"
  const match = input.match(/atan\s*\(?([0-9./\s√-]+)\)?/i);
  if (!match) return; // Invalid format

  const inputStr = match[1].trim();
  const x = parseFloat(eval(inputStr.replace(/√(\d+)/g, 'Math.sqrt($1)')));

  if (isNaN(x) || x <= 0 ) return; // Domain cutoffs from your spec

  // Case A: x > 1 or x < 0.089 → direct match
  if (x > 1 || x < 0.089) {
    const bestMatch = closestValue(x, 'tan');
    if (bestMatch) return `atan(${inputStr}) ≈ ${bestMatch.angle}`;
  }

  // Case B: 0.089 < x < 1 → invert to 1/x and search tan table
  const reciprocal = 1 / x;
  const bestMatch = closestValue(reciprocal, 'tan');
  if (bestMatch) return `atan(${inputStr}) ≈ ${bestMatch.angle}`;
 }
