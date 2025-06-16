// Insert this line into the legacy code to import specific functions from the module.

import { exactCircleArea, exactCircumference, exactSphereVolume, exactConeVolume, approxSin, approxCos, approxTan, approxAsin, approxAcos, approxAtan, toApproxRad,
  fromApproxRad } from "./basic-geometry.mjs";

// Usage example of ES Module 
// Replacy legacy expressions by the exact ones where the output is. 

console.log(exactCircleArea(r)); 
console.log(exactCircumference(r)); 
console.log(exactSphereVolume(r)); 
console.log(exactConeVolume(r, h));  

if (require.main === module) {
  console.log("sin(30):", approxSin(30));
  console.log("cos(60):", approxCos(60));
  console.log("tan(45):", approxTan(45));
  console.log("asin(0.5):", approxAsin(0.5));
  console.log("acos(0.5):", approxAcos(0.5));
  console.log("atan(1):", approxAtan(1));
}
