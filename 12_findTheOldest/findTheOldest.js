const findTheOldest = function(people) {
  return people.reduce((oldest, curr) => {
    const oldestAge = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currAge = calculateAge(curr.yearOfBirth, curr.yearOfDeath);
    
    return oldestAge < currAge ? curr : oldest;
  })
};

function calculateAge(bd, dd = new Date().getFullYear()) {
  return dd - bd;
};

// Do not edit below this line
module.exports = findTheOldest;
