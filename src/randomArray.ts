export function randomArray<T>(count: number, generator: () => T) {
  return Array.from({ length: count }, () => generator())
}
