

function fetchByName (name){

    const baseUrl = `https://pokeapi.co/api/v2/pokemon/`

    const urlName = name.toLowerCase().trim();


    return fetch(baseUrl+urlName)
        .then(res=> res.json());





}

export default fetchByName