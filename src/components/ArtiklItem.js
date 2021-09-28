import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "./ArtiklItemCSS.css";

class ArtiklItem extends Component {
  componentDidMount() {
    this.props.ArtiklStore.getArticlesAsync();
  }
  render() {
    return (
      <div>
        {this.props.ArtiklStore.categoryList &&
          this.props.ArtiklStore.categoryList.map((ctg) => (
            <div className="picture-box">
              <img src={ctg.imageUrl}></img>
              <h3>{ctg.name}</h3>
              <span> {ctg.price.toFixed(2)}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default inject("ArtiklStore")(observer(ArtiklItem));
