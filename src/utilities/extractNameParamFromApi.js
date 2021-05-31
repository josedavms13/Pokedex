
function extractNameParamFromApi(objectArray){


    console.log(objectArray);

    const result = [];

    objectArray.forEach((element)=>{
        result.push(element.name)
    })

    if(result.length === 0){
        return null
    }
    else{

        return result
    }
}

export default extractNameParamFromApi