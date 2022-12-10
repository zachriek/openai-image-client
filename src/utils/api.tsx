export const baseUrl = 'https://openai-image-server.vercel.app/api/v1';

export const fetchApi = async ({ url, method, body }: any) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};
