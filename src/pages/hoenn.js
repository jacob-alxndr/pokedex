import React, { Component } from "react"
// import { Link } from "gatsby"
import Navigation from "../Components/Navigation"
import Pokedex from "../Components/Pokedex"
// export default function About() {
//   return (
//     <div style={{ color: `teal` }}>
//       <h1>About Gatsby</h1>
//       <p>Such wow. Very React.</p>
//     </div>
//   )
// }

class Hoenn extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Pokedex start={251} amount={135} region="hoenn" />
      </div>
    )
  }
}
export default Hoenn
