export function getProxyUrl(url: string | null): string {
  const baseURL = process.env.BASE_URL as string;
  const login = process.env.LOGIN as string;

  if (!url) {
    return `${baseURL}/${login}`;
  }

  return `${baseURL}/${login}/${url}`;
}
