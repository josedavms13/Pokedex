
const filterNames = (objectArray)=>{

    const result = [];
    objectArray.forEach((element)=>{
        result.push(element.name);
    })


    return result
}
export default filterNames