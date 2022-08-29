function reverseString(string){
    let reversed = '';
    let length = string.length;

    for (let i = 1; i <= length; i++){
        reversed = reversed + string.charAt(length - i);
    }

    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
