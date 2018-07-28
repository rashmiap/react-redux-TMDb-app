import React, { Component } from 'react';

export default class MovieDetail extends Component {
  render(){
    return(
      <div>
        <p>details</p>
        <pre>
          {JSON.stringify(this.props.comments,null,'')}
        </pre>
      </div>
    )
  }
}
