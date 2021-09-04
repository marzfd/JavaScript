'use strict'

const numKids = ['5', '3', '8', '4', '2'];
const partnerNames = ['Harvey', 'Nina', 'Mike', 'Donna', 'Katrina'];
const locations = ['Canada', 'Australia', 'Netherlands', 'Germany', 'USA' ];
const jobTitles = ['Teacher', 'Programmer', 'Professor', 'Nurse', 'Engineer'];


// This function takes an array as a parameter and return a randomly selected element as its return value.
function selectRandomly(array) {
  const select = array[Math.floor(Math.random() * 4)];
  return select;
}

function tellFortune() {
  let kid = selectRandomly(numKids);
  let partner = selectRandomly(partnerNames);
  let location = selectRandomly(locations);
  let job = selectRandomly(jobTitles);

  return console.log(`You will be a ${job} in ${location}, married to ${partner} with ${kid} kids.`)
}

tellFortune();
tellFortune();
tellFortune();

