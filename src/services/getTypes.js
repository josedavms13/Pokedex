

function getTypes (){

    const baseUrl = `https://pokeapi.co/api/v2/type`

    return (fetch(baseUrl)
        .then(res=> res.json()))

}

export default getTypes