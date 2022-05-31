const sumAll = function(numOne,numTwo) {
    if (numOne > 0 && numTwo > 0 && typeof numOne === "number" && typeof numTwo === "number") {
        let counter = 0;
        let i = 0;
        let j = 0;
        if (numOne < numTwo) {
            i = numOne;
            j = numTwo;
        }
        else {
            i = numTwo;
            j = numOne;
        }

        while (i <= j) {
            counter += i;
            i++;
        }

        return counter;
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
