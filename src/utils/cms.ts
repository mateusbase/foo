export function getLinkHref({
  path,
  url,
}: {
  path?: string;
  url?: string;
}): string {
  return path ?? url!;
}
