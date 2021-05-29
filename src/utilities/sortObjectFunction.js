

function sortObjectFunction(object){

    return object.sort((a,b)=> a.name.localeCompare(b.name));


}

export default sortObjectFunction