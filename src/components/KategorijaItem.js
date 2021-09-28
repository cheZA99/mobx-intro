import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import classes from "./Dashboard.module.css";

class KategorijaItem extends Component {
  componentDidMount() {
    this.props.KategorijaStore.getCategoryAsync();
  }
  getSubCtgId(id) {
    return;
  }
  render() {
    return (
      <div className={classes.ctg}>
        {this.props.KategorijaStore.categoryList &&
          this.props.KategorijaStore.categoryList.map((ctg) => (
            <button onClick={this.getSubCtgId(ctg.id)}>{ctg.name}</button>
          ))}
      </div>
    );
  }
}

export default inject("KategorijaStore")(observer(KategorijaItem));
