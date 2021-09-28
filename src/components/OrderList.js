import * as React from "react";
import { observer, inject } from "mobx-react";
import classes from "./Dashboard.module.css";
import { observable, makeObservable, action } from "mobx";

class OrderList extends React.Component {
  orderLista = [];

  constructor() {
    super();
    makeObservable(this, {
      orderLista: observable,
      addOnOrder: action,
    });
  }
  componentDidMount() {
    console.log(this.props.DashboardStore.getOrderList());
    console.log(this.orderLista);

    this.orderLista = this.props.DashboardStore.getOrderList();
  }
  render() {
    return (
      <div className={classes.order}>
        {this.orderLista &&
          this.orderLista.map((article) => (
            <div key={article.name}>
              <h3>
                {article.name} {article.price.toFixed(2)}
                {article.count}
              </h3>
            </div>
          ))}
      </div>
    );
  }
}
export default inject("DashboardStore")(observer(OrderList));
