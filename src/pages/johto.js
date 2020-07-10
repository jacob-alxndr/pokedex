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
  render() {
    return (
      <div>
        <Navigation />
        <Pokedex start={151} amount={100} />
      </div>
    )
  }
}
export default Johto
