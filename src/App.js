import './App.css';
import React from 'react';
import axios from 'axios';
import Pokemon from './pokemon';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      info:[],
      display: false
    }
  }

  handleClick(event){
    const name=this._name.value.toLowerCase()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(response => {
      console.log(response.data)
      this.setState({
        info: response.data,
        display: true
      })
    })
  }

  handleClear(event){
    this._name.value=""
    this.setState({
      info:[],
      display: false
    })
  }

  render(){
    return (
      <div>
        <div className="main-title">
        <h1>Pokemon Dictionary</h1>
        <div className="search-box">
        <input type="text" ref={value => this._name=value} placeholder="Search..." />
        <button onClick={this.handleClick.bind(this)}>Search</button>
        <button onClick={this.handleClear.bind(this)}>Clear</button>
        </div>
        </div>
        <div className="column display">
        {this.state.display?<Pokemon info={this.state.info}/>:<h1> </h1>}
        </div>
      </div>
    )
  }
}

export default App;
