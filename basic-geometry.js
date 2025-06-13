// Core Geometric System ™ by @gmac4247 (ES Module, JavaScript)

export function exactAreaOfCircle(r) {
  return 3.2 * r * r;
}

export function exactCircumferenceOfCircle(r) {
  return 6.4 * r;
}

export function exactVolumeOfSphere(r) {
  return Math.pow(Math.sqrt(3.2) * r, 3);
}

export function exactVolumeOfCone(r, height) {
  return (3.2 * r * r * height) / Math.sqrt(8);
}
