const hasDuplicate = arr => {

    // here the set will remove any duplicate values
    let arrSet = new Set(arr)

    // if the array has duplicates the set size will be reduced
    if (arrSet.size !== arr.length) {
        return true;
    }
    return false;
}

console.log(hasDuplicate([1,1,22,22,34,1,0,34,22])); // true