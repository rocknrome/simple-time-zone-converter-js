//this time converter shows what time it is in Ufa Russia, for a user that is in US on the East coast in an EST zone. 
let userTime = 11;
if (userTime > 0 && userTime <= 3) {
  console.log((userTime) + 9);
  };
if (userTime > 3 && userTime <= 12) {
  console.log((userTime) - 3);
};
if (userTime > 12) {
  console.log('Error in calculation')
};
