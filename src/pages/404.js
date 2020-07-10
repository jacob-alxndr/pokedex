import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "../styles/scss/ErrorPage.module.scss"
class ErrorPage extends Component {
  render() {
    return (
      <div className={styles.ErrorPage}>
        <h1>
          Oops page does not exist! Return{" "}
          <Link className={styles.Link} to="/">
            Home
          </Link>
          .
        </h1>
      </div>
    )
  }
}
export default ErrorPage
