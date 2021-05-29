

function sortObjectFunction(object){

    let sortedObject = object.sort((a,b)=> a.name.localeCompare(b.name));

    console.log(sortedObject);

}

export default sortObjectFunction