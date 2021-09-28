import {
  observable,
  action,
  runInAction,
  configure,
  makeObservable,
} from "mobx";
import KategorijaService from "./KategorijaService";
configure({ enforceActions: "observed" });
class KategorijaStore {
  categoryList = [];

  constructor(value) {
    this.kategorijaService = new KategorijaService();
    makeObservable(this, {
      categoryList: observable,
      setCategoryList: action,
    });
    this.value = value;
  }
  setCategoryList = (apiData) => {
    this.categoryList = apiData;
  };
  getCategory = () => {
    this.kategorijaService.getCategories().then((data) => {
      runInAction(() => {
        this.setCategoryList(data);
      });
    });
  };
  //inline
  getCategoryInline = () => {
    this.kategorijaService.getCategories().then((data) => {
      runInAction(() => {
        this.categoryList = data;
      });
    });
  };
  getCategoryAsync = async () => {
    const data = await this.kategorijaService.getCategoriesAsyncAwait();
    runInAction(() => {
      this.categoryList = data;
    });
  };
  getCategoryGenerator = async () => {
    const data = await this.kategorijaService.getCategoriesGenerator();
    runInAction(() => {
      this.categoryList = data;
    });
  };
}

export default new KategorijaStore();
