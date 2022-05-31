const palindromes = function (str) {
    let strReverse = "";
    // Make str all lowercase, no punctuation, no spaces.
    str = str.toLowerCase();
    str = str.replace(/[.,/#!$%^&*;:{}=-_`~() ]/g, "");

    // Loop through array backwards to create new array in reverse
    for (let i=str.length-1; i>=0; i--) {
        strReverse += str[i];
    }
    
    if (str === strReverse) return true;
    else return false;
};

palindromes("racecar!");

// Do not edit below this line
module.exports = palindromes;
