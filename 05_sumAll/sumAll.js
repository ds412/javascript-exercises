function sumAll (first, last) {
    if (typeof(first) != "number" || typeof(last) != "number"){
        return "ERROR"
    }
    if (first < 0 || last < 0) {
        return "ERROR"
    }
    if (last < first) {
        let temp = first;
        first = last;
        last = temp;
    }    

    let result = 0;
    for (let i = first; i <= last; i++) {
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
