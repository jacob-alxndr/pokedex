const endpoint = ` https://pokeapi.co/api/v2/pokemon`

async function fetchPokemon(id) {
  const res = await fetch(`${endpoint}/${id + 1}`)
  const data = await res.json()
  return data
}

async function fetchPage(url) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}
export { fetchPokemon, fetchPage }
