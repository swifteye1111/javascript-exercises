const leapYears = function(year) {
    if (typeof year === "number" && year > 0) {
        if (year % 4 === 0) {
            if (year % 100 === 0 && year % 400 !== 0) {
                return false;
            } else return true;
        } else return false;
    }   else return "ERROR";
};

// Do not edit below this line
module.exports = leapYears;
