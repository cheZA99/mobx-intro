import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import classes from "./Dashboard.module.css";

class PodKategorijaItem extends Component {
  componentDidMount() {
    this.props.PodKategorijaStore.getSubCategoryAsync();
  }
  render() {
    return (
      <div className={classes.ctg}>
        {this.props.PodKategorijaStore.categoryList &&
          this.props.PodKategorijaStore.categoryList.map((ctg) => (
            <button>{ctg.name}</button>
          ))}
      </div>
    );
  }
}

export default inject("PodKategorijaStore")(observer(PodKategorijaItem));
