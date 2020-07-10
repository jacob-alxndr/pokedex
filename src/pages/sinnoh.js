import React, { Component } from "react"
// import { Link } from "gatsby"
import Navigation from "../Components/Navigation"
// import { contact } from "../styles/scss/contact.module.scss"
import Pokedex from "../Components/Pokedex"
// export default function About() {
//   return (
//     <div style={{ color: `teal` }}>
//       <h1>About Gatsby</h1>
//       <p>Such wow. Very React.</p>
//     </div>
//   )
// }

class Sinnoh extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Pokedex start={386} amount={107} region="sinnoh" />
      </div>
    )
  }
}
export default Sinnoh
