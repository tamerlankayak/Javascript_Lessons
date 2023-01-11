const calcAge3 = birthYear => 2023 - birthYear;

const age3 = calcAge3(1994);
console.log(age3);


const yearsUntilRetirment = (birthYear,firstName) => {
    const age = 2023 - birthYear;
    const retirment = 65 - age;
    return `${firstName} retires in ${retirment}`;
}

console.log(yearsUntilRetirment(1994,"Tamerlan"));
console.log(yearsUntilRetirment(1993,"Ariz"));






