const jonasArray = ['Jonas', 'Schmedtmann', 2023 - 1994,
    'teacher', ['Michael', 'Peter', 'Steven']
];

const jonas1 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 28,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 28,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey])


jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

const interestedIn = prompt('What do you want to know about Jonas?');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong!!");
}


const jonas4 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1994,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    calcAge: function (birthYear) {
        return 2023 - birthYear;
    },

    calcAge1: function () {
        console.log(this);
        return 2023 - this.birthYear;
    },

    calcAge2: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} - year old ${jonas.job}, 
        and he has ${this.hasDriversLicense ? 'a' : 'no'} driver license
        `
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


console.log(jonas.getSummary());

console.log(jonas["calcAge"](1993))







