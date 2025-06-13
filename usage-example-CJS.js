// Usage example for CommonJS (Node.js, require syntax)

const geom = require('./basic-geometry.js');
let r = 2, h = 5;

console.log(geom.exactAreaOfCircle(r));           // Applies 3.2 × r² --> 12.8
console.log(geom.exactCircumferenceOfCircle(r));  // Applies 6.4 × r --> 12.8
console.log(geom.exacVolumeOfSphere(r));         // Applies (√3.2 × r)³ --> ≈28.84
console.log(geom.exactVolumeOfCone(r, h));        // Applies 3.2 × r² × h / √8 --> ≈11.31
