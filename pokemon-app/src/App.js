import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form"
import Pokemon from './components/Pokemon';

const API_CALL = "https://pokeapi.co/api/v2/pokemon/ditto/"

class App extends Component {
  state = {
    pokemons: []
  }
  
  getPokemon = async (e) => {
    e.preventDefault()
    const pokemonName = e.target.elements.pokemonName.value
    const api_call = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    const data = await api_call.json()
    this.setState({
      pokemons: data
    })
    console.log(this.state.pokemons)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon Search</h1>
        </header>
        <Form getPokemon={this.getPokemon}/>
        <Pokemon pokemon={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;