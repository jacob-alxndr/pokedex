import React, { Component } from "react"
import Navigation from "../Components/Navigation"
import Pokedex from "../Components/Pokedex"

class Alola extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Pokedex start={722} amount={86} region="alola" />
      </div>
    )
  }
}
export default Alola
