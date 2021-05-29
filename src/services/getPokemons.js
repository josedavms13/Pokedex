

function getPokemons(){


    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118'


    return fetch(baseUrl)
        .then(res => res.json())


}
export default getPokemons