import React, { Component } from 'react';

export default class MovieDetail extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    //this.props.fetchData(`https://api.themoviedb.org/3/movie/353081?api_key=28967d69513d49d94603253876b995a8&language=en-US`);
  }
  render(){
    const movies = this.props.responseItem.results;
    console.log(movies);
    const postId = this.props.match.params.postId;
    const index = movies.findIndex((movie) => movie.id == postId);
    console.log(index);
    const clickedMovie = movies[index];

    return(
      <div className="details">
      <h1>{postId}</h1>
      </div>
    )
  }
}
