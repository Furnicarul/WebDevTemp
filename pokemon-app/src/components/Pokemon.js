import React from "react"

const Pokemon = props => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="recipe__box">
          <div className="recipe__text">
            <h1>{ props.pokemon.name }</h1>
            <h3>{ props.pokemon.order }</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Pokemon