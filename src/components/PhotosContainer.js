import React, { Component } from "react";
import "./PhotosContainer.css";
import Photo from "./Photo";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "kvWrlBPdGdNeHYwCNJ0D9UGqjJyjZzmmBKgDNAU1ZcQ"
});

export default class PhotosContainer extends Component {
  state = {
    renderedPhotos: []
  };

  componentDidMount() {
    this.fetchPhotos(1, 16, "latest");
  }

  fetchPhotos = (page, amount, keyword) => {
    return unsplash.photos
      .listPhotos(page, amount, keyword)
      .then(data => data.json())
      .then(photos => {
        console.log(photos);
        let renderedPhotos = photos.map(photo => (
          <Photo
            key={photo.id}
            alt={photo.alt_description}
            src={photo.urls.small}
          />
        )); 
        this.setState({
          renderedPhotos
        });
      });
  }

  loadMorePhotos() {
    this.fetchPhotos(2, 16, "latest").then(data => {
      this.setState({
        renderedPhotos: this.state.renderedPhotos.concat(data)
      });
    });
  }

  render() {
    return (
      <>
        <div className="photos-container">{this.state.renderedPhotos}</div>
        <button className="button-loadmore" onClick={() => this.loadMorePhotos()}>
          Load more...
        </button>
      </>
    );
  }
}
