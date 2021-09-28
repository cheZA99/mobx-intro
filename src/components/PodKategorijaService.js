const apiURL = "https://api.jsonbin.io/b/61486531aa02be1d444bb3bc";

class PodKategorijaService {
  getSubCategories = () => {
    return fetch(apiURL).then((response) => response.json());
  };

  getSubCategoriesAsyncAwait = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  };
}
export default PodKategorijaService;
