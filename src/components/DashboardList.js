import * as React from "react";
import { observer, inject } from "mobx-react";
import classes from "./Dashboard.module.css";
import { observable, makeObservable, action } from "mobx";

class DashboardList extends React.Component {
  subCategoryLista = [];
  articleLista = [];
  orderLista = [];
  suma = 0;
  kolicina = 1;
  selectedCategoryId = 0;
  selectedSubCategoryId = 0;

  constructor() {
    super();
    makeObservable(this, {
      subCategoryLista: observable,
      articleLista: observable,
      orderLista: observable,
      suma: observable,
      kolicina: observable,
      selectedCategoryId: observable,
      selectedSubCategoryId: observable,
      setSubCategoryById: action,
      setArticleById: action,
      addOnOrder: action,
    });
  }
  componentDidMount() {
    this.props.DashboardStore.getCategoryAsync();
    this.props.DashboardStore.getSubCategoryAsync();
    this.props.DashboardStore.getArticlesAsync();
  }
  setSubCategoryById(id) {
    this.selectedCategoryId = id;
    this.subCategoryLista = [];
    this.subCategoryLista = this.props.DashboardStore.subCategoryList.filter(
      (ctg) => {
        return ctg.categoryId === id;
      }
    );
  }
  setArticleById(id) {
    this.selectedSubCategoryId = id;
    this.articleLista = [];
    this.articleLista = this.props.DashboardStore.articleList.filter((ctg) => {
      return ctg.subcategoryId === id;
    });
  }
  addOnOrder(item) {
    const index = this.orderLista.findIndex(
      (article) => article.name === item.name
    );
    if (index >= 0) {
      this.orderLista[index].kolicina += 1;
      this.suma += item.price;
    } else {
      const newItem = { ...item, kolicina: 1 };
      this.orderLista.push(newItem);
      this.suma += item.price;
    }
    return this.orderLista;
  }
  deleteItem(item) {
    const index = this.orderLista.findIndex(
      (article) => article.name === item.name
    );
    if (index > -1) {
      this.orderLista[index].kolicina -= 1;
      this.suma -= item.price;
    }
    if (this.orderLista[index].kolicina === 0) {
      const filteredData = this.orderLista.filter((ostali) => ostali !== item);
      this.orderLista = filteredData;
    }
    return this.orderLista;
  }
  render() {
    return (
      <div className={classes.dash}>
        <main className={classes.main}>
          <div className={classes.ctg}>
            {this.props.DashboardStore.categoryList &&
              this.props.DashboardStore.categoryList.map((ctg) => (
                <button
                  key={ctg.id}
                  onClick={() => this.setSubCategoryById(ctg.id)}
                  className={
                    this.selectedCategoryId === ctg.id ? classes.active : ""
                  }
                >
                  {ctg.name}
                </button>
              ))}
          </div>
          <div className={classes.ctg}>
            {this.subCategoryLista &&
              this.subCategoryLista.map((ctg) => (
                <button
                  key={ctg.id}
                  onClick={() => this.setArticleById(ctg.id)}
                  className={
                    this.selectedSubCategoryId === ctg.id ? classes.active : ""
                  }
                >
                  {ctg.name}
                </button>
              ))}
          </div>
          <div>
            {this.articleLista &&
              this.articleLista.map((ctg) => (
                <div
                  className={classes.box}
                  key={ctg.name}
                  onClick={() => this.addOnOrder(ctg)}
                >
                  <img src={ctg.imageUrl}></img>
                  <h3>{ctg.name}</h3>
                  <span> {ctg.price.toFixed(2)}</span>
                </div>
              ))}
          </div>
        </main>
        <div className={classes.order}>
          <h1>Order Summary</h1>
          {this.orderLista &&
            this.orderLista.map((article) => (
              <div className={classes.orderItem}>
                <h3>{article.name}</h3>
                <span onClick={() => this.deleteItem(article)}>
                  {" "}
                  {article.kolicina}
                </span>
              </div>
            ))}
          <div className={classes.total}>
            {this.orderLista &&
              this.orderLista.map((article) => (
                <h1>{this.suma.toFixed(2)} KM</h1>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default inject("DashboardStore")(observer(DashboardList));
