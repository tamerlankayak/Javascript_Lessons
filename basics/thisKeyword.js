const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  great: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.great();
jonas.calcAge();
var addNumberSum = (a, b) => a * b;

addNumberSum(3, 2);
