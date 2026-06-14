// Estimate reading time from a post's raw Markdown body.
// ~200 words per minute, rounded, never below one minute.
export const readingTime = (body = ""): string => {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
};
