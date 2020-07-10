import React, { Component } from "react"
// import { Link } from "gatsby"
import Button from "./Button"
import styles from "../styles/scss/Navigation.module.scss"
class Navigation extends Component {
  render() {
    return (
      <div className={styles.Navigation}>
        <nav>
          <ul className={styles.Navigation.ul}>
            <li>
              <Button
                updateRegion={this.props.updateRegion}
                start={0}
                amount={150}
                region="Kanto"
              />
            </li>
            <li>
              <Button
                updateRegion={this.props.updateRegion}
                start={151}
                amount={100}
                region="Johto"
              />
            </li>
            <li>
              <Button
                updateRegion={this.props.updateRegion}
                start={251}
                amount={135}
                region="Hoenn"
              />
            </li>
            <li>
              <Button
                updateRegion={this.props.updateRegion}
                start={386}
                amount={107}
                region="Sinnoh"
              />
            </li>
            <li>
              <Button
                updateRegion={this.props.updateRegion}
                start={493}
                amount={156}
                region="Unova"
              />
            </li>
            <li>
              <Button
                updateRegion={this.props.updateRegion}
                start={649}
                amount={72}
                region="Kalos"
              />
            </li>
            <li>
              <Button
                updateRegion={this.props.updateRegion}
                start={721}
                amount={86}
                region="Alola"
              />
            </li>
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
