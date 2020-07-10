import React, { Component } from "react"
import styles from "../styles/scss/Button.module.scss"
class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.updateRegion(
      this.props.start,
      this.props.amount,
      this.props.region
    )
    // this.setState({ isActive: true })
    this.props.handleActive(this.props.id)
  }
  render() {
    let active
    if (this.props.isClicked) {
      active = `${styles.Button} ${styles.active}`
    } else {
      active = styles.Button
    }
    return (
      <button className={active} onClick={this.handleClick}>
        {this.props.region}
      </button>
    )
  }
}
export default Button
