const findTheOldest = function(people) {
    let oldest = people[0];
    let oldestAge = 0;
    let age = 0;
    let indexOldest = 0;
    let thisYear = new Date().getFullYear();
    let prevAge = 0;
    let currAge = 0;

    //for (let i=0; i<people.length; i++) {
    //    if (people[i].yearOfDeath) age = people[i].yearOfDeath - people[i].yearOfBirth;
    //    else age = new Date().getFullYear() - people[i].yearOfBirth;
    //    if (age > oldestAge) {
    //        oldestAge = age;
    //       indexOldest = i;
    //    }
    //}
    //return people[indexOldest];

    // Using reduce function:
    oldest = people.reduce(function(previousPerson,currentPerson,currentIndex) {
        if (previousPerson.yearOfDeath) prevAge = previousPerson.yearOfDeath - previousPerson.yearOfBirth;
        else prevAge = thisYear - previousPerson.yearOfBirth;
        if (currentPerson.yearOfDeath) currAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        else currAge = thisYear - currentPerson.yearOfBirth;
        if (currAge > prevAge) return people.currentIndex;
        else return people.currentIndex -1;
    });


};

// Do not edit below this line
module.exports = findTheOldest;
