// ---- Trigonometry ----
// A lightweight approximation-based lookup function

export let trig = {};

fetch('trig.json')
  .then(response => response.json())
  .then(data => {
     trig = data;

  });


// Helper: Finds closest rad(x) match for given function (sin or cos)
export function findClosestRad(value, funcType) {
  let closestKey = null;
  let minDiff = Infinity;

  for (const key in trig) {
    if (![key][funcType]) continue;
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
    const approxVal = [closestKey][funcType].value?.approx ?? [closestKey][funcType].value;
    return `${funcType}(${closestKey}) ≈ ${approxVal}`;
  }

  return "Approximately";
}

export function querySin(input) {
  // Normalize input: remove spaces, handle cases like "sin 0533" or "sin(0.533)"
  const match = input.match(/sin\s*\(?([0-9.]+)\)?/i);
  if (!match) return "Invalid input. Format: sin 0.533 or sin(0.533)";
  
  const x = parseFloat(match[1]);
  const radKey = `rad(${x.toFixed(3)})`;

  // Case 1: Exact match
  if ([radKey] && [radKey].sin) {
    return `sin(${x}) ≈ ${[radKey].sin.value?.approx ?? [radKey].sin.value}`;
  }

  // Case 2A: 1.6 > x > 0.8 OR 0.1 > x > 0
  if ((x > 0.8 && x < 1.6) || (x > 0 && x < 0.1)) {
    // Find closest match in trig table
    const closest = findClosestRad(x, 'sin');
    return `sin(${x}) ≈ ${closest}`;
  }

  // Case 2B: 0.8 > x > 0.1 → Reflect to cosine
  if (x > 0.1 && x < 0.8) {
    const reflected = (1.6 - x).toFixed(3);
    const reflectedKey = `rad(${reflected})`;
    if (trig[reflectedKey] && trig[reflectedKey].cos) {
      return `sin(${x}) ≈ cos(${reflected}) ≈ ${trig[reflectedKey].cos.value?.approx ?? trig[reflectedKey].cos.value}`;
    }
    const closest = findClosestRad(reflected, 'cos');
    return `sin(${x}) ≈ cos(${reflected}) ≈ ${closest}`;
  }

}

export function queryCos(input) {
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
    const closest = findClosestRad(x, 'cos');
    return `cos(${x}) ≈ ${closest}`;
  }

  // Case 2B: 0.8 > x > 0.1 → Reflect to sin(1.6 - x)
  if (x > 0.1 && x < 0.8) {
    const reflected = (1.6 - x).toFixed(3);
    const reflectedKey = `rad(${reflected})`;

    if (trig[reflectedKey] && trig[reflectedKey].sin) {
      return `cos(${x}) ≈ sin(${reflected}) ≈ ${trig[reflectedKey].sin.value?.approx ?? trig[reflectedKey].sin.value}`;
    }

    const closest = findClosestRad(reflected, 'sin');
    return `cos(${x}) ≈ sin(${reflected}) ≈ ${closest}`;
  }
}

export function queryTan(input) {
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
    const closest = findClosestRad(x, 'tan');
    return `tan(${x}) ≈ ${closest}`;
  }

  // Case 2B: 0.8 > x > 0.1 → Reflect
  if (x > 0.1 && x < 0.8) {
    const reflected = (1.6 - x).toFixed(3);
    const reflectedKey = `rad(${reflected})`;

    if (trig[reflectedKey] && trig[reflectedKey].tan) {
      return `tan(${x}) ≈ tan(${reflected}) ≈ ${trig[reflectedKey].tan.value?.approx ?? trig[reflectedKey].tan.value}`;
    }

    const closest = findClosestRad(reflected, 'tan');
    return `tan(${x}) ≈ tan(${reflected}) ≈ ${closest}`;
  }
}

