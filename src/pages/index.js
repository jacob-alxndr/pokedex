// import React from "react"
import React, { Component } from "react"
import { Helmet } from "react-helmet"
// import { Link } from "gatsby"
import Navigation from "../Components/Navigation"
// export default function Home() {
//   return <div>Hello world!</div>
// }
import "../index.scss"
// import "../styles/scss/Home.module.scss"
import { home } from "../styles/scss/Home.module.scss"

import Pokedex from "../Components/Pokedex"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      amount: 151,
      region: "Kanto",
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
      <div className={home}>
        <Helmet>
          <meta
            name="image"
            content="https://raw.githubusercontent.com/jacob-alxndr/pokedex/master/static/logo.png"
          />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/jacob-alxndr/pokedex/master/static/logo.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://raw.githubusercontent.com/jacob-alxndr/pokedex/master/static/logo.png"
          />
        </Helmet>
        <Navigation updateRegion={this.updateRegion} />
        <Pokedex
          start={this.state.start}
          amount={this.state.amount}
          region={this.state.region}
        />
      </div>
    )
  }
}

export default Home
