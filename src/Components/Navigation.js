import React, { Component } from "react"
// import { Link } from "gatsby"
import Button from "./Button"
import styles from "../styles/scss/Navigation.module.scss"
class Navigation extends Component {
  static defaultProps = {
    regions: [
      { start: 0, total: 151, region: "Kanto" },
      { start: 151, total: 100, region: "Johto" },
      { start: 251, total: 135, region: "Hoenn" },
      { start: 386, total: 107, region: "Sinnoh" },
      { start: 493, total: 156, region: "Unova" },
      { start: 649, total: 72, region: "Kalos" },
      { start: 721, total: 88, region: "Alola" },
      { start: 809, total: 89, region: "Galar" },
    ],
  }
  constructor(props) {
    super(props)
    this.state = {
      isClicked: Array.from({
        length: this.props.regions.length,
      }).map((item, i) => (i === 0 ? (item = true) : (item = false))),
    }
    this.handleActive = this.handleActive.bind(this)
  }

  handleActive(idx) {
    this.setState(state => {
      const newClicked = state.isClicked.map((item, i) => {
        if (i === idx) {
          return (item = true)
        } else {
          return (item = false)
        }
        // i === idx ? (item = true) : (item = false)
      })
      // console.log(newClicked)
      return { isClicked: newClicked }
    })
  }
  render() {
    return (
      <div className={styles.Navigation}>
        <nav>
          <ul className={styles.Navigation.ul}>
            {this.props.regions.map((region, i) => (
              <li key={region.region}>
                <Button
                  updateRegion={this.props.updateRegion}
                  start={region.start}
                  amount={region.total}
                  region={region.region}
                  isClicked={this.state.isClicked[i]}
                  handleActive={this.handleActive}
                  id={i}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navigation

// import React, { Component } from "react"
// import { Link } from "gatsby"
// import styles from "../styles/scss/Navigation.module.scss"
// class Navigation extends Component {
//   render() {
//     return (
//       <div className={styles.Navigation}>
//         <nav>
//           <ul className={styles.Navigation.ul}>
//             <li>
//               <Link className="Link" to="/">
//                 Kanto
//               </Link>
//             </li>
//             <li>
//               <Link className="Link" to="/johto/">
//                 Johto
//               </Link>
//             </li>
//             <li>
//               <Link className="Link" to="/hoenn/">
//                 Hoenn
//               </Link>
//             </li>
//             <li>
//               <Link className="Link" to="/sinnoh/">
//                 Sinnoh
//               </Link>
//             </li>
//             <li>
//               <Link className="Link" to="/unova/">
//                 Unova
//               </Link>
//             </li>
//             <li>
//               <Link className="Link" to="/kalos/">
//                 Kalos
//               </Link>
//             </li>
//             <li>
//               <Link className="Link" to="/alola/">
//                 Alola
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     )
//   }
// }
// export default Navigation
