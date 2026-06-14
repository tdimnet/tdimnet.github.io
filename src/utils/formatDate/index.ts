// Render a post date as "June 2026" (matches the writing index + article header).
export const formatDate = (date: Date): string =>
  date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
