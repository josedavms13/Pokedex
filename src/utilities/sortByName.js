function sortByName(fetchData) {
    const array = [...fetchData];


    const nameArray = [];


    console.log(array);
    array.forEach((element) => {
        nameArray.push(element.name);

    })
    nameArray.sort();
    return nameArray;
}

export default sortByName