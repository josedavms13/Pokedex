

function fetchByAbility(ability){



    const baseUrl = `https://pokeapi.co/api/v2/ability/`;



    return fetch(baseUrl+ability)
        .then(res=>res.json())



}

export default fetchByAbility