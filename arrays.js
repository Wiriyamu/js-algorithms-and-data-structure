// ========== Arrays ========== //

const avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

console.log(avgTemp[3]);

// ========== Criação e Inicialização de Array ========== //

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friaday",
  "Saturday",
];

console.log(daysOfWeek[3]);

//========== Acessando elementos ========== //
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);

// ========== Inserindo Elementos ========== //

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(10);
numbers.unshift(-1);
numbers.pop();
numbers.shift();

console.log(numbers);

// ========== Inserindo elemento em uma posição espeficica ========== //

numbers.splice(3, 3);
console.log(numbers);

numbers.splice(3, 0, 3, 4, 5);
console.log(numbers);

// ========== Arrays Bidimencionais & tridimencionais ========== //

let month = [];

let firstWeeks = [];
let lastWeeks = [];

let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
let avgTempWeek2 = [41, 39, 33, 21.2, 19.5, 17, 33.8];

let avgTempWeek3 = [13, 45.7, 18, 7, 13.4, 21.5, 15];
let avgTempWeek4 = [51, 19, 23, 26.2, 9.5, 17.4, 31.8];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

console.log(month[1][1][4]);
