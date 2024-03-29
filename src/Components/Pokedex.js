import React, { Component } from "react"
import { fetchPokemon } from "../pokeAPI"
import Pokecard from "./Pokecard"
import Loader from "./Loader"
import styles from "../styles/scss/Pokedex.module.scss"

class Pokedex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      isLoading: true,
    }
  }

  async createPokedex(start, amount) {
    const promises = Array.from({ length: this.props.total }).map(
      (pokemon, i) => (pokemon = fetchPokemon(i + 1))
    )

    await Promise.all(promises).then(res => {
      console.log({ res }, res.length)
      if (!res === false) {
        const pokemon = res.map(p => {
          if (p === false) {
            return {
              id: "N/A",
              // base_experience: "N/A",
              name: "N/A",
              // sprite: "N/A",
              // types: "N/A",
            }
          } else {
            return {
              id: p?.id,
              base_experience: p?.base_experience,
              name: p?.name,
              sprite: p?.sprites?.front_default,
              shiny_sprite: p?.sprites?.front_shiny,
              types:
                typeof p?.types === "object" &&
                p.types.map(p => p?.type?.name).join(", "),
            }
          }
        })
        this.setState({ pokemon: pokemon, isLoading: false })
      }
    })
    console.log(this.state.pokemon)
  }

  componentDidMount() {
    this.createPokedex(this.props.start, this.props.amount)
  }

  render() {
    const { pokemon, isLoading } = this.state

    let pokemonSet
    if (!isLoading) {
      const set = [...pokemon]
      pokemonSet = [
        ...set.slice(this.props.start, this.props.start + this.props.amount),
      ]
    }
    let loading
    !isLoading
      ? (loading = pokemonSet.map(monster => (
          <Pokecard
            key={monster.id}
            id={monster.id}
            name={monster.name}
            types={monster.types}
            sprite={monster.sprite}
            shiny_sprite={monster.shiny_sprite}
            base_experience={monster.base_experience}
          />
        )))
      : (loading = <Loader />)

    return (
      <div className={styles.Pokedex}>
        <div className={styles.Pokedex__container}>
          <h1>{this.props.region}</h1>
          <div className={styles.Pokedex__cards}>{loading}</div>
        </div>
      </div>
    )
  }
}
export default Pokedex
