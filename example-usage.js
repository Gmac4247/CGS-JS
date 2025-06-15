// Insert this line into the legacy code to import specific functions from the module.

import { exactCircleArea, exactCircumference, exactSphereVolume, exactConeVolume } from "./basic-geometry.mjs";

// Usage example of ES Module 
// Replacy legacy expressions by the exact ones where the output is. 

console.log(exactCircleArea(r)); 
console.log(exactCircumference(r)); 
console.log(exactSphereVolume(r)); 
console.log(exactConeVolume(r, h));  
