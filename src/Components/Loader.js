import React, { Component } from "react"
import "../styles/scss/_variables.scss"
import styles from "../styles/scss/Loader.module.scss"

class Loader extends Component {
  render() {
    return (
      <div className={styles.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
export default Loader
