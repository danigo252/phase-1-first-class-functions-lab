// Code your solution in this file!

//First Drivers
const returnFirstTwoDrivers = function (drivers)
{
  return drivers.slice(0,2);
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);

//Last Drivers
const returnLastTwoDrivers = function (drivers)
{
  return drivers.slice(-2);
}

const lastTwoDrivers = returnLastTwoDrivers(drivers);

//SelectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//CreateFareMultiplier
function createFareMultiplier(integer)
{
  return function(fare)
  {
    return fare * integer;
  }
}

//FareDoubler
const fareDoubler = createFareMultiplier(2);

//FareTripler
const fareTripler = createFareMultiplier(3);

//selectDifferentDrivers
function selectDifferentDrivers(drivers, callback)
{
  return callback(drivers);
}

selectDifferentDrivers(drivers,returnFirstTwoDrivers);
selectDifferentDrivers(drivers,returnLastTwoDrivers);
