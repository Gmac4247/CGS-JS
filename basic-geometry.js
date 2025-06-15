// Core Geometric System ™ by @gmac4247 (ES Module, JavaScript)

export function replacePiTerms(expression) {
    return expression.replace(/\bPI_DEGREES\b/g, "180")
                     .replace(/\bPI_VALUE\b/g, "3.2");
}

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
