1. Sort the cars array by year in ascending order

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Mersedes", year: 2022 },
    { type: "BMW", year: 2010 }
];

cars.sort(function (a, b) {
    return a.year - b.year;
});

cars.forEach(function (car) {
    console.log(car.type, car.year);
});

// BMW 2010
Volvo 2016
Mersedes 2022


2. Sort the cars array by year in ascending order
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Mersedes", year: 2022 },
    { type: "BMW", year: 2010 }
];

cars.sort(function (a, b) {
    return a.year - b.year;
});

for (let i = 0; i < cars.length; i++) {
    console.log(`${cars[i].type} - ${cars[i].year}`);
}

// Cars sorted by year (ascending):
BMW - 2010
Volvo - 2016
Mersedes - 2022
