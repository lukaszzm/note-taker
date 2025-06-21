export function getProxyUrl(url: string | null): string {
  const baseURL = process.env.BASE_URL as string;

  if (!url) {
    return `${baseURL}`;
  }

  return `${baseURL}/${url}`;
}
