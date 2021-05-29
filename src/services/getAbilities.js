


function getAbilities() {


    const baseUrl = `https://pokeapi.co/api/v2/ability/?offset=0&limit=327`

    return fetch(baseUrl)
        .then(res=>res.json())
}

export default getAbilities