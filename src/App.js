import React, { Component } from 'react';
import Movie from './Movie.js'
import Axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state = { rows: []}
  }

  componentDidMount() {
    this.handleSearch('her')
  }

  handleSearch = (word)=>{
    if(word == null) word = 'her'
    var dataArray = []
    var api_key = 'd7d6a8ea2f3ed4388631b34d5db5eb35'
    var url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${word}`

    Axios.get(url)
      .then(result=> {
        this.setState({ rows: []})
        var responseData = result.data.results
        responseData.forEach((item) => {
          item.poster_path = 'https://image.tmdb.org/t/p/w185' + item.poster_path
          dataArray.push(item)
        })
        this.setState({ rows: dataArray })
        console.log(dataArray)
      })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <input className="input" onChange={(event)=>(this.handleSearch(event.target.value))}/>
        </header>
        <table>
          <tbody>
            {this.state.rows.map(item => (
              <Movie movie={item}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
