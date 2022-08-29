function removeFromArray (array, ... args) {

    for(let i = 0; i < args.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (args[i] === array[j]) {
                const index = array.indexOf(args[i]);
                array.splice(index, 1);
            }
        }
    }
    return array;

}

// Do not edit below this line
module.exports = removeFromArray;
