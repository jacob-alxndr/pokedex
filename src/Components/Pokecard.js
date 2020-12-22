import React, { Component } from "react"
import { padNum } from "../helper"
import styles from "../styles/scss/Pokecard.module.scss"
class Pokecard extends Component {
  render() {
    const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padNum(
      this.props.id.toString()
    )}.png`

    return (
      <div className={styles.Pokecard}>
        <h3 className={styles.Pokecard__name}>
        {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1) }
        </h3>
        <p className={styles.Pokecard__text}>
         #{this.props.id}
        </p>
        <div className={styles.Pokecard__img_container}>
          <img
            className={styles.Pokecard__img}
            src={src}
            alt={this.props.name}
          />
          <img
            className={styles.Pokecard__img_sprite}
            src={this.props.sprite}
            alt={this.props.name}
          />
        </div>
        <div className={styles.Pokecard__text}>
          <p className={styles.Pokecard__type}>Type(s): {this.props.types}</p>
          <p className={styles.Pokecard__exp}>
            {" "}
            Exp: {this.props.base_experience}
          </p>
        </div>
      </div>
    )
  }
}

export default Pokecard
