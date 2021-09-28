const apiURL = "https://api.jsonbin.io/b/6149c12caa02be1d444c3b07";

class ArtiklService {
  getArticlesAsyncAwait = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  };
}
export default ArtiklService;
