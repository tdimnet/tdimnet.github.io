export function calculateYears(yearStart: number): string {
  const now = new Date().getFullYear();
  return `${now - yearStart} Years Experience`;
}
