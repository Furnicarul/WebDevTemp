import React from "react"

const Form = props => (
  <form onSubmit={props.getPokemon} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="pokemonName"/>
    <button className="form__button">Search</button>
  </form>
)

export default Form