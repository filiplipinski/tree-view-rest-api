const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://dotnet.demos.i-sklep.pl/rest_api/shop_api/v1';
const LOGIN = 'rest';
const PASSWORD = 'gBict?3J';

const fetchData = async (url, method, data) => {
  const request = {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Authorization': `Basic ${btoa(`${LOGIN}:${PASSWORD}`)}`,
      'Content-Type': 'application/json'
    },
  }

  const response = await fetch(BASE_URL + url, request)
    .then(response => {
      if (response.statusText === "OK") return response.json();
      throw Error(`Error ${response.status}`);
    })
    .then(data => data)
    .catch(err => console.log(err))

  return response.data.categories;
}

const api = {
  get: async () => {
    return await fetchData('/categories', 'GET');
  }
}

export default api;