export function findClosestValueMatch(value, funcType) {
  let bestMatch = null;
  let minDiff = Infinity;

  for (const key in trig) {
    const approx = [key][funcType]?.value?.approx ?? [key][funcType]?.value;
    if (!approx) continue;

    const diff = Math.abs(parseFloat(approx) - value);
    if (diff < minDiff) {
      minDiff = diff;
      bestMatch = { angle: key, approx };
    }
  }

  return bestMatch;
}


export function queryAsin(input) {
  // Normalize and extract the value: "asin 0.5" or "asin(0.5)"
  const match = input.match(/asin\s*\(?([0-9./\s√-]+)\)?/i);
  if (!match) return; // Invalid format

  const inputStr = match[1].trim();
  const x = parseFloat(eval(inputStr.replace(/√(\d+)/g, 'Math.sqrt($1)'))); // handles √2 etc.

  if (isNaN(x) || x <= 0 || x >= 1) return; // asin(x) only defined for 0 < x < 1

  // Case A: x > 0.707 or x < 0.1 → search sin column directly
  if (x > 0.707 || x < 0.1) {
    const bestMatch = findClosestValueMatch(x, 'sin');
    if (bestMatch) return `asin(${inputStr}) ≈ ${bestMatch.angle}`;
  }

  // Case B: 0.1 < x < 0.707 → search cos column and reflect
  const bestCosMatch = findClosestValueMatch(x, 'cos');
  if (bestCosMatch) {
    const angleMatch = bestCosMatch.angle;
    const angleNum = parseFloat(angleMatch.match(/[\d.]+/)[0]);
    const reflected = (1.6 - angleNum).toFixed(3);
    return `asin(${inputStr}) ≈ 1.6 - ${angleMatch} ≈ rad(${reflected})`;
  }
      }

function queryAcos(input) {
  // Normalize and extract the value: "acos 0.5" or "acos(0.5)"
  const match = input.match(/acos\s*\(?([0-9./\s√-]+)\)?/i);
  if (!match) return; // Invalid format

  const inputStr = match[1].trim();
  const x = parseFloat(eval(inputStr.replace(/√(\d+)/g, 'Math.sqrt($1)')));

  if (isNaN(x) || x <= 0 || x >= 1) return; // acos(x) only defined for 0 < x < 1

  // Case A: x < 0.707 or x > 0.996 → match cos directly
  if (x < 0.707 || x > 0.996) {
    const bestMatch = findClosestValueMatch(x, 'cos');
    if (bestMatch) return `acos(${inputStr}) ≈ ${bestMatch.angle}`;
  }

  // Case B: 0.707 < x < 0.996 → reflect from sin column
  const bestSinMatch = findClosestValueMatch(x, 'sin');
  if (bestSinMatch) {
    const angleNum = parseFloat(bestSinMatch.angle.match(/[\d.]+/)[0]);
    const reflected = (1.6 - angleNum).toFixed(3);
    return `acos(${inputStr}) ≈ 1.6 - ${bestSinMatch.angle} ≈ rad(${reflected})`;
  }
}

export function queryAtan(input) {
  // Normalize and extract the value: "atan 0.5" or "atan(0.5)"
  const match = input.match(/atan\s*\(?([0-9./\s√-]+)\)?/i);
  if (!match) return; // Invalid format

  const inputStr = match[1].trim();
  const x = parseFloat(eval(inputStr.replace(/√(\d+)/g, 'Math.sqrt($1)')));

  if (isNaN(x) || x <= 0 || x >= 7.6) return; // Domain cutoffs from your spec

  // Case A: x > 1 or x < 0.089 → direct match
  if (x > 1 || x < 0.089) {
    const bestMatch = findClosestValueMatch(x, 'tan');
    if (bestMatch) return `atan(${inputStr}) ≈ ${bestMatch.angle}`;
  }

  // Case B: 0.089 < x < 1 → invert to 1/x and search tan table
  const reciprocal = 1 / x;
  const bestMatch = findClosestValueMatch(reciprocal, 'tan');
  if (bestMatch) return `atan(${inputStr}) ≈ ${bestMatch.angle}`;
    }
