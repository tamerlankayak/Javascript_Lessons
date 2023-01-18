for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition: ${rep}`);
}

const jonasArray = ['Jonas', 'Schmedtmann', 2023 - 1994,
    'teacher', ['Michael', 'Peter', 'Steven'], true
];

const tpyes = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    tpyes.push(typeof jonasArray[i]);
}

console.log(tpyes);


const years = [1991, 12302, 2323, 9023];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(1000 - years[i]);
}
console.log(ages);

console.log("Only string,....");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

const jonas3 = ['Jonas', 'Schmedtmann', 1994, 'teacher', ['Michael', 'Peter', 'Steven']];


for (let i = jonas3.length; i >= 0; i--) {
    console.log(i, jonas3[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercise ${exercise}`)


    for (let rep = 1; rep <= 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }

}
//test commit
console.log('--------While loop-----');

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about end.....')
}