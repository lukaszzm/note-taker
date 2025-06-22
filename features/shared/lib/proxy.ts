export function getProxyUrl(url: string | null): string {
  const baseURL = process.env.BASE_URL as string;
  const prefix = process.env.PORT || process.env.LOGIN;
  const debug = process.env.DEBUG_MODE === "true";

  if (debug) {
    if (!url) {
      return `${baseURL}`;
    }

    const fixedUrl = url.startsWith("/") ? url.slice(1) : url;
    return `${baseURL}/${fixedUrl}`;
  }

  if (!url) {
    return `${baseURL}/${prefix}`;
  }

  const fixedUrl = url.startsWith("/") ? url.slice(1) : url;

  return `${baseURL}/${prefix}/${fixedUrl}`;
}
