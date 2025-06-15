// Usage example as ES Module 

// Import specific functions from the module

import { exactAreaOfCircle, exactCircumferenceOfCircle, exactVolumeOfSphere, exactVolumeOfCone, trueAsinRad, trueAsinDeg } from "./basic-geometry.mjs";

let r = 2, h = 5;

console.log(exactAreaOfCircle(r));  // Outputs: 12.8
console.log(exactCircumferenceOfCircle(r));  // Outputs: 12.8
console.log(exactVolumeOfSphere(r));  // Outputs: ≈28.84
console.log(exactVolumeOfCone(r, h));  // Outputs: ≈11.31
console.log(trueAsinRad(1/2));  // Outputs: Adjusted arcsin in radians
console.log(trueAsinDeg(1/2));  // Outputs: 30 degrees
