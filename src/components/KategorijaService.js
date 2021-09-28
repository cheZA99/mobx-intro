const apiURL = "https://api.jsonbin.io/b/6148643b4a82881d6c526efa";

class KategorijaService {
  getCategories = () => {
    return fetch(apiURL).then((response) => response.json());
  };
  getCategoriesAsyncAwait = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  };
}

export default KategorijaService;
