import KategorijaService from "./KategorijaService";
import PodKategorijaService from "./PodKategorijaService";
import ArtiklService from "./ArtiklService";
import {
  observable,
  action,
  runInAction,
  configure,
  makeObservable,
} from "mobx";

configure({ enforceActions: "observed" });
class DashboardStore {
  categoryList = [];
  subCategoryList = [];
  articleList = [];
  orderList = [];
  selectedCategoryId = 0;
  selectedSubCategoryId = 0;

  constructor(value) {
    this.kategorijaService = new KategorijaService();
    this.podKategorijaService = new PodKategorijaService();
    this.artiklService = new ArtiklService();

    makeObservable(this, {
      categoryList: observable,
      subCategoryList: observable,
      articleList: observable,
      orderList: observable,
      selectedCategoryId: observable,
      selectedSubCategoryId: observable,
      setCategoryList: action,
    });
    this.value = value;
  }

  setCategoryList = (apiData) => {
    this.categoryList = apiData;
  };
  getCategoryAsync = async () => {
    const data = await this.kategorijaService.getCategoriesAsyncAwait();
    runInAction(() => {
      this.categoryList = data;
    });
  };
  getSubCategoryAsync = async () => {
    const data = await this.podKategorijaService.getSubCategoriesAsyncAwait();
    runInAction(() => {
      this.subCategoryList = data;
    });
  };
  getArticlesAsync = async () => {
    const data = await this.artiklService.getArticlesAsyncAwait();
    runInAction(() => {
      this.articleList = data;
    });
  };
  getSubCategoryById(id) {
    return this.subCategoryList.find((ctg) => ctg.categoryId === id);
  }
  getArticleById(id) {
    return this.articleList.find((ctg) => ctg.subcategoryId === id);
  }
}

export default new DashboardStore();
