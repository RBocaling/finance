export function formatNumber(value: number | string): string {
  const num = typeof value === "string" ? parseFloat(value) : value;

  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
