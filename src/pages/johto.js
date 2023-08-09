import React, { Component } from "react"
// import { Link } from "gatsby"
import Navigation from "../Components/Navigation"
// import "../styles/scss/About.module.scss"

import Pokedex from "../Components/Pokedex"
// export default function About() {
//   return (
//     <div style={{ color: `teal` }}>
//       <h1>About Gatsby</h1>
//       <p>Such wow. Very React.</p>
//     </div>
//   )
// }

class Johto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 151,
      amount: 100,
      region: "Johto",
      total: 1010,
    }
    this.updateRegion = this.updateRegion.bind(this)
  }

  updateRegion(start, amount, region, clicked) {
    this.setState({
      start: start,
      amount: amount,
      region: region,
      clicked: clicked,
    })
  }
  render() {
    return (
      <div>
        <Navigation updateRegion={this.updateRegion} gen={2} />
        <Pokedex
          start={this.state.start}
          amount={this.state.amount}
          total={this.state.total}
          region={this.state.region}
        />
      </div>
    )
  }
}
export default Johto
