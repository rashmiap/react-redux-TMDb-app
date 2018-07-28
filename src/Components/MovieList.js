import React, { Component } from 'react';

export default class MovieList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <p>Movie listing</p>
        <pre>
          {JSON.stringify(this.props.posts,null,'')}
        </pre>
      </div>
    )
  }
}
