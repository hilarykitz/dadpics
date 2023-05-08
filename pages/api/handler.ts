export const handler = (url: string) => fetch(url).then((res) => res.json());
