'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//ennhanced codes of objects
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 1,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievred to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1},  ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  },
};

const question = new Map([
  ['question', 'What is best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 2],
  [true, 'Correct answer!'],
]);

console.log(question);

const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

console.log([...question]);
console.log(question.entries());
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze,Italy');
// console.log(rest.set(2, 'Baku,Azerbaijan'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.size);
// // rest.clear();
// console.log(rest);
// console.log(rest.get(arr));

// const orderSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Plov', 'Pizza']);
// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// orderSet.add('Bozbash');
// orderSet.add('Bozbash');
// orderSet.delete('Plov');

// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) {
//   console.log(order);
// }

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const stafUnique = [...new Set(staff)];
// console.log(stafUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// console.log(new Set('tamerlanmustafayev').size);

// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days`;

// for (const day of properties) {
//   openStr += `${day},`;
//   console.log(openStr);
// }

// const values = Object.values(hours);
// console.log(values);

// const entries = Object.entries(hours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we  open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// console.log(restaurant.openingHours.mon?.open);

// const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of weekdays2) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //in array
// const users = [{ name: 'Jonas', email: 'jonas@mail.com' }];
// console.log(users[0]?.name ?? 'User array is empty');
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Giovanni George',
// };

// //looping
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// //advanced loop like go
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(restaurant);

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(1, 5, 43, 3, 4, 34, 4);
// add(3.433, 43, 4, 34, 34);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

const arr2 = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];

//test commit
/*
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Risotrante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];

console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

const ingrediants = [
  prompt("Let's make pasta! Ingrediant 1?"),
  prompt("Let's make pasta! Ingrediant 2?"),
  prompt("Let's make pasta! Ingrediant 3?"),
];

console.log(ingrediants);

restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
restaurant.orderPasta(...ingrediants);
*/

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole , 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'koroglu street',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { aciq: o, close: c },
} = openingHours;

console.log(o, c);

*/

/*
const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
