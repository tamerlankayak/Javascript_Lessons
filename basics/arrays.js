const friends = ['Tamerlan', 'Ariz', "Elcin"];


console.log(friends);

// const years = new Array(1993, 1994, 1982);

console.log(friends[2]);

console.log(friends.length);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, friends];

console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const years = [1990, 1967, 1961, 1971, 1993, 2016];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

const friends = ['Tamerlan', 'Ariz', "Elcin"];

//Add elements
friends.push('Jay');
console.log(friends);

friends.unshift('Ariz');
console.log(friends);


//Remove elements
friends.pop();
friends.pop();

friends.shift();
console.log(friends);

console.log(friends.indexOf('Ariz'));

friends.push(28);

console.log(friends.includes('Ariz'));
console.log(friends.includes(28))


