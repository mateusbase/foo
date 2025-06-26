export const getUrlTacks = (url: string): Record<string, string> => {
  const urlObj = new URL(url);
  
  const params = urlObj.searchParams;

  const trackParams: Record<string, string> = {};

  params.forEach((value, key) => {
    const lowerCaseKey = key.toLowerCase();

    if (
      lowerCaseKey.startsWith("utm_") ||
      lowerCaseKey === "gclid" ||
      lowerCaseKey === "fbclid"
    ) {
      trackParams[key] = value;
    }
  });

  return trackParams;
};
