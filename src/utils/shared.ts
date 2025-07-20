export function filterPassedAttributes(data: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== undefined && value !== null)
  );
}