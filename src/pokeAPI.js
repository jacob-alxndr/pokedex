const endpoint = `https://pokeapi.co/api/v2/pokemon`

async function fetchPokemon(id) {
  const placeholder = {
    id: "Data Missing",
    base_experience: "Data Missing",
    name: "Data Missing",
    sprite: "Data Missing",
    types: "Data Missing",
  }
  try {
    const res = await fetch(`${endpoint}/${id}`)
    if (res.status === 404) {
      return placeholder
    }
    const data = await res.json()

    return data
  } catch (error) {
    console.log("error ----------------------", error)
    return placeholder
  }
}

// async function fetchPage(url) {
//   const res = await fetch(url)
//   const data = await res.json()
//   console.log("data---------", data)
//   return data
// }
export { fetchPokemon }
// export { fetchPokemon, fetchPage }
