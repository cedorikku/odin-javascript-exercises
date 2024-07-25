const findTheOldest = function(people) {
  const peoplesAge = people.map((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = (new Date).getFullYear();
    }
    return {
      name: person.name,
      age: person.yearOfDeath - person.yearOfBirth,
    }
  })

  const youngestToOldest = peoplesAge.sort((prev, next) => prev.age - next.age);

  return youngestToOldest.find((person, index, arr) => {
    if (arr[arr.length - 1].age === person.age)
      return person.name;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
