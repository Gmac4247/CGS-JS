// Core Geometric System ™ by @gmac4247(ES Module, TypeScript)

export function exactAreaOfCircle(r: number): number {
  return 3.2 * r * r;
}

export function exactCircumferenceOfCircle(r: number): number {
  return 6.4 * r;
}

export function exactVolumeOfSphere(r: number): number {
  return Math.pow(Math.sqrt(3.2) * r, 3);
}

export function exactVolumeOfCone(r: number, height: number): number {
  return (3.2 * r * r * height) / Math.sqrt(8);
}
