const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// help with inference whwn extracting values
const carr = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100)

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2021-12-12");
importantDates.push(new Date());
