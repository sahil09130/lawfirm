// Formats an ISO date (YYYY-MM-DD) for display. Uses UTC so the day never shifts by timezone.
export function formatDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
