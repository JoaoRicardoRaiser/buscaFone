const Model = async (url, method, params) => {
  "use strict"; // Start of use strict

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Connection', 'keep-alive')
  headers.append('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36')

  const response = await fetch(
    `${url}`,
    {
      method: `${method}`,
      body: params,
      headers: headers
    },
  );

  if (!response.ok) {
    throw new Error(
      'Não foi possivel buscar os dados!',
    );
  }

  const payload = await response.json();
  return payload;
}; // End of use strict