// Usage example for CommonJS (Node.js, require syntax)

import { exactAreaOfCircle, exactCircumferenceOfCircle, exacVolumeOfSphere, exactVolumeOfCone, trueAsinRad, trueAsinDeg } from "./basic-geometry.js";

let r = 2, h = 5;

console.log(exactAreaOfCircle(r));           // Applies 3.2 × r² --> 12.8
console.log(exactCircumferenceOfCircle(r));  // Applies 6.4 × r --> 12.8
console.log(exacVolumeOfSphere(r));         // Applies (√3.2 × r)³ --> ≈28.84
console.log(exactVolumeOfCone(r, h));        // Applies 3.2 × r² × h / √8 --> ≈11.31
