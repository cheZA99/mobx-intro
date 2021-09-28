import {
  observable,
  action,
  runInAction,
  configure,
  makeObservable,
} from "mobx";
import ArtiklService from "./ArtiklService";
configure({ enforceActions: "observed" });
class ArtiklStore {
  categoryList = [];

  constructor(value) {
    this.artiklService = new ArtiklService();
    makeObservable(this, {
      categoryList: observable,
      setCategoryList: action,
    });
    this.value = value;
  }
  setCategoryList = (apiData) => {
    this.categoryList = apiData;
  };
  getArticlesAsync = async () => {
    const data = await this.artiklService.getArticlesAsyncAwait();
    runInAction(() => {
      this.categoryList = data;
    });
  };
}

export default new ArtiklStore();
