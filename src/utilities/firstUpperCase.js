
function firstUpperCase (string){
if(string){

    return string[0].toUpperCase() + string.slice(1, string.length-1)
}

}
export default firstUpperCase