import React, { Component } from 'react';
import MovieTile from './MovieTile';

export default class ShowList extends Component {
  constructor(props){
    super(props);
  }
  __renderTiles(){
    let renderBlocks = [];
    renderBlocks = this.props.shows.map((key, index) => {
      return (
        <MovieTile key={index} {...this.props} movies={this.props.shows} i={index}/>
      );
    })
    return renderBlocks;
  }
  render(){
    return(
      <div className="movie-listing">
        <p>TV Shows listing</p>
        <div className="movie-listing__blocks">
          {this.__renderTiles()}
        </div>
      </div>
    )
  }
}
