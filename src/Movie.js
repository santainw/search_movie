import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.movie.poster_path}/>
        </td>
        <td>
          <h1>{this.props.movie.title}</h1>
          <p>{this.props.movie.overview}</p>
        </td>
      </tr>
    );
  }
}
