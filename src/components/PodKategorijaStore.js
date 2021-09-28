import {
  observable,
  action,
  runInAction,
  configure,
  makeObservable,
} from "mobx";
import PodKategorijaService from "./PodKategorijaService";
configure({ enforceActions: "observed" });
class PodKategorijaStore {
  categoryList = [];

  constructor(value) {
    this.podKategorijaService = new PodKategorijaService();
    makeObservable(this, {
      categoryList: observable,
      setCategoryList: action,
    });
    this.value = value;
  }

  setCategoryList = (apiData) => {
    this.categoryList = apiData;
  };
  getSubCategoryAsync = async () => {
    const data = await this.podKategorijaService.getSubCategoriesAsyncAwait();
    runInAction(() => {
      this.categoryList = data;
    });
  };
  getSubCategoryById(id) {
    return this.categoryList.find((ctg) => ctg.subcategoryId === id);
  }
}

export default new PodKategorijaStore();
