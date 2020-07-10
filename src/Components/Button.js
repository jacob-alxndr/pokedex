import React, { Component } from "react"
import styles from "../styles/scss/Button.module.scss"
class Button extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.updateRegion(
      this.props.start,
      this.props.amount,
      this.props.region
    )
  }
  render() {
    return (
      <button className={styles.Button} onClick={this.handleClick}>
        {this.props.region}
      </button>
    )
  }
}
export default Button
